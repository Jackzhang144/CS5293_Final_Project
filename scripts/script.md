# Presentation Script — LLM Jailbreaks & Safety-Boundary Failures

> Total duration: ~5 minutes | 17 slides
> Read naturally, not word-for-word. Numbers in brackets indicate approximate slide count.

---

## Slide 1 — Title

> ⏱ ~5s

We're Topic 22 from Module 5, looking at LLM jailbreaks and safety-boundary failures. Our goal is to understand why these attacks work, and what we can do about it.

---

## Slide 2 — Capability vs Safety

> ⏱ ~20s

LLM development faces a fundamental conflict. We optimize for both capability and safety through techniques like RLHF and Constitutional AI. But in practice, these objectives pull against each other — especially in high-capability domains. The result is an asymmetric arms race between attackers and defenders.

---

## Slide 3 — Prompt Injection

> ⏱ ~25s

Prompt injection is one of the simplest yet most effective attacks. An external malicious instruction overrides the system prompt. Here's an example: a user sends what looks like an innocent email, but hidden inside is a "ignore previous instructions" payload. The model reads the full context and the hidden injection takes priority. It's embedding a system prompt within user data — and the model cannot distinguish them.

---

## Slide 4 — Encoding Bypass

> ⏱ ~20s

Another technique is encoding. A request encoded in Base64 looks like random text to a safety classifier. Why? Because the training data for safety models contains labeled examples like "hacking tutorial equals harmful". But the encoded version appears as meaningless characters — it's not in the training distribution. Nearly 100% of encoded harmful requests bypass safety filters.

---

## Slide 5 — Multi-Turn Escalation

> ⏱ ~20s

Multi-turn attacks use gradual context poisoning. The user starts with an innocent question: "Tell me a story about hackers." Each turn escalates slightly — probing, then asking for specifics, until the final turn requests exploit code. The guard level drops from safe to probing to escalating to jailbroken. The model's own conversation history becomes the attack vector.

---

## Slide 6 — GCG Attack

> ⏱ ~25s

GCG takes a more mathematical approach. Instead of crafting prompts manually, it uses gradient-based optimization. You run the target model, compute the loss gradient with respect to the input tokens, and iteratively optimize an adversarial suffix. After about 500 iterations, the loss drops from 2.8 to 0.2 — and the suffix reliably triggers harmful outputs. Vicuna-7B is vulnerable at 88%, GPT-4 at 47%.

---

## Slide 7 — How RLHF Works

> ⏱ ~20s

So how is alignment supposed to work? RLHF — Reinforcement Learning from Human Feedback — trains models through a multi-step process. Human annotators rank outputs, a reward model learns their preferences, and PPO fine-tuning aligns the model. The feedback loop iteratively improves safety. But as we just saw, gradient-optimized suffixes can still break through. The alignment is strong but not invulnerable.

---

## Slide 8 — Defense-in-Depth

> ⏱ ~20s

How do we defend? The principle is defense-in-depth: multiple independent security layers. An input filter catches suspicious patterns. Sanitization removes injected instructions. Alignment via RLHF and Constitutional AI redirects harmful requests. And an output guard provides final verification. Each layer operates independently — if one fails, the next can still catch the threat.

---

## Slide 9 — Harness Engineering

> ⏱ ~25s

OpenAI recently described a broader framework called Harness Engineering. The core idea: instead of hoping the model behaves safely, you build a mechanical environment that constrains it. Five pillars: specification architecture — encode rules as linters and tests, not prompts. The repo as the system of record — if it's not in version control, the agent can't see it. Progressive disclosure — start with a map, not an encyclopedia. Autonomous feedback loops — agents review agents, garbage-collect drift. And humans stay at the helm — setting direction and encoding taste into code.

---

## Slide 10 — Claude Code in Practice

> ⏱ ~25s

Let's look at a real implementation. Claude Code CLI has five concrete security layers. Input sanitization strips hidden Unicode characters. The system prompt guard injects cyber risk instructions. Tool validation runs 23-plus Bash security checks and AST-based PowerShell analysis. The permission engine makes allow-deny-ask decisions with an ML classifier. And the Anthropic API provides final moderation. This is Harness Engineering in production — mechanical invariants, not model hope.

---

## Slide 11 — Asymmetric Arms Race

> ⏱ ~15s

The fundamental challenge is asymmetry. An attacker needs to find one vulnerability — a single gap in the armor. The defender must cover every possible angle. This is why the arms race inherently favors offense, and why mechanical, multi-layer defenses are essential.

---

## Slide 12 — Attack Success Rates

> ⏱ ~15s

Real-world numbers paint a stark picture. GCG achieves 88% on Vicuna. Base64 encoding reaches 99% bypass across multiple models. Even transfer attacks — GCG optimized on Vicuna applied to GPT-4 — still hit 47%. These aren't theoretical; they're demonstrable.

---

## Slide 13 — Safety-Utility Trade-off

> ⏱ ~15s

There's also a fundamental tension between safety and utility. Over-restrict the model and it becomes useless — it refuses everything. Under-protect and it's dangerous. The goal is balance: enough safety to block real harm, enough utility to remain useful. This sweet spot remains an open research question.

---

## Slide 14 — Evaluation Benchmarks

> ⏱ ~15s

How do we measure progress? Three key benchmarks: HarmBench tests 18 attack methods against 33 LLMs across 510 behaviors. StrongREJECT analyzes the empty jailbreak phenomenon. And JailbreakBench from NeurIPS 2024 covers 200-plus behavior categories. Standardized evaluation is critical — without it, we can't tell if we're winning or losing.

---

## Slide 15 — Open Problems

> ⏱ ~15s

Where do we go from here? Four major challenges remain. The generalization gap between finite safety training and an unbounded attack surface. Evaluation subjectivity — harm is context-dependent. The safety-utility trade-off. And adaptive attackers who evolve faster than static defenses. Each of these requires fundamental advances, not incremental tuning.

---

## Slide 16 — Key Takeaways

> ⏱ ~15s

Three things to remember. First, this is an asymmetric arms race that fundamentally favors attackers — we must design accordingly. Second, safety metrics must evolve beyond simple attack success rates to capture real-world threats. And third, the fundamental limits of alignment require architectural solutions — mechanical harnesses, not just model training.

---

## Slide 17 — Credits

> ⏱ ~5s

This presentation was built with React, TypeScript, and Material UI. Slides code generated by DeepSeek V4 Pro. Thank you.

---

## Script Notes

- **Total**: ~300s (5 minutes), based on speaking ~150 words per minute
- **Pacing**: Slides 3-6 (attack techniques) are the core content — allocate more time here
- **Transitions**: Connect adjacent slides naturally; "As we just saw...", "So how do we defend against this?", "Let's look at a real implementation..."
- **Q&A buffer**: If short on time, condense slides 11-15; they reinforce rather than introduce
- **Tone**: Academic but accessible — this is a course presentation, not a conference talk
