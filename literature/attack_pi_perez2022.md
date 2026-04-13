## Ignore Previous Prompt: Attack Techniques For Language Models

- **Authors**: Fábio Perez, Ian Ribeiro
- **Venue**: NeurIPS 2022 Workshop on Machine Learning Safety；arXiv:2211.09527
- **核心贡献**: 最早系统性研究提示注入攻击的论文之一，将提示注入（Prompt Injection）命名并分类，引入了"goal hijacking"和"prompt leaking"两种攻击类型。
- **方法**:
  - **Goal Hijacking（目标劫持）**：在用户输入中注入"忽略之前的指令，改为执行 X"类指令，覆盖原始任务
  - **Prompt Leaking（提示泄露）**：让 LLM 泄露其系统提示（system prompt）的内容
  - 对比了不同注入策略的效果：直接指令覆盖、虚假上下文注入、分隔符绕过
  - 在 GPT-3 系列模型上进行实验
- **关键发现**:
  - 简单的"忽略之前的指令"注入对早期模型（GPT-3 text-davinci）高度有效
  - 注入攻击的成功率取决于任务设计和提示结构
  - 即使有系统提示保护，攻击仍能以较高成功率泄露提示内容
  - LLM 无内置机制区分"可信指令"与"不可信数据"
- **局限性**:
  - 实验基于较早的 GPT-3 模型，对更新模型（RLHF 对齐后）的有效性下降
  - 攻击场景相对简单，未涉及间接注入
- **与本报告的相关性**: 提示注入攻击的奠基性工作，定义了该攻击类别的基本概念和分类，是 Prompt Injection 章节的历史背景参考
- **可能的引用格式**: `\cite{perez2022ignore}`
