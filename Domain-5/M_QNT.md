# Category M — Quantization and Compression

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-QNT-001 — Quantization Fundamentals for LLMs
Subtopics: symmetric vs asymmetric quantization; per-tensor vs per-channel; calibration; quantization error

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Quantization Explained: INT4, GGUF, GPTQ | https://www.generalcompute.com/blog/quantization-explained-int4-gguf-gptq | Blog | Clear fundamentals of quantization types and data formats |
| 2 | LLM Quantization Methods: GPTQ, AWQ, GGUF | https://cast.ai/blog/demystifying-quantizations-llms/ | Blog | Comprehensive overview of quantization methods and trade-offs |
| 3 | LLM Quantization Explained: GPTQ, AWQ, QLoRA, GGUF | https://www.amdtelecom.net/llm-quantization-explained/ | Blog | Covers fundamentals including calibration and error analysis |
| 4 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | Practical benchmarks comparing quantization approaches |
| 5 | Hugging Face — Quantization | https://huggingface.co/docs/transformers/en/quantization/overview | Docs | Official guide to quantization methods in Transformers |

## LLM-QNT-002 — GPTQ
Subtopics: layer-wise quantization; Hessian-based weight rounding; calibration set; OBQ connection

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Quantization for Inference: GPTQ, AWQ, SmoothQuant, FP8 | https://www.generalcompute.com/blog/quantization-for-inference-gptq-awq-smoothquant-fp8 | Blog | Detailed GPTQ explanation with Hessian-based rounding |
| 2 | LLM Quantization Methods: GPTQ, AWQ, GGUF | https://cast.ai/blog/demystifying-quantizations-llms/ | Blog | Covers GPTQ's layer-by-layer calibration approach |
| 3 | Comparison: GPTQ vs AWQ vs SmoothQuant | https://apxml.com/courses/practical-llm-quantization/chapter-3-advanced-ptq-techniques/comparing-advanced-ptq | Tutorial | Side-by-side comparison with quality benchmarks |
| 4 | Hugging Face — GPTQ Quantization | https://huggingface.co/docs/transformers/en/quantization/gptq | Docs | Official GPTQ integration docs with auto-gptq |
| 5 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | GPTQ benchmarks on real models |

## LLM-QNT-003 — AWQ
Subtopics: activation-aware weight quantization; salient channel protection; scale search; hardware efficiency

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Quantization for Inference: GPTQ, AWQ, SmoothQuant, FP8 | https://www.generalcompute.com/blog/quantization-for-inference-gptq-awq-smoothquant-fp8 | Blog | Covers AWQ's salient channel scaling with activation statistics |
| 2 | LLM Quantization Methods: GPTQ, AWQ, GGUF | https://cast.ai/blog/demystifying-quantizations-llms/ | Blog | Explains AWQ's advantage over GPTQ for instruction-tuned models |
| 3 | Comparison: GPTQ vs AWQ vs SmoothQuant | https://apxml.com/courses/practical-llm-quantization/chapter-3-advanced-ptq-techniques/comparing-advanced-ptq | Tutorial | Detailed AWQ comparison with quality benchmarks |
| 4 | Hugging Face — AWQ Quantization | https://huggingface.co/docs/transformers/en/quantization/awq | Docs | Official AWQ integration docs |
| 5 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | AWQ benchmarks and practical deployment |

## LLM-QNT-004 — SmoothQuant
Subtopics: migrating quantization difficulty from activations to weights; per-channel smoothing; W8A8 serving

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Quantization for Inference: GPTQ, AWQ, SmoothQuant, FP8 | https://www.generalcompute.com/blog/quantization-for-inference-gptq-awq-smoothquant-fp8 | Blog | Covers SmoothQuant's activation-to-weight difficulty migration |
| 2 | Comparison: GPTQ vs AWQ vs SmoothQuant | https://apxml.com/courses/practical-llm-quantization/chapter-3-advanced-ptq-techniques/comparing-advanced-ptq | Tutorial | Explains SmoothQuant's per-channel smoothing approach |
| 3 | LLM Quantization Methods: GPTQ, AWQ, GGUF | https://cast.ai/blog/demystifying-quantizations-llms/ | Blog | Covers SmoothQuant for high-throughput W8A8 serving |
| 4 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | SmoothQuant benchmarks in production serving |
| 5 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers quantization for inference including W8A8 |

## LLM-QNT-005 — FP8 and FP4 Inference
Subtopics: E4M3 and E5M2 formats; FP8 training; FP4 for inference; hardware support (H100/B200)

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | BF16 vs FP16 vs FP8: Mixed Precision Guide | https://www.runpod.io/articles/guides/fp16-bf16-fp8-mixed-precision-speed-up-my-model-training | Blog | Covers FP8 formats and hardware support |
| 2 | Quantization for Inference: GPTQ, AWQ, SmoothQuant, FP8 | https://www.generalcompute.com/blog/quantization-for-inference-gptq-awq-smoothquant-fp8 | Blog | Covers FP8 inference with hardware considerations |
| 3 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | FP8 benchmarks on H100 hardware |
| 4 | Hugging Face — Quantization | https://huggingface.co/docs/transformers/en/quantization/overview | Docs | Covers FP8 quantization support |
| 5 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers low-precision inference from the book |

## LLM-QNT-006 — Quantization-Aware Training vs Post-Training Quantization
Subtopics: QAT with simulated quantization; PTQ advantages and limitations; when QAT helps; fine-tuning after quantization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Quantization Explained: INT4, GGUF, GPTQ | https://www.generalcompute.com/blog/quantization-explained-int4-gguf-gptq | Blog | Covers QAT vs PTQ trade-offs clearly |
| 2 | LLM Quantization Methods: GPTQ, AWQ, GGUF | https://cast.ai/blog/demystifying-quantizations-llms/ | Blog | Compares QAT and PTQ approaches |
| 3 | QLoRA: 4-Bit Fine-Tuning for Large Models | https://www.ultralytics.com/glossary/qlora | Blog | Covers fine-tuning after quantization (QLoRA as QAT alternative) |
| 4 | Hugging Face — Quantization | https://huggingface.co/docs/transformers/en/quantization/overview | Docs | Covers both QAT and PTQ options |
| 5 | Complete Guide to LLM Quantization with vLLM | https://jarvislabs.ai/blog/vllm-quantization-complete-guide-benchmarks | Blog | Practical comparison of quantization approaches |

## LLM-QNT-007 — Pruning and Sparsity for LLMs
Subtopics: unstructured pruning; structured pruning; N:M sparsity; SparseGPT; sparsity + quantization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Covers pruning and sparsity for inference efficiency |
| 2 | Chip Huyen — Open Challenges in LLM Research | https://huyenchip.com/2023/08/16/llm-research-open-challenges.html | Blog | Discusses sparsity as a compression approach |
| 3 | Knowledge Distillation for LLMs | https://apxml.com/courses/how-to-build-a-large-language-model/chapter-27-model-compression-techniques/knowledge-distillation | Tutorial | Covers pruning alongside other compression techniques |
| 4 | Chip Huyen — AI Engineering Ch. 9 Notes | https://alexstrick.com/posts/2025-02-07-ai-engineering-chapter-9.html | Blog | Covers compression techniques including pruning |
| 5 | Hugging Face — Quantization | https://huggingface.co/docs/transformers/en/quantization/overview | Docs | Covers sparsity options in the quantization ecosystem |
