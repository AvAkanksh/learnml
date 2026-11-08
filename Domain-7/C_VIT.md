# Category C — Vision Transformers

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-VIT-001 — Vision Transformer (ViT) [P0]
Subtopics: patch embedding; position embeddings; CLS token; data hunger vs CNN inductive bias

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Vision Transformer (ViT) Explained | https://amaarora.github.io/posts/2021-01-18-ViT.html | Blog | Aman Arora; patch embedding via Conv2d, position embeddings, CLS token, PyTorch code |
| 2 | Vision Transformer (ViT) — labml.ai | https://nn.labml.ai/transformers/vit/index.html | Tutorial | Annotated PyTorch implementation with code-first explanations |
| 3 | d2l.ai — Vision Transformer | https://d2l.ai/chapter_attention-mechanisms-and-transformers/vision-transformer.html | Tutorial | Textbook chapter with full code implementation |
| 4 | Google Research Blog — Transformers for Image Recognition at Scale | https://research.google/blog/transformers-for-image-recognition-at-scale/ | Blog | Official Google blog post announcing ViT with key findings |
| 5 | Hugging Face — Vision Transformer (ViT) Model Docs | https://huggingface.co/docs/transformers/model_doc/vit | Docs | HF docs with model architecture description and usage |
| 6 | Stanford CS231n — Vision Transformers (2024) | https://cs231n.stanford.edu/slides/2024/lecture_13.pdf | Slides | Stanford lecture slides covering ViT architecture |
| 7 | Papers With Code — Vision Transformer | https://paperswithcode.com/method/vision-transformer | Docs | Method summary with benchmarks and implementations |

## MCV-VIT-002 — DeiT [P2]
Subtopics: distillation token; data-efficient training

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Exploring DeiT: A Review and PyTorch Guide | https://medium.com/@ovularslan/exploring-deit-a-review-and-pytorch-guide-to-data-efficient-image-transformers-2fa648677654 | Blog | Paper review with from-scratch PyTorch implementation; covers distillation token |
| 2 | Knowledge Distillation & Data-Efficient Image Transformers | https://www.vizuaranewsletter.com/p/knowledge-distillation-and-data-efficient | Blog | Vizuara; explains CLS + distillation token, hard vs soft distillation |
| 3 | Hugging Face — DeiT Model Docs | https://huggingface.co/docs/transformers/model_doc/deit | Docs | HF docs with architecture and usage |
| 4 | DeiT Implementation | https://github.com/FrancescoSaverioZuppichini/DeiT | Tutorial | GitHub implementation; dual-token prediction and convergence analysis |
| 5 | d2l.ai — Vision Transformer Chapter | https://d2l.ai/chapter_attention-mechanisms-and-transformers/vision-transformer.html | Tutorial | Covers ViT family context including data-efficient training |
| 6 | Papers With Code — DeiT | https://paperswithcode.com/paper/training-data-efficient-image-transformers | Docs | Summary with benchmarks and implementations |

## MCV-VIT-003 — Swin Transformer [P1]
Subtopics: windowed attention; shifted windows; hierarchical features

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Swin Transformer Explained | https://amaarora.github.io/posts/2022-07-04-swintransformerv1.html | Blog | Worked diagrams with Excel example; PyTorch implementation; cyclic shift explained |
| 2 | An Beginner's Introduction to Swin Transformer | https://www.vizuaranewsletter.com/p/an-beginners-introduction-to-swin | Blog | Vizuara; intuition for why shifting matters, cyclic shift mechanics |
| 3 | SWIN Transformers Explained | https://bolster.ai/blog/swin-transformers | Blog | Overview of window attention and global context problem |
| 4 | Hugging Face — Swin Transformer Model Docs | https://huggingface.co/docs/transformers/model_doc/swin | Docs | HF docs with architecture and usage |
| 5 | Papers With Code — Swin Transformer | https://paperswithcode.com/method/swin-transformer | Docs | Method summary with benchmarks |

## MCV-VIT-004 — ConvNeXt [P2]
Subtopics: modernized ConvNet design choices

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face CV Course — ConvNeXt | https://huggingface.co/learn/computer-vision-course/en/unit2/cnns/convnext | Tutorial | Step-by-step modernization from ResNet-50: patchify stem, depthwise conv, inverted bottleneck |
| 2 | ConvNeXt (Machine Learning with a Honk) | https://mlhonk.substack.com/p/43-convnext | Blog | Training recipe, LayerNorm, larger kernels, stage depth changes |
| 3 | Hugging Face — ConvNeXt Model Docs | https://huggingface.co/docs/transformers/model_doc/convnext | Docs | HF docs with architecture and usage |
| 4 | d2l.ai — Modern Convolutional Neural Networks | https://d2l.ai/chapter_convolutional-modern/index.html | Tutorial | Covers modern CNN design evolution |
| 5 | Papers With Code — A ConvNet for the 2020s | https://paperswithcode.com/paper/a-convnet-for-the-2020s | Docs | Summary with benchmarks and implementations |
