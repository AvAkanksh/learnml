# Category D — Trust-Region and Proximal Methods — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-TRP-001 — TRPO [P1]
Subtopics: KL-constrained update; natural gradient; conjugate gradient

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — TRPO | https://spinningup.openai.com/en/latest/algorithms/trpo.html | Tutorial | KL constraint, surrogate objective, conjugate gradient implementation |
| 2 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | TRPO derivation, natural gradient, KL penalty vs constraint |
| 3 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Natural gradient and trust region concepts |
| 4 | Berkeley CS285 — Lecture 9: Advanced Policy Gradients Part 1 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-9.pdf | Slides | TRPO derivation, conjugate gradient, line search |
| 5 | Berkeley CS285 — Lecture 10: Advanced Policy Gradients Part 2 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-10.pdf | Slides | Natural gradient and trust region methods continued |
| 6 | Stanford CS234 — Lecture 6: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture6pre.pdf | Slides | TRPO in advanced policy gradient context |
| 7 | PPO Explained (dilithjay) | https://dilithjay.pages.dev/blog/ppo | Blog | Builds on TRPO to explain PPO; good TRPO recap section |
| 8 | HuggingFace Deep RL Course — PPO (Unit 8) | https://huggingface.co/learn/deep-rl-course/unit8/introduction | Tutorial | TRPO context leading into PPO |
| 9 | Sutton & Barto — Ch 13 (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Policy gradient theory underpinning TRPO |
| 10 | Stable-Baselines3 — TRPO Documentation | https://sb3-contrib.readthedocs.io/en/master/modules/trpo.html | Docs | Practical TRPO usage and hyperparameters |

## CRL-TRP-002 — PPO [P0]
Subtopics: clipped surrogate objective; why clipping; KL penalty variant; implementation details (GAE, minibatch epochs)

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The 37 Implementation Details of PPO (ICLR Blog Track) | https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/ | Blog | Exhaustive implementation details: GAE, minibatch epochs, value clipping |
| 2 | Spinning Up — PPO | https://spinningup.openai.com/en/latest/algorithms/ppo.html | Tutorial | Clipped and KL penalty variants; clear pseudocode |
| 3 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | PPO derivation with clipping diagram |
| 4 | HuggingFace Deep RL Course — PPO (Unit 8) | https://huggingface.co/learn/deep-rl-course/unit8/introduction | Tutorial | Visual PPO tutorial with implementation |
| 5 | DJ Byrne — PPO Explained | https://djbyrne.github.io/2023/04/10/ppo-explained.html | Blog | Clipped objective walkthrough with GAE explanation |
| 6 | CleanRL — PPO Implementation | https://docs.cleanrl.dev/rl-algorithms/ppo/ | Tutorial | Single-file PPO with detailed code annotations |
| 7 | Berkeley CS285 — Lecture 9: Advanced Policy Gradients (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-9.pdf | Slides | PPO in context of trust region methods |
| 8 | Stanford CS234 — Lecture 7: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture7pre.pdf | Slides | PPO in advanced policy gradient slides |
| 9 | Outcomeschool — What is PPO and How Does It Work? | https://outcomeschool.com/blog/proximal-policy-optimization-ppo | Blog | Step-by-step PPO including RLHF application |
| 10 | Stable-Baselines3 — PPO Documentation | https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html | Docs | Practical PPO usage, hyperparameters, tips |
