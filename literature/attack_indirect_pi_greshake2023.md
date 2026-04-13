## Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection

- **Authors**: Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz, Mario Fritz
- **Venue**: ACM Workshop on Artificial Intelligence and Security (AISec 2023)；arXiv:2302.12173（2023 年 2 月）
- **核心贡献**: 首次系统揭示了间接提示注入（Indirect Prompt Injection）攻击向量：攻击者不直接与 LLM 交互，而是在 LLM 可能检索的外部数据（网页、文档、邮件）中注入恶意指令。
- **方法**:
  - 直接提示注入（Direct PI）：用户输入中直接包含覆盖系统提示的指令（如"忽略之前的所有指令"）
  - 间接提示注入（Indirect PI）：在网页内容、数据库记录、邮件正文等数据中嵌入隐藏指令，当 LLM 处理这些数据时被执行
  - 演示攻击场景：Bing Chat 被网页内容中的隐藏指令操控、邮件摘要 Agent 被钓鱼邮件操控、代码补全 LLM 被恶意注释劫持
- **关键发现**:
  - LLM 无法可靠区分"数据"和"指令"——这是架构层面的根本问题
  - 间接注入可以：泄露用户数据、执行未授权操作、散布虚假信息
  - RAG（Retrieval-Augmented Generation）系统面临类似风险
  - 攻击无需任何密码学漏洞，纯粹利用 LLM 对自然语言的无差别处理
- **局限性**:
  - 攻击成功率受 LLM 遵从性和系统提示强度影响
  - 需要攻击者能在 LLM 可能检索的数据源中植入内容
- **与本报告的相关性**: 代表了现实世界 LLM 集成应用中的提示注入攻击向量，是 Prompt Injection 和 Tool-use 攻击的核心参考
- **可能的引用格式**: `\cite{greshake2023not}`
