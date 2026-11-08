# Category J — Offline RL and Imitation Learning — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-OFF-001 — Offline RL Fundamentals [P1]
Subtopics: distributional shift; extrapolation error; batch-constrained learning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Berkeley CS285 — Lecture 17: Offline RL Part 1 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-17.pdf | Slides | Distributional shift, extrapolation error, conservative methods |
| 2 | Berkeley CS285 — Lecture 18: Offline RL Part 2 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-18.pdf | Slides | Batch-constrained learning, CQL, IQL |
| 3 | Spinning Up — Intro to RL Part 2 (offline context) | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | On-policy vs off-policy distinction foundational to offline RL |
| 4 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Off-policy methods overview relevant to offline RL |
| 5 | Stanford CS234 — Lecture 10: Imitation Learning & Human Input (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture10pre.pdf | Slides | Learning from data without exploration context |
| 6 | D4RL: Datasets for Deep Data-Driven RL | https://github.com/Farama-Foundation/d4rl | Docs | Standard offline RL benchmark datasets |
| 7 | David Silver — Lecture 5: Model-Free Control (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/control.pdf | Slides | Off-policy learning foundations |
| 8 | CleanRL Documentation | https://docs.cleanrl.dev/ | Docs | Offline RL implementations |
| 9 | Deep RL Course Notes — Model-Based (offline context) | https://deeprlcourse.github.io/course_notes/model-based | Tutorial | Model-based approaches relevant to offline RL |
| 10 | Sutton & Barto — Ch 8.5: Planning and Learning (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Experience replay and learning from stored data |

## CRL-OFF-002 — Imitation Learning [P1]
Subtopics: behavior cloning; compounding error; DAgger

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Berkeley CS285 — Lecture 2: Behavioral Cloning (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-2.pdf | Slides | Behavior cloning, compounding error, DAgger — Levine's definitive treatment |
| 2 | Berkeley CS285 — Lecture 3: Behavioral Cloning Part 2 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-3.pdf | Slides | Advanced imitation learning and multi-modal behavior |
| 3 | Stanford CS234 — Lecture 8: Imitation Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture8pre.pdf | Slides | BC, DAgger, compounding error |
| 4 | Stanford CS234 — Lecture 9: Learning from Human Input (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture9pre.pdf | Slides | Imitation learning and RLHF |
| 5 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Imitation learning overview |
| 6 | HuggingFace Deep RL Course — Unit 1 (imitation context) | https://huggingface.co/learn/deep-rl-course/unit1/two-methods | Tutorial | BC as a baseline approach |
| 7 | imitation library (docs) | https://imitation.readthedocs.io/en/latest/ | Docs | Python library for BC, DAgger, IRL implementations |
| 8 | UW CSE 579 — Imitation Learning Homework (PDF) | https://courses.cs.washington.edu/courses/cse579/24au/projects/homework1/CSE_579_Au24.pdf | Slides | Hands-on BC and DAgger implementation guide |
| 9 | David Silver — Lecture 5: Model-Free Control (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/control.pdf | Slides | Policy learning foundations |
| 10 | Clawdemy — Imitation Learning Practice | https://clawdemy.pages.dev/lessons/deep-reinforcement-learning/imitation-learning/practice/ | Tutorial | O(εT²) vs O(εT) compounding error with worked numbers |

## CRL-OFF-003 — Inverse Reinforcement Learning [P2]
Subtopics: reward inference from demonstrations; MaxEnt IRL

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — A (Long) Peek into RL (IRL section) | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | IRL section with reward inference explanation |
| 2 | Berkeley CS285 — Lecture 17: Offline RL Part 1 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-17.pdf | Slides | IRL and reward learning in offline context |
| 3 | Stanford CS234 — Lecture 15: Rewards in RL (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture15pre.pdf | Slides | Reward inference and IRL theory |
| 4 | KindaTechnical — Maximum Entropy IRL | https://kindatechnical.com/reinforcement-learning/lesson-72-maximum-entropy-irl.html | Tutorial | MaxEnt IRL objective and implementation steps |
| 5 | U of Toronto CSC2621 — MDPs and Semi-MDPs (slides PDF) | https://www.pair.toronto.edu/csc2621-w20/assets/slides/lec10_mdpsandsemimdps.pdf | Slides | IRL and reward learning in formal lecture context |
| 6 | imitation library — AIRL/GAIL | https://imitation.readthedocs.io/en/latest/ | Docs | IRL implementations including adversarial methods |
| 7 | Ng & Russell — Algorithms for IRL (Stanford PDF) | https://ai.stanford.edu/~ang/papers/icml00-irl.pdf | Tutorial | Foundational IRL formulation (freely hosted) |
| 8 | Ziebart et al. — Maximum Entropy IRL (AAAI PDF) | https://cdn.aaai.org/AAAI/2008/AAAI08-227.pdf | Tutorial | MaxEnt IRL formulation (freely hosted) |
| 9 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Reward signal context in policy optimization |
| 10 | Besthub — Demystifying MaxEnt IRL | https://www.besthub.dev/articles/demystifying-maxent-inverse-reinforcement-learning-theory-algorithms-and-practical-implementation-7f40dabcba6f | Blog | Theory, algorithms, and implementation walkthrough |
