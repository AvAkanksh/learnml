# Category A — Diffusion Models

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-DIF-001 — Denoising Diffusion Probabilistic Models (DDPM) [P0]
Subtopics: forward noising; reverse process; noise-prediction (ε) objective; ELBO link

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | What are Diffusion Models? | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Lilian Weng's definitive post; derives forward/reverse, ELBO, ε-prediction with math and diagrams |
| 2 | The Annotated Diffusion Model | https://huggingface.co/blog/annotated-diffusion | Tutorial | Full PyTorch implementation walking through the math step by step |
| 3 | How Diffusion Models Work: The Math from Scratch | https://theaisummer.com/diffusion-models/ | Blog | AI Summer; visual explanations of forward/reverse process with full derivations |
| 4 | Generative Modeling by Estimating Gradients of the Data Distribution | https://yang-song.net/blog/2021/score/ | Blog | Yang Song's blog; connects DDPM to score matching, Langevin dynamics, and SDE framework |
| 5 | Introduction to Diffusion Models for Machine Learning | https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/ | Blog | AssemblyAI; accessible intro with clear diagrams covering forward/reverse process |
| 6 | Denoising Diffusion Probabilistic Models (DDPM) | https://nn.labml.ai/diffusion/ddpm/index.html | Tutorial | labml.ai annotated PyTorch implementation with inline derivations |
| 7 | d2l.ai — Denoising Diffusion Probabilistic Models | https://d2l.ai/chapter_generative-models/ddpm.html | Tutorial | Dive into Deep Learning textbook chapter with runnable code |
| 8 | The Illustrated Stable Diffusion | https://jalammar.github.io/illustrated-stable-diffusion/ | Blog | Jay Alammar; 30+ visuals explaining diffusion from basics through latent diffusion |
| 9 | Stanford CS231n — Generative Models (2024) | https://cs231n.stanford.edu/slides/2024/lecture_13.pdf | Slides | Stanford lecture slides covering diffusion models, GANs, and autoregressive models |
| 10 | Aman's AI Journal — Diffusion Models Primer | https://aman.ai/primers/ai/diffusion-models/ | Blog | Comprehensive primer covering DDPM fundamentals and variants |

## MCV-DIF-002 — DDIM [P1]
Subtopics: deterministic non-Markovian sampling; fewer steps

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | What are Diffusion Models? (DDIM section) | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Weng covers DDIM as a non-Markovian generalization with full derivation |
| 2 | Mastering DDIM: A Simple Guide to Faster AI Image Generation | https://learnopencv.com/understanding-ddim/ | Tutorial | LearnOpenCV; explains deterministic sampling and latent interpolation with visuals |
| 3 | The Annotated Diffusion Model | https://huggingface.co/blog/annotated-diffusion | Tutorial | Includes DDIM sampling implementation alongside DDPM |
| 4 | Hugging Face Diffusers — DDIMScheduler | https://huggingface.co/docs/diffusers/api/schedulers/ddim | Docs | API docs with mathematical formulation of DDIM update rule |
| 5 | How Diffusion Models Work: The Math from Scratch | https://theaisummer.com/diffusion-models/ | Blog | AI Summer; covers DDIM as accelerated sampler within broader diffusion context |
| 6 | Denoising Diffusion Implicit Model (DDIM) — Lux Tutorial | https://lux.csail.mit.edu/stable/tutorials/advanced/2_DDIM | Tutorial | MIT CSAIL Julia implementation tutorial |
| 7 | d2l.ai — Denoising Diffusion Probabilistic Models | https://d2l.ai/chapter_generative-models/ddpm.html | Tutorial | Textbook treatment covering DDPM-to-DDIM transition |
| 8 | Papers With Code — DDIM | https://paperswithcode.com/method/ddim | Docs | Summary with benchmarks and implementations |

## MCV-DIF-003 — Score-Based Generative Models [P1]
Subtopics: score matching; Langevin dynamics; SDE / probability-flow ODE

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Generative Modeling by Estimating Gradients of the Data Distribution | https://yang-song.net/blog/2021/score/ | Blog | Yang Song's definitive post; score matching, annealed Langevin, SDE unification |
| 2 | What are Diffusion Models? (Score-based section) | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Weng's section connecting score-based and diffusion perspectives |
| 3 | Score-Based Diffusion Models | https://fanpu.io/blog/2023/score-based-diffusion-models/ | Blog | Tutorial-style blog covering lineage from score matching to SDE framework |
| 4 | How Diffusion Models Work: The Math from Scratch | https://theaisummer.com/diffusion-models/ | Blog | AI Summer; covers score function perspective alongside DDPM |
| 5 | d2l.ai — Score-Based Diffusion Models | https://d2l.ai/chapter_generative-models/score.html | Tutorial | Textbook treatment with code |
| 6 | Official score_sde GitHub repo | https://github.com/yang-song/score_sde | Tutorial | Official code for Score-Based Generative Modeling through SDEs |
| 7 | Stanford CS236 — Representation (Lecture 2) | https://deepgenerativemodels.github.io/assets/slides/cs236_lecture2.pdf | Slides | Stanford CS236 slides on generative model representations |
| 8 | Aman's AI Journal — Diffusion Models Primer | https://aman.ai/primers/ai/diffusion-models/ | Blog | Covers score matching and SDE perspectives |
| 9 | University of Tokyo lecture slides — SDE-based score generative modeling | https://bin.t.u-tokyo.ac.jp/rzemi24/file/13-2_nishio.pdf | Slides | Academic slides covering SMLD, Langevin MCMC, SDE framework |

## MCV-DIF-004 — Classifier-Free Guidance [P0]
Subtopics: conditional/unconditional mixing; guidance scale trade-off; vs classifier guidance

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Guidance: A Cheat Code for Diffusion Models | https://sander.ai/2022/05/26/guidance.html | Blog | Sander Dieleman; intuitive explanation of both classifier and classifier-free guidance |
| 2 | An Overview of Classifier-Free Guidance for Diffusion Models | https://theaisummer.com/classifier-free-guidance/ | Blog | AI Summer; mathematical overview with schedule-based variants |
| 3 | What are Diffusion Models? | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Weng covers both classifier guidance and classifier-free guidance with math |
| 4 | The Illustrated Stable Diffusion | https://jalammar.github.io/illustrated-stable-diffusion/ | Blog | Jay Alammar; visual explanation including guidance scale effect |
| 5 | Classifier-Free Guidance Explained | https://intuitivepapers.ai/classifier-free-diffusion-guidance/ | Interactive | Interactive walkthrough of the paper with formula explanations |
| 6 | Conditional Image Generation with Classifier-Free Guidance | http://www.peterholderrieth.com/blog/2023/Classifier-Free-Guidance-For-Diffusion-Models/ | Blog | Peter Holderrieth; walks through training setup for conditional + unconditional |
| 7 | Classifier-Free Guidance (CFG) Scale | https://mccormickml.com/2023/02/20/classifier-free-guidance-scale/ | Blog | Chris McCormick's practical guide to the guidance scale parameter |
| 8 | Hugging Face Diffusers — Conditional Image Generation | https://huggingface.co/docs/diffusers/using-diffusers/conditional_image_generation | Docs | Practical guide to using guidance_scale parameter in code |
