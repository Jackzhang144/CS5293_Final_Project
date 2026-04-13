## Universal and Transferable Adversarial Attacks on Aligned Language Models

- **Authors**: Andy Zou, Zifan Wang, J. Zico Kolter, Matt Fredrikson
- **Venue**: arXiv:2307.15043 (2023)；被多次引用，是 LLM 安全领域最重要的基础工作之一
- **核心贡献**: 提出了 GCG (Greedy Coordinate Gradient) 攻击方法，可自动生成通用对抗性后缀，附加在任意有害提示后面使 LLM 输出有害内容。
- **方法**:
  - 使用基于梯度的离散优化（GCG 算法）搜索对抗性 token 后缀
  - 通过最小化目标对数概率损失来优化后缀
  - 在多模型上联合训练实现迁移性（transferability）
  - 白盒攻击 Vicuna / Llama 2，迁移至黑盒 GPT-3.5、GPT-4、Claude 等
- **关键发现**:
  - 生成的对抗后缀对目标模型（Vicuna）攻击成功率达 ~88%
  - 后缀能迁移到未见过的闭源模型（GPT-4 成功率 ~47%）
  - 通用性：单一后缀可攻击多个不同的有害请求
- **局限性**:
  - 后缀可读性极差（乱码），人工审核较易识别
  - 对有防御机制的系统（如 perplexity filtering）有效性下降
  - 迁移到 Claude 模型效果相对较弱
- **与本报告的相关性**: 代表了自动化白盒梯度攻击范式，是"编码/后缀绕过"类攻击的重要代表
- **可能的引用格式**: `\cite{zou2023universal}`
