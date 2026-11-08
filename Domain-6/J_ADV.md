# Category J — Scalable Deep RL Infrastructure — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-ADV-001 — Modern Policy Optimization Refinements [P3]
Subtopics: IMPALA / V-trace; off-policy corrections at scale

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | IMPALA and V-trace Explained — Tkukurin Blog | https://tkukurin.github.io/impala | Blog | Walkthrough of IMPALA architecture with V-trace formula and Python code sketch |
| 2 | V-trace Off-Policy Correction — EduKate | https://edukatesg.com/2026/10/27/how-ai-works-v-trace-off-policy-correction-importance-ratios-clipped-traces-distributed-actors/ | Blog | Hand-computed two-step V-trace example with failure modes and debugging |
| 3 | IMPALA Slides — Pantić (University of Belgrade) | https://machinelearning.math.rs/Pantic-IMPALA.pdf | Slides | Actor→queue→learner flow with V-trace corrections for policy lag |
| 4 | NPFL122 Lecture 11 — V-trace and PopArt (University Slides) | https://ufal.mff.cuni.cz/~straka/courses/npfl122/1819/slides.pdf/npfl122-1819-11.pdf | Slides | University lecture slides covering IMPALA and V-trace off-policy correction |
| 5 | RL Seminar — IMPALA Tutorial Slides (Stanford) | https://rlseminar.github.io/static/files/SP19-Slides/RL_tutorials2019-0325huizhuo_final.pdf | Slides | Compact overview of importance-weighted actor-learner architecture |
| 6 | IMPALA Explained — BlueFisher Blog | https://bluefisher.github.io/2019/06/14/IMPALA-Scalable-Distributed-Deep-RL-with-Importance-Weighted-Actor-Learner-Architectures/ | Blog | Blog post explaining IMPALA's actor-learner architecture and V-trace mechanics |
| 7 | Yannic Kilcher — IMPALA Video | https://www.classcentral.com/course/youtube-impala-scalable-distributed-deep-rl-with-importance-weighted-actor-learner-architectures-162628 | Video | Video walkthrough of the IMPALA paper |
| 8 | IMPALA Paper — ICML 2018 Proceedings | https://proceedings.mlr.press/v80/espeholt18a/espeholt18a.pdf | Docs | Original paper with 250K frames/second throughput and V-trace derivation |

## MRL-ADV-002 — Distributed and Scalable Deep RL [P2]
Subtopics: actor-learner split; rollout/training throughput balance

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Accelerate Training in RL Using Distributed Architectures — Medium | https://medium.com/data-science/accelerate-training-in-rl-using-distributed-reinforcement-learning-architectures-b5a726b49826 | Blog | Overview of distributed RL architectures covering actor-learner split designs |
| 2 | IMPALA and V-trace Explained — Tkukurin Blog | https://tkukurin.github.io/impala | Blog | Actor-learner split where actors send trajectories and learner corrects with V-trace |
| 3 | IMPALA Slides — Pantić (University of Belgrade) | https://machinelearning.math.rs/Pantic-IMPALA.pdf | Slides | Architecture diagram of actors → queue → learner pipeline |
| 4 | RL Seminar — IMPALA Tutorial Slides (Stanford) | https://rlseminar.github.io/static/files/SP19-Slides/RL_tutorials2019-0325huizhuo_final.pdf | Slides | Compact distributed RL architecture overview |
| 5 | IMPALA Paper — ICML 2018 Proceedings | https://proceedings.mlr.press/v80/espeholt18a/espeholt18a.pdf | Docs | Scalable architecture achieving 250K frames/second with actor-learner separation |
| 6 | Population-Based Deep RL — Encyclopedia.pub | https://encyclopedia.pub/entry/44828 | Docs | Distributed PBT covering replacing underperformers and throughput scaling |
| 7 | HuggingFace Deep RL Course — PPO with CleanRL (Unit 8) | https://huggingface.co/learn/deep-rl-course/en/unit8/hands-on-cleanrl | Tutorial | Single-machine PPO implementation as baseline for scaling considerations |
| 8 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Scaling RL training for LLMs with throughput and efficiency considerations |
