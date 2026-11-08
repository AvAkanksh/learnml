# Category G — Mid-training and Fine-tuning

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-FTN-001 — Supervised Fine-Tuning (SFT) Fundamentals
Subtopics: instruction-response format; chat templates; loss masking on prompts; learning rate for SFT; catastrophic forgetting

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face — Supervised Fine-tuning Trainer | https://huggingface.co/docs/trl/en/sft_trainer | Docs | Official SFTTrainer docs with chat template, loss masking, and configuration |
| 2 | Philipp Schmid — How to Align Open LLMs with DPO & Synthetic Data | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Practical SFT + DPO pipeline with code examples |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers fine-tuning fundamentals including catastrophic forgetting |
| 4 | d2l.ai — Fine-Tuning | https://d2l.ai/chapter_natural-language-processing-applications/finetuning-bert.html | Tutorial | Textbook treatment of fine-tuning with transfer learning |
| 5 | Hugging Face LLM Course — Fine-tuning | https://huggingface.co/learn/llm-course/en/chapter11/2 | Tutorial | Covers SFT basics within the HF LLM course |

## LLM-FTN-002 — Instruction Tuning and Dataset Construction
Subtopics: instruction-response pair creation; FLAN collection; Self-Instruct; Alpaca-style data generation; quality filtering

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Instruction Fine-Tuning: Dataset and Library Landscape | https://admantium.com/blog/llm18_instruction_finetuning_landscape/ | Blog | Comprehensive overview of instruction tuning datasets and libraries |
| 2 | Instruction Tuning: How It Improves LLMs | https://www.cogitotech.com/blog/instruction-tuning-for-large-language-models/ | Blog | Covers FLAN, Self-Instruct, and dataset construction strategies |
| 3 | Philipp Schmid — How to Align Open LLMs | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Practical guide to creating instruction-tuning datasets |
| 4 | Hugging Face — Supervised Fine-tuning Trainer | https://huggingface.co/docs/trl/en/sft_trainer | Docs | Shows instruction format and chat template configuration |
| 5 | d2l.ai — Natural Language Processing: Applications | https://d2l.ai/chapter_natural-language-processing-applications/index.html | Tutorial | Covers task-specific fine-tuning approaches |

## LLM-FTN-003 — LoRA
Subtopics: low-rank decomposition of weight updates; rank and alpha hyperparameters; which layers to adapt; merging adapters

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face LLM Course — LoRA | https://huggingface.co/learn/llm-course/en/chapter11/4 | Tutorial | Clear LoRA explanation with rank, alpha, target modules, and PEFT code |
| 2 | What is LoRA? | https://www.ibm.com/think/topics/lora | Blog | Illustrated explanation of low-rank adaptation with architecture diagrams |
| 3 | LoRA: LLM Fine-Tuning Through Low-Rank Adaptation | https://medium.com/@mandeep0405/lora-llm-fine-tuning-through-low-rank-adaptation-e7277f693335 | Blog | Math-heavy walkthrough with parameter count analysis |
| 4 | Low-rank Adaptation: Implementation Guide | https://nexla.com/enterprise-ai/low-rank-adaptation-of-large-language-models/ | Blog | Practical implementation guide covering hyperparameter choices |
| 5 | Hugging Face PEFT — LoRA | https://huggingface.co/docs/peft/en/conceptual_guides/lora | Docs | Official PEFT documentation for LoRA configuration and merging |
| 6 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers LoRA implementation from scratch |

## LLM-FTN-004 — QLoRA
Subtopics: 4-bit NF4 quantization; double quantization; paged optimizers; memory savings vs full fine-tuning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | QLoRA: 4-Bit Fine-Tuning for Large Models | https://www.ultralytics.com/glossary/qlora | Blog | Clear explanation of NF4 quantization and double quantization |
| 2 | Fine-Tuning Using LoRA and QLoRA | https://www.geeksforgeeks.org/deep-learning/fine-tuning-using-lora-and-qlora/ | Blog | Side-by-side comparison of LoRA and QLoRA with code |
| 3 | QLoRA: Fine-Tuning LLMs Efficiently with 4-bit Precision | https://www.jellyfishtechnologies.com/qlora-fine-tuning-llms-efficiently-with-4-bit-precision/ | Blog | Covers NF4, paged optimizers, and HF bitsandbytes setup |
| 4 | How to Build QLoRA Fine-Tuning | https://oneuptime.com/blog/post/2026-01-30-qlora-fine-tuning/view | Tutorial | Step-by-step QLoRA implementation tutorial |
| 5 | Hugging Face PEFT — Quantization | https://huggingface.co/docs/peft/en/developer_guides/quantization | Docs | Official docs for QLoRA with bitsandbytes integration |

## LLM-FTN-005 — DoRA and Other LoRA Variants
Subtopics: DoRA (weight-decomposed LoRA); AdaLoRA; LoRA+; rsLoRA; rank selection strategies

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face PEFT — LoRA Methods | https://huggingface.co/docs/peft/en/conceptual_guides/lora | Docs | Covers DoRA, AdaLoRA, and other PEFT variants |
| 2 | Hugging Face LLM Course — LoRA | https://huggingface.co/learn/llm-course/en/chapter11/4 | Tutorial | Discusses LoRA variants and rank selection |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers LoRA variants and fine-tuning method comparison |
| 4 | What is LoRA? | https://www.ibm.com/think/topics/lora | Blog | Discusses LoRA extensions and improvements |
| 5 | Low-rank Adaptation: Implementation Guide | https://nexla.com/enterprise-ai/low-rank-adaptation-of-large-language-models/ | Blog | Covers practical considerations for LoRA variant selection |

## LLM-FTN-006 — Adapters and Prefix/Prompt Tuning
Subtopics: bottleneck adapters; prefix tuning; prompt tuning (soft prompts); P-tuning; comparison with LoRA

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face PEFT — Prompt-based Methods | https://huggingface.co/docs/peft/en/conceptual_guides/prompting | Docs | Covers prefix tuning, prompt tuning, and P-tuning with examples |
| 2 | Hugging Face LLM Course — Parameter-Efficient Fine-Tuning | https://huggingface.co/learn/llm-course/en/chapter11/4 | Tutorial | Compares adapters, prefix tuning, and LoRA approaches |
| 3 | d2l.ai — Fine-Tuning | https://d2l.ai/chapter_natural-language-processing-applications/finetuning-bert.html | Tutorial | Covers adapter-based fine-tuning approaches |
| 4 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses parameter-efficient methods and their trade-offs |
| 5 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews adapter-based approaches for Transformers |

## LLM-FTN-007 — Continual Pretraining and Mid-training
Subtopics: domain-adaptive pretraining; mid-training phase; replay buffers; learning rate rewarming

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Continual Learning with RL for LLMs | https://cameronrwolfe.substack.com/p/rl-continual-learning | Blog | Deep dive into continual learning and catastrophic forgetting in LLMs |
| 2 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers continual pretraining and domain adaptation |
| 3 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses continual learning as an open challenge |
| 4 | d2l.ai — Transfer Learning | https://d2l.ai/chapter_computer-vision/fine-tuning.html | Tutorial | Covers domain adaptation fundamentals |
| 5 | Hugging Face — Supervised Fine-tuning Trainer | https://huggingface.co/docs/trl/en/sft_trainer | Docs | Covers training configuration for continued pretraining |

## LLM-FTN-008 — Curriculum Learning for LLMs
Subtopics: easy-to-hard data ordering; competence-based scheduling; domain scheduling; pacing functions

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Optimization Algorithms | https://d2l.ai/chapter_optimization/index.html | Tutorial | Covers training strategies including data ordering |
| 2 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses data ordering and curriculum as open challenges |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses training data scheduling decisions |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews training strategies for large Transformers |
| 5 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Discusses data quality ordering in pretraining |

## LLM-FTN-009 — Knowledge Distillation for LLMs
Subtopics: logit-based distillation; feature-based distillation; sequence-level distillation; distilling reasoning capabilities

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Knowledge Distillation for LLMs | https://apxml.com/courses/how-to-build-a-large-language-model/chapter-27-model-compression-techniques/knowledge-distillation | Tutorial | Covers distillation types and student-teacher framework |
| 2 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Covers distillation of reasoning capabilities from larger models |
| 3 | d2l.ai — Knowledge Distillation | https://d2l.ai/chapter_computer-vision/fine-tuning.html | Tutorial | Textbook treatment of distillation fundamentals |
| 4 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers distillation as a model-level inference optimization |
| 5 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses model compression including distillation |
