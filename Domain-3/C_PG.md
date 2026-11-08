# Category C — Policy Gradient Methods — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-PG-001 — Policy Gradient Theorem [P0]
Subtopics: log-derivative trick; score-function estimator; derivation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | Detailed derivation of PG theorem; log-derivative trick; covers REINFORCE through SAC |
| 2 | Spinning Up — Vanilla Policy Gradient | https://spinningup.openai.com/en/latest/algorithms/vpg.html | Tutorial | VPG derivation, score function estimator, advantage-based gradient |
| 3 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | Score function, PG theorem derivation, baseline subtraction |
| 4 | Sutton & Barto — Ch 13: Policy Gradient Methods (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical PG theorem proof; eligibility vector formulation |
| 5 | Berkeley CS285 — Lecture 5: Policy Gradients (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-5.pdf | Slides | Sergey Levine's PG derivation slides with clear math |
| 6 | Stanford CS234 — Lecture 5: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture5pre.pdf | Slides | PG theorem derivation in formal lecture slides |
| 7 | A Tutorial on the REINFORCE Algorithm (McNeela) | https://mcneela.github.io/post/a-tutorial-on-the-reinforce-algorithm | Blog | Step-by-step derivation of the log-derivative trick |
| 8 | HuggingFace Deep RL Course — Policy Gradient (Unit 4) | https://huggingface.co/learn/deep-rl-course/unit4/introduction | Tutorial | Visual introduction to policy-based methods |
| 9 | Observable — Policy Gradients: A Visual Tutorial | https://observablehq.com/collection/@farzadab/policy-gradients-a-visual-tutorial | Interactive | Interactive visual walkthrough of policy gradients |
| 10 | Spinning Up — Intro to RL Part 3 | https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html | Tutorial | Deriving the simplest policy gradient with full math |

## CRL-PG-002 — REINFORCE [P0]
Subtopics: MC policy gradient; baselines for variance reduction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Policy Gradient Algorithms | https://lilianweng.github.io/posts/2018-04-08-policy-gradient/ | Blog | REINFORCE as MC policy gradient; baseline subtraction for variance |
| 2 | A Tutorial on the REINFORCE Algorithm (McNeela) | https://mcneela.github.io/post/a-tutorial-on-the-reinforce-algorithm | Blog | Step-by-step walkthrough; sampling trajectories, computing returns |
| 3 | Spinning Up — VPG | https://spinningup.openai.com/en/latest/algorithms/vpg.html | Tutorial | REINFORCE with baseline; reward-to-go formulation |
| 4 | David Silver — Lecture 7: Policy Gradient (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/pg.pdf | Slides | REINFORCE pseudocode and baseline discussion |
| 5 | Sutton & Barto — Ch 13.3: REINFORCE (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical REINFORCE with baseline pseudocode |
| 6 | HuggingFace Deep RL Course — Policy Gradient (Unit 4) | https://huggingface.co/learn/deep-rl-course/unit4/introduction | Tutorial | REINFORCE implementation walkthrough |
| 7 | Berkeley CS285 — Lecture 5: Policy Gradients (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-5.pdf | Slides | REINFORCE and variance reduction in Levine's slides |
| 8 | Stanford CS234 — Lecture 5: Policy Gradient (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture5pre.pdf | Slides | REINFORCE derivation and baselines |
| 9 | REINFORCE: A Quick Introduction with Code (dilithjay) | https://dilithjay.pages.dev/blog/reinforce-a-quick-introduction-with-code | Blog | Concise overview with code; notes high variance and slow convergence |
| 10 | Analytics Vidhya — REINFORCE Algorithm | https://www.analyticsvidhya.com/blog/2020/11/reinforce-algorithm-taking-baby-steps-in-reinforcement-learning/ | Blog | Beginner-friendly REINFORCE tutorial |
