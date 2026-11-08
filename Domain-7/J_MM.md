# Category J — Multimodal LLMs and Video

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-MM-001 — Multimodal LLM Architectures [P1]
Subtopics: encoder + projector + LLM; see LLM-MLM-001

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — Vision Language Models Explained | https://huggingface.co/blog/vlms | Blog | Overview of VLM architectures: encoder, projector, LLM patterns |
| 2 | LLaVA Architecture: From Frozen ViT to Fine-Tuned LLM | https://learnopencv.com/llava-training-a-visual-assistant/ | Tutorial | LearnOpenCV; two-stage training, MLP projector, frozen encoder |
| 3 | LLaVa and Visual Instruction Tuning Explained | https://zilliz.com/blog/llava-visual-instruction-training | Blog | Zilliz; CLIP encoder + projector + Vicuna LLM walkthrough |
| 4 | How Multimodal LLMs Work: Vision Encoders, Fusion, and Decoders | https://futureagi.com/blog/exploring-how-multimodal-large-language-models-work/ | Blog | FutureAGI; covers projection, Q-Former, and cross-attention connector types |
| 5 | Aman's AI Journal — Vision Language Models | https://aman.ai/primers/ai/VLM/ | Blog | Comprehensive primer on VLM architectures and alignment methods |
| 6 | haotian-liu/LLaVA (GitHub) | https://github.com/haotian-liu/LLaVA | Docs | Official LLaVA implementation |
| 7 | Hugging Face — BLIP-2 Model Docs | https://huggingface.co/docs/transformers/model_doc/blip-2 | Docs | HF docs covering Q-Former bridge architecture |
| 8 | Papers With Code — Visual Question Answering | https://paperswithcode.com/task/visual-question-answering | Docs | Task page with model comparisons |

## MCV-MM-002 — Video Understanding Models [P2]
Subtopics: spatiotemporal attention; frame sampling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face CV Course — Transformers in Video Processing | https://huggingface.co/learn/computer-vision-course/en/unit7/video-processing/transformers-based-models | Tutorial | HF course; compares ViViT and TimeSformer attention schemes with diagrams |
| 2 | Video Vision Transformer (ViViT) | https://www.geeksforgeeks.org/computer-vision/video-vision-transformer-vivit/ | Blog | GeeksforGeeks; tubelet patches, four architecture variants explained |
| 3 | TimeSFormer: Efficient Video Understanding Without Convolutions | https://medium.com/@kdk199604/timesformer-efficient-and-effective-video-understanding-without-convolutions-249ea6316851 | Blog | Divided space-time attention walkthrough |
| 4 | Hugging Face — VideoMAE Model Docs | https://huggingface.co/docs/transformers/model_doc/videomae | Docs | API docs with video processing pipeline |
| 5 | Papers With Code — Video Classification | https://paperswithcode.com/task/video-classification | Docs | Task page with model comparisons and benchmarks |

## MCV-MM-003 — Video Generation Models [P2]
Subtopics: spatiotemporal diffusion; temporal consistency

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Diffusion Models for Video Generation | https://lilianweng.github.io/posts/2024-04-12-diffusion-video/ | Blog | Weng's definitive post; training-free adaptation, 3D U-Nets, transformer architectures |
| 2 | Video Generation: Evolution from VDM to Veo2 and SORA | https://learnopencv.com/video-generation-models/ | Tutorial | LearnOpenCV; traces pipeline from Make-a-Video through Sora with diagrams |
| 3 | Video Generation Models as World Simulators (Sora tech report) | https://openai.com/research/video-generation-models-as-world-simulators | Blog | OpenAI; DiT-based video generation at scale with spacetime patches |
| 4 | The Future of Video Generation: Deep Dive into Stable Video Diffusion | https://www.louisbouchard.ai/stable-video-diffusion/ | Blog | Louis Bouchard; temporal layers, three-stage training process |
| 5 | Stable Video Diffusion: Three-Stage Training Process | https://hackernoon.com/stable-video-diffusion-the-three-stage-training-process-for-cutting-edge-video-generation | Blog | HackerNoon; detailed breakdown of SVD's staged training |
| 6 | Papers With Code — Video Generation | https://paperswithcode.com/task/video-generation | Docs | Task page with leaderboards |
