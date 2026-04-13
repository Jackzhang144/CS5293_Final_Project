## AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models

- **Authors**: Xiaogeng Liu, Nan Xu, Muhao Chen, Chaowei Xiao
- **Venue**: ICLR 2024 (Poster)
- **arXiv**: 2310.04451
- **Year**: 2024
- **GitHub**: https://github.com/SheltonLiu-N/AutoDAN

- **核心贡献**:
  提出了 AutoDAN，一种能够自动生成隐蔽（stealthy）越狱提示的方法，兼具手工越狱攻击的可解释性与自动化对抗攻击的高效性。攻击生成的提示语义连贯、可读性高，能绕过基于困惑度（perplexity）的防御机制。

- **方法**:
  - 基于**分层遗传算法（Hierarchical Genetic Algorithm, HGA）**优化越狱提示
  - 同时在段落级和句子级进行选择、交叉和变异操作
  - 适应度函数同时优化越狱成功概率和文本可读性
  - 两个变体：AutoDAN-GA（段落级）和 AutoDAN-HGA（段落+句子级）

- **关键发现**:
  - AutoDAN 生成的提示比 GCG 等基于梯度的方法可读性更高，更难被困惑度过滤器检测
  - 在多种对齐 LLM 上实现了高攻击成功率，包括 Llama-2-chat 和 GPT-3.5
  - 揭示了安全对齐的一个关键弱点：模型对语义连贯的恶意提示更难防御

- **局限性**:
  - 遗传算法计算成本较高，相比 GCG 需要更多迭代
  - 主要针对开源模型的白盒场景，黑盒迁移能力有限

- **与本报告的相关性**:
  作为自动化越狱攻击技术的代表性工作，体现了"自动化越狱测试"和"安全评估"之间的紧密联系。同时可作为说明评估基准必要性的反面论据：正是因为 AutoDAN 这类高级攻击的存在，才需要 HarmBench 和 StrongREJECT 这样的系统化评估框架。

- **可能的引用格式**:
  ```
  \cite{liu2024autodan}
  ```
