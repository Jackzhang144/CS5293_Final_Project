## Constitutional Classifiers: Defending Against Universal Jailbreaks

- **Venue**: arXiv:2501.18837, January 2025 (Anthropic Safeguards Research Team)
- **Authors**: Anthropic Safeguards Research Team
- **核心贡献**:
  提出 Constitutional Classifiers，一种基于合成数据训练的输入/输出分类器防御框架。通过 LLM 生成符合"宪法"的合成越狱示例来训练分类器，对通用越狱（universal jailbreaks）的防御率达到 95%+，同时将误拒率控制在 0.38%。
- **方法**:
  1. 定义"宪法"——一组自然语言规则，说明允许和禁止的内容类型（聚焦大规模杀伤性武器等严重危害）。
  2. 用 LLM 生成大量合成数据：有害请求和无害请求各类变体。
  3. 在合成数据上训练输入分类器（input classifier）和输出分类器（output classifier）。
  4. 在生产中，先用分类器拦截可疑 prompt，通过后 LLM 才执行并对输出做二次检查。
  5. 在 183 名红队成员 3000+ 小时测试中，无人发现通用越狱。
- **关键发现**:
  - 未部署时 Claude 仅阻止约 14% 的高级越狱；部署后阻止率超 95%。
  - 推理开销增加约 23.7%，生产流量误拒率仅增加 0.38%。
  - 宪法原则设计对分类器性能影响显著。
- **局限性**:
  - 仍存在约 5% 的漏网越狱。
  - 专注于"通用越狱"，对单次针对性越狱 prompt 的防御未做充分评估。
  - 推理成本增加，对资源受限场景不友好。
- **与本报告的相关性**:
  最新的 output filtering + input filtering 组合防御案例，代表工业界对 LLM 越狱的系统性工程防御。与 RLHF/CAI 的训练时对齐方法形成对比，展示推理时分类器防御的有效性和代价。
- **可能的引用格式**:
  `\cite{anthropic2025constitutional_classifiers}`
