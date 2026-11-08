# Category L — Inference Kernels and Hardware

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-KRN-001 — FlashAttention
Subtopics: IO-aware attention; tiling for SRAM; online softmax; fused kernel; memory complexity reduction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — FlashAttention: Making Attention I/O-Aware | https://huggingface.co/blog/garg-aayush/flash-attention | Blog | Comprehensive walkthrough of IO-aware tiling and online softmax |
| 2 | Why FlashAttention? GPU Memory Bandwidth and Tiling | https://medium.com/@katherineolowookere/why-flashattention-4b0f6cca8653 | Blog | Explains the GPU memory hierarchy motivation for FlashAttention |
| 3 | How FlashAttention Works: Tiling, SRAM Reuse | https://dev.to/syed_anzar/how-flashattention-actually-works-tiling-sram-reuse-and-why-its-10x-faster-1h20 | Blog | Clear explanation of tiling, SRAM reuse, and backward pass recomputation |
| 4 | FlashAttention from First Principles | https://medium.com/@nandpatel1456/flashattention-from-first-principles-io-aware-exact-attention-via-tiling-and-recomputation-1a824ce1aec1 | Blog | Derives FlashAttention from IO complexity analysis |
| 5 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers FlashAttention within inference optimization |
| 6 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers FlashAttention from the inference chapter |

## LLM-KRN-002 — FlashAttention-2 and FlashAttention-3
Subtopics: parallelism over sequence length; reduced non-matmul FLOPs; FP8 support; asynchronous softmax

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — FlashAttention | https://huggingface.co/blog/garg-aayush/flash-attention | Blog | Covers evolution from FlashAttention to FA-2 improvements |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses FlashAttention improvements |
| 3 | How FlashAttention Works | https://dev.to/syed_anzar/how-flashattention-actually-works-tiling-sram-reuse-and-why-its-10x-faster-1h20 | Blog | Covers tiling improvements in newer versions |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers FlashAttention variants from the book |
| 5 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | Discusses FP8 support in the context of FlashAttention |

## LLM-KRN-003 — Flash-Decoding and FlashInfer
Subtopics: parallelizing over KV length during decode; FlashInfer library; decode-optimized kernels

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers decode-phase optimization strategies |
| 2 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses decode-optimized kernels in vLLM |
| 3 | SGLang vs vLLM vs TensorRT-LLM | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Benchmarks decode performance across frameworks |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers decode optimization from the inference chapter |
| 5 | Chip Huyen — P99 CONF: Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Discusses decode-phase optimizations |

## LLM-KRN-004 — CUDA and Triton Kernel Programming for LLM Inference
Subtopics: writing custom CUDA kernels; Triton language; kernel fusion; thread block design; shared memory usage

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenAI Triton Tutorials | https://triton-lang.org/main/getting-started/tutorials/index.html | Tutorial | Official Triton tutorials including matrix multiplication and softmax |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses kernel fusion and custom kernel optimization |
| 3 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers GPU computation fundamentals |
| 4 | FlashAttention from First Principles | https://medium.com/@nandpatel1456/flashattention-from-first-principles-io-aware-exact-attention-via-tiling-and-recomputation-1a824ce1aec1 | Blog | Shows kernel design principles applied to attention |
| 5 | Hugging Face Blog — FlashAttention | https://huggingface.co/blog/garg-aayush/flash-attention | Blog | Covers fused kernel design for attention |

## LLM-KRN-005 — GPU Memory Hierarchy and Roofline Modeling
Subtopics: HBM/SRAM/registers; memory bandwidth vs compute throughput; arithmetic intensity; roofline model

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Why FlashAttention? GPU Memory Bandwidth and Tiling | https://medium.com/@katherineolowookere/why-flashattention-4b0f6cca8653 | Blog | Explains GPU memory hierarchy (HBM, SRAM) with FlashAttention context |
| 2 | Hugging Face Blog — FlashAttention | https://huggingface.co/blog/garg-aayush/flash-attention | Blog | Covers memory hierarchy motivation for IO-aware kernels |
| 3 | How FlashAttention Works | https://dev.to/syed_anzar/how-flashattention-actually-works-tiling-sram-reuse-and-why-its-10x-faster-1h20 | Blog | Explains SRAM reuse and memory bandwidth constraints |
| 4 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers GPU hardware fundamentals and performance modeling |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers hardware considerations from the inference chapter |

## LLM-KRN-006 — CUDA Graphs for Inference
Subtopics: capturing kernel launch sequences; reducing CPU overhead; static computation graphs; limitations with dynamic shapes

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers CUDA graphs for reducing kernel launch overhead |
| 2 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses CUDA graphs in vLLM's serving pipeline |
| 3 | SGLang vs vLLM vs TensorRT-LLM | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Covers CUDA graph impact on latency benchmarks |
| 4 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers GPU programming and optimization fundamentals |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers inference optimization techniques from the book |

## LLM-KRN-007 — Performance Profiling for LLM Inference
Subtopics: NVIDIA Nsight Systems/Compute; PyTorch profiler; identifying memory-bound vs compute-bound kernels; bottleneck analysis

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses profiling and bottleneck identification |
| 2 | Chip Huyen — P99 CONF: Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers profiling and optimization at the service level |
| 3 | d2l.ai — Computational Performance | https://d2l.ai/chapter_computational-performance/index.html | Tutorial | Covers profiling tools and performance analysis |
| 4 | Hugging Face — Efficient Training on a Single GPU | https://huggingface.co/docs/transformers/en/perf_train_gpu_one | Docs | Covers PyTorch profiler integration with Transformers |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers profiling from the inference optimization chapter |
