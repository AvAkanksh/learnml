# Category G — Bandits and Exploration — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-BAN-001 — Multi-Armed Bandits [P0]
Subtopics: regret; exploration-exploitation trade-off; bandits vs A/B tests

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Multi-Armed Bandit Problem and Its Solutions | https://lilianweng.github.io/posts/2018-01-23-the-multi-armed-bandit-problem-and-its-solutions/ | Blog | Comprehensive: regret definition, exploration-exploitation, ε-greedy, UCB, Thompson sampling |
| 2 | Sutton & Barto — Ch 2: Multi-Armed Bandits (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical; k-armed testbed, regret, action-value methods |
| 3 | David Silver — Lecture 9: Exploration and Exploitation (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/XX.pdf | Slides | UCL slides on exploration-exploitation in bandits and MDPs |
| 4 | Stanford CS234 — Lecture 11: Fast Learning Part 1 (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture11pre.pdf | Slides | Bandits and exploration strategies with formal regret analysis |
| 5 | Stanford CS234 — Lecture 12: Fast Learning Part 2 (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture12pre.pdf | Slides | Advanced exploration including UCB bounds |
| 6 | GeeksforGeeks — Multi-Armed Bandit Problem in RL | https://www.geeksforgeeks.org/multi-armed-bandit-problem-in-reinforcement-learning/ | Tutorial | UCB and Thompson sampling with Python code |
| 7 | Berkeley CS285 — Lecture 19: Exploration (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-19.pdf | Slides | Bandits in context of deep RL exploration |
| 8 | erdogant — Thompson Sampling Tutorial | https://erdogant.github.io/thompson/pages/html/Tutorials.html | Tutorial | Python library for running and plotting MAB experiments |
| 9 | HuggingFace Deep RL Course — Unit 1 (exploration context) | https://huggingface.co/learn/deep-rl-course/unit1/introduction | Tutorial | Bandit problem context in RL course |
| 10 | UQ Pressbooks — Exploration-Exploitation | https://uq.pressbooks.pub/mastering-reinforcement-learning/ | Tutorial | Textbook-style MAB treatment |

## CRL-BAN-002 — Bandit Algorithms [P0]
Subtopics: epsilon-greedy; UCB; Thompson sampling; contextual bandits

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Multi-Armed Bandit Problem and Its Solutions | https://lilianweng.github.io/posts/2018-01-23-the-multi-armed-bandit-problem-and-its-solutions/ | Blog | ε-greedy, UCB1 derivation, Thompson sampling with Beta posteriors |
| 2 | Sutton & Barto — Ch 2 (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | ε-greedy, UCB, gradient bandits with 10-armed testbed |
| 3 | David Silver — Lecture 9: Exploration (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/XX.pdf | Slides | UCB, Thompson sampling, Bayesian bandits |
| 4 | Stanford CS234 — Lecture 11: Fast Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture11pre.pdf | Slides | Bandit algorithms with formal regret analysis |
| 5 | GeeksforGeeks — Multi-Armed Bandit Problem | https://www.geeksforgeeks.org/multi-armed-bandit-problem-in-reinforcement-learning/ | Tutorial | ε-greedy, UCB, Thompson sampling with implementation |
| 6 | erdogant — Thompson Sampling Tutorial | https://erdogant.github.io/thompson/pages/html/Tutorials.html | Tutorial | Interactive Thompson sampling with plots |
| 7 | Tor Lattimore — Bandit Algorithms Book (free PDF) | https://tor-lattimore.com/downloads/book/book.pdf | Tutorial | Comprehensive free textbook on bandits including contextual bandits |
| 8 | Berkeley CS285 — Lecture 19: Exploration (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-19.pdf | Slides | Contextual bandits in deep RL context |
| 9 | Berkeley CS285 — Lecture 23: Advanced Exploration (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-23.pdf | Slides | Advanced exploration strategies |
| 10 | HuggingFace Deep RL Course — Unit 1 | https://huggingface.co/learn/deep-rl-course/unit1/introduction | Tutorial | Bandit algorithms overview |

## CRL-BAN-003 — Exploration Strategies in Deep RL [P2]
Subtopics: entropy bonus; curiosity / intrinsic motivation; optimism

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Exploration Strategies in Deep RL | https://lilianweng.github.io/posts/2020-06-07-exploration-drl/ | Blog | Comprehensive: count-based, prediction-error, RND, curiosity, entropy bonus |
| 2 | David Silver — Lecture 9: Exploration (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/XX.pdf | Slides | Optimism in the face of uncertainty; UCB-style exploration |
| 3 | Berkeley CS285 — Lecture 19: Exploration (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-19.pdf | Slides | Curiosity, RND, count-based exploration |
| 4 | Berkeley CS285 — Lecture 23: Advanced Exploration (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-23.pdf | Slides | Advanced exploration strategies in deep RL |
| 5 | Alex Irpan — Deep RL Doesn't Work Yet | https://www.alexirpan.com/2018/02/14/rl-hard.html | Blog | Exploration challenges in practice; sparse reward problems |
| 6 | Stanford CS234 — Lecture 13: Fast Learning Part 3 (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture13pre.pdf | Slides | Deep exploration strategies |
| 7 | engineered.at — Curiosity: Some Intuition | https://engineered.at/articles/curiosity-some-intuition | Blog | RND and the Noisy TV problem explained |
| 8 | OpenAI Blog — Emergent Complexity via Multi-Agent Competition | https://openai.com/index/competitive-self-play/ | Blog | Self-play as implicit exploration |
| 9 | Spinning Up — RL Intro Part 2 | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | Exploration basics in RL context |
| 10 | Sutton & Barto — Ch 2.7: UCB (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Optimism-based exploration foundation |
