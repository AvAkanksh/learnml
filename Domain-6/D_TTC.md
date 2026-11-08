# Category D — Test-Time Compute and Reasoning-Policy Optimization — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-TTC-001 — Test-Time Compute Scaling Laws [P1]
Subtopics: compute-optimal search budgets; train vs test compute trade-off

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | Comprehensive survey of test-time compute covering chain-of-thought, parallel sampling, and adaptive computation |
| 2 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Two scaling components: more RL training compute and more inference-time compute |
| 3 | Cameron Wolfe — Scaling Laws for LLMs: From GPT-3 to o3 | https://cameronrwolfe.substack.com/p/llm-scaling-laws | Blog | New paradigm of scaling post-training and inference compute vs pretraining |
| 4 | How Test-Time Scaling Allocates LLM Reasoning — The AI Edge | https://newsletter.theaiedge.io/p/how-test-time-scaling-allocates-llm-reasoning | Blog | Depth (longer reasoning), width (multiple candidates), and feedback (checking/revising) |
| 5 | Cameron Wolfe — RL Scaling Laws for LLMs | https://cameronrwolfe.substack.com/p/rl-scaling-laws | Blog | RL training compute and inference-time compute as parallel scaling axes |
| 6 | OpenAI — Learning to Reason with LLMs | https://openai.com/index/learning-to-reason-with-llms/ | Blog | o1 improves with both training compute and inference-time thinking |
| 7 | What is Test-time Scaling? — Adaline Labs | https://labs.adaline.ai/p/what-is-test-time-scaling | Blog | Mechanics of inference scaling with extra compute for intermediate reasoning steps |
| 8 | Test-Time Scaling Law — Emergent Mind | https://www.emergentmind.com/topics/test-time-scaling-law | Docs | Overview of scaling law shape including diminishing returns and saturation |

## MRL-TTC-002 — Reasoning-Policy Optimization [P2]
Subtopics: optimizing for multi-step deliberation quality

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Demystifying Reasoning Models | https://cameronrwolfe.substack.com/p/demystifying-reasoning-models | Blog | Multi-stage reasoning policy training covering R1's deliberation optimization |
| 2 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | Covers reasoning quality optimization and deliberation strategies |
| 3 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Optimizing reasoning policy quality through GRPO refinements |
| 4 | Getting LLMs To Reason With Process Rewards — Pat McGuinness | https://patmcguinness.substack.com/p/getting-llms-to-reason-with-process | Blog | Per-step reward signals for optimizing deliberation quality |
| 5 | DeepSeek-R1 — Intuitively and Exhaustively Explained | https://iaee.substack.com/p/deepseek-r1-intuitively-and-exhaustively | Blog | Multi-stage reasoning optimization pipeline from base model to final policy |
| 6 | Cameron Wolfe — RL Scaling Laws for LLMs | https://cameronrwolfe.substack.com/p/rl-scaling-laws | Blog | Scaling laws connecting training compute to reasoning quality |
| 7 | HuggingFace — Guide to RL Post-Training for LLMs | https://huggingface.co/blog/karina-zadorozhny/guide-to-llm-post-training-algorithms | Blog | Reasoning-oriented post-training algorithm comparisons |
