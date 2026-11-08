# Category E — Self-Supervised Visual Representation Learning

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-SSL-001 — Masked Autoencoders (MAE) [P1]
Subtopics: high masking ratio; asymmetric encoder-decoder; vs BERT MLM

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | MAE: Masked Autoencoders Are Scalable Self-Supervised Vision Learners — Interactive Summary | https://www.abhik.ai/papers/mae | Interactive | Interactive paper summary; covers 75% masking, asymmetric design, pixel reconstruction |
| 2 | Hugging Face — ViTMAE Model Docs | https://huggingface.co/docs/transformers/model_doc/vit_mae | Docs | HF docs with architecture description and usage code |
| 3 | d2l.ai — Self-Supervised Learning | https://d2l.ai/chapter_computer-vision/self-supervised-learning.html | Tutorial | Covers masked image modeling in broader SSL context |
| 4 | Yannic Kilcher — MAE Paper Review | https://www.youtube.com/watch?v=LKixq2S4ycQ | Video | Video walkthrough of the paper with visual explanations |
| 5 | Papers With Code — MAE | https://paperswithcode.com/paper/masked-autoencoders-are-scalable-vision | Docs | Summary with benchmarks and implementations |

## MCV-SSL-002 — DINO [P1]
Subtopics: self-distillation; momentum teacher; centering/sharpening to avoid collapse

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding DINOv2: Engineer's Deep Dive | https://www.lightly.ai/blog/dinov2 | Blog | Lightly; covers DINO and DINOv2, EMA teacher, self-distillation mechanics |
| 2 | DINO: Emerging Properties — Interactive Summary | https://www.abhik.ai/papers/dino | Interactive | Interactive paper summary; student-teacher framework, centering + sharpening |
| 3 | Meta AI Blog — DINO | https://ai.meta.com/blog/dino-paws-computer-vision-with-self-supervised-transformers-and-10x-more-efficient-training/ | Blog | Official Meta blog post on DINO results and attention visualizations |
| 4 | LightlySSL — DINO Documentation | https://docs.lightly.ai/self-supervised-learning/examples/dino.html | Tutorial | Implementation guide using Lightly framework |
| 5 | Yannic Kilcher — DINO Paper Review | https://www.youtube.com/watch?v=h3ij3F3cPIk | Video | Video walkthrough with visual explanations |
| 6 | Papers With Code — DINO | https://paperswithcode.com/method/dino | Docs | Method summary with benchmarks |

## MCV-SSL-003 — DINOv2 and DINOv3 [P1]
Subtopics: data curation; scaling; dense-feature quality

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding DINOv2: Engineer's Deep Dive | https://www.lightly.ai/blog/dinov2 | Blog | Lightly; 1B-param teacher, LVD-142M dataset, distillation pipeline |
| 2 | DINOv2 — Step by Step Explanations | https://www.picsellia.com/post/dinov2-steps-by-steps-explanations-picsellia | Blog | Picsellia; automatic data pipeline, self-distillation, frozen backbone performance |
| 3 | DINOv2: Self-Supervised Vision Transformer | https://learnopencv.com/dinov2-self-supervised-vision-transformer/ | Tutorial | LearnOpenCV; tutorial with practical usage code |
| 4 | Meta AI Blog — DINOv2 | https://ai.meta.com/blog/dino-v2-computer-vision-self-supervised-learning/ | Blog | Official Meta blog post on DINOv2 |
| 5 | Hugging Face — DINOv2 Model Docs | https://huggingface.co/docs/transformers/model_doc/dinov2 | Docs | HF docs with architecture and usage |
| 6 | Papers With Code — DINOv2 | https://paperswithcode.com/paper/dinov2-learning-robust-visual-features | Docs | Summary with benchmarks |

## MCV-SSL-004 — iBOT [P3]
Subtopics: masked image modeling + self-distillation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LightlySSL — iBOT Documentation | https://docs.lightly.ai/self-supervised-learning/examples/ibot.html | Tutorial | Implementation guide; student predicts teacher's outputs on masked patches |
| 2 | iBOT: Image BERT Pre-Training with Online Tokenizer — AlphaXiv | https://www.alphaxiv.org/overview/2111.07832 | Blog | Overview; evolving soft targets from EMA teacher, no separate tokenizer |
| 3 | iBOT Loss: Self-Distillation in Vision Transformers | https://www.emergentmind.com/topics/ibot-loss-1549624e-55b9-431d-9e43-5b322aa33fa2 | Blog | Dual-network setup, patch-level + image-level losses |
| 4 | Hugging Face — iBOT Paper Page | https://huggingface.co/papers/2111.07832 | Docs | Paper page with community discussion |
| 5 | Papers With Code — iBOT | https://paperswithcode.com/paper/ibot-image-bert-pre-training-with-online | Docs | Summary with benchmarks |
