# Category I — Reasoning and Test-time Compute

> Resources: curated blogs, tutorials, and university slides. No papers.

## LLM-RSN-001 — Chain-of-Thought Prompting and Reasoning Traces
Subtopics: zero-shot CoT; few-shot CoT; self-consistency; reasoning trace structure; when CoT helps

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — LLM Powered Autonomous Agents | https://lilianweng.github.io/posts/2023-06-23-agent/ | Blog | Covers CoT, ReAct, and reasoning strategies within agent framework |
| 2 | Chain-of-Thought Prompting: A Guide for LLM Applications | https://www.comet.com/site/blog/chain-of-thought-prompting/ | Blog | Covers zero-shot and few-shot CoT with self-consistency |
| 3 | What Is Chain-of-Thought Prompting? | https://galileo.ai/blog/what-is-chain-of-thought-prompting-guide-improving-llm-reasoning | Blog | Guide to improving LLM reasoning with CoT techniques |
| 4 | 8 Chain-of-Thought Techniques | https://galileo.ai/blog/chain-of-thought-prompting-techniques | Blog | Covers CoT variants including self-consistency and structured reasoning |
| 5 | Understanding Chain of Thought Prompting | https://heidloff.net/article/chain-of-thought/ | Blog | Clear walkthrough of CoT prompting with examples |

## LLM-RSN-002 — Reasoning-Oriented RL Training
Subtopics: RL for reasoning (DeepSeek-R1 approach); verifiable rewards for math/code; emergent reasoning behaviors

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Deep dive into reasoning model training including DeepSeek-R1 |
| 2 | Cameron Wolfe — GRPO | https://cameronrwolfe.substack.com/p/grpo | Blog | Covers GRPO's use in reasoning-oriented RL training |
| 3 | Cameron Wolfe — Rubric-Based Rewards for RL | https://cameronrwolfe.substack.com/p/rubric-rl | Blog | Discusses reward design for reasoning tasks |
| 4 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Comprehensive guide covering RL approaches for reasoning |
| 5 | Hugging Face — GRPOTrainer | https://huggingface.co/docs/trl/en/grpo_trainer | Docs | Practical implementation for reasoning-oriented RL training |

## LLM-RSN-003 — Test-Time Compute Scaling
Subtopics: inference-time search; best-of-N sampling; compute-optimal inference; scaling test-time compute vs model size

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Covers test-time compute scaling and inference search strategies |
| 2 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Discusses inference compute trade-offs |
| 3 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Covers best-of-N sampling and compute-optimal strategies |
| 4 | Lilian Weng — Large Transformer Model Inference Optimization | https://lilianweng.github.io/posts/2023-01-10-inference-optimization/ | Blog | Discusses inference efficiency and compute allocation |
| 5 | Cameron Wolfe — GRPO | https://cameronrwolfe.substack.com/p/grpo | Blog | Multi-completion sampling for test-time scaling |

## LLM-RSN-004 — Self-Reflection and Self-Correction Methods
Subtopics: Reflexion; self-critique; iterative refinement; verification loops

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — LLM Powered Autonomous Agents | https://lilianweng.github.io/posts/2023-06-23-agent/ | Blog | Covers Reflexion and self-reflection within agent framework |
| 2 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Discusses self-correction in reasoning chains |
| 3 | Chain-of-Thought Prompting: A Guide | https://www.comet.com/site/blog/chain-of-thought-prompting/ | Blog | Covers iterative refinement and verification in reasoning |
| 4 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Discusses reward signals for self-correction training |
| 5 | What is a ReAct Agent? | https://outcomeschool.com/blog/react-agent | Blog | Covers the observation-reflection loop in ReAct agents |

## LLM-RSN-005 — Tree-of-Thought and Search-Based Reasoning
Subtopics: tree search over reasoning paths; BFS/DFS exploration; evaluation heuristics; Monte Carlo Tree Search for LLMs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Tree of Thoughts Prompting | https://cameronrwolfe.substack.com/p/tree-of-thoughts-prompting | Blog | Definitive deep dive into Tree-of-Thoughts with BFS/DFS strategies |
| 2 | Tree of Thought Prompting: Teaching LLMs to Think Slowly | https://towardsdatascience.com/tree-of-thought-prompting-teaching-llm-to-think-slowly/ | Blog | Covers ToT mechanics and evaluation heuristics |
| 3 | Lilian Weng — LLM Powered Autonomous Agents | https://lilianweng.github.io/posts/2023-06-23-agent/ | Blog | Covers Tree of Thoughts within the planning framework |
| 4 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Discusses search-based reasoning and MCTS for LLMs |
| 5 | 8 Chain-of-Thought Techniques | https://galileo.ai/blog/chain-of-thought-prompting-techniques | Blog | Covers ToT alongside other advanced reasoning techniques |

## LLM-RSN-006 — Distillation of Reasoning Capabilities
Subtopics: distilling CoT traces; reasoning capability transfer; small model reasoning; teacher-student reasoning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Covers distillation of reasoning capabilities from larger models |
| 2 | Cameron Wolfe — Reinforcement Learning for LLMs | https://cameronrwolfe.substack.com/p/llm-rl | Blog | Discusses knowledge transfer for reasoning abilities |
| 3 | Knowledge Distillation for LLMs | https://apxml.com/courses/how-to-build-a-large-language-model/chapter-27-model-compression-techniques/knowledge-distillation | Tutorial | Covers distillation techniques applicable to reasoning |
| 4 | Philipp Schmid — How to Align Open LLMs | https://www.philschmid.de/rl-with-llms-in-2025-dpo | Blog | Discusses synthetic data from teacher models for alignment |
| 5 | Chip Huyen — P99 CONF: How to Optimize LLM Inference | https://p99conf.io/2026/10/06/chip-huyen-on-how-to-optimize-llm-inference/ | Blog | Covers distillation as an inference optimization strategy |
