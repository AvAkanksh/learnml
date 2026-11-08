# Category A — Language Modeling and Tokenization

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-LMT-001 — Language Modeling Objectives
Subtopics: autoregressive LM; masked LM; prefix LM; span corruption; perplexity; cross-entropy loss; teacher forcing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated GPT-2 | https://jalammar.github.io/illustrated-gpt2/ | Blog | Jay Alammar's visual walkthrough of autoregressive LM and causal masking |
| 2 | The Illustrated BERT | https://jalammar.github.io/illustrated-bert/ | Blog | Clear intro to masked LM objective and bidirectional context |
| 3 | Hugging Face — Causal Language Modeling | https://huggingface.co/docs/transformers/en/tasks/language_modeling | Tutorial | Code-heavy walkthrough with DataCollatorForLanguageModeling and perplexity eval |
| 4 | Hugging Face — Masked Language Modeling | https://huggingface.co/docs/transformers/en/tasks/masked_language_modeling | Tutorial | Mirrors causal LM guide for MLM with fill-mask pipeline |
| 5 | Writing an LLM from Scratch Part 21 — Perplexed by Perplexity | https://www.gilesthomas.com/2025/10/llm-from-scratch-21-perplexed-by-perplexity | Blog | Derives perplexity from cross-entropy with worked numeric examples |
| 6 | Teacher Forcing for Recurrent Neural Networks | https://machinelearningmastery.com/teacher-forcing-for-recurrent-neural-networks/ | Blog | Clear conceptual explanation of teacher forcing and exposure bias |
| 7 | Stanford CS224N Lecture 8 — Transformers (2024) | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/slides/cs224n-2024-lecture08-transformers.pdf | Slides | Stanford lecture slides covering LM objectives and self-attention |
| 8 | d2l.ai — Language Models | https://d2l.ai/chapter_recurrent-neural-networks/language-model.html | Tutorial | Textbook treatment of language modeling fundamentals with code |

## LLM-LMT-002 — Byte Pair Encoding (BPE)
Subtopics: merge rules; vocabulary construction; byte-level BPE (GPT-2/3 style); regex pre-tokenization; deterministic merge order

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | karpathy/minbpe — Let's Build the GPT Tokenizer | https://github.com/karpathy/minbpe | Tutorial | Minimal reference implementation of GPT-4's byte-level BPE with lecture and exercises |
| 2 | Hugging Face NLP Course — Byte-Pair Encoding Tokenization | https://huggingface.co/learn/nlp-course/chapter6/5 | Tutorial | Full worked merge-rule derivation plus from-scratch Python implementation |
| 3 | Lei Mao — Byte-Pair Encoding | https://leimao.github.io/blog/Byte-Pair-Encoding/ | Blog | Runnable training/encoding code on a real corpus with end-of-word markers |
| 4 | Hugging Face Docs — Summary of the Tokenizers | https://huggingface.co/docs/transformers/en/tokenizer_summary | Docs | Walks BPE merge process with concrete worked corpus example |
| 5 | What Makes LLM Tokenization Slow? | https://healeycodes.com/what-makes-llm-tokenization-slow | Blog | Detailed walkthrough of GPT-2's reference encoder via a Rust port |
| 6 | OpenAI tiktoken | https://github.com/openai/tiktoken | Docs | Production byte-level BPE implementation; explains losslessness and compression |
| 7 | fast.ai — Let's Build the GPT Tokenizer (book chapter) | https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers | Tutorial | Written adaptation of Karpathy's video lecture into book-chapter form |
| 8 | LLM Course — Tokenization (Bordeaux) | https://llm.labri.fr/LLM_Course_Tokenization.pdf | Slides | University lecture slides covering BPE algorithm and vocabulary construction |

## LLM-LMT-003 — Unigram Language Model Tokenization
Subtopics: SentencePiece; probabilistic subword segmentation; EM-based vocabulary pruning; comparison to BPE

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face NLP Course — Unigram Tokenization | https://huggingface.co/learn/nlp-course/chapter6/7 | Tutorial | Covers unigram probability model, Viterbi segmentation, NLL loss, and pruning loop with Python code |
| 2 | google/sentencepiece (GitHub) | https://github.com/google/sentencepiece | Docs | 12.2k-star toolkit implementing both Unigram and BPE end-to-end |
| 3 | Hugging Face Docs — Summary of the Tokenizers | https://huggingface.co/docs/transformers/en/tokenizer_summary | Docs | Comparison table contrasting BPE, WordPiece, and Unigram training and encoding |
| 4 | Hugging Face NLP Course — Building a Tokenizer Block by Block | https://huggingface.co/learn/nlp-course/chapter6/8 | Tutorial | Hands-on construction of a tokenizer including unigram variant |
| 5 | LLM Course — Tokenization (Bordeaux) | https://llm.labri.fr/LLM_Course_Tokenization.pdf | Slides | University slides covering SentencePiece and unigram model |

## LLM-LMT-004 — WordPiece and Other Subword Schemes
Subtopics: WordPiece (BERT); greedy longest-match; likelihood-based merge criterion

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face NLP Course — WordPiece Tokenization | https://huggingface.co/learn/nlp-course/chapter6/6 | Tutorial | Explains training score formula, greedy longest-match, and full Python implementation |
| 2 | Google Research Blog — A Fast WordPiece Tokenization System | https://research.google/blog/a-fast-wordpiece-tokenization-system/ | Blog | Explains MaxMatch/greedy longest-match with clear examples |
| 3 | Hugging Face Docs — Summary of the Tokenizers | https://huggingface.co/docs/transformers/en/tokenizer_summary | Docs | Gives explicit WordPiece score formula with worked frequency table example |
| 4 | Hugging Face NLP Course — Normalization and Pre-tokenization | https://huggingface.co/learn/llm-course/en/chapter6/4 | Tutorial | Covers normalization and pre-tokenization steps before subword algorithms |
| 5 | LLM Course — Tokenization (Bordeaux) | https://llm.labri.fr/LLM_Course_Tokenization.pdf | Slides | Comparative overview of WordPiece vs BPE vs Unigram |

## LLM-LMT-005 — Tokenizer Design Trade-offs
Subtopics: vocabulary size vs sequence length; fertility; multilingual fairness; special tokens; byte-fallback

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face NLP Course — Tokenizers Overview | https://huggingface.co/learn/llm-course/en/chapter2/4 | Tutorial | Covers tokenizer design decisions, special tokens, and vocabulary trade-offs |
| 2 | Hugging Face Docs — Summary of the Tokenizers | https://huggingface.co/docs/transformers/en/tokenizer_summary | Docs | Comparison of algorithms with trade-off analysis |
| 3 | karpathy/minbpe — Let's Build the GPT Tokenizer | https://github.com/karpathy/minbpe | Tutorial | Discusses vocab size trade-offs and byte-fallback in context of GPT-4 tokenizer |
| 4 | Tokenizer Training with Hugging Face — Interactive Guide | https://mbrenndoerfer.com/writing/tokenizer-training-guide-huggingface-custom-nlp | Tutorial | Practical guide to training custom tokenizers with trade-off discussions |
| 5 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Compares tokenizer choices across modern LLM architectures |

## LLM-LMT-006 — Embedding Layers and Weight Tying
Subtopics: token embedding lookup; positional embedding addition; weight tying between input embedding and output projection; sqrt(d) scaling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Annotated Transformer | https://nlp.seas.harvard.edu/annotated-transformer/ | Tutorial | Harvard NLP implementation showing embedding layers, positional encoding, and weight tying |
| 2 | d2l.ai — Sequence-to-Sequence with Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html | Tutorial | Textbook treatment covering embeddings and sqrt(d) scaling with code |
| 3 | Writing an LLM from Scratch Part 32g — Weight Tying | https://www.gilesthomas.com/2026/03/llm-from-scratch-32g-interventions-weight-tying | Blog | Examines weight tying as intervention; discusses when modern LLMs use it |
| 4 | Writing an LLM from Scratch Part 15 — Context Vectors to Logits | https://www.gilesthomas.com/2025/05/llm-from-scratch-15-from-context-vectors-to-logits | Blog | Covers the output projection layer and embedding reuse based on Raschka's book |
| 5 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Book covering embedding layers, attention, and GPT-style architecture from scratch |
| 6 | Jay Alammar — The Illustrated Transformer | https://jalammar.github.io/illustrated-transformer/ | Blog | Visual explanation of embedding and positional encoding in the original Transformer |
