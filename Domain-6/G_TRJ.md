# Category G — Decision Transformers and Trajectory Modeling — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-TRJ-001 — Decision Transformers [P1]
Subtopics: RL as sequence modeling; return-to-go conditioning; limits vs value-based offline RL

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | HuggingFace Deep RL Course — Decision Transformers | https://huggingface.co/learn/deep-rl-course/en/unitbonus3/decision-transformers | Tutorial | Course unit explaining Decision Transformer as conditional sequence modeling with GPT-style architecture |
| 2 | Train Your First Decision Transformer — HuggingFace Blog | https://huggingface.co/blog/train-decision-transformers | Tutorial | Hands-on tutorial training DT from scratch with HF Trainer on half-cheetah environment |
| 3 | BAIR Blog — Sequence Modeling Solutions for RL Problems | https://bair.berkeley.edu/blog/2021/11/19/trajectory-transformer/ | Blog | Berkeley AI Research blog covering trajectory transformers and beam search planning for offline RL |
| 4 | Decision Transformer: RL via Sequence Modeling — Paper Guide | https://medium.com/@javiersanchezmoreno2/decision-transformer-reinforcement-learning-via-sequence-modeling-a-paper-guide-3d63f4e96a5b | Blog | Paper walkthrough covering return-to-go conditioning and autoregressive action prediction |
| 5 | Decision Transformer Seminar Review (TU Darmstadt) | https://www.ias.informatik.tu-darmstadt.de/uploads/Teaching/HumanoidRoboticsSeminar/HR_Report_21_22_Timo_Imhof_Decision_Transformer.pdf | Slides | Academic walkthrough of DT architecture and trajectory representation with diagrams |
| 6 | Stanford CS25 — Decision Transformer Lecture | https://www.youtube.com/watch?v=w4Bw8WYL8Ps | Video | Stanford lecture on Decision Transformer covering RL via sequence modeling |
| 7 | Berkeley CS285 — RL with Sequence Models (Fall 2023, Lecture 21 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse-fa23/deeprlcourse-fa23/static/slides/lec-21.pdf | Slides | University slides on sequence modeling for RL including decision transformers |
| 8 | HuggingFace Blog — Introducing Decision Transformers | https://github.com/huggingface/blog/blob/main/decision-transformers.md | Blog | Introductory blog covering return-to-go, state, action tokens in GPT-2 model |

## MRL-TRJ-002 — Trajectory Transformer Models [P3]
Subtopics: autoregressive state-action-reward modeling; beam-search planning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | BAIR Blog — Sequence Modeling Solutions for RL Problems | https://bair.berkeley.edu/blog/2021/11/19/trajectory-transformer/ | Blog | BAIR blog on trajectory transformers with beam search using rewards instead of log-probs |
| 2 | Trajectory Transformer Project Page | https://trajectory-transformer.github.io/ | Docs | Project page covering offline RL as one big sequence modeling problem with beam search |
| 3 | Decision Transformer Seminar Review (TU Darmstadt) | https://www.ias.informatik.tu-darmstadt.de/uploads/Teaching/HumanoidRoboticsSeminar/HR_Report_21_22_Timo_Imhof_Decision_Transformer.pdf | Slides | Academic comparison of DT (model-free) vs Trajectory Transformer (model-based) approaches |
| 4 | HuggingFace Deep RL Course — Decision Transformers | https://huggingface.co/learn/deep-rl-course/en/unitbonus3/decision-transformers | Tutorial | Context for trajectory-based sequence modeling vs return-conditioned approaches |
| 5 | Berkeley CS285 — RL with Sequence Models (Fall 2023, Lecture 21 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse-fa23/deeprlcourse-fa23/static/slides/lec-21.pdf | Slides | University slides covering both return-conditioned and trajectory-based offline RL methods |
| 6 | Train Your First Decision Transformer — HuggingFace Blog | https://huggingface.co/blog/train-decision-transformers | Tutorial | Practical sequence modeling for offline RL as foundation for trajectory approaches |
