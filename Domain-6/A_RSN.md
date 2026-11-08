# Category A — RL for LLM Reasoning — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-RSN-001 — RL with Verifiable Rewards (RLVR) [P0]
Subtopics: verifier/rule-based rewards; reward sparsity; see LLM-PFO-007

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Awesome-RLVR — Curated list of RLVR resources | https://github.com/opendilab/awesome-RLVR | Docs | Comprehensive curated list of surveys, tutorials, and codebases on RLVR with training loop diagrams |
| 2 | DeepSeek-R1 — Intuitively and Exhaustively Explained | https://iaee.substack.com/p/deepseek-r1-intuitively-and-exhaustively | Blog | Full R1 pipeline including rule-based accuracy/format rewards with no neural reward model |
| 3 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Practical tricks for RL with verifiable rewards including zero-signal groups and reward sparsity |
| 4 | Bite: How DeepSeek R1 was Trained — Philipp Schmid | https://www.philschmid.de/deepseek-r1 | Blog | Concise walkthrough of R1 training with GRPO and verifiable rewards |
| 5 | OpenAI — Learning to Reason with LLMs | https://openai.com/index/learning-to-reason-with-llms/ | Blog | Official o1 introduction covering RL training for reasoning with verified outcomes |
| 6 | RLVR Explained: Why Verifiable Rewards Still Get Gamed | https://kili-technology.com/blog/rlvr-reinforcement-learning-with-verifiable-rewards | Blog | Explains RLVR mechanics and practical limitations of verifier-based rewards |
| 7 | HuggingFace LLM Course — Understanding GRPO in DeepSeekMath | https://huggingface.co/learn/llm-course/en/chapter12/3b | Tutorial | Walks through GRPO formulation for math verification tasks with diagrams |
| 8 | Aman's AI Journal — DeepSeek-R1 Primer | https://aman.ai/primers/ai/deepseek-R1/ | Blog | Separates R1-Zero (pure RL) vs R1 (cold-start SFT + GRPO) with verifier-based reward design |
| 9 | Snorkel — Reinforcement Learning With Verifiable Rewards | https://snorkel.ai/rlvr/ | Blog | RLVR data design considerations and how verifiers shape training |
| 10 | DeepSeek R1 for Beginners — LessWrong | https://www.lesswrong.com/posts/a9GR7m4nyBsqjjL8d/deepseek-r1-for-beginners | Blog | Beginner-friendly walkthrough of R1-Zero's pure RL with verifiable rewards |

## MRL-RSN-002 — Long-Chain-of-Thought RL Training [P1]
Subtopics: o1/R1-style recipes; response-length growth; see LLM-RSN-002

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | R1's four training stages: cold-start SFT, reasoning RL, further SFT, further RL |
| 2 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | Comprehensive survey of test-time compute and chain-of-thought covering RL for reasoning |
| 3 | OpenAI — Learning to Reason with LLMs | https://openai.com/index/learning-to-reason-with-llms/ | Blog | Official o1 blog covering long internal reasoning traces trained via RL |
| 4 | DeepSeek-R1 — Intuitively and Exhaustively Explained | https://iaee.substack.com/p/deepseek-r1-intuitively-and-exhaustively | Blog | Full pipeline from base model through multi-stage SFT and GRPO RL |
| 5 | Cameron Wolfe — RL Scaling Laws for LLMs | https://cameronrwolfe.substack.com/p/rl-scaling-laws | Blog | RL training compute scaling and inference-time compute growth for reasoning |
| 6 | DeepSeek R1 for Beginners — LessWrong | https://www.lesswrong.com/posts/a9GR7m4nyBsqjjL8d/deepseek-r1-for-beginners | Blog | R1-Zero "aha moment" mid-training where reasoning chains get longer over training |
| 7 | Cameron Wolfe — Scaling Laws for LLMs: From GPT-3 to o3 | https://cameronrwolfe.substack.com/p/llm-scaling-laws | Blog | New scaling paradigm covering post-training and inference compute |
| 8 | Reasoning Series, Part 1: Understanding OpenAI o1 | https://leehanchung.github.io/blogs/2024/10/08/reasoning-understanding-o1/ | Blog | Technical analysis of o1's reasoning approach and long chain-of-thought training |

## MRL-RSN-003 — Process Reward Models for RL [P1]
Subtopics: step-level vs outcome rewards; PRM training signal

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | RLHF Book — Reward Models (Chapter 5) | https://rlhfbook.com/c/05-reward-models | Tutorial | Authoritative treatment of PRMs with step-boundary scoring and ORM comparison |
| 2 | Getting LLMs To Reason With Process Rewards — Pat McGuinness | https://patmcguinness.substack.com/p/getting-llms-to-reason-with-process | Blog | PRMs as finer-grained alternative to ORMs in RL-based reasoning |
| 3 | Process Reward Model: Scoring Reasoning Step by Step — ZeroEntropy | https://zeroentropy.dev/concepts/process-reward-model/ | Blog | Step-level labels, per-step aggregation (sum/min/product), and RL use |
| 4 | Cameron Wolfe — Reward Models | https://cameronrwolfe.substack.com/p/reward-models | Blog | Reward model training including process vs outcome supervision approaches |
| 5 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | Process reward models in context of test-time compute and reasoning |
| 6 | Process Reward Models — Emergent Mind | https://www.emergentmind.com/topics/process-reward-models-prm | Docs | Step-level feedback mechanics including implicit PRMs and inference-time scaling |
| 7 | HuggingFace — Guide to RL Post-Training for LLMs | https://huggingface.co/blog/karina-zadorozhny/guide-to-llm-post-training-algorithms | Blog | Process vs outcome reward models in LLM post-training context |
| 8 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Step-level supervision in multi-stage reasoning model training |

## MRL-RSN-004 — Practical Dynamics of LLM RL Training (new) [P1]
Subtopics: entropy collapse; KL-penalty choices; rollout staleness / off-policyness; length bias

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Directly covers practical dynamics: completion length growth, entropy, and mitigation tricks |
| 2 | Lilian Weng — Reward Hacking in Reinforcement Learning | https://lilianweng.github.io/posts/2024-11-28-reward-hacking/ | Blog | Length bias, sycophancy, KL penalty effects, and RM over-optimization scaling laws |
| 3 | Nathan Lambert — Illustrating RLHF (HuggingFace Blog) | https://huggingface.co/blog/rlhf | Blog | Classic RLHF pipeline overview with KL penalty to reference model explained |
| 4 | RLHF Does Not Appear to Differentially Cause Mode-Collapse — LessWrong | https://www.lesswrong.com/posts/pjesEx526ngE6dnmr/rlhf-does-not-appear-to-differentially-cause-mode-collapse | Blog | Analysis of KL penalty constraints on entropy and mode collapse in RLHF |
| 5 | Cameron Wolfe — RL Scaling Laws for LLMs | https://cameronrwolfe.substack.com/p/rl-scaling-laws | Blog | RL training dynamics including completion length increases |
| 6 | HuggingFace — Guide to RL Post-Training: PPO, DPO, GRPO, and Beyond | https://huggingface.co/blog/karina-zadorozhny/guide-to-llm-post-training-algorithms | Blog | KL penalty, PPO clipping, and practical training considerations |
| 7 | DeepSeek-R1 — Intuitively and Exhaustively Explained | https://iaee.substack.com/p/deepseek-r1-intuitively-and-exhaustively | Blog | Language mixing instability in R1-Zero and cold-start SFT to stabilize training |
| 8 | Why GRPO is Important and How it Works — Oxen.ai | https://ghost.oxen.ai/why-grpo-is-important-and-how-it-works/ | Blog | Zero-learning-signal problem when all group responses get same reward |
