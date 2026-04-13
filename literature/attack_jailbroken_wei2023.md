## Jailbroken: How Does LLM Safety Training Fail?

- **Authors**: Alexander Wei, Nika Haghtalab, Jacob Steinhardt
- **Venue**: NeurIPS 2023（arXiv:2307.02483）
- **核心贡献**: 从理论层面分析了 LLM 安全训练失败的两种根本模式：competing objectives（竞争目标）和 mismatched generalization（泛化不匹配），并据此设计了新型越狱攻击。
- **方法**:
  - **竞争目标 (Competing Objectives)**：当 LLM 的能力目标与安全目标冲突时，能力目标往往胜出。例如，指令遵循的预训练目标可能覆盖安全训练。
  - **泛化不匹配 (Mismatched Generalization)**：安全训练的覆盖范围不如模型能力的覆盖范围广泛，导致在某些域（如低资源语言、Base64 编码、特殊格式）中安全机制失效。
  - 基于以上分析设计了多种新攻击：Base64 编码请求、Role-play/虚构场景、语言切换等
  - 评估对象：GPT-4 和 Anthropic Claude v1.3
- **关键发现**:
  - 即使经过大量红队测试和安全训练，GPT-4 和 Claude 仍对所设计攻击高度脆弱
  - Base64 编码的有害请求对 GPT-4 成功率接近 100%
  - 仅靠规模扩展无法解决这些安全失败模式
  - "safety capability parity" 原则：安全机制必须与模型能力同步提升
- **局限性**:
  - 攻击方法一旦公开，模型可被针对性修补（但修补不改变根本问题）
  - 未涉及白盒攻击场景
- **与本报告的相关性**: 提供了越狱攻击失效的理论框架，覆盖 Prompt Engineering 类攻击（编码绕过、角色扮演），是报告"安全边界失效模式"章节的核心参考
- **可能的引用格式**: `\cite{wei2023jailbroken}`
