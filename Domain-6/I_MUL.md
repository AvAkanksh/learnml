# Category I — Multi-Agent RL and Self-Play — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## MRL-MUL-001 — Modern Multi-Agent RL Algorithms [P3]
Subtopics: population-based training; centralized training / decentralized execution

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Multi-Agent Reinforcement Learning — UQ Pressbook Chapter | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/multi-agent-reinforcement-learning/ | Tutorial | Course chapter on MARL covering CTDE, shared policies, and AlphaZero-style self-play |
| 2 | CTDE in Multi-Agent RL — Emergent Mind | https://www.emergentmind.com/topics/centralized-training-decentralized-execution-ctde-5f144c51-b600-4937-a6b0-bf976fcfd47b | Docs | CTDE framework covering centralized critics, value decomposition, and local policies |
| 3 | CTDE Literature Review — Moonlight | https://www.themoonlight.io/en/review/an-introduction-to-centralized-training-for-decentralized-execution-in-cooperative-multi-agent-reinforcement-learning | Blog | Review discussing bias-variance trade-off between centralized and decentralized critic designs |
| 4 | DeepMind — AlphaZero Blog | https://deepmind.google/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/ | Blog | AlphaZero self-play paradigm with MCTS + neural network as foundation for MARL self-play |
| 5 | Population-Based Deep RL — Encyclopedia.pub | https://encyclopedia.pub/entry/44828 | Docs | PBT overview covering online evolutionary process replacing underperforming agents |
| 6 | IMPALA Slides — Pantić (University of Belgrade) | https://machinelearning.math.rs/Pantic-IMPALA.pdf | Slides | Distributed RL architecture slides relevant to population-based training context |
| 7 | Self-Play RL for Strategic Games — Medium | https://medium.com/biased-algorithms/self-play-reinforcement-learning-for-strategic-games-886cf4b9baf8 | Blog | Self-play loop implementation with code sketch for strategic games |
| 8 | AlphaZero Paper Summary — Adrian Colyer | https://blog.acolyer.org/2018/01/10/mastering-chess-and-shogi-by-self-play-with-a-general-reinforcement-learning-algorithm/ | Blog | Self-play with single neural network and no domain-specific knowledge |

## MRL-MUL-002 — Self-Play and Emergent Strategy [P2]
Subtopics: AlphaZero-style self-play; league training

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | DeepMind — AlphaZero: Shedding New Light on Chess, Shogi, and Go | https://deepmind.google/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/ | Blog | Official blog covering self-play with only rules knowledge and independently discovered human openings |
| 2 | DeepMind — AlphaStar: Mastering StarCraft II | https://deepmind.google/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/ | Blog | Official blog on league training with multi-agent self-play to avoid strategy collapse |
| 3 | AlphaZero Paper Summary — Adrian Colyer | https://blog.acolyer.org/2018/01/10/mastering-chess-and-shogi-by-self-play-with-a-general-reinforcement-learning-algorithm/ | Blog | Detailed walkthrough of 5000 TPUs for self-play and emergent strategies |
| 4 | AlphaZero Talk Slides — Purdue University | https://www.math.purdue.edu/~allen450/content/alphazero-talk.pdf | Slides | University lecture slides on AlphaZero self-play architecture |
| 5 | Multi-Agent RL — UQ Pressbook Chapter | https://uq.pressbooks.pub/mastering-reinforcement-learning/chapter/multi-agent-reinforcement-learning/ | Tutorial | AlphaZero self-play as MARL where single shared policy plays both sides |
| 6 | Self-Play RL for Strategic Games — Medium | https://medium.com/biased-algorithms/self-play-reinforcement-learning-for-strategic-games-886cf4b9baf8 | Blog | Implementation tutorial for self-play in two-player games |
| 7 | Population-Based Deep RL — Encyclopedia.pub | https://encyclopedia.pub/entry/44828 | Docs | FTW-style population training and stochastic matchmaking for league training |
| 8 | Stanford CS221 — AlphaZero Section Slides | https://web.stanford.edu/class/archive/cs/cs221/cs221.1196/sections/Section5.pdf | Slides | Stanford slides covering AlphaZero self-play architecture and training |
