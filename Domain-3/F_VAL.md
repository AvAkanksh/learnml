# Category F — Value-Based Deep RL — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-VAL-001 — Deep Q-Networks (DQN) [P0]
Subtopics: target networks; experience replay; why both stabilize training

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | HuggingFace Deep RL Course — Deep Q-Learning (Unit 3) | https://huggingface.co/learn/deep-rl-course/unit3/introduction | Tutorial | DQN with target networks and replay buffer — visual walkthrough |
| 2 | HuggingFace Deep RL Course — Deep Q-Algorithm | https://huggingface.co/learn/deep-rl-course/unit3/deep-q-algorithm | Tutorial | Training loop, experience replay, and fixed Q-targets for stability |
| 3 | Thomas Simonini — DQN Improvements (freeCodeCamp) | https://medium.freecodecamp.org/improvements-in-deep-q-learning-dueling-double-dqn-prioritized-experience-replay-and-fixed-58b130cc5682 | Blog | Fixed Q-targets, experience replay, Double/Dueling DQN, PER — illustrated |
| 4 | Spinning Up — Background: DQN | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | DQN as Q-learning + neural networks; target network motivation |
| 5 | David Silver — Lecture 6: Value Function Approximation (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/FA.pdf | Slides | Function approximation leading to DQN; stability issues |
| 6 | Berkeley CS285 — Lecture 7: Value-Based RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-7.pdf | Slides | DQN architecture and stabilization tricks |
| 7 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | Practical DQN tricks and implementation details |
| 8 | Robert Lange — A Primer on Deep Q-Learning | https://roberttlange.github.io/posts/2019/08/blog-post-5/ | Blog | DQN walkthrough with target networks and replay analysis |
| 9 | Stanford CS234 — Lecture 4: Q-Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture4pre.pdf | Slides | Q-learning foundations leading to DQN |
| 10 | CleanRL — DQN Implementation | https://docs.cleanrl.dev/rl-algorithms/dqn/ | Tutorial | Single-file annotated DQN with target networks |

## CRL-VAL-002 — Double DQN [P1]
Subtopics: overestimation-bias correction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Thomas Simonini — DQN Improvements (freeCodeCamp) | https://medium.freecodecamp.org/improvements-in-deep-q-learning-dueling-double-dqn-prioritized-experience-replay-and-fixed-58b130cc5682 | Blog | Double DQN: use online network to select, target to evaluate — fixes overestimation |
| 2 | HuggingFace Deep RL Course — Deep Q-Algorithm | https://huggingface.co/learn/deep-rl-course/unit3/deep-q-algorithm | Tutorial | Double DQN motivation and implementation |
| 3 | Robert Lange — A Primer on Deep Q-Learning | https://roberttlange.github.io/posts/2019/08/blog-post-5/ | Blog | Double DQN as overestimation fix |
| 4 | Parsa H.M. — DQN, Double DQN, Dueling DQN, Noisy DQN, PER | https://medium.com/@parsa_h_m/deep-reinforcement-learning-dqn-double-dqn-dueling-dqn-noisy-dqn-and-dqn-with-prioritized-551f621a9823 | Blog | All DQN variants in one post |
| 5 | David Silver — Lecture 6: Value Function Approximation (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/FA.pdf | Slides | Overestimation in Q-learning |
| 6 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | Double Q-learning in lecture slides |
| 7 | Spinning Up — Intro to RL Part 2 | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | Q-learning variants and overestimation |
| 8 | CodeGenes — Rainbow DQN PyTorch | https://www.codegenes.net/blog/rainbow-dqn-pytorch/ | Tutorial | Double DQN as Rainbow component; code |
| 9 | RPI RL Course — DQN Lecture (slides PDF) | https://www.cs.rpi.edu/~ivanor/rl/lectures/lec26a.pdf | Slides | Double/Dueling DQN lecture slides |
| 10 | Stanford CS234 — Lecture 4: Q-Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture4pre.pdf | Slides | Q-learning convergence and overestimation |

## CRL-VAL-003 — Dueling DQN [P2]
Subtopics: value/advantage decomposition

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Thomas Simonini — DQN Improvements (freeCodeCamp) | https://medium.freecodecamp.org/improvements-in-deep-q-learning-dueling-double-dqn-prioritized-experience-replay-and-fixed-58b130cc5682 | Blog | Dueling architecture: separate V and A streams; aggregation layer |
| 2 | Parsa H.M. — DQN Variants | https://medium.com/@parsa_h_m/deep-reinforcement-learning-dqn-double-dqn-dueling-dqn-noisy-dqn-and-dqn-with-prioritized-551f621a9823 | Blog | Dueling DQN with architecture diagram |
| 3 | CodeGenes — Rainbow DQN PyTorch | https://www.codegenes.net/blog/rainbow-dqn-pytorch/ | Tutorial | Dueling as Rainbow component; PyTorch code |
| 4 | Robert Lange — A Primer on Deep Q-Learning | https://roberttlange.github.io/posts/2019/08/blog-post-5/ | Blog | Dueling architecture explanation |
| 5 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | Value/advantage decomposition |
| 6 | HuggingFace Deep RL Course — Deep Q-Learning (Unit 3) | https://huggingface.co/learn/deep-rl-course/unit3/introduction | Tutorial | Dueling DQN discussion |
| 7 | RPI RL Course — DQN Variants Lecture (PDF) | https://www.cs.rpi.edu/~ivanor/rl/lectures/lec26a.pdf | Slides | Dueling DQN in lecture slides |
| 8 | Sherwin Chen — Rainbow Blog | https://xlnwel.github.io/blog/reinforcement%20learning/Rainbow | Blog | All Rainbow components including dueling |
| 9 | Spinning Up — RL Intro Part 2 | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | Q-function structure context |
| 10 | Stable-Baselines3 — DQN | https://stable-baselines3.readthedocs.io/en/master/modules/dqn.html | Docs | DQN variants in practice |

## CRL-VAL-004 — Replay Buffer Design [P1]
Subtopics: prioritized experience replay; buffer size effects

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Thomas Simonini — DQN Improvements (freeCodeCamp) | https://medium.freecodecamp.org/improvements-in-deep-q-learning-dueling-double-dqn-prioritized-experience-replay-and-fixed-58b130cc5682 | Blog | PER: proportional and rank-based priorities; greedy prioritization overfitting |
| 2 | HuggingFace Deep RL Course — Deep Q-Learning (Unit 3) | https://huggingface.co/learn/deep-rl-course/unit3/introduction | Tutorial | Experience replay motivation and design |
| 3 | Parsa H.M. — DQN with PER | https://medium.com/@parsa_h_m/deep-reinforcement-learning-dqn-double-dqn-dueling-dqn-noisy-dqn-and-dqn-with-prioritized-551f621a9823 | Blog | PER implementation details |
| 4 | CodeGenes — Rainbow DQN PyTorch | https://www.codegenes.net/blog/rainbow-dqn-pytorch/ | Tutorial | PER as Rainbow component with code |
| 5 | Spinning Up — RL Intro Part 2 | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | Replay buffer role in off-policy learning |
| 6 | Sutton & Barto — Ch 8.5: Experience Replay (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Experience replay in planning context |
| 7 | David Silver — Lecture 6: Value Function Approximation (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/FA.pdf | Slides | Experience replay for stability |
| 8 | Berkeley CS285 — Lecture 8: Q-learning in Practice (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-8.pdf | Slides | Replay buffer design in DQN slides |
| 9 | CleanRL — DQN Implementation | https://docs.cleanrl.dev/rl-algorithms/dqn/ | Tutorial | Replay buffer implementation details |
| 10 | Stable-Baselines3 — Replay Buffer | https://stable-baselines3.readthedocs.io/en/master/ | Docs | Practical replay buffer configurations |
