# Category D — Advanced Architectures and MoE

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-ARC-001 — Mixture-of-Experts Fundamentals
Subtopics: sparse MoE layer; router/gating network; top-k expert selection; conditional computation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — Mixture of Experts Explained | https://huggingface.co/blog/moe | Blog | Comprehensive MoE overview with routing diagrams and code examples |
| 2 | Sebastian Raschka — Mixture-of-Experts vs Dense LLMs | https://sebastianraschka.com/faq/docs/mixture-of-experts.html | Blog | Clear comparison of MoE and dense models with architecture diagrams |
| 3 | What is Mixture of Experts and How Does It Work? | https://outcomeschool.com/blog/mixture-of-experts | Blog | Beginner-friendly walkthrough of router, top-k selection, and conditional compute |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers MoE as a Transformer variant with efficiency analysis |
| 5 | MoE Explained Simply | https://dev.to/shrsv/mixture-of-experts-moe-explained-simply-how-modern-ai-models-get-bigger-without-getting-slower-25mm | Blog | Accessible intro to MoE architecture and sparsity benefits |

## LLM-ARC-002 — MoE Load Balancing and Routing
Subtopics: auxiliary load-balancing loss; expert capacity; token-choice vs expert-choice routing; Switch Transformer routing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — Mixture of Experts Explained | https://huggingface.co/blog/moe | Blog | Covers load-balancing loss, capacity factor, and routing strategies |
| 2 | Mixture of Experts — From the Router Up | https://medium.com/@cosmicray001/mixture-of-experts-from-the-router-up-5c70caf9ea4b | Blog | Detailed routing math and DeepSeek-V3's auxiliary-loss-free approach |
| 3 | Sebastian Raschka — Mixture-of-Experts vs Dense LLMs | https://sebastianraschka.com/faq/docs/mixture-of-experts.html | Blog | Discusses routing variants and load balance trade-offs |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews Switch Transformer and expert-choice routing |
| 5 | MoE: Scaling AI Models with Smarter Routing | https://medium.com/online-inference/mixture-of-experts-moe-scaling-ai-models-with-smarter-routing-df48222f8ff9 | Blog | Focuses on routing algorithms and their impact on throughput |

## LLM-ARC-003 — DeepSeekMoE and Fine-Grained Expert Architectures
Subtopics: fine-grained experts; shared vs routed experts; DeepSeek-V2/V3 architecture choices

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents DeepSeek-V2/V3 architecture with expert counts |
| 2 | Hugging Face Blog — Mixture of Experts Explained | https://huggingface.co/blog/moe | Blog | Covers fine-grained expert design and shared experts |
| 3 | Mixture of Experts — From the Router Up | https://medium.com/@cosmicray001/mixture-of-experts-from-the-router-up-5c70caf9ea4b | Blog | Discusses DeepSeek routing and auxiliary-loss-free training |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews MoE architecture evolution and design choices |
| 5 | What is Mixture of Experts and How Does It Work? | https://outcomeschool.com/blog/mixture-of-experts | Blog | Covers expert granularity and shared-expert concepts |

## LLM-ARC-004 — Sliding-Window and Local Attention
Subtopics: fixed-window attention; Mistral-style sliding window; dilated sliding window; local + global patterns

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers sliding-window, local, and sparse attention variants in depth |
| 2 | Lilian Weng — The Transformer Family (2020) | https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/ | Blog | Original coverage of Longformer-style local+global attention |
| 3 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows Mistral's sliding-window attention configuration |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses sliding-window attention for inference efficiency |
| 5 | d2l.ai — The Transformer Architecture | https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html | Tutorial | Baseline full attention to contrast with local variants |

## LLM-ARC-005 — Sparse and Block-Sparse Attention Patterns
Subtopics: fixed sparse patterns; strided attention; BigBird random+window+global; block-sparse computation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Comprehensive review of sparse attention patterns including BigBird |
| 2 | Lilian Weng — The Transformer Family (2020) | https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/ | Blog | Covers strided and fixed sparse patterns |
| 3 | Hugging Face — Efficient Transformers | https://huggingface.co/docs/transformers/en/perf_train_gpu_many | Docs | Discusses block-sparse attention in practice |
| 4 | d2l.ai — Multi-Head Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html | Tutorial | Foundation for understanding attention patterns being sparsified |
| 5 | Google Research Blog — Big Bird: Transformers for Longer Sequences | https://research.google/blog/big-bird-transformers-for-longer-sequences/ | Blog | Google's overview of BigBird's random+window+global pattern |

## LLM-ARC-006 — Linear Attention Mechanisms
Subtopics: kernel-based attention; linear complexity; feature map approximations; random feature attention

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews linear attention and kernel-based approximations |
| 2 | Lilian Weng — The Transformer Family (2020) | https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/ | Blog | Covers Performers and random feature attention |
| 3 | d2l.ai — Attention Scoring Functions | https://d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html | Tutorial | Covers attention scoring that linear attention approximates |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses linear attention for efficient inference |
| 5 | Google Research Blog — Rethinking Attention with Performers | https://research.google/blog/rethinking-attention-with-performers/ | Blog | Google's overview of FAVOR+ random feature attention |

## LLM-ARC-007 — State-Space Models: Mamba and Mamba-2
Subtopics: S4 structured state spaces; selective scan mechanism; Mamba architecture; hardware-aware parallel scan; Mamba-2

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | A Visual Guide to Mamba and State Space Models | https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state | Blog | Most visual Mamba explainer with selective copying examples |
| 2 | Mamba for Dummies: Efficient Linear-Time LLMs | https://michielh.medium.com/mamba-for-dummies-linear-time-llms-explained-0d4b51efcf9f | Blog | Accessible intro explaining selection mechanism and linear scaling |
| 3 | Here Comes Mamba: The Selective State Space Model | https://towardsdatascience.com/here-comes-mamba-the-selective-state-space-model-435e5d17a451/ | Blog | Detailed math coverage including the parallel associative scan |
| 4 | The Annotated S4 | https://srush.github.io/annotated-s4/ | Tutorial | Sasha Rush's implementation walkthrough of S4 (Mamba's predecessor) |
| 5 | Aman's AI Journal — State Space Models | https://aman.ai/primers/ai/state-space-models/ | Blog | Comprehensive primer covering S4 through Mamba |

## LLM-ARC-008 — Gated DeltaNet and Modern Linear-Recurrent Architectures
Subtopics: DeltaNet; gated linear recurrence; RWKV; Griffin; linear RNNs for LLMs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews recurrent and linear-complexity alternatives to attention |
| 2 | A Visual Guide to Mamba and State Space Models | https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state | Blog | Covers the lineage from S4 to modern linear recurrences |
| 3 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents RWKV, Griffin, and other linear-recurrent models |
| 4 | Aman's AI Journal — State Space Models | https://aman.ai/primers/ai/state-space-models/ | Blog | Covers the evolution from SSMs to gated linear recurrences |
| 5 | d2l.ai — Recurrent Neural Networks | https://d2l.ai/chapter_recurrent-neural-networks/index.html | Tutorial | Foundation for understanding recurrent architectures being modernized |

## LLM-ARC-009 — Hybrid Attention/SSM Architectures
Subtopics: interleaving attention and SSM layers; Jamba; Zamba; Nemotron-H; when to mix

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents Jamba, Zamba, and hybrid architectures with layer patterns |
| 2 | A Visual Guide to Mamba and State Space Models | https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state | Blog | Discusses hybrid approaches combining attention and SSM |
| 3 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews hybrid architecture design choices |
| 4 | Hugging Face Blog — Mixture of Experts Explained | https://huggingface.co/blog/moe | Blog | Covers Jamba's MoE+SSM hybrid design |
| 5 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses inference trade-offs of hybrid architectures |

## LLM-ARC-010 — Cross-Layer and Cross-Head KV Sharing
Subtopics: sharing KV projections across layers; cross-layer attention; parameter reduction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers KV sharing strategies across layers and heads |
| 2 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents KV sharing in DeepSeek and other architectures |
| 3 | Grouped-Query Attention (GQA) Explained | https://aiexpjourney.substack.com/p/grouped-query-attention-gqa-explained-5f3dbbfe013b | Blog | Covers head-level KV sharing that extends to cross-layer sharing |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses memory reduction from KV sharing during inference |
| 5 | d2l.ai — Multi-Head Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html | Tutorial | Baseline for understanding the projection parameters being shared |

## LLM-ARC-011 — Long-Context Architecture Techniques
Subtopics: context window extension; RoPE scaling (NTK, YaRN); ring attention; infinite context approaches

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers long-context extensions and memory-augmented attention |
| 2 | Inside RoPE: Rotary Magic into Position Embeddings | https://learnopencv.com/rope-position-embeddings/ | Blog | Covers RoPE frequency scaling for context extension |
| 3 | In-depth Exploration of RoPE | https://aiexpjourney.substack.com/p/an-in-depth-exploration-of-rotary-position-embedding-rope-ac351a45c794 | Blog | Discusses NTK-aware scaling and YaRN for longer contexts |
| 4 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents context lengths across modern architectures |
| 5 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses long-context efficiency and ring attention |
