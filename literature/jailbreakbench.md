## JailbreakBench: An Open Robustness Benchmark for Jailbreaking Large Language Models

- **Authors**: Patrick Chao, Edoardo Debenedetti, Alexander Robey, Maksym Andriushchenko, Francesco Croce, Vikash Sehwag, Edgar Dobriban, Nicolas Flammarion, George J. Pappas, Florian Tramer, Hamed Hassani, Eric Wong
- **Venue**: NeurIPS 2024 Datasets and Benchmarks Track
- **arXiv**: 2404.01318
- **Year**: 2024
- **GitHub**: https://github.com/JailbreakBench/jailbreakbench

- **核心贡献**:
  提出了开源的 JailbreakBench 鲁棒性基准，包含：(1) JBB-Behaviors 数据集（200 种有害行为），(2) 对抗性提示的进化库（repository），(3) 红队测试 pipeline，(4) 公开排行榜（leaderboard）。

- **方法**:
  - 定义清晰的威胁模型（threat model）和评估协议
  - 使用 LLM judge（GPT-4 based）判断越狱是否成功
  - 提供标准化的系统提示、对话模板和评分函数
  - 维护包含攻击和防御的公开排行榜，推动可复现研究

- **关键发现**:
  - 现有越狱基准在威胁模型定义、评估协议和可复现性方面存在重大不一致
  - 标准化评估对于公平比较不同攻击/防御方法至关重要
  - 提供了一个社区共同维护的越狱 artifact 库，有助于追踪领域进展

- **局限性**:
  - 主要关注文本模态，多模态越狱暂未覆盖
  - JBB-Behaviors 中 200 种行为的覆盖面相对 HarmBench 更窄

- **与本报告的相关性**:
  作为评估基准生态的重要组成部分，与 HarmBench 和 StrongREJECT 互补。该工作着重强调评估的可复现性和社区共建，对报告中讨论评估方法论的标准化具有参考价值。

- **可能的引用格式**:
  ```
  \cite{chao2024jailbreakbench}
  ```
