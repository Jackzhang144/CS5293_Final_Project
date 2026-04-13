## HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal

- **Authors**: Mantas Mazeika, Long Phan, Xuwang Yin, Andy Zou, Zifan Wang, Norman Mu, Elham Sakhaee, Nathaniel Li, Steven Basart, Bo Li, David Forsyth, Dan Hendrycks
- **Venue**: ICML 2024
- **arXiv**: 2402.04249
- **Year**: 2024

- **核心贡献**:
  提出了 HarmBench，一个用于自动化红队测试（automated red teaming）的标准化评估框架。对 18 种红队攻击方法和 33 个目标 LLM 及防御方案进行了大规模比较，并提出了高效的对抗训练方法以增强 LLM 鲁棒性。

- **方法**:
  - 系统化设计评估标准，包含 text-only、multimodal、copyright、contextual 等多类有害行为
  - 提供统一的攻击评估 pipeline（attack -> generate -> classify）
  - 使用专门训练的分类器（HarmBench classifier）判断响应是否有害
  - 支持 transformer-based LLMs、闭源 API 及多模态模型

- **关键发现**:
  - 不同红队方法在不同模型上的攻击成功率差异显著，目前尚无"通吃"的攻击方法
  - 对抗训练可显著提升 LLM 的鲁棒性，但存在泛化性与能力之间的权衡
  - 现有防御方案对部分攻击方法仍脆弱，特别是多步骤攻击

- **局限性**:
  - 评估覆盖的有害行为类别仍有限，无法覆盖所有真实场景
  - 分类器本身可能存在误判，影响评估精度

- **与本报告的相关性**:
  作为评估基准方向的核心代表性工作，直接支撑报告中关于"自动化越狱评估"和"安全评估基准"的讨论。可用于说明当前领域缺乏标准化评估框架的问题，以及 HarmBench 如何系统性地解决该问题。

- **可能的引用格式**:
  ```
  \cite{mazeika2024harmbench}
  ```
