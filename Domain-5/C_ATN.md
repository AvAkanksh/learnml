# Category C — Attention and Positional Encoding

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-ATN-001 — Scaled Dot-Product Attention Mechanics
Subtopics: Q/K/V matrices; dot-product scoring; softmax normalization; √d scaling; attention weights

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Best visual walkthrough of Q/K/V, dot-product scoring, and softmax |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements scaled dot-product attention as a short PyTorch function |
| 3 | Lilian Weng — Attention? Attention! | https://lilianweng.github.io/posts/2018-06-24-attention/ | Blog | Comprehensive attention overview including scaled dot-product mechanics |
| 4 | Stanford CS224N Lecture 8 — Transformers (2024) | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/slides/cs224n-2024-lecture08-transformers.pdf | Slides | Stanford slides deriving attention from the RNN bottleneck |
| 5 | d2l.ai — Attention Scoring Functions | https://d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html | Tutorial | Textbook treatment of dot-product vs additive attention with code |
| 6 | UvA Deep Learning — Transformers Tutorial | https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial6/Transformers_and_MHAttention.html | Tutorial | Implements attention from scratch with PyTorch and visualizations |

## LLM-ATN-002 — Multi-Head Attention (MHA)
Subtopics: parallel heads; concatenation and linear projection; per-head dimensionality; learned specialization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Clearest visual explanation of multi-head attention with head concatenation |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements MultiHeadedAttention class with projection layers |
| 3 | Lilian Weng — Attention? Attention! | https://lilianweng.github.io/posts/2018-06-24-attention/ | Blog | Covers multi-head attention mechanics and learned specialization |
| 4 | d2l.ai — Multi-Head Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html | Tutorial | Textbook implementation of MHA with per-head dimensionality discussion |
| 5 | Stanford CS224N Lecture 8 — Transformers (2024) | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/slides/cs224n-2024-lecture08-transformers.pdf | Slides | Covers MHA in the context of the full Transformer |

## LLM-ATN-003 — Multi-Query Attention (MQA)
Subtopics: shared K/V heads; memory savings during inference; quality vs efficiency trade-off

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Grouped-Query Attention (GQA) Explained | https://aiexpjourney.substack.com/p/grouped-query-attention-gqa-explained-5f3dbbfe013b | Blog | Covers MQA as a special case of GQA with diagrams |
| 2 | What is Grouped Query Attention and Why Do LLMs Use It? | https://outcomeschool.com/blog/grouped-query-attention | Blog | Beginner-friendly walkthrough comparing MHA, MQA, and GQA |
| 3 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews MQA as a Transformer variant with efficiency analysis |
| 4 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows which models use MQA vs MHA vs GQA |
| 5 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses MQA in the context of inference memory optimization |

## LLM-ATN-004 — Grouped-Query Attention (GQA)
Subtopics: groups of query heads sharing K/V; interpolation between MHA and MQA; uptraining from MHA

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Grouped-Query Attention (GQA) Explained | https://aiexpjourney.substack.com/p/grouped-query-attention-gqa-explained-5f3dbbfe013b | Blog | Ties GQA theory to Llama 2 code with hand-drawn diagrams |
| 2 | What is Grouped Query Attention and Why Do LLMs Use It? | https://outcomeschool.com/blog/grouped-query-attention | Blog | Clear side-by-side comparison of MHA, MQA, and GQA variants |
| 3 | Demystifying GQA — Grouped Query Attention | https://towardsdatascience.com/demystifying-gqa-grouped-query-attention-3fb97b678e4a/ | Blog | Mathematical framing with mean-pooling conversion from MHA |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers GQA alongside other Transformer efficiency variants |
| 5 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows GQA group counts across Llama, Mistral, and other models |

## LLM-ATN-005 — Multi-Head Latent Attention (MLA)
Subtopics: low-rank KV compression; latent vectors; DeepSeek-V2 design

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews advanced attention variants including compression techniques |
| 2 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents DeepSeek-V2's MLA design alongside other attention variants |
| 3 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers KV compression for efficient inference |
| 4 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Foundation for understanding the attention mechanism MLA modifies |
| 5 | d2l.ai — Multi-Head Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html | Tutorial | Baseline MHA implementation to contrast with MLA's compression |

## LLM-ATN-006 — Sinusoidal and Learned Positional Encodings
Subtopics: sine/cosine position encoding; learned position embeddings; absolute vs relative position

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Clear visual explanation of sinusoidal positional encoding |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements PositionalEncoding with sine/cosine and visualization |
| 3 | d2l.ai — Self-Attention and Positional Encoding | https://d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html | Tutorial | Covers both absolute and relative positional encodings with code |
| 4 | Positional Embeddings in Transformers: A Math Guide to RoPE & ALiBi | https://towardsdatascience.com/positional-embeddings-in-transformers-a-math-guide-to-rope-alibi/ | Blog | Math-focused comparison of positional encoding methods |
| 5 | Stanford CS224N Lecture 8 — Transformers (2024) | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/slides/cs224n-2024-lecture08-transformers.pdf | Slides | Stanford slides covering positional encoding design choices |

## LLM-ATN-007 — Rotary Position Embeddings (RoPE)
Subtopics: rotation matrix applied to Q/K; relative position via dot-product decay; frequency bands; long-context extrapolation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Inside RoPE: Rotary Magic into Position Embeddings | https://learnopencv.com/rope-position-embeddings/ | Blog | Most plot-heavy RoPE explainer with per-dimension polar visualizations |
| 2 | Understanding RoPE: A Visual Guide | https://medium.com/@saeed.mehrang/understanding-rotary-position-embeddings-rope-a-visual-guide-ef8319353ddb | Blog | Visual guide using clock analogy for multi-frequency channels |
| 3 | In-depth Exploration of RoPE | https://aiexpjourney.substack.com/p/an-in-depth-exploration-of-rotary-position-embedding-rope-ac351a45c794 | Blog | Mathematical derivation from 2D case to high dimensions with Llama code |
| 4 | Sebastian Raschka — Rotary Positional Embeddings (RoPE) | https://sebastianraschka.com/llms-from-scratch/ch04/10_rope/ | Tutorial | Code-oriented RoPE explanation from the LLM-from-scratch book |
| 5 | What is RoPE? The Math Behind It | https://outcomeschool.com/blog/math-behind-rope-rotary-position-embedding | Blog | Plain-language walkthrough of 2D rotation with ASCII diagrams |
| 6 | Positional Embeddings: A Math Guide to RoPE & ALiBi | https://towardsdatascience.com/positional-embeddings-in-transformers-a-math-guide-to-rope-alibi/ | Blog | Math-focused comparison of RoPE and ALiBi |

## LLM-ATN-008 — ALiBi and Relative Position Biases
Subtopics: linear bias added to attention scores; no trainable parameters; length extrapolation; per-head slopes

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Positional Embeddings: A Math Guide to RoPE & ALiBi | https://towardsdatascience.com/positional-embeddings-in-transformers-a-math-guide-to-rope-alibi/ | Blog | Detailed mathematical treatment of ALiBi alongside RoPE |
| 2 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers ALiBi as a relative position bias variant |
| 3 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows which models use ALiBi vs RoPE vs sinusoidal |
| 4 | d2l.ai — Self-Attention and Positional Encoding | https://d2l.ai/chapter_attention-mechanisms-and-transformers/self-attention-and-positional-encoding.html | Tutorial | Covers relative position concepts that ALiBi builds on |
| 5 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Baseline for understanding positional encoding that ALiBi replaces |

## LLM-ATN-009 — Attention Masking Variants
Subtopics: causal mask; bidirectional mask; prefix mask; cross-attention mask; sliding-window mask

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated GPT-2 | https://jalammar.github.io/illustrated-gpt2/ | Blog | Visual explanation of causal masking in decoder-only models |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements subsequent_mask function for causal masking |
| 3 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Shows encoder-decoder masking and cross-attention patterns |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers sliding-window and local attention masking variants |
| 5 | d2l.ai — The Transformer Architecture | https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html | Tutorial | Implements attention masking in encoder-decoder context |
