## Baseline Defenses for Adversarial Attacks Against Aligned Language Models

- **Venue**: arXiv:2309.00614, September 2023
- **Authors**: Neel Jain, Avi Schwarzschild, Yuxin Wen, Gowthami Somepalli, John Kirchenbauer, Ping-yeh Chiang, Micah Goldblum, Anirudh Garg, Jonas Geiping, Tom Goldstein (University of Maryland)
- **核心贡献**:
  系统评估了针对对抗性越狱攻击（特别是 GCG/token-level 攻击）的多种基线防御方法，包括困惑度过滤（perplexity filtering）、输入预处理（paraphrasing、retokenization）等，发现这些简单基线在一定程度上即可有效防御当前最强的对抗攻击。
- **方法**:
  评估的防御方法包括：
  1. **Perplexity Filter（困惑度过滤）**：对抗性后缀通常是非自然文本，具有高困惑度。用 LLM 对 prompt 计算困惑度，超阈值则拒绝。
  2. **Paraphrasing（改写）**：在送入目标模型前，先用另一个 LLM 对输入进行改写，破坏对抗性后缀的结构。
  3. **Retokenization**：改变 tokenization 方式（BPE dropout）来破坏精心设计的对抗后缀。
  4. **Input Smoothing**：类似 SmoothLLM，对输入做随机变换。
- **关键发现**:
  - Perplexity filtering 对 GCG 生成的对抗后缀有效（P(ppl > threshold) >> 0），但对语义自然的 PAIR 攻击无效。
  - Paraphrasing 效果好，但增加计算成本，且可被自适应攻击绕过。
  - 对抗性攻击和防御存在"军备竞赛"，简单防御可被自适应攻击者针对性规避。
- **局限性**:
  - 所有基线防御都存在误拒（false positive）或被自适应攻击绕过的问题。
  - 困惑度过滤对自然语言类越狱完全失效。
  - 缺乏理论证明。
- **与本报告的相关性**:
  提供了 prompt filtering 和 input sanitization 防御方向的系统性基线研究，说明了防御机制的有效范围和局限性，支持报告中关于"防御与攻击军备竞赛"的论点。
- **可能的引用格式**:
  `\cite{jain2023baseline}`
