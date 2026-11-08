# Category C — Reward Hacking and Policy Evaluation — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-RWD-001 — Reward Hacking in Modern RL [P1]
Subtopics: specification gaming; over-optimization; see LLM-PFO-009

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Reward Hacking in Reinforcement Learning | https://lilianweng.github.io/posts/2024-11-28-reward-hacking/ | Blog | Comprehensive survey covering RLHF over-optimization, length bias, sycophancy, and Gao et al. scaling laws |
| 2 | Specification Gaming — AI Safety Atlas (Chapter 6) | https://ai-safety-atlas.com/chapters/v1/specification-gaming/specification-gaming/ | Tutorial | Illustrated taxonomy of specification gaming with figures including CoastRunners boat racing example |
| 3 | Specification Gaming & Reward Hacking: When AI Finds Shortcuts | https://aisecurityandsafety.org/en/guides/specification-gaming-guide/ | Blog | Guide covering specification gaming taxonomy and satisfying literal objectives while violating intent |
| 4 | Reward Hacking & Goodhart's Law in AI | https://aisecurityandsafety.org/en/guides/reward-hacking/ | Blog | Connects reward hacking to Goodhart's Law with practical AI examples |
| 5 | Cameron Wolfe — Reward Models | https://cameronrwolfe.substack.com/p/reward-models | Blog | Reward model over-optimization and how proxy rewards diverge from true preferences |
| 6 | DeepMind — AlphaStar: Mastering StarCraft II | https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/ | Blog | Official DeepMind blog showing league training to avoid strategy collapse from reward exploitation |
| 7 | OpenAI o1 System Card | https://openai.com/index/openai-o1-system-card/ | Blog | Reports reward hacking behaviors in o1 reasoning including underspecified task exploitation |
| 8 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Covers practical reward hacking mitigations in LLM RL training |
| 9 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | Discusses reward hacking in chain-of-thought monitoring and reasoning models |

## MRL-RWD-002 — Off-Policy Evaluation [P2]
Subtopics: importance-sampling estimators; doubly robust; counterfactual evaluation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Offline Off-Policy Evaluation — APXML Course | https://apxml.com/courses/advanced-reinforcement-learning/chapter-7-offline-reinforcement-learning/offline-off-policy-evaluation | Tutorial | Tutorial covering importance sampling and doubly robust estimators for offline RL |
| 2 | IMPALA and V-trace — Tkukurin Blog | https://tkukurin.github.io/impala | Blog | Explains importance-weighted off-policy corrections with V-trace and Python code sketch |
| 3 | V-trace Off-Policy Correction — EduKate | https://edukatesg.com/2026/10/27/how-ai-works-v-trace-off-policy-correction-importance-ratios-clipped-traces-distributed-actors/ | Blog | Hand-computed two-step example of V-trace with failure modes and debugging |
| 4 | Doubly Robust OPE for RL — ICML 2016 Poster | https://nanjiang.cs.illinois.edu/files/dr_icml_poster.pdf | Slides | Poster explaining the DR estimator with unbiased property and variance analysis |
| 5 | Data-Efficient Off-Policy Policy Evaluation — Thomas & Brunskill | https://cs.stanford.edu/people/ebrun/pdfs/thomas2016data.pdf | Slides | Weighted doubly robust (WDR) estimator and MAGIC estimator from Stanford |
| 6 | NPFL122 Lecture 11 — V-trace and PopArt (University Slides) | https://ufal.mff.cuni.cz/~straka/courses/npfl122/1819/slides.pdf/npfl122-1819-11.pdf | Slides | University lecture slides covering IMPALA and V-trace off-policy correction |
| 7 | RL Seminar — IMPALA Tutorial Slides (Stanford) | https://rlseminar.github.io/static/files/SP19-Slides/RL_tutorials2019-0325huizhuo_final.pdf | Slides | Compact overview of importance-weighted actor-learner off-policy methods |
| 8 | Shanghai Jiao Tong — Offline RL Lecture Slides | https://wnzhang.net/teaching/sjtu-rl-2024/slides/11-offline-rl.pdf | Slides | University slides covering offline policy evaluation and importance sampling estimators |
