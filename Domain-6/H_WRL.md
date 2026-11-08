# Category H — World Models and Model-Based Planning — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-WRL-001 — World Model Fundamentals [P1]
Subtopics: latent dynamics (Dreamer-style); learning in imagination

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dreamer: Learning Long-Horizon Behaviors through Latent Imagination — Medium | https://medium.com/@kdk199604/dreamer-learning-long-horizon-behaviors-through-latent-imagination-fa60327c2843 | Blog | Walkthrough of Dreamer covering latent dynamics, RSSM world model, and imagination-based training |
| 2 | Cameron Wolfe — Agentic World Models | https://cameronrwolfe.substack.com/p/agentic-world-models | Blog | World models for agentic RL covering latent dynamics and planning |
| 3 | DreamerV3 — TorchRL Documentation | https://docs.pytorch.org/rl/main/reference/dreamer_v3.html | Docs | Algorithm overview of RSSM components: encoder, dynamics, decoder, reward, and continuation predictors |
| 4 | DreamerV3 — Emergent Mind | https://www.emergentmind.com/topics/dreamerv3-algorithm | Docs | DreamerV3 architecture covering RSSM, actor, critic trained in parallel with Minecraft diamond result |
| 5 | Berkeley CS285 — Model-Based RL (Lecture 11 Slides) | https://rail.eecs.berkeley.edu/deeprlcourse/deeprlcourse/static/slides/lec-11.pdf | Slides | University slides on model-based RL covering learned dynamics, distribution shift, and uncertainty |
| 6 | TalkRL Podcast — Danijar Hafner on DreamerV3 (Transcript) | https://www.talkrl.com/episodes/danijar-hafner-2/transcript | Blog | Hafner discusses DreamerV3 design, RSSM, and fixed hyperparameters across domains |
| 7 | Lilian Weng — Why We Think | https://lilianweng.github.io/posts/2025-05-01-thinking/ | Blog | World models in context of test-time compute and reasoning |

## MRL-WRL-002 — Model-Based Planning at Scale [P2]
Subtopics: MuZero; learned model + MCTS

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | DeepMind — AlphaZero: Shedding New Light on Chess, Shogi, and Go | https://deepmind.google/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/ | Blog | Official DeepMind blog on AlphaZero self-play + MCTS as foundation for MuZero |
| 2 | AlphaGo/AlphaZero/MuZero: Mastering Games with Progressively Fewer Priors — VitaLab | https://vitalab.github.io/article/2020/11/19/AlphaMuGoZero.html | Blog | Visual review of the full AlphaGo → AlphaZero → MuZero progression |
| 3 | AlphaZero Paper Summary — Adrian Colyer | https://blog.acolyer.org/2018/01/10/mastering-chess-and-shogi-by-self-play-with-a-general-reinforcement-learning-algorithm/ | Blog | Detailed walkthrough of AlphaZero's self-play and MCTS approach |
| 4 | Stanford CS221 — AlphaZero Section Slides | https://web.stanford.edu/class/archive/cs/cs221/cs221.1196/sections/Section5.pdf | Slides | Stanford lecture slides on AlphaZero value+policy network with MCTS planning |
| 5 | NPFL139 Lecture 11 — MCTS and AlphaZero (Charles University Slides) | https://ufal.mff.cuni.cz/~straka/courses/npfl139/2324/slides.pdf/npfl139-2324-11.pdf | Slides | University slides with MCTS visuals drawn from original AlphaZero/MuZero papers |
| 6 | Monte Carlo Tree Search: A Tutorial — INFORMS | https://www.informs-sim.org/wsc18papers/includes/files/021.pdf | Slides | Comprehensive MCTS tutorial through decision trees and game examples |
| 7 | AlphaZero Talk Slides — Purdue University | https://www.math.purdue.edu/~allen450/content/alphazero-talk.pdf | Slides | University lecture slides on AlphaZero architecture and MCTS |
| 8 | Cameron Wolfe — Agentic World Models | https://cameronrwolfe.substack.com/p/agentic-world-models | Blog | Planning with learned world models in agentic settings |
