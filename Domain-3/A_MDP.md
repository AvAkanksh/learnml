# Category A — MDP Foundations — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-MDP-001 — Markov Decision Processes [P0]
Subtopics: states, actions, rewards, transitions; Markov property; episodic vs continuing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — Key Concepts in RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | MDP 5-tuple, states/observations, action spaces, trajectories, return formulations |
| 2 | Lilian Weng — A (Long) Peek into Reinforcement Learning | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Illustrated walkthrough of MDPs, Markov property, reward signals |
| 3 | David Silver — Lecture 2: MDP (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MDP.pdf | Slides | UCL slides; formal MDP definition, Markov property, episodic vs continuing |
| 4 | HuggingFace Deep RL Course — Unit 1: Introduction to RL | https://huggingface.co/learn/deep-rl-course/unit1/introduction | Tutorial | Interactive course; states, actions, rewards, policy, discount factor with visuals |
| 5 | Sutton & Barto — Ch 3: Finite MDPs (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical textbook; formal MDP treatment with gridworld examples (pages 47–70) |
| 6 | d2l.ai — 17.1 Markov Decision Process (MDP) | https://d2l.ai/chapter_reinforcement-learning/mdp.html | Tutorial | Definition of MDP, return, discount factor, Markov assumption with code |
| 7 | Stanford CS234 — Lecture 1: Introduction to RL (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture1pre.pdf | Slides | Emma Brunskill's slides covering MDP fundamentals |
| 8 | Berkeley CS285 — Lecture 4: RL Basics (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-4.pdf | Slides | Sergey Levine's slides introducing the MDP framework |
| 9 | Thomas Simonini — An Introduction to RL (freeCodeCamp) | https://www.freecodecamp.org/news/an-introduction-to-reinforcement-learning-4339519de419/ | Blog | Visual, beginner-friendly walkthrough of MDP components and the RL loop |
| 10 | UQ Pressbooks — Mastering RL: Markov Decision Processes | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/markov-decision-processes/ | Tutorial | Online textbook chapter with GridWorld illustrations and MDP formalism |

## CRL-MDP-002 — Bellman Equations [P0]
Subtopics: expectation vs optimality equations; derivation; contraction intuition

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | David Silver — Lecture 2: MDP (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MDP.pdf | Slides | Backup diagrams for Bellman expectation and optimality equations |
| 2 | Lilian Weng — A (Long) Peek into Reinforcement Learning | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Derives both Bellman expectation and optimality equations clearly |
| 3 | Spinning Up — Key Concepts in RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | V*, Q* Bellman optimality equations; advantage function |
| 4 | HuggingFace Deep RL Course — Bellman Equation | https://huggingface.co/learn/deep-rl-course/unit2/bellman-equation | Tutorial | Interactive visual explanation of the recursive value relationship |
| 5 | Sutton & Barto — Ch 3.5–3.8 (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical derivation with gridworld illustrations; contraction in Ch 4 |
| 6 | Stanford CS234 — Lecture 2: Tabular MDP Planning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture2pre.pdf | Slides | Bellman equations and planning with formal proofs |
| 7 | d2l.ai — 17.2 Value Iteration | https://d2l.ai/chapter_reinforcement-learning/value-iter.html | Tutorial | Value function, Bellman optimality, dynamic programming principle with code |
| 8 | Berkeley CS285 — Lecture 4: RL Basics (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-4.pdf | Slides | Bellman backup operators and contraction intuition |
| 9 | UQ Pressbooks — Bellman Equations | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/bellman-equations/ | Tutorial | Step-by-step derivation and worked examples |
| 10 | Covered in Chocolate — David Silver RL Notes | https://coveredinchocolate.github.io/RLlecture/index.html | Blog | Annotated notes on Silver's MDP lecture with Bellman focus |

## CRL-MDP-003 — Value Functions [P0]
Subtopics: V vs Q; advantage function; relationship via Bellman

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Spinning Up — Key Concepts in RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | Defines V^π, Q^π, V*, Q*, and advantage A^π = Q^π − V^π |
| 2 | HuggingFace Deep RL Course — Two types of value-based methods | https://huggingface.co/learn/deep-rl-course/unit2/two-types-value-based | Tutorial | Visual comparison of state-value vs action-value functions |
| 3 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | V, Q, advantage with mathematical notation and intuitive explanations |
| 4 | David Silver — Lecture 2: MDP (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MDP.pdf | Slides | Backup diagrams showing V and Q relationships |
| 5 | Sutton & Barto — Ch 3: Value Functions (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Formal definitions; relationship between V and Q via policy |
| 6 | d2l.ai — 17.2 Value Iteration (Value Function section) | https://d2l.ai/chapter_reinforcement-learning/value-iter.html#value-function | Tutorial | Value function and action-value function definitions with code |
| 7 | Stanford CS234 — Lecture 2: Tabular MDP Planning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture2pre.pdf | Slides | V, Q, and advantage functions in formal lecture slides |
| 8 | Berkeley CS285 — Lecture 6: Actor Critic (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-6.pdf | Slides | Value function taxonomy and advantage estimation |
| 9 | Thomas Simonini — Intro to Deep RL (freeCodeCamp) | https://www.freecodecamp.org/news/an-introduction-to-reinforcement-learning-4339519de419/ | Blog | Illustrated state-value and action-value concepts |
| 10 | UQ Pressbooks — Bellman Equations (Value Functions section) | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/bellman-equations/ | Tutorial | Textbook-style treatment with examples |

## CRL-MDP-004 — Discounting and Reward Shaping [P1]
Subtopics: role of gamma; potential-based shaping; sparse vs dense rewards

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | HuggingFace Deep RL Course — Rewards and Discounting | https://huggingface.co/learn/deep-rl-course/unit1/rewards-and-discounting | Tutorial | Visual explanation of discount factor and its behavioral effects |
| 2 | UQ Pressbooks — Reward Shaping | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/reward-shaping/ | Tutorial | GridWorld example with Manhattan-distance potentials; potential-based guarantees |
| 3 | U of Toronto CSC2542 — Reward Shaping Lecture (PDF) | https://teach.cs.toronto.edu/~csc2542h/fall/material/csc2542f16_reward_shaping.pdf | Slides | Formal proof: γΦ(s')−Φ(s) preserves optimal policies |
| 4 | Sutton & Barto — Ch 3.4: Discounting (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical treatment of gamma and its mathematical properties |
| 5 | David Silver — Lecture 2: MDP (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MDP.pdf | Slides | Why discount, gamma values, and mathematical properties |
| 6 | Alex Irpan — Deep RL Doesn't Work Yet | https://www.alexirpan.com/2018/02/14/rl-hard.html | Blog | Reward design challenges, sparse rewards, and shaping pitfalls |
| 7 | Spinning Up — Key Concepts in RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | Finite-horizon vs infinite-horizon discounted return |
| 8 | OpenAI Blog — Faulty Reward Functions in the Wild | https://openai.com/index/faulty-reward-functions-in-the-wild/ | Blog | Real examples of reward hacking and misspecified rewards |
| 9 | Stanford CS234 — Lecture 15: Rewards in RL (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture15pre.pdf | Slides | Reward shaping theory and reward design challenges |
| 10 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Discusses gamma, discounted returns, and reward signal design |
