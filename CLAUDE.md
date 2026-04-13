# CS5293 Final Project - Topic 22

## 项目信息

- **选题**：LLM 越狱与安全边界失效 (LLM Jailbreaks and Safety-Boundary Failures)
- **模块**：Module 5: AI Security and Emerging Topics

## 重要日期

| 日期 | 事项 |
|------|------|
| 2026-04-17 | 团队注册截止 |
| 2026-05-07 | 幻灯片提交 |
| 2026-05-08 | 课堂展示 (5min + 2min Q&A) |
| 2026-05-10 | 最终报告提交 |

## 项目要求

详细要求见：[CS5293_Group_Project_Chinese.md](./CS5293_Group_Project_Chinese.md)

**核心要求摘要：**

- **报告**：IEEE 模板，最多 6 页双栏格式（不含参考文献）
- **幻灯片**：PDF 格式，5 分钟展示
- **评估**：报告 5 分 + 展示 6 分

## 文献收集方向

本课题的核心文献应围绕以下方向：

1. **越狱攻击技术**：prompt injection、角色扮演、编码绕过、Multi-turn 对话攻击
2. **安全边界失效模式**：safety alignment 的根本局限性、reward hacking、generalization gap
3. **防御方法**：prompt filtering、output filtering、alignment techniques (RLHF, Constitutional AI)
4. **评估与红队**：自动化越狱测试、安全评估基准 (StrongReject, HarmBench 等)

**建议文献量**：8-12 篇核心论文 + 补充文献

## 报告模板

**必须使用 `Template/LaTex/` 中的 IEEE 会议模板：**

```
Template/LaTex/
├── CS5293-project-template.tex   # 主模板文件
├── IEEEtran.cls                  # IEEE LaTeX 样式文件
├── references.bib                # 参考文献 BibTeX 文件
├── fig1.png                      # 示例图片
└── CS5293-project-template.pdf   # 编译后的 PDF 示例
```

**使用方法：**

1. 复制整个 `Template/LaTex/` 目录到项目根目录
2. 重命名 `CS5293-project-template.tex` 为 `report.tex`
3. 编辑 `report.tex` 和 `references.bib`

**引用格式**：`\cite{key}`（IEEE 数字引用）

**模板结构**：

```latex
\section{Introduction}      % 问题定义、动机、文献分类
\section{Application Setting}
  \subsection{System Architecture}
  \subsection{Threat Model}
\section{Research Directions}  % 按主题组织文献，而非逐篇摘要
\section{Conclusion}
\bibliographystyle{IEEEtran}
\bibliography{references}
```

## 项目结构建议

```
docs/              # 详细文档和笔记
literature/       # 文献 PDF 和笔记
slides/           # 幻灯片
report/           # 报告 LaTeX 文件
  ├── report.tex
  └── references.bib
CLAUDE.md         # 本文件
CS5293_Group_Project_Chinese.md  # 完整要求
Template/LaTex/  # 原始模板（只读）
```

## 注意事项

- 所有引用的技术声明必须有文献支持
- AI 工具仅作辅助，需在报告中声明
- 禁止虚构引用或夸大学术发现
