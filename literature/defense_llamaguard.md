## Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations

- **Venue**: arXiv:2312.06674, December 2023 (Meta AI)
- **Authors**: Hakan Inan, Kartikeya Upasani, Jianfeng Chi, Rashi Rungta, Krithika Iyer, Yuning Mao, Michael Tontchev, Qing Hu, Brian Fuller, Davide Testuggine, Madian Khabsa
- **核心贡献**:
  提出 Llama Guard，一个以 Llama-2-7b 为基座的 LLM 安全分类模型，可对人机对话中的用户输入和 AI 输出进行内容安全分类。通过 instruction-following 机制支持定制化安全分类法（taxonomy），灵活适应不同使用场景。
- **方法**:
  1. 基于 Meta 定义的安全风险分类法（6类：暴力、仇恨语音、性内容、违规活动、犯罪规划、隐私侵犯），构建有标注的对话数据集。
  2. 对 Llama-2-7b 进行 instruction-tuned 微调，使模型在 prompt 中接受分类法描述，并输出 "safe" / "unsafe" 判断及违规类别。
  3. 对用户输入和 AI 输出分别提供不同的 prompt 模板，捕捉语义差异。
- **关键发现**:
  - 在 OpenAI Moderation Eval 和 ToxicChat 等数据集上，Llama Guard 性能优于或持平专有 API。
  - 支持用户自定义分类法，无需重新训练，仅修改 prompt 即可适配。
  - 可同时覆盖 input 和 output 两侧防御。
- **局限性**:
  - 分类法设计依赖人工定义，具有主观性。
  - 对新颖攻击手法（如角色扮演越狱）的泛化能力有限。
  - 推理延迟增加，作为 pipeline 过滤器需额外计算资源。
- **与本报告的相关性**:
  代表 output filtering / content moderation 的典型工业实现，展示了 LLM-as-judge 在安全防御中的应用。与 Constitutional Classifiers 对比，Llama Guard 聚焦灵活性和通用性，Constitutional Classifiers 聚焦特定高危场景的深度防御。
- **可能的引用格式**:
  `\cite{inan2023llamaguard}`
