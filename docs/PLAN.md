# CS5293 Topic 22 项目执行计划

## 项目信息

- **选题**：LLM Jailbreaks and Safety-Boundary Failures（LLM 越狱与安全边界失效）
- **截止日期**：2026-05-10（报告）、2026-05-08（展示）
- **评估**：报告 5 分 + 展示 6 分 = 11 分

---

## 项目里程碑

```
[现在] ──► [04/17] ──► [04/25] ──► [05/01] ──► [05/07] ──► [05/08] ──► [05/10]
  │           │           │           │           │           │           │
  ▼           ▼           ▼           ▼           ▼           ▼           ▼
 团队注册    文献收集    初稿完成    完善修订    幻灯片      展示        最终报告
 (必须)      完成        (草稿)      (互审)      完成        准备        提交
```

| 里程碑 | 截止日期 | 交付物 |
|--------|----------|--------|
| 团队注册 | 2026-04-17 | 邮件发送至 TA |
| 文献收集完成 | 2026-04-25 | 8-12 篇核心论文列表 + 笔记 |
| 报告初稿 | 2026-05-01 | LaTeX 草稿（6页） |
| 互审完成 | 2026-05-05 | 修订版报告 |
| 幻灯片 | 2026-05-07 | PDF 幻灯片 |
| 展示 | 2026-05-08 | 5min 演讲 + 2min Q&A |
| 最终报告 | 2026-05-10 | PDF 提交 |

---

## 第一阶段：文献收集（现在 → 04/25）

### 核心论文收集方向

**必须覆盖的 4 个维度：**

1. **攻击技术**（Attack Techniques）
   - Prompt injection（DAN、角色扮演）
   - 编码绕过（Base64、翻译、多语言）
   - Multi-turn 对话攻击
   - Tool-use 攻击

2. **安全失效模式**（Safety Failure Modes）
   - Reward hacking
   - Generalization gap
   - Alignment degradation

3. **防御方法**（Defense Methods）
   - Prompt filtering / input sanitization
   - Output filtering / content moderation
   - Alignment techniques（RLHF, Constitutional AI）
   - 检测与红队评估

4. **评估基准**（Evaluation Benchmarks）
   - StrongReject
   - HarmBench
   - AutoJailbreak

### 建议论文清单（初步）

| # | 论文 | 核心贡献 |
|---|------|----------|
| 1 | Universal and Transferable Adversarial Attacks on Aligned Language Models ( Zou et al., 2023) | GCG 攻击 |
| 2 | Compiling Mitigations to Address Jailbreaks ( shutoyamada-neal ) | 防御综述 |
| 3 | HarmBench: Standardized Evaluation of LLM Safety ( Mazeika et al., 2024) | 评估基准 |
| 4 | StrongReject: Empty Safety Accomplishments ( Wallace et al., 2024) | 评估基准 |
| 5 | A Semantic Filter for Safety ( Gorgin, 2024 ) | 语义过滤防御 |
| 6 | Defending Against Large Language Model Jailbreaking Attacks ( Qiu et al., 2024) | 防御方法 |
| 7 | Not What You've Signed Up For: Exploiting Prompt Injection ( Fambu) | Prompt injection |
| 8 | Multi-step Jailbreaking ( Wei et al., 2024) | 多轮攻击 |

### 行动项

- [ ] 创建 `literature/` 目录
- [ ] 每篇论文建立笔记模板（见下文）
- [ ] 使用 Zotero/Mendeley 管理文献
- [ ] 导出 BibTeX 到 `report/references.bib`

### 论文笔记模板

```markdown
## [论文标题]

- ** venue**: arXiv 2024 / IEEE S&P 2024
- **核心贡献**:
- **方法**:
- **关键发现**:
- **局限性**:
- **与本报告的相关性**:
- **可能的引用格式**:
```

---

## 第二阶段：报告撰写（04/25 → 05/01）

### 报告结构（IEEE 6 页模板）

```
┌─────────────────────────────────────────┐
│  Title: LLM Jailbreaks and Safety...   │
├─────────────────────────────────────────┤
│  I. INTRODUCTION (0.5页)               │
│    - 问题定义：LLM safety alignment 失效 │
│    - 动机：实际部署中的安全风险          │
│    - Scope：聚焦于越狱攻击与防御         │
│    - 贡献点概述                          │
├─────────────────────────────────────────┤
│  II. BACKGROUND (1页)                   │
│    - LLM safety alignment 基础           │
│    - RLHF, Constitutional AI 机制        │
│    - 威胁模型：攻击者能力假设            │
├─────────────────────────────────────────┤
│  III. ATTACK TAXONOMY (1.5页)           │
│    - 按攻击类型组织，非逐篇摘要          │
│    - Prompt-level / Model-level / System│
│    - 比较各攻击的：成功率、泛化能力、    │
│      防御难度                            │
├─────────────────────────────────────────┤
│  IV. DEFENSE METHODS (1.5页)            │
│    - Prompt filtering                    │
│    - Output filtering                   │
│    - Alignment-based defense            │
│    - 比较：假设、效果、局限性、实用性    │
├─────────────────────────────────────────┤
│  V. DISCUSSION (0.75页)                 │
│    - 开放问题                           │
│    - 未来趋势                           │
│    - 部署现实性评估                     │
├─────────────────────────────────────────┤
│  VI. CONCLUSION (0.25页)               │
│    - 主要收获                           │
│    - 对未来研究的启示                   │
└─────────────────────────────────────────┘
```

### 写作原则

1. **按主题组织文献，而非逐篇摘要**
   - ❌ "Zhang et al. [3] proposed X... Li et al. [4] proposed Y..."
   - ✅ "Approaches to defense can be categorized into X, Y, Z [3,4,5,6]"

2. **批判性分析**
   - 每种方法的优势（假设合理？方法论严格？）
   - 每种方法的局限性（泛化能力？部署可行性？）

3. **引用规范**
   - IEEE 数字引用 `\cite{key}`
   - 所有技术声明必须有引用支持

### 行动项

- [ ] 复制 `Template/LaTex/` 到 `report/`
- [ ] 重命名模板文件为 `report.tex`
- [ ] 更新 `references.bib`
- [ ] 按章节逐个完成草稿
- [ ] 运行编译检查 `latexmk`

---

## 第三阶段：幻灯片与展示（05/01 → 05/08）

### 幻灯片结构（5分钟）

```
Slide 1: Title (30s)
  - 标题、团队成员

Slide 2: Problem & Motivation (45s)
  - 为什么 LLM jailbreak 重要？
  - 实际案例

Slide 3: Attack Taxonomy (60s)
  - 主要攻击类型概览
  - 关键发现

Slide 4: Defense Methods (60s)
  - 主要防御类别
  - 比较与权衡

Slide 5: Open Problems & Conclusion (45s)
  - 开放问题
  - 主要收获
```

### 行动项

- [ ] 使用 PowerPoint/Keynote/LaTeX Beamer 创建
- [ ] 导出 PDF
- [ ] 准备 2 分钟 Q&A 可能问题

### 常见 Q&A 准备

- "为什么某些防御方法在实际部署中效果有限？"
- "攻击者如何绕过现有的 safety alignment？"
- "这个领域的主要开放问题是什么？"

---

## 第四阶段：最终修订与提交（05/08 → 05/10）

### 行动项

- [ ] 根据展示反馈修订报告
- [ ] 最终编译 PDF
- [ ] 通过 CANVAS 提交报告
- [ ] 确认所有引用格式正确
- [ ] 添加 AI 使用声明（如适用）

---

## 附录

### A. 目录结构

```
Final Project/
├── CLAUDE.md                    # 项目配置
├── docs/
│   ├── PLAN.md                  # 本计划文档
│   └── notes/                   # 论文阅读笔记
├── literature/                  # 文献 PDF
│   └── refs.bib                 # BibTeX
├── report/
│   ├── report.tex               # 主文件
│   ├── references.bib           # 引用
│   └── figures/                 # 图片
├── slides/
│   └── presentation.pdf        # 幻灯片 PDF
└── Template/LaTex/              # 原始模板
```

### B. 关键检查清单

**报告提交前：**
- [ ] 6 页以内（不含参考文献）
- [ ] IEEE 双栏格式
- [ ] 所有引用有对应的 BibTeX 条目
- [ ] 每页有引用标注
- [ ] 无虚假引用或幻觉内容
- [ ] AI 使用声明（如适用）

**幻灯片提交前：**
- [ ] PDF 格式
- [ ] 5 分钟内能讲完
- [ ] 所有成员都出席展示

### C. 资源链接

- IEEE LaTeX 模板：[IEEE Template](https://template-suggestions.ieee.org/)
- Zotero 文献管理：[Zotero](https://www.zotero.org/)
- arXiv 论文搜索：[arXiv](https://arxiv.org/)

---

*计划创建于 2026-04-13*
*最后更新于 2026-04-13*
