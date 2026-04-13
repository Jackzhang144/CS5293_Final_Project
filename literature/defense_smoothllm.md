## SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks

- **Venue**: arXiv:2310.03684, October 2023
- **Authors**: Alexander Robey, Eric Wong, Hamed Hassani, George J. Pappas (University of Pennsylvania)
- **核心贡献**:
  首个基于随机平滑（randomized smoothing）思想的 LLM 越狱防御算法。发现对抗性越狱 prompt 在字符级扰动下极不稳定，利用该性质以多数投票聚合多个随机扰动副本的输出来抑制越狱成功率。
- **方法**:
  1. 对输入 prompt 随机生成多个副本，每个副本通过字符级扰动（insert、swap、patch）引入随机噪声。
  2. 将 N 个副本分别送入 LLM 推理，收集 N 个响应。
  3. 对响应进行多数投票（majority voting）：若多数响应被判定为有害则拒绝，否则输出。
  4. 不需修改模型参数，为推理期防御（inference-time defense）。
- **关键发现**:
  - 对 GCG 攻击（Zou et al., 2023）的成功率从 >80% 降至 <1%（Llama-2、Vicuna 上）。
  - 对 PAIR、AutoDAN 等语义攻击亦有效，但防御效果相对低于对梯度攻击。
  - 扰动比例 q 与副本数 N 是关键超参数，存在准确性-防御性权衡。
- **局限性**:
  - 增加了推理计算成本（需多次前向传播）。
  - 对语义层面越狱（如角色扮演 jailbreak）防御效果有限。
  - 对白盒自适应攻击者可能被绕过。
- **与本报告的相关性**:
  代表输入级别的 prompt 防御（input sanitization/filtering）方向，展示了防御方法如何利用攻击脆弱性来构建防护机制，与 safety alignment 的局限性讨论互补。
- **可能的引用格式**:
  `\cite{robey2023smoothllm}`
