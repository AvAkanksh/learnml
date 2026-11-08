# Category B — Preference Optimization as RL — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-PRF-001 — GRPO and Group-Relative Methods [P0]
Subtopics: group baselines replacing value nets; see LLM-PFO-005

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Group Relative Policy Optimization (GRPO) | https://cameronrwolfe.substack.com/p/grpo | Blog | Detailed technical walkthrough of GRPO with group-relative advantages replacing value networks |
| 2 | HuggingFace LLM Course — Advanced Understanding of GRPO | https://huggingface.co/learn/llm-course/en/chapter12/3b | Tutorial | Step-by-step DeepSeekMath GRPO formulation with advantage computation diagrams |
| 3 | GRPO Explained: How Group Relative Policy Optimization Works | https://kili-technology.com/blog/grpo-group-relative-policy-optimization | Blog | GRPO as cheaper PPO; covers group sampling and known length-normalization issues |
| 4 | What Is GRPO? — Turing Post | https://www.turingpost.com/p/grpo | Blog | Clear overview of GRPO as critic-free RL comparing outputs within the same group |
| 5 | Why GRPO is Important and How it Works — Oxen.ai | https://ghost.oxen.ai/why-grpo-is-important-and-how-it-works/ | Blog | GRPO origins in DeepSeekMath and group baseline replacing critic |
| 6 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Practical GRPO improvements covering zero-signal groups and fixes |
| 7 | Bite: How DeepSeek R1 was Trained — Philipp Schmid | https://www.philschmid.de/deepseek-r1 | Blog | GRPO drops separate value model with memory savings over PPO |
| 8 | GRPO — Ultralytics Glossary | https://www.ultralytics.com/glossary/group-relative-policy-optimization-grpo | Docs | Concise GRPO reference with key concepts and beta parameter |

## MRL-PRF-002 — DAPO and GRPO Refinements [P2]
Subtopics: decoupled clipping; dynamic sampling; see LLM-PFO-006

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Covers DAPO-style refinements including clipping tricks and sampling strategies |
| 2 | DAPO: Decoupled Clip & Dynamic Sampling — EmergentMind | https://www.emergentmind.com/topics/decoupled-clip-and-dynamic-sampling-policy-optimization-dapo | Docs | Explains Clip-Higher (decoupled clipping) and dynamic sampling mechanisms |
| 3 | DAPO GitHub Implementation | https://github.com/ai-in-pm/DAPO | Docs | Open-source DAPO implementation with code reference for decoupled clipping |
| 4 | How DeepSeek-R1 Was Trained: The GRPO Recipe | https://futureagi.com/blog/how-grpo-trains-deepseek-reasoning-llms-2026/ | Blog | Covers overlong reward shaping and token-level policy gradient loss |
| 5 | HuggingFace — Guide to RL Post-Training for LLMs | https://huggingface.co/blog/karina-zadorozhny/guide-to-llm-post-training-algorithms | Blog | Covers PPO clipping variants and post-training algorithm comparisons |
| 6 | Fireworks AI — Multi-Turn RL Best Practices for LLM Agents | https://fireworks.ai/blog/best-practices-for-multi-turn-RL | Blog | Practical training loop design including clipping and sampling strategies |

## MRL-PRF-003 — DPO and Alternatives as Implicit Policy Learning [P2]
Subtopics: DPO/IPO/KTO/SimPO viewed through KL-regularized RL lens

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Direct Preference Optimization | https://cameronrwolfe.substack.com/p/direct-preference-optimization | Blog | Tutorial-style derivation walkthrough including Bradley-Terry and implementation from scratch |
| 2 | Together AI — Direct Preference Optimization: A Technical Deep Dive | https://www.together.ai/blog/direct-preference-optimization | Blog | RLHF vs DPO diagram with DPO derivation from KL-regularized RL objective |
| 3 | Deriving the DPO Loss from First Principles — HuggingFace Blog | https://huggingface.co/blog/garg-aayush/derive-dpo-loss | Blog | Step-by-step DPO loss derivation from Bradley-Terry and KL-regularized RL |
| 4 | HuggingFace — Preference Tuning LLMs with DPO Methods | https://huggingface.co/blog/pref-tuning | Blog | Empirical comparison of DPO, IPO, KTO with best beta by method |
| 5 | University of Toronto CSC2541 — DPO Presentation Slides | https://www.cs.toronto.edu/~cmaddis/courses/csc2541_w25/presentations/mu_cao_dpo.pdf | Slides | Step-by-step DPO derivation slides with equations from Bradley-Terry to final loss |
| 6 | RLHF in 2024 with DPO & HuggingFace — Philipp Schmid | https://www.philschmid.de/dpo-align-llms-in-2024-with-trl | Tutorial | Hands-on DPO tutorial with TRL code examples |
| 7 | SimPO: Simple Preference Optimization — Princeton NLP GitHub | https://github.com/princeton-nlp/SimPO | Docs | Reference-free reward comparing SimPO vs IPO, ORPO, KTO on benchmarks |
| 8 | AI Security and Safety — DPO Complete Guide | https://aisecurityandsafety.org/en/guides/direct-preference-optimization/ | Blog | Covers DPO math plus variants IPO, KTO, ORPO, SimPO in one guide |
| 9 | HuggingFace — Simplifying Alignment: From RLHF to DPO | https://huggingface.co/blog/ariG23498/rlhf-to-dpo | Blog | Conceptual walkthrough of DPO math starting from the RLHF objective |
