# Category B — Transformer Fundamentals

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-TRF-001 — Original Transformer Architecture
Subtopics: encoder-decoder structure; self-attention; cross-attention; positional encoding; masked multi-head attention

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Jay Alammar's definitive visual guide to the Transformer architecture |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Harvard NLP's line-by-line PyTorch implementation of the original paper |
| 3 | Stanford CS224N Lecture 8 — Transformers (2024) | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/slides/cs224n-2024-lecture08-transformers.pdf | Slides | Stanford slides covering self-attention and Transformer architecture |
| 4 | Lilian Weng — Attention? Attention! | https://lilianweng.github.io/posts/2018-06-24-attention/ | Blog | Comprehensive overview of attention mechanisms leading to the Transformer |
| 5 | d2l.ai — The Transformer Architecture | https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html | Tutorial | Textbook treatment with diagrams and runnable code |
| 6 | UvA Deep Learning — Transformers and Multi-Head Attention | https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial6/Transformers_and_MHAttention.html | Tutorial | University of Amsterdam PyTorch tutorial with full implementation |
| 7 | Stanford CS224N Lecture 8 — Transformers (Spring 2024) | https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture08-transformers.pdf | Slides | Anna Goldie's updated Stanford slides on Transformers |
| 8 | Hugging Face — How Do Transformers Work? | https://huggingface.co/learn/llm-course/en/chapter2/2 | Tutorial | Accessible introduction from the HF LLM course |

## LLM-TRF-002 — Decoder-only Architecture (GPT-style)
Subtopics: causal masking; autoregressive generation; GPT-2/3 design; next-token prediction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated GPT-2 | https://jalammar.github.io/illustrated-gpt2/ | Blog | Visual walkthrough of decoder-only architecture, causal masking, and generation |
| 2 | Andrej Karpathy — Neural Networks: Zero to Hero | https://karpathy.ai/zero-to-hero.html | Tutorial | Build GPT from scratch video series with complete code |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Book building a complete GPT-style model in PyTorch |
| 4 | Hugging Face — Causal Language Modeling | https://huggingface.co/docs/transformers/en/tasks/language_modeling | Tutorial | Practical guide to training and using decoder-only models |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Textbook coverage of GPT-style pretraining and generation |
| 6 | Stanford CS224N Lecture 5 — Transformers (2026) | https://web.stanford.edu/class/cs224n/slides_w26/cs224n-2026-lecture05-transformers.pdf | Slides | Latest Stanford slides covering decoder-only design |

## LLM-TRF-003 — Encoder-only Architecture (BERT-style)
Subtopics: bidirectional context; [CLS] token; next sentence prediction; masked LM pretraining

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated BERT | https://jalammar.github.io/illustrated-bert/ | Blog | Visual guide to BERT's masked LM, NSP, and bidirectional context |
| 2 | d2l.ai — BERT | https://d2l.ai/chapter_natural-language-processing-pretraining/bert.html | Tutorial | Textbook treatment of BERT pretraining objectives with code |
| 3 | Hugging Face — Masked Language Modeling | https://huggingface.co/docs/transformers/en/tasks/masked_language_modeling | Tutorial | Hands-on guide to training and using encoder-only models |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Comprehensive review covering BERT-style variants |
| 5 | Hugging Face NLP Course — Encoder Models | https://huggingface.co/learn/nlp-course/chapter1/5 | Tutorial | Accessible intro to encoder-only models and their strengths |

## LLM-TRF-004 — Feed-Forward Networks and Activation Functions
Subtopics: two-layer FFN in Transformer blocks; ReLU vs GELU vs SwiGLU; gated linear units (GLU)

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements position-wise FFN with ReLU and discusses its role |
| 2 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Compares activation functions (SwiGLU, GELU) across modern architectures |
| 3 | d2l.ai — The Transformer Architecture | https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html | Tutorial | Covers FFN layers within the Transformer with code |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses FFN modifications including gated linear units |
| 5 | Jay Alammar — The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Visualizes the FFN sublayer within encoder/decoder blocks |

## LLM-TRF-005 — Normalization Strategies
Subtopics: Layer Normalization; RMSNorm; Pre-Norm vs Post-Norm; DeepNorm

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses Pre-Norm vs Post-Norm placement and training stability |
| 2 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows which normalization (RMSNorm, LayerNorm) each modern LLM uses |
| 3 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements LayerNorm within the sublayer connection |
| 4 | d2l.ai — Batch Normalization | https://d2l.ai/chapter_convolutional-modern/batch-norm.html | Tutorial | Textbook treatment of normalization methods with code |
| 5 | UvA Deep Learning — Transformers Tutorial | https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial6/Transformers_and_MHAttention.html | Tutorial | Covers normalization choices in Transformer implementation |

## LLM-TRF-006 — Residual Connections and Depth Scaling
Subtopics: skip connections in Transformers; gradient flow through depth; depth scaling strategies

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Visualizes residual connections (Add & Norm) in the architecture |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Implements SublayerConnection with residual + norm |
| 3 | d2l.ai — Residual Networks (ResNet) | https://d2l.ai/chapter_convolutional-modern/resnet.html | Tutorial | Explains residual connection theory and gradient flow |
| 4 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Covers depth scaling approaches for very deep Transformers |
| 5 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Compares layer counts and residual designs across architectures |

## LLM-TRF-007 — Weight Initialization for Transformers
Subtopics: Xavier/Glorot; He initialization; GPT-2 residual scaling; initialization for stability

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Parameter Initialization | https://d2l.ai/chapter_deep-learning-computation/parameters.html | Tutorial | Textbook coverage of Xavier and He initialization with theory |
| 2 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Shows initialization choices in the reference implementation |
| 3 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses GPT-2 initialization including residual scaling |
| 4 | Andrej Karpathy — Neural Networks: Zero to Hero | https://karpathy.ai/zero-to-hero.html | Tutorial | Covers initialization decisions when building GPT from scratch |
| 5 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Discusses training stability techniques including initialization |
