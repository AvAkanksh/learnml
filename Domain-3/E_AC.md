# Category E — Actor-Critic Methods — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-AC-001 — Actor-Critic Fundamentals [P0]
Subtopics: combining policy and value learning; advantage estimation; critic bias

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | Actor-critic framework; advantage estimation; A2C, A3C, DDPG derivations |
| 2 | Spinning Up — VPG (actor-critic variant) | https://spinningup.openai.com/en/latest/algorithms/vpg.html | Tutorial | VPG with learned baseline = actor-critic; advantage-based updates |
| 3 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Actor-critic architecture slides; bias from function approximation |
| 4 | Berkeley CS285 — Lecture 6: Actor Critic (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-6.pdf | Slides | Actor-critic algorithms; advantage estimation; critic bias discussion |
| 5 | Thomas Simonini — Advantage Actor-Critic (freeCodeCamp) | https://www.freecodecamp.org/news/an-intro-to-advantage-actor-critic-methods-lets-play-sonic-the-hedgehog-86d6240171d/ | Blog | Visual walkthrough with Sonic example; A3C stale parameters issue |
| 6 | Sutton & Barto — Ch 13.5: Actor-Critic (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical treatment of actor-critic with TD error |
| 7 | HuggingFace Deep RL Course — Actor-Critic (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | Visual actor-critic tutorial |
| 8 | Stanford CS234 — Lecture 6: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture6pre.pdf | Slides | Actor-critic in lecture slides |
| 9 | Omegastick — Easy A2C | https://omegastick.github.io/2018/06/25/easy-a2c.html | Blog | Simple intuitive A2C explanation for newcomers |
| 10 | d2l.ai — 17.2 Value Iteration (value function foundations) | https://d2l.ai/chapter_reinforcement-learning/value-iter.html | Tutorial | Value function foundations underlying the critic |

## CRL-AC-002 — A2C [P1]
Subtopics: synchronous advantage actor-critic

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Thomas Simonini — Advantage Actor-Critic (freeCodeCamp) | https://www.freecodecamp.org/news/an-intro-to-advantage-actor-critic-methods-lets-play-sonic-the-hedgehog-86d6240171d/ | Blog | A2C as synchronous A3C; detailed walkthrough |
| 2 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | A2C section: synchronous parallel environments |
| 3 | Omegastick — Easy A2C | https://omegastick.github.io/2018/06/25/easy-a2c.html | Blog | Simple A2C implementation tutorial |
| 4 | HuggingFace Deep RL Course — Actor-Critic (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | A2C with visual explanations |
| 5 | Stable-Baselines3 — A2C Documentation | https://stable-baselines3.readthedocs.io/en/master/modules/a2c.html | Docs | Practical A2C usage and hyperparameters |
| 6 | CleanRL — A2C Implementation | https://docs.cleanrl.dev/rl-algorithms/a2c/ | Tutorial | Single-file annotated A2C code |
| 7 | Berkeley CS285 — Lecture 6: Actor Critic (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-6.pdf | Slides | A2C in the context of parallel environments |
| 8 | Stanford CS234 — Lecture 6: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture6pre.pdf | Slides | Actor-critic methods including A2C |
| 9 | Spinning Up — VPG | https://spinningup.openai.com/en/latest/algorithms/vpg.html | Tutorial | VPG as foundation for A2C |
| 10 | ElegantRL — A2C Documentation | https://elegantrl.readthedocs.io/en/latest/algorithms/a2c.html | Docs | A2C algorithm details and code |

## CRL-AC-003 — A3C [P2]
Subtopics: asynchronous parallel workers

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Thomas Simonini — Advantage Actor-Critic (freeCodeCamp) | https://www.freecodecamp.org/news/an-intro-to-advantage-actor-critic-methods-lets-play-sonic-the-hedgehog-86d6240171d/ | Blog | A3C async workers acting on stale parameters; illustrated |
| 2 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | A3C: parallel workers, global network, gradient aggregation |
| 3 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Asynchronous methods context |
| 4 | HuggingFace Deep RL Course — Actor-Critic Methods (Unit 6) | https://huggingface.co/learn/deep-rl-course/unit6/introduction | Tutorial | A3C context in actor-critic unit |
| 5 | Berkeley CS285 — Lecture 6: Actor Critic (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-6.pdf | Slides | Asynchronous training approaches |
| 6 | Sutton & Barto — Ch 13 (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Parallel updates discussion |
| 7 | Buffalo CSE — Lecture 20: Actor-Critic Methods (PDF) | https://cse.buffalo.edu/~avereshc/rl_fall19/lecture_20_Actor_Critic_Methods.pdf | Slides | A3C in lecture slides |
| 8 | apxml — A2C/A3C Tutorial | https://apxml.com/courses/advanced-reinforcement-learning/chapter-3-advanced-policy-gradients-actor-critic/a2c-a3c | Tutorial | A3C architecture and update rules |
| 9 | Stable-Baselines3 Documentation | https://stable-baselines3.readthedocs.io/en/master/ | Docs | Why SB3 uses A2C not A3C; comparison |
| 10 | CleanRL Documentation | https://docs.cleanrl.dev/ | Docs | Single-file implementations for comparison |

## CRL-AC-004 — Generalized Advantage Estimation (GAE) [P1]
Subtopics: λ-weighted TD residuals; bias-variance knob; use in PPO / RLHF

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | From Return to Advantage: Full Derivation to GAE | https://xinli95.github.io/AI-101/main/post_training/ppo_advantage.html | Blog | Step-by-step derivation from REINFORCE to GAE; exponentially weighted TD residuals |
| 2 | The 37 Implementation Details of PPO (ICLR Blog Track) | https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/ | Blog | GAE implementation detail #5; λ=0.95 default; interaction with PPO |
| 3 | labml.ai — GAE Implementation | https://nn.labml.ai/rl/ppo/gae.html | Tutorial | PyTorch GAE code; δ_t = r_t + γV_{t+1} − V_t, A_t = δ_t + γλA_{t+1} |
| 4 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | GAE formula and its role in reducing variance |
| 5 | Spinning Up — VPG | https://spinningup.openai.com/en/latest/algorithms/vpg.html | Tutorial | GAE used as default advantage estimator |
| 6 | apxml — Generalized Advantage Estimation | https://www.apxml.com/courses/advanced-reinforcement-learning/chapter-3-advanced-policy-gradients-actor-critic/generalized-advantage-estimation | Tutorial | λ controls bias-variance; figure showing λ=0 (TD) to λ=1 (MC) |
| 7 | DJ Byrne — PPO Explained | https://djbyrne.github.io/2023/04/10/ppo-explained.html | Blog | GAE walkthrough in PPO context |
| 8 | CleanRL — PPO Implementation | https://docs.cleanrl.dev/rl-algorithms/ppo/ | Tutorial | GAE computation in annotated PPO code |
| 9 | Berkeley CS285 — Lecture 6: Actor Critic (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-6.pdf | Slides | GAE derivation in Levine's slides |
| 10 | Sutton & Barto — Ch 12: Eligibility Traces (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | λ-return that GAE generalizes |
