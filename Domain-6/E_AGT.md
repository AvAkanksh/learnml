# Category E — Agentic and Tool-Use RL — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-AGT-001 — Agentic RL Fundamentals [P1]
Subtopics: multi-turn trajectories; credit assignment across tool calls; environment design

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Agentic RL: Frameworks and Best Practices | https://cameronrwolfe.substack.com/p/agentic-rl | Blog | Multi-turn MDP formulation with trajectories containing instructions, tool calls, observations, and rewards |
| 2 | Lilian Weng — LLM Powered Autonomous Agents | https://lilianweng.github.io/posts/2023-06-23-agent/ | Blog | Seminal post on LLM agents covering planning, memory, tool use, and task decomposition |
| 3 | Fireworks AI — Multi-Turn RL Best Practices for LLM Agents | https://fireworks.ai/blog/best-practices-for-multi-turn-RL | Blog | Practical training loop design recommending SFT before RL with environment debugging tips |
| 4 | AgentGym-RL — GitHub | https://github.com/WooooDyy/AgentGym-RL | Docs | Multi-turn, long-horizon decision making framework with RolloutHandler for attention/loss masks |
| 5 | RAGEN: Agent RL Framework — GitHub | https://github.com/mll-lab-nu/RAGEN | Docs | StarPO algorithm for multi-turn, trajectory-level agent optimization |
| 6 | Cameron Wolfe — Agentic World Models | https://cameronrwolfe.substack.com/p/agentic-world-models | Blog | World models in the context of agentic RL and environment modeling |
| 7 | Agentic RL and Tool Use — TheoremPath | https://theorempath.com/topics/agentic-rl-and-tool-use | Blog | Contrasts single-turn chat RLHF with longer-horizon agentic RL and tool-call actions |
| 8 | HuggingFace Deep RL Course — Introduction | https://huggingface.co/learn/deep-rl-course/en/unit1/hands-on | Tutorial | Foundational RL concepts applicable to agentic settings |

## MRL-AGT-002 — Tool-Use Reward Design [P2]
Subtopics: task-completion rewards; shaping tool-call correctness

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cameron Wolfe — Agentic RL: Frameworks and Best Practices | https://cameronrwolfe.substack.com/p/agentic-rl | Blog | Covers reward design for multi-turn tool-use trajectories |
| 2 | Lilian Weng — LLM Powered Autonomous Agents | https://lilianweng.github.io/posts/2023-06-23-agent/ | Blog | Tool use section covering Toolformer, ChatGPT plugins, and API-Bank benchmark |
| 3 | Fireworks AI — Multi-Turn RL Best Practices for LLM Agents | https://fireworks.ai/blog/best-practices-for-multi-turn-RL | Blog | Practical reward design for multi-turn trajectories with tool calls |
| 4 | ARTIST: Agentic Reasoning and Tool Integration via RL — Microsoft Research | https://www.microsoft.com/en-us/research/wp-content/uploads/2025/04/AgenticReasoning.pdf | Slides | Couples agentic reasoning, RL, and dynamic tool use with multi-turn experiments |
| 5 | Lilian Weng — Reward Hacking in Reinforcement Learning | https://lilianweng.github.io/posts/2024-11-28-reward-hacking/ | Blog | Pitfalls in reward design and specification gaming in tool-use contexts |
| 6 | Cameron Wolfe — GRPO++: Tricks for Making RL Actually Work | https://cameronrwolfe.substack.com/p/grpo-tricks | Blog | Practical reward shaping for tool-augmented RL training |
