# Category E — Pretraining and Data Engineering

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-PRE-001 — Pretraining Corpus Construction
Subtopics: Common Crawl processing; quality heuristics; language identification; toxicity filtering; domain mixing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Detailed walkthrough of building a high-quality pretraining corpus from Common Crawl |
| 2 | Chip Huyen — Building LLM Applications for Production | https://huyenchip.com/2023/04/11/llm-engineering.html | Blog | Discusses data quality, filtering, and preprocessing pipelines |
| 3 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews pretraining data strategies across major LLMs |
| 4 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers data preparation for pretraining with code |
| 5 | d2l.ai — Natural Language Processing: Pretraining | https://d2l.ai/chapter_natural-language-processing-pretraining/index.html | Tutorial | Textbook coverage of pretraining data pipelines |

## LLM-PRE-002 — Data Deduplication
Subtopics: exact deduplication (hash-based); near-duplicate detection (MinHash/LSH); document-level vs n-gram deduplication

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Covers MinHash deduplication pipeline used in FineWeb |
| 2 | Google Research Blog — Scalable Extraction of Training Data | https://research.google/blog/scalable-extraction-of-training-data-from-production-language-models/ | Blog | Discusses deduplication's role in preventing memorization |
| 3 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Covers data deduplication as a key pretraining challenge |
| 4 | d2l.ai — Natural Language Processing: Pretraining | https://d2l.ai/chapter_natural-language-processing-pretraining/index.html | Tutorial | Discusses data preprocessing including deduplication |
| 5 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Covers data cleaning steps for pretraining |

## LLM-PRE-003 — Data Quality Filtering
Subtopics: perplexity-based filtering; classifier-based quality scoring; heuristic rules; content safety filtering

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Detailed quality filtering pipeline with perplexity and classifier-based scoring |
| 2 | Chip Huyen — Building LLM Applications for Production | https://huyenchip.com/2023/04/11/llm-engineering.html | Blog | Discusses data quality filtering strategies and their impact |
| 3 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews quality filtering across major pretraining datasets |
| 4 | d2l.ai — Natural Language Processing: Pretraining | https://d2l.ai/chapter_natural-language-processing-pretraining/index.html | Tutorial | Covers data preprocessing quality considerations |
| 5 | Sebastian Raschka — Build an LLM from Scratch | https://sebastianraschka.com/llms-from-scratch/ | Tutorial | Discusses data quality in the context of building an LLM |

## LLM-PRE-004 — Data Mixture Design
Subtopics: domain weighting; code vs text ratio; multilingual data proportions; data scheduling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Covers data mixing strategy and domain weighting decisions |
| 2 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses data mixture as an open challenge in LLM training |
| 3 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents training data mixtures across modern LLMs |
| 4 | d2l.ai — Natural Language Processing: Pretraining | https://d2l.ai/chapter_natural-language-processing-pretraining/index.html | Tutorial | Covers pretraining data composition |
| 5 | Lilian Weng — The Transformer Family v2 | https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/ | Blog | Reviews data mixture strategies in recent LLMs |

## LLM-PRE-005 — Scaling Laws
Subtopics: Kaplan scaling laws; Chinchilla optimal ratio; power-law relationships; loss prediction from compute

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Neural Scaling Law — Wikipedia | https://en.wikipedia.org/wiki/Neural_scaling_law | Blog | Comprehensive overview with Chinchilla's equal-proportion scaling rule |
| 2 | What is the Chinchilla Scaling Law? | https://www.analyticsvidhya.com/blog/2024/09/chinchilla-scaling-law/ | Blog | Accessible explanation of compute-optimal training decisions |
| 3 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses scaling laws as a foundation for LLM research |
| 4 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers scaling behavior in language model training |
| 5 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Shows how scaling laws influenced model size choices |

## LLM-PRE-006 — Token Budget and Compute-Optimal Training Decisions
Subtopics: tokens-per-parameter ratio; training FLOPs estimation; compute budget allocation; overtraining trade-offs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Neural Scaling Law — Wikipedia | https://en.wikipedia.org/wiki/Neural_scaling_law | Blog | Covers compute-optimal ratios and overtraining cost analysis |
| 2 | What is the Chinchilla Scaling Law? | https://www.analyticsvidhya.com/blog/2024/09/chinchilla-scaling-law/ | Blog | Explains compute-optimal token-to-parameter allocation |
| 3 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses training efficiency and budget allocation |
| 4 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents training token counts across modern LLMs |
| 5 | d2l.ai — Large Language Models | https://d2l.ai/chapter_large-language-models/index.html | Tutorial | Covers training computation considerations |

## LLM-PRE-007 — Synthetic and Curated Data for Pretraining
Subtopics: synthetic data generation; textbook-quality data (Phi approach); data augmentation; model-generated training data

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses synthetic data as an approach to data scarcity |
| 2 | Hugging Face Blog — The FineWeb Datasets | https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1 | Blog | Discusses data quality that synthetic data aims to match |
| 3 | Sebastian Raschka — LLM Architecture Gallery | https://sebastianraschka.com/llm-architecture-gallery/ | Blog | Documents Phi models trained on synthetic/curated data |
| 4 | Philipp Schmid — How to Align Open LLMs with DPO & Synthetic Data | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Practical guide to using synthetic data for LLM training |
| 5 | d2l.ai — Natural Language Processing: Pretraining | https://d2l.ai/chapter_natural-language-processing-pretraining/index.html | Tutorial | Covers data augmentation approaches for NLP |
