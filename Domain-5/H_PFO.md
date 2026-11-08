# Category H — Preference Optimization and RL Post-training

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-PFO-001 — Reward Modeling
Subtopics: Bradley-Terry model; pairwise preference data collection; reward model architecture; reward model training

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Reward Models | https://cameronrwolfe.substack.com/p/reward-models | Blog | Deep dive into reward model training, Bradley-Terry, and implicit rewards |
| 2 | Hugging Face Blog — RLHF Pipeline | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Covers reward model within the full RLHF pipeline |
| 3 | Hugging Face — RewardTrainer | https://huggingface.co/docs/trl/en/reward_trainer | Docs | Official docs for training reward models with TRL |
| 4 | Argilla — RLHF and Alternatives | https://argilla.io/blog/mantisnlp-rlhf-part-3/ | Blog | Covers reward modeling in context of RLHF vs alternatives |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers alignment and reward modeling fundamentals |

## LLM-PFO-002 — RLHF with PPO
Subtopics: PPO algorithm for LLMs; KL penalty from reference model; advantage estimation (GAE); clipped objective

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — RLHF Pipeline (PPO, GAE, DPO) | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Detailed coverage of PPO, GAE, and KL penalty for LLM alignment |
| 2 | Cameron Wolfe — Reinforcement Learning for LLMs: Complete Guide | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Comprehensive RLHF guide covering PPO mechanics and training loop |
| 3 | Hugging Face — PPOTrainer | https://huggingface.co/docs/trl/en/ppo_trainer | Docs | Official PPO trainer docs with KL penalty configuration |
| 4 | Argilla — RLHF and Alternatives | https://argilla.io/blog/mantisnlp-rlhf-part-3/ | Blog | Compares RLHF-PPO with DPO and other approaches |
| 5 | Cameron Wolfe — Online versus Offline RL for LLMs | https://cameronrwolfe.substack.com/p/online-rl | Blog | Contrasts PPO (online) with DPO (offline) approaches |

## LLM-PFO-003 — Direct Preference Optimization (DPO)
Subtopics: implicit reward model; closed-form policy optimization; reference model KL constraint; DPO loss derivation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Direct Preference Optimization (DPO) | https://cameronrwolfe.substack.com/p/direct-preference-optimization | Blog | Deep theoretical treatment of DPO's implicit reward formulation |
| 2 | Hugging Face Blog — From RLHF to DPO | https://huggingface.co/blog/ariG23498/rlhf-to-dpo | Blog | Clear derivation showing how DPO simplifies the RLHF objective |
| 3 | Philipp Schmid — How to Align Open LLMs with DPO | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Practical DPO implementation with HF TRL DPOTrainer |
| 4 | Hugging Face — DPOTrainer | https://huggingface.co/docs/trl/en/dpo_trainer | Docs | Official DPO trainer docs with loss configuration |
| 5 | Cameron Wolfe — Online versus Offline RL for LLMs | https://cameronrwolfe.substack.com/p/online-rl | Blog | Analyzes DPO as offline preference optimization |

## LLM-PFO-004 — DPO Variants: IPO, KTO, SimPO, ORPO
Subtopics: IPO (identity preference optimization); KTO (Kahneman-Tversky optimization); SimPO; ORPO; when to use each

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Direct Preference Optimization | https://cameronrwolfe.substack.com/p/direct-preference-optimization | Blog | Covers DPO variants and their motivations |
| 2 | Hugging Face — DPOTrainer | https://huggingface.co/docs/trl/en/dpo_trainer | Docs | Supports IPO, KTO, and other DPO variant losses |
| 3 | Hugging Face Blog — From RLHF to DPO | https://huggingface.co/blog/ariG23498/rlhf-to-dpo | Blog | Discusses DPO limitations that variants address |
| 4 | Argilla — RLHF and Alternatives | https://argilla.io/blog/mantisnlp-rlhf-part-3/ | Blog | Compares DPO variants and their trade-offs |
| 5 | Philipp Schmid — How to Align Open LLMs | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Practical guide showing when to use different preference methods |

## LLM-PFO-005 — GRPO (Group-Relative Policy Optimization)
Subtopics: group-based advantage estimation; no critic model; DeepSeek-R1 training; multi-completion sampling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Group Relative Policy Optimization (GRPO) | https://cameronrwolfe.substack.com/p/grpo | Blog | Definitive explainer of GRPO's critic-free advantage estimation |
| 2 | Hugging Face — GRPOTrainer | https://huggingface.co/docs/trl/en/grpo_trainer | Docs | Official GRPO trainer docs with multi-completion configuration |
| 3 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Places GRPO within the broader LLM-RL landscape |
| 4 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Covers GRPO's role in DeepSeek-R1's reasoning training |
| 5 | Hugging Face Blog — RLHF Pipeline | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Covers GRPO alongside PPO and DPO in the alignment pipeline |

## LLM-PFO-006 — DAPO and GRPO Refinements
Subtopics: DAPO (decoupled clip + dynamic sampling); entropy bonus; KL-free training; token-level vs sequence-level rewards

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Group Relative Policy Optimization (GRPO) | https://cameronrwolfe.substack.com/p/grpo | Blog | Discusses GRPO refinements including entropy and reward design |
| 2 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Covers advanced RL techniques including reward granularity |
| 3 | Cameron Wolfe — Rubric-Based Rewards for RL | https://cameronrwolfe.substack.com/p/rubric-rl | Blog | Discusses token-level vs sequence-level reward design |
| 4 | Hugging Face — GRPOTrainer | https://huggingface.co/docs/trl/en/grpo_trainer | Docs | Configuration for GRPO variants and reward options |
| 5 | Hugging Face Blog — RLHF Pipeline | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Covers training stability techniques for preference optimization |

## LLM-PFO-007 — Reinforcement Learning with Verifiable Rewards (RLVR)
Subtopics: automated verification; math/code verifiers; rule-based rewards; removing human preferences

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Rubric-Based Rewards for RL | https://cameronrwolfe.substack.com/p/rubric-rl | Blog | Separates RLHF (reward model) from RLVR (verifiable rewards) |
| 2 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Covers verifiable rewards in math/code reasoning training |
| 3 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Comprehensive RL guide covering verifiable reward approaches |
| 4 | Hugging Face — GRPOTrainer | https://huggingface.co/docs/trl/en/grpo_trainer | Docs | Supports custom reward functions for verifiable rewards |
| 5 | Cameron Wolfe — GRPO | https://cameronrwolfe.substack.com/p/grpo | Blog | Covers GRPO with verifiable rewards in DeepSeek-R1 |

## LLM-PFO-008 — Process Reward Models vs Outcome Reward Models
Subtopics: step-level feedback; outcome-level feedback; PRM training; credit assignment in reasoning chains

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Reward Models | https://cameronrwolfe.substack.com/p/reward-models | Blog | Covers process vs outcome reward models and credit assignment |
| 2 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Discusses PRM role in reasoning chain evaluation |
| 3 | Cameron Wolfe — Rubric-Based Rewards for RL | https://cameronrwolfe.substack.com/p/rubric-rl | Blog | Covers fine-grained reward design for step-level feedback |
| 4 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Places PRMs within the broader LLM-RL framework |
| 5 | Hugging Face Blog — RLHF Pipeline | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Discusses reward model design choices |

## LLM-PFO-009 — Reward Hacking and Preference-Optimization Pitfalls
Subtopics: reward overoptimization; Goodhart's law in RLHF; length bias; sycophancy; mitigation strategies

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Reward Models | https://cameronrwolfe.substack.com/p/reward-models | Blog | Discusses reward hacking and overoptimization pitfalls |
| 2 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Covers reward hacking mitigation in the RLHF pipeline |
| 3 | Cameron Wolfe — Online versus Offline RL for LLMs | https://cameronrwolfe.substack.com/p/online-rl | Blog | Discusses DPO's sensitivity to preference data quality |
| 4 | Hugging Face Blog — RLHF Pipeline | https://huggingface.co/blog/NormalUhr/rlhf-pipeline | Blog | Covers KL penalty as a reward hacking mitigation |
| 5 | Argilla — RLHF and Alternatives | https://argilla.io/blog/mantisnlp-rlhf-part-3/ | Blog | Discusses preference optimization pitfalls and alternatives |
