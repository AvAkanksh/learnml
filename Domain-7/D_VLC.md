# Category D — Contrastive and Vision-Language Models

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-VLC-001 — CLIP [P0]
Subtopics: symmetric InfoNCE; zero-shot classification; prompt templates

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Contrastive Representation Learning | https://lilianweng.github.io/posts/2021-05-31-contrastive/ | Blog | Weng's post covering InfoNCE, contrastive objectives, and CLIP in context |
| 2 | OpenAI CLIP Model Explained | https://www.lightly.ai/blog/clip-openai | Blog | Lightly; complete architecture walkthrough with training and zero-shot classification |
| 3 | CLIP: Contrastive Language-Image Pre-Training | https://viso.ai/deep-learning/clip-machine-learning/ | Blog | viso.ai; detailed explanation covering contrastive training and applications |
| 4 | Official OpenAI CLIP GitHub | https://github.com/openai/CLIP | Docs | Official repo; README covers zero-shot with prompt templates and usage |
| 5 | OpenAI Blog — CLIP: Connecting text and images | https://openai.com/research/clip | Blog | Official OpenAI research page with results |
| 6 | Hugging Face — CLIP Model Docs | https://huggingface.co/docs/transformers/model_doc/clip | Docs | HF docs with architecture and usage code |
| 7 | OpenAI CLIP (Roboflow blog) | https://blog.roboflow.com/openai-clip/ | Blog | Roboflow; covers use cases: image search, classification, zero-shot |
| 8 | Papers With Code — CLIP | https://paperswithcode.com/method/clip | Docs | Method summary with benchmarks |

## MCV-VLC-002 — SigLIP [P1]
Subtopics: pairwise sigmoid loss vs softmax; batch-size decoupling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CLIP to SigLIP: Choosing Between Vision-Language Models | https://blog.ritwikraha.dev/choosing-between-siglip-and-clip-for-language-image-pretraining | Blog | Ritwik Raha; loss formula comparison, batch-size trade-offs |
| 2 | Ultralytics — SigLIP Glossary | https://www.ultralytics.com/glossary/siglip | Blog | Beginner walkthrough; sigmoid loss, temperature, bias, PyTorch snippet |
| 3 | SigLIP: Sigmoid Loss Concepts | https://zeroentropy.dev/concepts/siglip/ | Blog | Clear explanation of why the learnable bias matters for positive/negative imbalance |
| 4 | SigLIP Interactive Paper Summary | https://www.abhik.ai/papers/siglip | Interactive | Interactive walkthrough of sigmoid vs softmax mechanics |
| 5 | Hugging Face — SigLIP Model Docs | https://huggingface.co/docs/transformers/model_doc/siglip | Docs | HF docs with architecture and usage |

## MCV-VLC-003 — Vision-Language Alignment Techniques [P2]
Subtopics: joint embedding spaces; cross-modal retrieval

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — Vision Language Models Explained | https://huggingface.co/blog/vlms | Blog | Overview of VLM architectures and alignment approaches |
| 2 | Vision-Language Alignment: CLIP, BLIP-2, LLaVA, Flamingo | https://www.abhik.ai/concepts/transformers/vision-language-alignment | Blog | Covers joint embedding vs bridge approaches across models |
| 3 | Lightly — CLIP Explained | https://www.lightly.ai/blog/clip-openai | Blog | Covers joint embedding space training for cross-modal retrieval |
| 4 | Hugging Face — BLIP-2 Model Docs | https://huggingface.co/docs/transformers/model_doc/blip-2 | Docs | HF docs covering Q-Former bridge architecture |
| 5 | An Introduction to Contrastive Learning for Computer Vision | https://www.lightly.ai/blog/contrastive-learning | Blog | Lightly; broader overview placing CLIP in contrastive learning context |
| 6 | Aman's AI Journal — Vision Language Models | https://aman.ai/primers/ai/VLM/ | Blog | Comprehensive primer on VLM architectures and alignment methods |

## MCV-SSL-005 — Contrastive Learning: SimCLR and MoCo [P0]
Subtopics: InfoNCE; positive/negative pairs; augmentations; batch size vs memory bank

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated SimCLR Framework | https://amitness.com/posts/simclr | Blog | Amit Chaudhary; diagram-driven walkthrough of NT-Xent loss step-by-step |
| 2 | Lilian Weng — Contrastive Representation Learning | https://lilianweng.github.io/posts/2021-05-31-contrastive/ | Blog | Weng's post covering InfoNCE, SimCLR, MoCo, and theoretical foundations |
| 3 | An Introduction to Contrastive Learning for Computer Vision | https://www.lightly.ai/blog/contrastive-learning | Blog | Lightly; places SimCLR and MoCo among early SSL successes |
| 4 | Contrastive Learning - SimCLR and BYOL (with Code) | https://learnopencv.com/contrastive-learning-simclr-and-byol-with-code-example/ | Tutorial | LearnOpenCV; covers augmentation pipeline and code implementation |
| 5 | Google Research Blog — SimCLR | https://research.google/blog/advancing-self-supervised-and-semi-supervised-learning-with-simclr/ | Blog | Official Google blog post on SimCLR |
| 6 | d2l.ai — Self-Supervised Learning | https://d2l.ai/chapter_computer-vision/self-supervised-learning.html | Tutorial | Textbook chapter covering contrastive pretraining |
| 7 | Papers With Code — SimCLR | https://paperswithcode.com/method/simclr | Docs | Method summary with benchmarks |
| 8 | Papers With Code — MoCo | https://paperswithcode.com/method/moco | Docs | Method summary with benchmarks |
