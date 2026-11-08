# Category B — Temporal-Difference and Monte Carlo Learning — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CRL-TD-001 — Monte Carlo Policy Evaluation [P1]
Subtopics: first-visit / every-visit; high variance; no bootstrapping

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sutton & Barto — Ch 5: Monte Carlo Methods (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical treatment; first-visit vs every-visit, blackjack example |
| 2 | David Silver — Lecture 4: Model-Free Prediction (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MC-TD.pdf | Slides | MC vs TD comparison with backup diagrams |
| 3 | HuggingFace Deep RL Course — MC vs TD Learning | https://huggingface.co/learn/deep-rl-course/unit2/mc-vs-td | Tutorial | Visual walkthrough of MC learning with numeric update example |
| 4 | Lilian Weng — A (Long) Peek into Reinforcement Learning | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | MC methods section with clear notation |
| 5 | Stanford CS234 — Lecture 3: Tabular RL Policy Evaluation (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture3pre.pdf | Slides | MC evaluation with worked examples |
| 6 | Edinburgh RL Course — Monte Carlo Methods (lecture PDF) | https://opencourse.inf.ed.ac.uk/sites/default/files/https/opencourse.inf.ed.ac.uk/rl/2024/rl5montecarlomethods.pdf | Slides | Clear slides with first-visit vs every-visit comparison |
| 7 | Berkeley CS285 — Lecture 4: RL Basics (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-4.pdf | Slides | MC estimation in the context of deep RL |
| 8 | Wikiversity — MC Policy Evaluation | https://en.wikiversity.org/wiki/Reinforcement_Learning/Monte_Carlo_Policy_Evaluation | Tutorial | First-visit unbiased vs every-visit biased but consistent; MSE comparison |
| 9 | Spinning Up — Intro to RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | Brief coverage of episodic return estimation |
| 10 | Denny Britz — RL Repository (MC) | https://github.com/dennybritz/reinforcement-learning/tree/master/MC | Tutorial | Monte Carlo prediction and control Jupyter notebooks |

## CRL-TD-002 — Temporal-Difference Learning [P0]
Subtopics: TD(0); TD error; bootstrapping vs MC; bias-variance

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | David Silver — Lecture 4: Model-Free Prediction (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MC-TD.pdf | Slides | TD(0) update rule, TD error δ, MC vs TD comparison with diagrams |
| 2 | Sutton & Barto — Ch 6: Temporal-Difference Learning (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical; TD(0), random walk example, bias-variance discussion |
| 3 | HuggingFace Deep RL Course — MC vs TD | https://huggingface.co/learn/deep-rl-course/unit2/mc-vs-td | Tutorial | Visual side-by-side: MC waits for episode end, TD learns every step |
| 4 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Clear TD(0) explanation with bias-variance tradeoff |
| 5 | Stanford CS234 — Lecture 3: Tabular RL Policy Evaluation (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture3pre.pdf | Slides | TD learning, convergence, bootstrapping comparison |
| 6 | Berkeley CS285 — Lecture 7: Value-Based RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-7.pdf | Slides | TD learning in value-based methods lecture |
| 7 | d2l.ai — 17.3 Q-Learning (TD foundations) | https://d2l.ai/chapter_reinforcement-learning/qlearning.html | Tutorial | TD-based Q-learning with code implementation |
| 8 | Spinning Up — Intro to RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | Brief TD coverage in context of value learning |
| 9 | Denny Britz — RL Repository (TD) | https://github.com/dennybritz/reinforcement-learning/tree/master/TD | Tutorial | TD prediction and control Jupyter notebooks |
| 10 | UQ Pressbooks — Temporal-Difference Learning | https://uq.pressbooks.pub/mastering-reinforcement-learning/ | Tutorial | Textbook-style TD(0) walkthrough |

## CRL-TD-003 — SARSA [P0]
Subtopics: on-policy TD control; SARSA vs Q-learning (cliff-walking example)

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sutton & Barto — Ch 6.4: SARSA (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical; SARSA update rule, cliff-walking comparison with Q-learning |
| 2 | David Silver — Lecture 5: Model-Free Control (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/control.pdf | Slides | SARSA as on-policy TD control; cliff-walking grid diagram |
| 3 | HuggingFace Deep RL Course — Q-Learning Introduction | https://huggingface.co/learn/deep-rl-course/unit2/introduction | Tutorial | Covers SARSA in context of value-based methods |
| 4 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | SARSA section with on-policy vs off-policy comparison |
| 5 | Stanford CS234 — Lecture 4: Q-Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture4pre.pdf | Slides | SARSA and Q-learning comparison in lecture slides |
| 6 | Berkeley CS285 — Lecture 7: Value-Based RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-7.pdf | Slides | SARSA in context of TD control methods |
| 7 | GeeksforGeeks — SARSA Reinforcement Learning | https://www.geeksforgeeks.org/sarsa-reinforcement-learning/ | Tutorial | Step-by-step walkthrough with Python code |
| 8 | Denny Britz — RL Repository (TD) | https://github.com/dennybritz/reinforcement-learning/tree/master/TD | Tutorial | SARSA implementation notebooks |
| 9 | Spinning Up — Intro to RL | https://spinningup.openai.com/en/latest/spinningup/rl_intro.html | Tutorial | Brief coverage of on-policy learning |
| 10 | d2l.ai — 17.3 Q-Learning | https://d2l.ai/chapter_reinforcement-learning/qlearning.html | Tutorial | Q-learning implementation (contrast with SARSA) |

## CRL-TD-004 — Q-Learning [P0]
Subtopics: off-policy TD control; update rule; convergence conditions; max-operator overestimation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sutton & Barto — Ch 6.5: Q-Learning (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical; off-policy TD control, convergence proof reference |
| 2 | HuggingFace Blog — An Introduction to Q-Learning Part 1 | https://huggingface.co/blog/deep-rl-q-part1 | Blog | Illustrated walkthrough of Q-learning with FrozenLake |
| 3 | HuggingFace Blog — Q-Learning Part 2 | https://huggingface.co/blog/deep-rl-q-part2 | Blog | Implementation and training details with code |
| 4 | David Silver — Lecture 5: Model-Free Control (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/control.pdf | Slides | Q-learning update rule, off-policy property, cliff-walking |
| 5 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Q-learning with max-operator overestimation discussion |
| 6 | d2l.ai — 17.3 Q-Learning | https://d2l.ai/chapter_reinforcement-learning/qlearning.html | Tutorial | Full Q-learning algorithm with implementation and self-correcting property |
| 7 | Stanford CS234 — Lecture 4: Q-Learning (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture4pre.pdf | Slides | Q-learning convergence conditions in slides |
| 8 | Berkeley CS285 — Lecture 7: Value-Based RL (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-7.pdf | Slides | Q-learning and overestimation bias |
| 9 | Spinning Up — Intro to RL Part 2 | https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html | Tutorial | Q-function and optimal Q-function |
| 10 | GeeksforGeeks — Q-Learning in Python | https://www.geeksforgeeks.org/q-learning-in-python/ | Tutorial | Step-by-step implementation tutorial |

## CRL-TD-005 — Eligibility Traces and TD(λ) [P2]
Subtopics: forward/backward views; credit assignment

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sutton & Barto — Ch 12: Eligibility Traces (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Canonical; λ-return, forward/backward views, Sarsa(λ), true online TD(λ) |
| 2 | David Silver — Lecture 4: Model-Free Prediction (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/MC-TD.pdf | Slides | TD(λ) as bridge between MC and TD(0) |
| 3 | Edinburgh RL Course — Eligibility Traces (slides PDF) | https://www.inf.ed.ac.uk/teaching/courses/rl/slides18/RL_L11_EligibilityTraces.pdf | Slides | Forward and backward views, Sarsa(λ) and Q(λ) control |
| 4 | DTU Course — Lecture 12: Eligibility Traces (handout PDF) | https://www2.imm.dtu.dk/courses/02465/_assets/Lecture_12-handout.pdf | Slides | TD(λ) as interpolation; tabular update with decay |
| 5 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Brief TD(λ) coverage |
| 6 | Stanford CS234 — Lecture 3: Policy Evaluation (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture3pre.pdf | Slides | Eligibility traces in evaluation context |
| 7 | McGill COMP579 — Off-Policy Lecture (PDF) | https://cs.mcgill.ca/~comp579/W25/Lectures/19-off-policy.pdf | Slides | Traces in the context of off-policy methods |
| 8 | KindaTechnical — TD(λ) Lesson | https://kindatechnical.com/reinforcement-learning/lesson-29-td.html | Tutorial | Beginner-friendly trace explanation |
| 9 | Medium — Key Takeaways: Eligibility Traces (Sutton & Barto) | https://medium.com/mitb-for-all/key-takeaways-5-eligibility-traces-sutton-and-barto-rl-textbook-6def3eb4bfd5 | Blog | Readable summary of forward-view λ-return, backward-view TD(λ) |
| 10 | Marmara Univ — RL Lecture: Week 7 (slides PDF) | https://mimoza.marmara.edu.tr/~borahan.tumer/RL-CSE804/material/lecture_slides/week7.pdf | Slides | Compact slides on traces and TD(λ) |

## CRL-TD-006 — Off-Policy Learning and Importance Sampling [P1]
Subtopics: behavior vs target policy; ordinary vs weighted IS; variance blow-up

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sutton & Barto — Ch 5.5–5.9: Off-Policy MC (online PDF) | http://incompleteideas.net/book/RLbook2020.pdf | Tutorial | Ordinary vs weighted IS, per-decision IS, variance analysis |
| 2 | David Silver — Lecture 5: Model-Free Control (slides PDF) | https://www.davidsilver.uk/wp-content/uploads/2020/10/control.pdf | Slides | Off-policy learning with importance sampling correction |
| 3 | McGill COMP579 — Off-Policy Lecture (PDF) | https://cs.mcgill.ca/~comp579/W25/Lectures/19-off-policy.pdf | Slides | IS ratio, trajectory reweighting, variance blow-up |
| 4 | Stanford CS234 — Lecture 3: Policy Evaluation (slides PDF) | https://web.stanford.edu/class/archive/cs/cs234/cs234.1246/slides/lecture3pre.pdf | Slides | Importance sampling for policy evaluation |
| 5 | U of Alberta — Off-Policy Prediction (slides PDF) | https://webdocs.cs.ualberta.ca/~machado/cmput655/f23/slides/lecture_5_12.pdf | Slides | Off-policy prediction and control with IS |
| 6 | UW-Madison CS839 — Monte Carlo II (lecture PDF) | https://pages.cs.wisc.edu/~jphanna/teaching/25fall_cs839/documents/lec7-monte-carlo-II.pdf | Slides | Distribution shift, IS reweighting derivation |
| 7 | Lilian Weng — A (Long) Peek into RL | https://lilianweng.github.io/posts/2018-02-19-rl-overview/ | Blog | Off-policy methods overview |
| 8 | Hughie Mak — Importance Sampling Blog | https://hughiemak.github.io/2021/01/08/importance-sampling.html | Blog | Worked numerical example of IS for off-policy learning |
| 9 | McGill COMP579 2022 — Off-Policy (PDF) | https://www.cs.mcgill.ca/~dprecup/courses/Winter2022/Lectures/12-offpolicy-2022.pdf | Slides | Normalized vs unnormalized IS estimators |
| 10 | Berkeley CS285 — Lecture 17: Offline RL Part 1 (slides PDF) | https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-17.pdf | Slides | IS in the context of offline/off-policy deep RL |
