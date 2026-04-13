## RigorLLM: Resilient Guardrails for Large Language Models against Undesired Content

- **Venue**: arXiv:2403.13031, March 2024 (ICML 2024)
- **Authors**: Zhuowen Yuan, Zidi Xiong, Yi Zeng, Ning Yu, Ruoxi Jia, Dawn Song, Bo Li
- **核心贡献**:
  提出 RigorLLM，一个面向有害内容防御的复合护栏框架（composite guardrail framework）。通过能量模型训练数据生成（Langevin dynamics）、minimax 优化安全后缀、以及基于 KNN 与 LLM 融合的分类模型，构建对对抗性攻击鲁棒的防御体系。
- **方法**:
  1. **能量模型数据增强**：通过 Langevin dynamics 采样生成边界案例（borderline cases）作为训练数据，提升分类器对对抗输入的鲁棒性。
  2. **Minimax 安全后缀优化**：为输入构造防护后缀，最小化在最坏攻击下的越狱成功率。
  3. **融合模型（KNN + LLM）**：将基于 embedding 的 KNN 分类器与 LLM 文本分类器融合，利用 prompt augmentation 提升鲁棒性。
  4. 三个模块协作：首先能量模型扩充训练数据，然后训练融合分类器，最后加上安全后缀作为推理时防护。
- **关键发现**:
  - 在 ToxicChat、OpenAI Moderation 等基准上显著优于单一分类器基线。
  - 对 GCG、PAIR 等多种攻击形式表现出更强鲁棒性。
  - 安全后缀对自适应攻击具有一定抵抗力。
- **局限性**:
  - 三模块架构增加了系统复杂度和计算成本。
  - 能量模型训练本身较为复杂，需要额外调优。
  - 对多轮对话攻击和语义越狱的防御效果有待进一步验证。
- **与本报告的相关性**:
  代表 output filtering 和 input filtering 防御的前沿研究，特别在鲁棒性方面有所突破，适合在报告中与 SmoothLLM、Constitutional Classifiers 一同讨论防御方法的多样性和工程实现。
- **可能的引用格式**:
  `\cite{yuan2024rigorllm}`
