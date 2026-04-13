#!/usr/bin/env python3
"""
LaTeX 编译脚本 - 使用 tectonic 自包含引擎
用法: uv run python scripts/compile_latex.py
"""

from __future__ import annotations

import argparse
import os
import platform
import subprocess
import sys
import urllib.request
import tarfile
from pathlib import Path

# 项目根目录
PROJECT_ROOT = Path(__file__).parent.parent
TOOLS_DIR = PROJECT_ROOT / ".tools"
TECTONIC_VERSION = "0.16.8"


def get_tectonic_url() -> str:
    """获取 tectonic 下载 URL"""
    system = platform.system()
    machine = platform.machine()

    if system == "Darwin" and machine == "arm64":
        suffix = "aarch64-apple-darwin.tar.gz"
    elif system == "Darwin":
        suffix = "x86_64-apple-darwin.tar.gz"
    elif system == "Linux":
        suffix = "x86_64-unknown-linux-gnu.tar.gz" if machine == "x86_64" else "aarch64-unknown-linux-musl.tar.gz"
    else:
        print(f"不支持的平台: {system} {machine}", file=sys.stderr)
        sys.exit(1)

    return f"https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%40{TECTONIC_VERSION}/tectonic-{TECTONIC_VERSION}-{suffix}"


def get_tectonic_path() -> Path:
    """获取 tectonic 二进制路径"""
    ext = ".exe" if platform.system() == "Windows" else ""
    return TOOLS_DIR / f"tectonic{ext}"


def ensure_tectonic() -> Path:
    """确保 tectonic 已安装"""
    tectonic_path = get_tectonic_path()

    if tectonic_path.exists():
        return tectonic_path

    print(f"正在下载 tectonic {TECTONIC_VERSION}...")
    TOOLS_DIR.mkdir(parents=True, exist_ok=True)

    url = get_tectonic_url()
    archive_path = TOOLS_DIR / f"tectonic-{TECTONIC_VERSION}.tar.gz"

    try:
        urllib.request.urlretrieve(url, archive_path)
    except Exception:
        # 尝试无 full 字的备用下载
        alt_url = url.replace(f"-{TECTONIC_VERSION}-full", f"-{TECTONIC_VERSION}")
        print(f"主下载失败，尝试备用源...")
        urllib.request.urlretrieve(alt_url, archive_path)

    # 安全解压：只提取顶层目录中的 tectonic 二进制文件
    print("解压中...")
    with tarfile.open(archive_path, "r:gz") as tar:
        # 获取顶层成员，只提取需要的文件
        members = tar.getmembers()
        for member in members:
            # 只提取根目录下的 tectonic 可执行文件，防止路径遍历
            if "tectonic" in member.name and not member.name.startswith(".."):
                member.name = os.path.basename(member.name)  # 去掉路径，只用文件名
                tar.extract(member, TOOLS_DIR)

    # 清理
    archive_path.unlink()

    # 验证解压成功
    if not tectonic_path.exists():
        print("解压失败：找不到 tectonic 二进制文件", file=sys.stderr)
        sys.exit(1)

    # 设置执行权限
    tectonic_path.chmod(0o755)

    return tectonic_path


def compile_tex(tex_file: Path, output_dir: Path | None = None) -> None:
    """编译 LaTeX 文件"""
    if not tex_file.exists():
        print(f"错误: 文件不存在 {tex_file}", file=sys.stderr)
        sys.exit(1)

    tectonic = ensure_tectonic()

    # 切换到项目根目录运行
    original_dir = os.getcwd()
    os.chdir(PROJECT_ROOT)

    try:
        cmd = [str(tectonic), str(tex_file)]
        if output_dir:
            cmd.extend(["-o", str(output_dir)])

        print(f"运行: {' '.join(cmd)}")
        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.stdout:
            print(result.stdout)
        if result.stderr:
            print(result.stderr, file=sys.stderr)

        if result.returncode != 0:
            print(f"编译失败 (exit {result.returncode})", file=sys.stderr)
            sys.exit(result.returncode)

        print("编译成功!")

    finally:
        os.chdir(original_dir)


def main() -> None:
    parser = argparse.ArgumentParser(description="LaTeX 编译器 (tectonic)")
    parser.add_argument(
        "tex_file",
        nargs="?",
        default="report/report.tex",
        help="LaTeX 文件路径 (默认: report/report.tex)"
    )
    parser.add_argument(
        "-o", "--output",
        dest="output_dir",
        help="输出目录"
    )

    args = parser.parse_args()

    tex_path = PROJECT_ROOT / args.tex_file
    output_dir = Path(args.output_dir) if args.output_dir else None

    compile_tex(tex_path, output_dir)


if __name__ == "__main__":
    main()
