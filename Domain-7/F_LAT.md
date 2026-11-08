# Category F — Latent Diffusion and Modern Generative Architectures

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-LAT-001 — Latent Diffusion Models [P1]
Subtopics: why diffuse in latent space; compute savings

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Stable Diffusion | https://jalammar.github.io/illustrated-stable-diffusion/ | Blog | Jay Alammar; 30+ visuals explaining latent space diffusion, VAE encoder/decoder, compute savings |
| 2 | What are Diffusion Models? | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ | Blog | Lilian Weng; covers latent diffusion in updated sections |
| 3 | How Does Stable Diffusion Work? | https://stable-diffusion-art.com/how-stable-diffusion-work/ | Blog | Stable Diffusion Art; latent space 4×64×64 (48× smaller), step-by-step process |
| 4 | Hugging Face — Stable Diffusion with Diffusers | https://huggingface.co/blog/stable_diffusion | Blog | Official HF blog covering the pipeline end to end |
| 5 | An Introduction to Diffusion Models and Stable Diffusion | https://www.marvik.ai/blog/an-introduction-to-diffusion-models-and-stable-diffusion | Blog | Marvik; VAE latent space + diffusion pipeline with diagrams |
| 6 | The Annotated Diffusion Model | https://huggingface.co/blog/annotated-diffusion | Tutorial | HF blog; full PyTorch implementation covering diffusion fundamentals |
| 7 | d2l.ai — Denoising Diffusion Probabilistic Models | https://d2l.ai/chapter_generative-models/ddpm.html | Tutorial | Textbook coverage of diffusion foundations |
| 8 | Papers With Code — Latent Diffusion Models | https://paperswithcode.com/method/latent-diffusion-models | Docs | Method summary with benchmarks |

## MCV-LAT-002 — Stable Diffusion Architecture [P1]
Subtopics: VAE latent space; U-Net denoiser; text cross-attention

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Stable Diffusion | https://jalammar.github.io/illustrated-stable-diffusion/ | Blog | Jay Alammar; definitive visual guide: VAE, U-Net, CLIP text encoder, cross-attention |
| 2 | How Does Stable Diffusion Work? | https://stable-diffusion-art.com/how-stable-diffusion-work/ | Blog | Step-by-step: text encoding → latent noise → U-Net denoising → VAE decode |
| 3 | Stable Diffusion Deep Dive (fast.ai Lesson 9) | https://course.fast.ai/Lessons/lesson9.html | Tutorial | fast.ai practical lesson covering the full SD pipeline and CFG |
| 4 | Hugging Face — Stable Diffusion with Diffusers | https://huggingface.co/blog/stable_diffusion | Blog | Official HF blog with pipeline code |
| 5 | Hugging Face Diffusion Course — Unit 1 | https://huggingface.co/learn/diffusion-course/unit1/1 | Tutorial | HF course with hands-on Stable Diffusion pipeline |
| 6 | An Introduction to Diffusion Models and Stable Diffusion | https://www.marvik.ai/blog/an-introduction-to-diffusion-models-and-stable-diffusion | Blog | Covers encoder-decoder-diffusion pipeline with diagrams |

## MCV-LAT-003 — Diffusion Transformers (DiT) [P1]
Subtopics: patchified latents; adaLN conditioning; scaling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Architecture Behind Every SOTA Image Generator: DiT + Rectified Flow Explained | https://medium.com/@j.tech.reveil/the-architecture-behind-every-state-of-the-art-image-generator-dit-rectified-flow-explained-0c6ae1c1f0b4 | Blog | Covers full DiT block, adaLN-Zero, patch sizes, and scaling results |
| 2 | DiT: How Transformers Are Replacing U-Nets | https://medium.com/@kdk199604/dit-how-transformers-are-replacing-u-nets-in-diffusion-models-21cf9c95f259 | Blog | Covers learned positional embeddings, adaLN conditioning, scaling |
| 3 | ArXiv Dives — Diffusion Transformers | https://ghost.oxen.ai/arxiv-dives-diffusion-transformers/ | Blog | Oxen.ai paper walkthrough with clear explanations |
| 4 | Diffusion Transformers (DiT) | https://www.emergentmind.com/topics/diffusion-transformers-dit | Blog | Technical overview: patchified tokens, adaLN-Zero, quality vs FLOPs |
| 5 | Hugging Face — DiT Model Docs | https://huggingface.co/docs/diffusers/api/models/dit_transformer_2d | Docs | HF Diffusers docs for DiT implementation |
| 6 | Papers With Code — DiT | https://paperswithcode.com/paper/scalable-diffusion-models-with-transformers | Docs | Summary with benchmarks and implementations |
