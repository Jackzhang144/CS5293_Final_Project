# CS5293 Topic 22: LLM 越狱与安全边界失效

> **LLM Jailbreaks and Safety-Boundary Failures**

本项目是 CS5293 信息安全专题的期末小组研究课题，聚焦于大语言模型（LLM）安全对齐机制的失效问题。

---

## 项目概述

随着 LLM 在医疗诊断、法律咨询、自动决策系统等高风险领域的广泛应用，理解越狱攻击并开发有效防御机制已成为关键研究挑战。

本项目旨在：
1. **分类整理**现有越狱攻击技术
2. **评估分析**各类防御方法
3. **识别开放问题**并讨论未来研究方向

---

## 核心研究维度

### 攻击技术（Attack Techniques）
- **Prompt Injection**：DAN、角色扮演、编码绕过（Base64、翻译）
- **Multi-turn 对话攻击**：逐步诱导模型偏离安全边界
- **自动化攻击**：GCG、AutoDAN 等基于优化的攻击方法

### 安全失效模式（Safety Failure Modes）
- Reward Hacking：奖励模型被"游戏化"
- Generalization Gap：安全训练分布之外的泛化失效
- Alignment Degradation：安全对齐的退化

### 防御方法（Defense Methods）
- **Prompt Filtering**：输入检测与过滤
- **Output Filtering**：输出内容审核
- **Alignment-based Defense**：RLHF、Constitutional AI、Constitutional Classifiers
- **对抗性训练**：SmoothLLM、RigorLLM 等

### 评估基准（Evaluation Benchmarks）
- **HarmBench**：标准化安全评估框架
- **StrongReject**：越狱攻击评估基准
- **JailbreakBench**：开源鲁棒性基准

---

## 已收集文献

| 类别 | 文献数 | 代表性论文 |
|------|--------|-----------|
| 攻击技术 | 8 篇 | GCG (Zou 2023)、DAN (Shen 2023)、PAIR (Chao 2023) |
| 防御方法 | 6 篇 | SmoothLLM、LlamaGuard、Constitutional AI |
| 评估基准 | 3 篇 | HarmBench、StrongReject、JailbreakBench |
| **总计** | **17 篇** | |

详细文献列表见：[literature/refs.bib](./literature/refs.bib)

---

## 项目结构

```
CS5293_Final_Project/
├── CLAUDE.md                    # 项目配置
├── README.md                    # 本文件
├── CS5293_Group_Project.pdf     # 原始作业说明
├── docs/
│   └── PLAN.md                  # 详细执行计划
├── literature/                  # 文献笔记与 BibTeX
│   ├── refs.bib                 # 完整参考文献
│   ├── attack_*.md             # 攻击技术笔记
│   └── defense_*.md             # 防御方法笔记
├── report/                      # LaTeX 报告
│   ├── report.tex               # 主文件
│   ├── references.bib           # 引用文献
│   └── report.pdf               # 编译输出
├── slides/                      # 幻灯片
│   ├── presentation.html        # 源代码
│   └── react-app/              # React 应用
└── Template/LaTex/              # IEEE 模板（只读）
```

---

## 当前进度

| 阶段 | 状态 | 截止日期 |
|------|------|----------|
| 团队注册 | ✅ 完成 | 2026-04-17 |
| 文献收集 | ✅ 完成 | 2026-04-25 |
| 报告初稿 | ✅ 完成 | 2026-05-01 |
| 幻灯片 | ✅ 完成 | 2026-05-07 |
| 课堂展示 | ⏳ 待完成 | 2026-05-08 |
| 最终报告 | ⏳ 待完成 | 2026-05-10 |

---

## 幻灯片预览

幻灯片已使用 React + TypeScript 构建，提供动态交互效果：

```bash
cd slides/react-app
npm install
npm run dev
```

或直接在浏览器中打开 `literature/presentation.html`（单文件版本）。

---

## 重要链接

- **IEEE LaTeX 模板**：`Template/LaTex/`
- **执行计划**：`docs/PLAN.md`
- **完整作业要求**：`CS5293_Group_Project_Chinese.md`

---

## 学术诚信声明

本项目严格遵循学术诚信规范：
- 所有技术声明均有文献引用支持
- AI 工具仅用于辅助（措辞优化、搜索建议）
- 禁止虚构引用或夸大学术发现

---

*最后更新：2026-04-13*
