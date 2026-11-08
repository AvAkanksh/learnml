# Category G — Flow Matching and Few-Step Generation

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-FLW-001 — Flow Matching [P1]
Subtopics: velocity-field regression; simulation-free training; vs diffusion

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Flow Matching: A Visual Introduction | https://peterroelants.github.io/posts/flow_matching_intro/ | Blog | Peter Roelants; visual tutorial with plots of velocity fields and Euler integration paths |
| 2 | What Is Flow Matching? A Guide to Generative AI Models | https://www.datacamp.com/tutorial/what-is-flow-matching | Tutorial | DataCamp; beginner-friendly with PyTorch training loop, straight-line interpolation |
| 3 | The Architecture Behind Every SOTA Image Generator: DiT + Rectified Flow Explained | https://medium.com/@j.tech.reveil/the-architecture-behind-every-state-of-the-art-image-generator-dit-rectified-flow-explained-0c6ae1c1f0b4 | Blog | Covers flow matching in context of DiT and rectified flow |
| 4 | What are Diffusion Models? | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Weng's updated post covers flow-based perspectives |
| 5 | Hugging Face — Flow Matching Euler Scheduler | https://huggingface.co/docs/diffusers/api/schedulers/flow_match_euler_discrete | Docs | HF Diffusers implementation docs for flow matching |
| 6 | Papers With Code — Flow Matching | https://paperswithcode.com/method/flow-matching | Docs | Method summary with benchmarks |

## MCV-FLW-002 — Rectified Flow [P2]
Subtopics: straight paths; reflow; few-step sampling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | What Rectified Flow, Reflow and Distillation Are | https://medium.com/@ejrwls012/what-rectified-flow-reflow-and-distillation-are-22a7bd3bacb4 | Blog | Explains minimal-curvature transport, reflow iterations, and distillation for one-step generation |
| 2 | The Architecture Behind Every SOTA Image Generator: DiT + Rectified Flow Explained | https://medium.com/@j.tech.reveil/the-architecture-behind-every-state-of-the-art-image-generator-dit-rectified-flow-explained-0c6ae1c1f0b4 | Blog | Covers 2-RF model, reflow approaching optimal transport |
| 3 | Rectified Flow | https://theneuralbase.com/generative-ai-fundamentals/learn/intermediate/rectified-flow/ | Blog | Community explainer covering straight-path training |
| 4 | Flow Matching: A Visual Introduction | https://peterroelants.github.io/posts/flow_matching_intro/ | Blog | Visual foundations applicable to rectified flow |
| 5 | Hugging Face — Flow Matching Euler Scheduler | https://huggingface.co/docs/diffusers/api/schedulers/flow_match_euler_discrete | Docs | HF implementation used in rectified flow models |
| 6 | Papers With Code — Rectified Flow | https://paperswithcode.com/method/rectified-flow | Docs | Method summary with implementations |

## MCV-FLW-003 — Consistency Models [P2]
Subtopics: consistency distillation/training; one-step generation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Consistency Models: One-Step Image Generation | https://blog.paperspace.com/consistency-models/ | Tutorial | Paperspace; hands-on tutorial with codebase for training; covers CD and CT |
| 2 | Consistency Models: Fast, One-Step Alternatives | https://medium.com/@kdk199604/consistency-models-fast-one-step-alternatives-to-diffusion-models-8c2db2e646ab | Blog | Accessible overview; CD vs CT, converting diffusion teachers to fast generators |
| 3 | Consistency Models — Yang Song Slides (ICML 2023) | https://yang-song.net/assets/pdf/ICML2023/consistency.pdf | Slides | Official slides from the paper presentation at ICML |
| 4 | Training Consistency Models via Distillation | https://apxml.com/courses/advanced-diffusion-architectures/chapter-5-consistency-models/consistency-training-distillation | Tutorial | Course page; distillation setup with teacher-student framing |
| 5 | Consistency Models — Pramook Khungurn Notes | https://pkhungurn.github.io/notes/notes/ml/ddpm-consistency-model/ddpm-consistency-model.pdf | Slides | Math-oriented notes covering consistency distillation and training |
| 6 | Papers With Code — Consistency Models | https://paperswithcode.com/paper/consistency-models | Docs | Summary with benchmarks |
