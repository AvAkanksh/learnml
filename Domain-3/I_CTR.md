# Category I — Continuous Control — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-CTR-001 — DDPG [P2]
Subtopics: deterministic policy gradient; continuous actions

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — DDPG | https://spinningup.openai.com/en/latest/algorithms/ddpg.html | Tutorial | Clean DDPG explanation with full implementation and pseudocode |
| 2 | Lilian Weng — Policy Gradient Algorithms (DDPG section) | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | DDPG as DPG + DQN tricks; deterministic policy gradient derivation |
| 3 | Berkeley CS285 — Lecture 7: Value-Based RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-7.pdf | Slides | Continuous action Q-learning leading to DDPG |
| 4 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | DDPG practical implementation details |
| 5 | Stable-Baselines3 — DDPG Docs | https://stable-baselines3.readthedocs.io/en/master/modules/ddpg.html | Docs | Production DDPG reference with hyperparameters |
| 6 | CleanRL — DDPG Implementation | https://github.com/vwxyzjn/cleanrl/blob/master/cleanrl/ddpg_continuous_action.py | Tutorial | Single-file annotated DDPG implementation |
| 7 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Deterministic policy gradient theorem context |
| 8 | Stanford CS234 — Lecture 6: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture6pre.pdf | Slides | DPG in advanced policy gradient context |
| 9 | HuggingFace Deep RL Course — Actor-Critic (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | DDPG in continuous control context |
| 10 | pg-is-all-you-need — DDPG Notebook | https://github.com/MrSyee/pg-is-all-you-need | Tutorial | Step-by-step DDPG notebook from A2C to SAC |

## CRL-CTR-002 — TD3 [P2]
Subtopics: twin critics; delayed updates; target smoothing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — TD3 | https://spinningup.openai.com/en/latest/algorithms/td3.html | Tutorial | Clear TD3 explanation with full implementation |
| 2 | Lilian Weng — Policy Gradient Algorithms (TD3 section) | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | TD3 three tricks explained: twin critics, delayed updates, target smoothing |
| 3 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | TD3 tricks in practical Q-learning context |
| 4 | Stable-Baselines3 — TD3 Docs | https://stable-baselines3.readthedocs.io/en/master/modules/td3.html | Docs | Production TD3 reference |
| 5 | CleanRL — TD3 Implementation | https://github.com/vwxyzjn/cleanrl/blob/master/cleanrl/td3_continuous_action.py | Tutorial | Single-file annotated TD3 implementation |
| 6 | Stanford CS234 — Lecture 7: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture7pre.pdf | Slides | Advanced policy gradient methods including TD3 context |
| 7 | pg-is-all-you-need — TD3 Notebook | https://github.com/MrSyee/pg-is-all-you-need | Tutorial | Step-by-step TD3 notebook with comparisons |
| 8 | Liverpool RL4AA — Deep RL Lecture (slides PDF) | https://indico.ph.liv.ac.uk/event/2025/contributions/10580/attachments/5073/7112/2026-03-30-DeepRL-lecture.pdf | Slides | DDPG-to-TD3-to-SAC progression in lecture slides |
| 9 | HuggingFace Deep RL Course — Actor-Critic (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | TD3 in continuous control context |
| 10 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Foundation for understanding deterministic policy methods |

## CRL-CTR-003 — SAC [P1]
Subtopics: maximum-entropy objective; soft Q; temperature tuning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — SAC | https://spinningup.openai.com/en/latest/algorithms/sac.html | Tutorial | Clear SAC explanation with full implementation |
| 2 | Lilian Weng — Policy Gradient Algorithms (SAC section) | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | SAC derivation, entropy regularization, temperature tuning |
| 3 | Berkeley CS285 — Lecture 12: VI in RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-12.pdf | Slides | Variational inference and max-entropy framework underlying SAC |
| 4 | Berkeley CS285 — Lecture 13: Control as Inference (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-13.pdf | Slides | Control as inference — the theoretical foundation of SAC |
| 5 | Stable-Baselines3 — SAC Docs | https://stable-baselines3.readthedocs.io/en/master/modules/sac.html | Docs | Production SAC reference |
| 6 | CleanRL — SAC Implementation | https://github.com/vwxyzjn/cleanrl/blob/master/cleanrl/sac_continuous_action.py | Tutorial | Single-file annotated SAC implementation |
| 7 | Stanford CS234 — Lecture 7: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture7pre.pdf | Slides | Advanced policy methods context |
| 8 | pg-is-all-you-need — SAC Notebook | https://github.com/MrSyee/pg-is-all-you-need | Tutorial | Step-by-step SAC notebook |
| 9 | Liverpool RL4AA — Deep RL Lecture (slides PDF) | https://indico.ph.liv.ac.uk/event/2025/contributions/10580/attachments/5073/7112/2026-03-30-DeepRL-lecture.pdf | Slides | SAC as max-entropy actor-critic in lecture slides |
| 10 | HuggingFace Deep RL Course — Actor-Critic (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | SAC in continuous control context |
