# Category H — Detection and Segmentation Foundation Models

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-SFM-001 — Segment Anything (SAM) [P1]
Subtopics: promptable segmentation; image encoder + prompt encoder + mask decoder

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Segment Anything Model (SAM) — Vizuara | https://www.vizuaranewsletter.com/p/segment-anything-model-sam | Blog | Architecture walkthrough: image encoder, prompt encoder, mask decoder |
| 2 | Segment Anything Model: Intro, Use Cases, Tutorial | https://www.v7darwin.com/blog/segment-anything-model-sam | Blog | V7; three-component architecture, promptable segmentation, practical use |
| 3 | Segment Anything Models: SAM, SAM 2, SAM 3 | https://blog.roboflow.com/segment-anything/ | Blog | Roboflow; covers SAM evolution and practical usage |
| 4 | Meta AI Blog — Segment Anything | https://ai.meta.com/blog/segment-anything-foundation-model-image-segmentation/ | Blog | Official Meta blog post on SAM |
| 5 | Hugging Face — SAM Model Docs | https://huggingface.co/docs/transformers/model_doc/sam | Docs | HF docs with architecture and usage code |
| 6 | Segment Anything Tutorial (HACARUS) | https://hacarus.com/ai-lab/sam-20240620/ | Tutorial | Hands-on tutorial: environment setup, point and bounding-box prompts |
| 7 | Papers With Code — SAM | https://paperswithcode.com/paper/segment-anything | Docs | Summary with benchmarks |

## MCV-SFM-002 — SAM 2 [P2]
Subtopics: video segmentation; memory attention

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | SAM 2: Segment Anything in Images and Videos — Summary | https://www.abhik.ai/papers/sam-2 | Interactive | Interactive summary; streaming memory bank, cross-attention mechanics |
| 2 | SAM 2 For Video — Memory Module, Propagation | https://www.forasoft.com/learn/ai-for-video-engineering/articles-ai/sam-2-for-video-memory-module-rotoscoping | Blog | Decoder and feature-pyramid pipeline, memory attention explained |
| 3 | SAM 2, SAM 2.1 and SAM 3 (Supervisely) | https://supervisely.com/blog/segment-anything-2-for-automatically-segment-and-track-objects/ | Blog | Architecture diagrams; stacked self-attention + cross-attention blocks |
| 4 | Meta AI Blog — SAM 2 | https://ai.meta.com/blog/segment-anything-2/ | Blog | Official Meta blog post |
| 5 | Hugging Face — SAM 2 Model Docs | https://huggingface.co/docs/transformers/model_doc/sam2 | Docs | HF docs with usage |
| 6 | Papers With Code — SAM 2 | https://paperswithcode.com/paper/sam-2-segment-anything-in-images-and-videos | Docs | Summary with benchmarks |

## MCV-SFM-003 — Open-Vocabulary Grounding Models [P2]
Subtopics: text-to-region grounding; open-set detection

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Grounding DINO: Open Vocabulary Object Detection on Videos | https://pyimagesearch.com/2025/12/08/grounding-dino-open-vocabulary-object-detection-on-videos/ | Tutorial | PyImageSearch; covers GLIP and Grounding DINO with Hugging Face walkthrough |
| 2 | Fine-Tuning Grounding DINO | https://learnopencv.com/fine-tuning-grounding-dino/ | Tutorial | LearnOpenCV; architecture explanation + fine-tuning example |
| 3 | Grounding DINO Official GitHub | https://github.com/IDEA-Research/GroundingDINO | Docs | ECCV 2024 code; Colab demo, Roboflow tutorial links |
| 4 | What Open Vocabulary Means | https://theneuralbase.com/grounding-dino/learn/intermediate/what-open-vocabulary-means/ | Blog | Explains open-vocabulary detection concept clearly |
| 5 | Papers With Code — Open Vocabulary Object Detection | https://paperswithcode.com/task/open-vocabulary-object-detection | Docs | Task page with benchmarks and methods |

## MCV-DET-001 — DETR and Transformer-Based Detection [P1]
Subtopics: object queries; Hungarian matching loss; no NMS; RT-DETR / DINO-DETR

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Detection Transformer (DETR): An Introduction | https://www.vizuaranewsletter.com/p/detection-transformer-detr-an-introduction | Blog | Vizuara; object queries as slots, Hungarian matching, one-to-one assignment |
| 2 | The Algorithm That Made DETR Possible: Hungarian Loss | https://medium.com/@manindersingh120996/the-algorithm-that-made-detr-possible-a-deep-explanation-of-hungarian-loss-003c1a97a9c8 | Blog | Deep dive into Hungarian matching cost and training weights |
| 3 | DETR Implementation from Scratch Using PyTorch | https://medium.com/@bskkim2022/detr-implementation-from-scratch-using-pytorch-0f783fe06363 | Tutorial | Worked example: 3 GT boxes + 25 queries; only matched pairs contribute to loss |
| 4 | The Advances in DETR: Transformer for Object Detection | https://medium.com/@tharsan.senthivel/the-advances-in-detr-transformer-for-object-detection-db6368a3f5d5 | Blog | Covers DETR, Deformable DETR, RT-DETR evolution |
| 5 | Hugging Face — DETR Model Docs | https://huggingface.co/docs/transformers/model_doc/detr | Docs | HF docs with architecture and usage |
| 6 | Yannic Kilcher — DETR Paper Review | https://www.youtube.com/watch?v=T35ba_VXkMY | Video | Video walkthrough of DETR |
| 7 | Hugging Face — RT-DETR Model Docs | https://huggingface.co/docs/transformers/model_doc/rt_detr | Docs | HF docs for Real-Time DETR |
| 8 | Papers With Code — DETR | https://paperswithcode.com/method/detr | Docs | Method summary with benchmarks |
