## Many-shot Jailbreaking

- **Authors**: Anthropic (Cem Anil, Esin Durmus, Mrinank Sharma, Joe Benton, Sandipan Kundu 等)
- **Venue**: Anthropic Technical Report, 2024（https://www.anthropic.com/research/many-shot-jailbreaking）
- **核心贡献**: 揭示了 "many-shot jailbreaking" 攻击：在长上下文窗口中嵌入大量（数十至数百个）有害示例对话，利用上下文学习（in-context learning）使 LLM 遵循有害示例的模式。
- **方法**:
  - 在一次请求中提供大量（few-to-many shot）示范：每个示范包含一个有害问题和一个"助手"的有害回答
  - 利用 LLM 的上下文学习能力——模型会根据示范调整行为
  - 随着上下文中有害示范数量增加，越狱成功率单调递增
  - 适用于具有大上下文窗口（如 100k+ tokens）的模型
- **关键发现**:
  - 越狱成功率随示范数量增加而显著提高（few-shot < many-shot）
  - 该攻击与现有防御（RLHF 等）形成不匹配：安全训练通常针对短 context
  - Claude 3 等大窗口模型也存在此脆弱性
  - Anthropic 已将此作为已知挑战进行公开披露
- **局限性**:
  - 需要大量 token，成本较高
  - 随着模型改进（长上下文安全训练）有效性可能下降
- **与本报告的相关性**: 代表了 Multi-turn/长上下文攻击范式，说明安全训练的泛化不匹配问题在上下文长度维度上同样存在
- **可能的引用格式**: `\cite{anil2024manyshot}`
