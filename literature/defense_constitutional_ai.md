## Constitutional AI: Harmlessness from AI Feedback

- **Venue**: arXiv:2212.08073, December 2022 (Anthropic Technical Report)
- **Authors**: Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, et al. (Anthropic)
- **核心贡献**:
  提出 Constitutional AI (CAI) 框架，通过一套自然语言"宪法"原则指导 LLM 的对齐训练，无需大量人工有害内容标注。结合监督学习阶段（SL-CAI）和强化学习阶段（RL-CAI，即 RLAIF），使模型在 helpful 与 harmless 之间取得更优平衡。
- **方法**:
  1. **SL-CAI**：让模型对自身有害输出进行自我批判（critique），根据宪法原则修正（revise），再用修正后的输出做监督微调。
  2. **RLAIF**：用 LLM 对输出对的偏好打分，替代人工 RLHF 偏好标注，训练奖励模型（RM），再用 PPO 优化。
  3. 宪法包含约 16 条原则，涵盖无害性、诚实性、避免歧视等维度。
- **关键发现**:
  - CAI 模型在 Elo 打分上，harmlessness 远优于 RLHF-only 模型，helpfulness 略有提升。
  - RLAIF 与人工 RLHF 效果相近，但可规模化。
  - 模型自我批判能力对提升 harmlessness 至关重要。
- **局限性**:
  - 宪法设计需要人工撰写，具有一定主观性。
  - 对"越狱"攻击（如对抗性后缀）未能完全防御。
  - 仍存在过度拒绝（over-refusal）问题。
- **与本报告的相关性**:
  核心 alignment 防御技术论文，代表 RLHF/CAI 方向对 safety boundary 的主动构建方法，可与越狱攻击的 safety alignment gap 结合讨论。
- **可能的引用格式**:
  `\cite{bai2022constitutional}`
