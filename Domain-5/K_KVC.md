# Category K — KV Cache and Memory Optimization

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-KVC-001 — KV Cache Fundamentals
Subtopics: why cache K/V tensors; cache growth with sequence length; memory footprint calculation; cache layout

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Clear explanation of KV cache purpose, growth, and memory layout |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers KV cache as the main memory bottleneck in inference |
| 3 | vLLM Explained: PagedAttention and Continuous Batching | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Explains KV cache fragmentation and management |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers KV cache fundamentals from the inference chapter |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers inference fundamentals including caching |

## LLM-KVC-002 — MHA vs MQA vs GQA vs MLA Cache Memory Comparison
Subtopics: KV cache size under each attention variant; memory reduction ratios; quality-memory trade-off

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Grouped-Query Attention (GQA) Explained | https://aiexpjourney.substack.com/p/grouped-query-attention-gqa-explained-5f3dbbfe013b | Blog | Compares KV cache sizes across MHA, MQA, and GQA |
| 2 | What is GQA and Why Do LLMs Use It? | https://outcomeschool.com/blog/grouped-query-attention | Blog | Shows KV cache memory reduction from MHA to GQA |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers memory comparison across attention variants |
| 4 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows attention variant choices and their cache implications |
| 5 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Discusses cache size under different attention configurations |

## LLM-KVC-003 — PagedAttention
Subtopics: OS virtual memory analogy; non-contiguous KV blocks; block tables; memory fragmentation elimination

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | vLLM Explained: PagedAttention and Continuous Batching | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Best explanation of PagedAttention with virtual memory analogy |
| 2 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Covers fixed-size KV blocks and logical-to-physical mapping |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers PagedAttention within inference optimization |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers PagedAttention from the book |
| 5 | vLLM vs SGLang vs TensorRT-LLM | https://inferenceengineering.tech/learn/vllm-vs-sglang-vs-tensorrt-llm/ | Blog | Discusses PagedAttention's role in vLLM's design |

## LLM-KVC-004 — Prefix Caching and RadixAttention
Subtopics: sharing KV blocks for common prefixes; radix tree for prefix lookup; cache hit rates; system prompt caching

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Covers prefix caching and shared KV blocks for common prompts |
| 2 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Reports 90-97% cache hit rates in production systems |
| 3 | SGLang vs vLLM vs TensorRT-LLM | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Benchmarks showing prefix caching performance in SGLang |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers prompt caching strategies |
| 5 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Discusses prefix sharing in KV cache management |

## LLM-KVC-005 — KV Cache Quantization
Subtopics: quantizing cached K/V to INT8/INT4; quality impact; per-head vs per-token quantization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers KV cache quantization strategies |
| 2 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | Benchmarks KV cache quantization impact on quality |
| 3 | Quantization for Inference: GPTQ, AWQ, SmoothQuant, FP8 | https://www.generalcompute.com/blog/quantization-for-inference-gptq-awq-smoothquant-fp8 | Blog | Covers quantization approaches applicable to KV cache |
| 4 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Discusses cache compression including quantization |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers quantization as an inference optimization |

## LLM-KVC-006 — KV Cache Eviction Policies: StreamingLLM and H2O
Subtopics: attention sink tokens; eviction based on attention scores; sliding window + sink approach; heavy-hitter oracle

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers attention sink and eviction strategies |
| 2 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses memory optimization including cache eviction |
| 3 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Covers eviction policies for managing cache memory |
| 4 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses cache management strategies in vLLM |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers cache management from the inference chapter |

## LLM-KVC-007 — KV Cache Compression: SnapKV and PyramidKV
Subtopics: attention-based compression; selecting important KV entries; layer-adaptive budget; progressive compression

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers KV compression approaches |
| 2 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses attention-based memory compression |
| 3 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Covers cache compression strategies |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers memory optimization techniques |
| 5 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | Discusses cache compression in the context of quantization |

## LLM-KVC-008 — Static vs Dynamic KV Cache Allocation
Subtopics: pre-allocated fixed cache; dynamic growth; memory pools; waste from static allocation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | vLLM Explained: PagedAttention | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Contrasts static allocation waste with PagedAttention's dynamic approach |
| 2 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Discusses static vs dynamic cache allocation strategies |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers memory management for KV caches |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Discusses cache allocation from the inference chapter |
| 5 | vLLM vs SGLang vs TensorRT-LLM | https://inferenceengineering.tech/learn/vllm-vs-sglang-vs-tensorrt-llm/ | Blog | Compares memory management across serving frameworks |

## LLM-KVC-009 — GPU/CPU KV Cache Offloading
Subtopics: offloading cache to CPU memory; NVMe offloading; PCIe bandwidth constraints; when to offload

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers CPU/NVMe offloading for inference |
| 2 | FSDP vs DeepSpeed | https://romeokienzler.medium.com/fsdp-vs-deepspeed-9df47ee5ccbb | Blog | Discusses CPU/NVMe offloading capabilities |
| 3 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses offloading in vLLM's memory management |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers offloading strategies from the inference chapter |
| 5 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Discusses multi-tier cache storage |

## LLM-KVC-010 — Distributed KV Cache Transfer and Cache-Aware Scheduling
Subtopics: transferring KV cache between nodes; cache-aware request routing; migration cost; distributed caching

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers cache-aware scheduling and distributed serving |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses distributed inference considerations |
| 3 | SGLang vs vLLM vs TensorRT-LLM | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Covers distributed scheduling across frameworks |
| 4 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses multi-node cache management in vLLM |
| 5 | vLLM vs TensorRT-LLM vs SGLang | https://www.spheron.network/blog/vllm-vs-tensorrt-llm-vs-sglang-benchmarks/ | Blog | Covers distributed serving benchmarks |
