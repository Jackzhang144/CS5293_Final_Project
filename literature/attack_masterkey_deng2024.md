## MASTERKEY: Automated Jailbreaking of Large Language Model Chatbots

- **Authors**: Gelei Deng, Yi Liu, Yuekang Li, Kailong Wang, Ying Zhang, Zefeng Li, Haoyu Wang, Tianwei Zhang, Yang Liu
- **Venue**: NDSS 2024；arXiv:2307.08715
- **核心贡献**: 提出了全自动的越狱框架 MASTERKEY，通过逆向工程目标 LLM 的防御机制并利用另一个 LLM 自动生成越狱提示，无需人工参与。
- **方法**:
  - 阶段一：通过时间差异分析（timing analysis）逆向工程 LLM 服务的内容过滤机制
  - 阶段二：使用微调过的越狱 LLM（在越狱提示数据集上微调）自动生成新的越狱提示
  - 利用 ChatGPT、Bard 等商业 LLM Chatbot 服务进行实验
  - 引入了"防御感知"（defense-aware）的提示生成
- **关键发现**:
  - MASTERKEY 在 ChatGPT、Bard、Bing Chat 上越狱成功率分别达到了显著高于基线的水平
  - 时间侧信道可以揭示防御触发的内容类别
  - 自动化方法大幅降低了越狱的门槛
  - 单次越狱提示可跨平台迁移
- **局限性**:
  - 时间分析方法在延迟一致的服务上效果减弱
  - 生成提示的多样性受限于微调数据集质量
- **与本报告的相关性**: 代表了自动化多阶段越狱攻击，结合了侧信道分析和 LLM 生成技术，是自动化攻击技术演进的重要节点
- **可能的引用格式**: `\cite{deng2024masterkey}`
