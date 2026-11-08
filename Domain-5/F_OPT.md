# Category F — Optimization and Distributed Training

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-OPT-001 — AdamW and Adaptive Optimizers for LLMs
Subtopics: Adam vs AdamW; weight decay decoupling; beta parameters; epsilon stability; warm restarts

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | How to Speed Up Training Convergence of Language Models | https://machinelearningmastery.com/how-to-speed-up-training-of-language-models/ | Blog | Covers AdamW with cosine decay and warmup with PyTorch code |
| 2 | Learning Rate Scheduling: Warmup, Cosine, Step Decay | https://www.ml4devs.com/what-is/learning-rate-scheduling/ | Blog | Explains AdamW's variance estimate instability and warmup necessity |
| 3 | d2l.ai — Optimization Algorithms | https://d2l.ai/chapter_optimization/index.html | Tutorial | Textbook treatment of Adam, weight decay, and learning rate schedules |
| 4 | Optimizing LLMs & Training Stability | https://medium.com/@pacosun/how-to-train-massive-language-models-without-losing-your-mind-333840824114 | Blog | Practical AdamW configuration with HF Trainer examples |
| 5 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers optimizer choice and configuration for LLM training |

## LLM-OPT-002 — Muon and Second-Order-Inspired Optimizers
Subtopics: Shampoo; SOAP; Muon optimizer; approximate second-order methods for LLMs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Optimization Algorithms | https://d2l.ai/chapter_optimization/index.html | Tutorial | Covers optimization theory that second-order methods build on |
| 2 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses optimization advances for Transformer training |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers optimizer landscape for LLM training |
| 4 | How to Speed Up Training Convergence of Language Models | https://machinelearningmastery.com/how-to-speed-up-training-of-language-models/ | Blog | Discusses advanced optimization techniques for faster convergence |
| 5 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses optimization as an open challenge |

## LLM-OPT-003 — Learning Rate Schedules and Warmup
Subtopics: linear warmup; cosine annealing; warmup-stable-decay (WSD); learning rate restarts; schedule interaction with batch size

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Learning Rate Scheduling: Warmup, Cosine, Step Decay | https://www.ml4devs.com/what-is/learning-rate-scheduling/ | Blog | Clear overview of warmup + cosine schedule with TensorFlow examples |
| 2 | How to Speed Up Training Convergence of Language Models | https://machinelearningmastery.com/how-to-speed-up-training-of-language-models/ | Blog | PyTorch SequentialLR chaining warmup into cosine annealing |
| 3 | LR Scheduling Strategies for LLMs | https://apxml.com/courses/how-to-build-a-large-language-model/chapter-17-optimization-algorithms-llms/learning-rate-scheduling-strategies | Tutorial | Covers warmup-stable-decay and cosine schedules for LLMs |
| 4 | d2l.ai — Learning Rate Scheduling | https://d2l.ai/chapter_optimization/lr-scheduler.html | Tutorial | Textbook treatment of learning rate schedules with code |
| 5 | Optimizing LLMs & Training Stability | https://medium.com/@pacosun/how-to-train-massive-language-models-without-losing-your-mind-333840824114 | Blog | Practical warmup and cosine decay configuration with HF Trainer |

## LLM-OPT-004 — Mixed Precision Training
Subtopics: FP16 vs BF16; loss scaling; master weights in FP32; AMP (automatic mixed precision)

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | BF16 vs FP16 vs FP8: Mixed Precision Training Guide | https://www.runpod.io/articles/guides/fp16-bf16-fp8-mixed-precision-speed-up-my-model-training | Blog | Comprehensive comparison with benchmarks and practical recommendations |
| 2 | Mixed Precision Training: FP16 and BF16 Explained | https://memx.app/glossary/mixed-precision-training/ | Blog | Clear explanation of loss scaling, master weights, and FP16 underflow |
| 3 | Mixed-Precision Training: BF16 Activations, FP32 Masters | https://zeroentropy.dev/concepts/mixed-precision-training/ | Blog | Covers FP32 master weights and BF16 vs FP16 tradeoffs |
| 4 | d2l.ai — Optimization Algorithms | https://d2l.ai/chapter_optimization/index.html | Tutorial | Covers numerical precision in deep learning optimization |
| 5 | Hugging Face — Efficient Training on a Single GPU | https://huggingface.co/docs/transformers/en/perf_train_gpu_one | Docs | Practical AMP setup with PyTorch and Transformers |

## LLM-OPT-005 — Gradient Checkpointing
Subtopics: activation recomputation; memory-compute trade-off; selective checkpointing; per-layer vs per-block

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face — Efficient Training on a Single GPU | https://huggingface.co/docs/transformers/en/perf_train_gpu_one | Docs | Covers gradient checkpointing setup and memory savings |
| 2 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Discusses memory-compute tradeoffs in deep learning |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers activation recomputation for memory efficiency |
| 4 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses memory management during LLM training |
| 5 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses training efficiency techniques |

## LLM-OPT-006 — ZeRO and FSDP
Subtopics: ZeRO Stage 1/2/3; FSDP FULL_SHARD; optimizer state / gradient / parameter sharding; CPU offload

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Using ZeRO and FSDP to Scale LLM Training | https://www.newline.co/@Dipen/using-zero-and-fsdp-to-scale-llm-training-on-multiple-gpus--2d0fe2a0 | Blog | Clear walkthrough of ZeRO stages and FSDP equivalents |
| 2 | FSDP — Fully Sharded Data Parallel Explained | https://yobitel.com/knowledge-base/fsdp-fully-sharded-data-parallel | Blog | Covers FSDP strategies: FULL_SHARD, SHARD_GRAD_OP, HYBRID_SHARD |
| 3 | FSDP vs DeepSpeed | https://romeokienzler.medium.com/fsdp-vs-deepspeed-9df47ee5ccbb | Blog | Head-to-head comparison of FSDP and DeepSpeed ZeRO |
| 4 | Distributed LLM Training: FSDP, DeepSpeed ZeRO-3, Megatron | https://www.spheron.network/blog/distributed-llm-training-fsdp-deepspeed-megatron-multi-node/ | Blog | Multi-node setup guide covering all three frameworks |
| 5 | Scale LLM Fine-tuning with Sharding | https://developer.ibm.com/articles/llms-sharding/ | Blog | IBM guide covering sharding fundamentals for LLM training |
| 6 | Hugging Face — Efficient Training on Multiple GPUs | https://huggingface.co/docs/transformers/en/perf_train_gpu_many | Docs | Practical FSDP and DeepSpeed integration with HF Trainer |

## LLM-OPT-007 — Tensor Parallelism
Subtopics: column-parallel and row-parallel linear layers; all-reduce communication; intra-node parallelism; Megatron-LM style

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Megatron-LM Parallelism Guide | https://github.com/NVIDIA/Megatron-LM/blob/main/docs/user-guide/parallelism-guide.md | Docs | Official NVIDIA guide covering tensor parallelism configuration |
| 2 | The LLM Scaling Hierarchy: Mastering Every Dimension of Parallelism | https://akashsahani2001.medium.com/the-llm-scaling-hierarchy-mastering-every-dimension-of-parallelism-67937ae1d78e | Blog | Explains column/row-parallel splits and communication patterns |
| 3 | Hugging Face — Efficient Training on Multiple GPUs | https://huggingface.co/docs/transformers/en/perf_train_gpu_many | Docs | Covers tensor parallelism with Megatron integration |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses tensor parallelism for inference efficiency |
| 5 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers distributed computation fundamentals |

## LLM-OPT-008 — Pipeline Parallelism
Subtopics: model partitioning across stages; micro-batching; pipeline bubbles; GPipe and PipeDream schedules

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Megatron-LM Parallelism Guide | https://github.com/NVIDIA/Megatron-LM/blob/main/docs/user-guide/parallelism-guide.md | Docs | Official guide covering pipeline parallelism and interleaved schedules |
| 2 | The LLM Scaling Hierarchy | https://akashsahani2001.medium.com/the-llm-scaling-hierarchy-mastering-every-dimension-of-parallelism-67937ae1d78e | Blog | Explains pipeline stages, micro-batching, and bubble overhead |
| 3 | Hugging Face — Efficient Training on Multiple GPUs | https://huggingface.co/docs/transformers/en/perf_train_gpu_many | Docs | Covers pipeline parallelism setup with practical examples |
| 4 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers model partitioning fundamentals |
| 5 | Distributed LLM Training Guide | https://www.spheron.network/blog/distributed-llm-training-fsdp-deepspeed-megatron-multi-node/ | Blog | Covers pipeline parallelism in multi-node training setups |

## LLM-OPT-009 — Expert Parallelism for MoE Training
Subtopics: placing experts across devices; all-to-all communication; expert-parallel + data-parallel composition

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — Mixture of Experts Explained | https://huggingface.co/blog/moe | Blog | Covers expert parallelism and communication patterns |
| 2 | Megatron-LM Parallelism Guide | https://github.com/NVIDIA/Megatron-LM/blob/main/docs/user-guide/parallelism-guide.md | Docs | Covers expert parallelism configuration in Megatron |
| 3 | Sebastian Raschka — Mixture-of-Experts vs Dense LLMs | https://sebastianraschka.com/faq/docs/mixture-of-experts.html | Blog | Discusses distributed training of MoE models |
| 4 | The LLM Scaling Hierarchy | https://akashsahani2001.medium.com/the-llm-scaling-hierarchy-mastering-every-dimension-of-parallelism-67937ae1d78e | Blog | Covers expert parallelism within the 4D parallelism framework |
| 5 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses MoE training efficiency including expert placement |

## LLM-OPT-010 — 3D/4D Parallelism Composition
Subtopics: combining TP + PP + DP; 4D parallelism with expert parallel; device mesh mapping; communication hierarchy

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Megatron-LM Parallelism Guide | https://github.com/NVIDIA/Megatron-LM/blob/main/docs/user-guide/parallelism-guide.md | Docs | Official guide with LLaMA-3.1 405B 3D parallelism config on 1024 GPUs |
| 2 | The LLM Scaling Hierarchy | https://akashsahani2001.medium.com/the-llm-scaling-hierarchy-mastering-every-dimension-of-parallelism-67937ae1d78e | Blog | Full walkthrough of 3D/4D parallelism composition |
| 3 | Distributed LLM Training Guide | https://www.spheron.network/blog/distributed-llm-training-fsdp-deepspeed-megatron-multi-node/ | Blog | Covers multi-node composition of parallelism strategies |
| 4 | Hugging Face — Efficient Training on Multiple GPUs | https://huggingface.co/docs/transformers/en/perf_train_gpu_many | Docs | Covers combining multiple parallelism strategies |
| 5 | Chip Huyen — AI Engineering (Ch. 9 summary) | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers parallelism hierarchy from Chip Huyen's book |
