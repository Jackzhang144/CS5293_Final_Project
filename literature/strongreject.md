## A StrongREJECT for Empty Jailbreaks

- **Authors**: Alexandra Souly, Qingyuan Lu, Dillon Bowen, Tu Trinh, Elvis Hsieh, Sana Pandey, Pieter Abbeel, Justin Svegliato, Scott Emmons, Olivia Watkins, Sam Toyer
- **Venue**: NeurIPS 2024
- **arXiv**: 2402.10260
- **Year**: 2024

- **核心贡献**:
  指出现有越狱基准测试（jailbreak benchmarks）严重高估了攻击有效性。提出 StrongREJECT，一个更高质量的评估基准，包含要求模型给出具体有害回答的提示集，以及一个衡量响应实用性（response utility）的自动化评估器。

- **方法**:
  - 设计需要具体有害信息（而非泛泛作答）的测试提示，过滤掉"空洞越狱"（empty jailbreaks）
  - 提出基于 LLM 的自动化评估器，同时衡量响应的有害性和信息质量
  - 与人类判断进行对比，验证评估器的一致性（state-of-the-art agreement with human judgments）

- **关键发现**:
  - 大量被视为"成功"的越狱攻击实际上只能让模型输出无意义内容，并不具备真正的危害性
  - 绕过安全微调的越狱方法往往会降低模型能力（capability degradation），这是一个重要的新发现
  - 现有评估指标（如攻击成功率 ASR）过于宽松，容易产生假阳性

- **局限性**:
  - 评估器基于 LLM 本身，存在模型偏差
  - 仅关注文本响应质量，未考虑多模态攻击场景

- **与本报告的相关性**:
  直接回答"如何可靠地评估越狱攻击的实际危害性"这一核心问题。揭示了当前评估方法论的根本缺陷，对报告中"评估与红队"部分具有重要参考价值。"空洞越狱"的概念对理解越狱攻击的实质有重要意义。

- **可能的引用格式**:
  ```
  \cite{souly2024strongreject}
  ```
