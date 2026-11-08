# Category J — LLM Inference Fundamentals

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-INF-001 — Prefill vs Decode Phases
Subtopics: prompt processing (prefill); autoregressive token generation (decode); compute-bound vs memory-bound phases; TTFT vs TPS

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Definitive coverage of prefill/decode phases and their bottlenecks |
| 2 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers TTFT, TPS, and prefill/decode splitting |
| 3 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Summarizes inference phases and their optimization |
| 4 | vLLM Explained: PagedAttention and Continuous Batching | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Explains prefill/decode in context of serving systems |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers inference fundamentals for language models |

## LLM-INF-002 — Decoding/Sampling Algorithms
Subtopics: greedy decoding; top-k sampling; top-p (nucleus) sampling; temperature scaling; min-p sampling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face — Generation Strategies | https://huggingface.co/docs/transformers/en/generation_strategies | Docs | Comprehensive guide to all decoding strategies with code |
| 2 | The Illustrated GPT-2 | https://jalammar.github.io/illustrated-gpt2/ | Blog | Visual explanation of autoregressive generation and sampling |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers sampling algorithms and their trade-offs |
| 4 | d2l.ai — Sequence Generation | https://d2l.ai/chapter_recurrent-neural-networks/sequence.html | Tutorial | Covers sampling strategies for sequence generation |
| 5 | Chip Huyen — Building LLM Applications for Production | https://huyenchip.com/2023/04/11/llm-engineering.html | Blog | Discusses sampling parameters and their impact |

## LLM-INF-003 — Beam Search and Structured Decoding
Subtopics: beam search; beam width trade-offs; length normalization; constrained beam search

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face — Generation Strategies | https://huggingface.co/docs/transformers/en/generation_strategies | Docs | Covers beam search configuration including length penalty |
| 2 | d2l.ai — Beam Search | https://d2l.ai/chapter_recurrent-modern/beam-search.html | Tutorial | Textbook treatment of beam search with illustrations |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses structured decoding approaches |
| 4 | Constrained Decoding: Forcing LLM Output to a Grammar | https://zeroentropy.dev/concepts/constrained-decoding/ | Blog | Covers grammar-constrained decoding with state machines |
| 5 | How Structured Outputs and Constrained Decoding Work | https://letsdatascience.com/blog/structured-outputs-making-llms-return-reliable-json | Blog | Explains JSON schema enforcement through constrained beam search |

## LLM-INF-004 — Static and Continuous Batching
Subtopics: static batching limitations; continuous/in-flight batching; iteration-level scheduling; padding waste

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | vLLM Explained: PagedAttention and Continuous Batching | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Clear explanation of continuous batching vs static batching |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers batching strategies for inference efficiency |
| 3 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Discusses dynamic and continuous batching as service-level optimizations |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers batching strategies from Chip Huyen's book |
| 5 | KV Cache Explained | https://cloudthrill.ca/kv_cache-explained | Blog | Explains how batching interacts with KV cache management |

## LLM-INF-005 — Chunked Prefill
Subtopics: splitting long prefills into chunks; interleaving prefill and decode; latency smoothing; SarathiServe approach

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers prefill optimization strategies |
| 2 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Discusses prefill scheduling in vLLM's architecture |
| 3 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers splitting prefill from decode across machines |
| 4 | SGLang vs vLLM vs TensorRT-LLM Comparison | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Benchmarks showing chunked prefill impact on latency |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers prefill optimization from the inference chapter |

## LLM-INF-006 — Speculative Decoding Fundamentals
Subtopics: draft-then-verify paradigm; rejection sampling; draft model selection; speedup guarantees

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Speculative Decoding Explained: 3× Faster Inference | https://machinelearningmastery.com/speculative-decoding-explained-how-to-get-3x-faster-inference-from-any-llm/ | Blog | Clear explanation of draft-verify paradigm with rejection sampling |
| 2 | Speculative Decoding in vLLM: Complete Guide | https://jarvislabs.ai/blog/speculative-decoding-vllm-faster-llm-inference | Blog | Practical guide to speculative decoding with vLLM deployment |
| 3 | Speculative Decoding: Guide with Implementation | https://www.datacamp.com/tutorial/speculative-decoding | Tutorial | Tutorial with implementation examples and trade-off analysis |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers speculative decoding within inference optimization |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers speculative decoding as an inference technique |

## LLM-INF-007 — Medusa and Multi-Head Speculative Decoding
Subtopics: multiple prediction heads; tree-based verification; no separate draft model; parallel candidate generation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers multi-head and tree-based speculative approaches |
| 2 | Speculative Decoding Explained | https://machinelearningmastery.com/speculative-decoding-explained-how-to-get-3x-faster-inference-from-any-llm/ | Blog | Discusses Medusa and multi-head prediction within speculative decoding |
| 3 | Speculative Decoding in vLLM | https://jarvislabs.ai/blog/speculative-decoding-vllm-faster-llm-inference | Blog | Covers Medusa integration in vLLM serving |
| 4 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Discusses speculative decoding variants |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers speculative decoding variants from the book |

## LLM-INF-008 — EAGLE and Feature-Level Speculative Decoding
Subtopics: feature-level draft generation; EAGLE architecture; autoregression on hidden states; EAGLE-2 improvements

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers advanced speculative decoding approaches |
| 2 | Speculative Decoding Explained | https://machinelearningmastery.com/speculative-decoding-explained-how-to-get-3x-faster-inference-from-any-llm/ | Blog | Discusses feature-level approaches within speculative decoding |
| 3 | Speculative Decoding in vLLM | https://jarvislabs.ai/blog/speculative-decoding-vllm-faster-llm-inference | Blog | Covers EAGLE and feature-level speculation in vLLM |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers feature-level speculative decoding |
| 5 | Speculative Decoding Guide | https://www.datacamp.com/tutorial/speculative-decoding | Tutorial | Covers various speculative decoding architectures |

## LLM-INF-009 — Multi-Token Prediction
Subtopics: predicting multiple future tokens simultaneously; training objectives for multi-token prediction; inference speedups

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses parallel prediction approaches for inference |
| 2 | Speculative Decoding Explained | https://machinelearningmastery.com/speculative-decoding-explained-how-to-get-3x-faster-inference-from-any-llm/ | Blog | Covers multi-token generation within speculative decoding |
| 3 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Discusses inference compute optimization through parallel generation |
| 4 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents models using multi-token prediction |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers generation strategies for LLMs |

## LLM-INF-010 — Disaggregated Prefill/Decode Serving
Subtopics: separating prefill and decode onto different hardware; prefill cluster + decode cluster; PD disaggregation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers splitting prefill from decode across machines |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses disaggregated serving architectures |
| 3 | vLLM Explained | https://www.runpod.io/articles/guides/vllm-pagedattention-continuous-batching | Blog | Covers prefill/decode scheduling in serving systems |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers disaggregated inference from the book |
| 5 | SGLang vs vLLM vs TensorRT-LLM | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | Benchmarks comparing serving architectures |

## LLM-INF-011 — Latency/Throughput Trade-offs and Serving Metrics
Subtopics: TTFT; TPS/TPOT; goodput; SLO targets; tokens-per-second vs requests-per-second; cost-per-token

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers TTFT, goodput, and serving metric definitions |
| 2 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses latency and throughput trade-offs |
| 3 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers serving metrics and SLO considerations |
| 4 | SGLang vs vLLM vs TensorRT-LLM Benchmarks | https://jarvislabs.ai/blog/vllm-sglang-trtllm-comparison | Blog | H100 benchmarks comparing latency/throughput across frameworks |
| 5 | vLLM vs TensorRT-LLM Benchmarks | https://www.spheron.network/blog/vllm-vs-tensorrt-llm-vs-sglang-benchmarks/ | Blog | Detailed latency and throughput benchmark comparisons |
