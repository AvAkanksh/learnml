# Category F — Offline RL Advances — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-OFL-001 — Modern Offline RL Algorithms [P1]
Subtopics: CQL; IQL; conservatism vs extrapolation error

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Conservative Q-Learning (CQL) — APXML Course | https://apxml.com/courses/advanced-reinforcement-learning/chapter-7-offline-reinforcement-learning/cql-offline | Tutorial | CQL tutorial covering modified Q-learning objective that penalizes OOD actions for conservatism |
| 2 | CQL — DI-engine Documentation | https://di-engine-docs.readthedocs.io/en/latest/12_policies/cql.html | Docs | CQL policy docs with regularizer pushing Q-values down on OOD actions |
| 3 | IQL with TorchRL — Minari/Farama Tutorial | https://minari.farama.org/tutorials/using_datasets/IQL_torchrl/ | Tutorial | Hands-on IQL tutorial with expectile regression on D4RL Adroit dataset |
| 4 | Implicit Q-Learning (IQL) — RLinf Documentation | https://rlinf.readthedocs.io/en/latest/rst_source/tutorials/rlalg/iql.html | Docs | IQL algorithm docs covering asymmetric expectile loss and temperature parameter |
| 5 | CQL — Clean Offline RL (CORL) | https://corl-team.github.io/CORL/algorithms/cql/ | Docs | Clean reference implementation of CQL with documented architecture |
| 6 | Conservative Q-Learning — Emergent Mind | https://www.emergentmind.com/topics/conservative-q-learning-cql | Docs | CQL overview covering pessimistic Q-value estimation and lower-bound guarantees |
| 7 | Implicit Q-Learning in Offline RL — Emergent Mind | https://www.emergentmind.com/topics/implicit-q-learning-iql | Docs | IQL theory including implicit value regularization view |
| 8 | Berkeley CS285 — Offline RL Algorithms (Lecture 18 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-18.pdf | Slides | University slides covering offline RL algorithms including CQL, IQL, and model-based approaches |
| 9 | Berkeley CS285 — Offline RL (Fall 2020, Lecture 15 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse-fa20/static/slides/lec-15.pdf | Slides | Aviral Kumar's lecture on offline RL covering distributional shift and conservatism |
| 10 | HuggingFace Deep RL Course — Decision Transformers | https://huggingface.co/learn/deep-rl-course/en/unitbonus3/decision-transformers | Tutorial | Offline RL context for sequence modeling as alternative to value-based approaches |

## MRL-OFL-002 — Offline-to-Online RL [P2]
Subtopics: fine-tuning offline policies online

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Offline-to-Online RL — Emergent Mind | https://www.emergentmind.com/topics/offline-to-online-reinforcement-learning-o2o-rl-3a8a0a94-9168-4be4-a93a-63e8967e2b1b | Docs | Overview of two-phase framework and managing instability at offline-to-online transition |
| 2 | IQL with TorchRL — Minari/Farama Tutorial | https://minari.farama.org/tutorials/using_datasets/IQL_torchrl/ | Tutorial | IQL as offline pretraining foundation before online fine-tuning |
| 3 | CQL — DI-engine Documentation | https://di-engine-docs.readthedocs.io/en/latest/12_policies/cql.html | Docs | CQL conservatism as starting point for online fine-tuning |
| 4 | Berkeley CS285 — Offline RL Algorithms (Lecture 18 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-18.pdf | Slides | Covers offline-to-online methods including conservative pretraining before online adaptation |
| 5 | Shanghai Jiao Tong — Offline RL Lecture Slides | https://wnzhang.net/teaching/sjtu-rl-2024/slides/11-offline-rl.pdf | Slides | University slides covering offline policy evaluation and transition to online fine-tuning |
| 6 | HuggingFace Deep RL Course — Train Your First Agent | https://huggingface.co/learn/deep-rl-course/en/unit1/hands-on | Tutorial | Online RL fundamentals that complement offline pretraining |
