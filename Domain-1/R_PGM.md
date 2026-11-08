# Category R — Probabilistic Graphical Models and Bayesian ML

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-PGM-004 — Bayesian Inference Fundamentals  [P1]
Subtopics: priors/posteriors; conjugacy; MCMC basics; variational inference intro

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Bayesian Thinking — Seeing Theory (Brown University) | https://seeing-theory.brown.edu/bayesian-inference/ | Interactive | Beautiful interactive visualizations of prior-to-posterior updating and Bayesian reasoning |
| 2 | A Beginner's Guide to Bayesian Statistics — StatQuest (YouTube) | https://www.youtube.com/watch?v=ChlJ1wcpfCY | Video | Clear visual explanation of priors, posteriors, conjugate priors, and updating |
| 3 | Bayesian Methods for Machine Learning — Machine Learning Mastery | https://machinelearningmastery.com/what-is-bayesian-optimization/ | Blog | Practical introduction to Bayesian inference with priors, posteriors, and MCMC |
| 4 | CS228 Probabilistic Graphical Models — Stanford | https://ermongroup.github.io/cs228-notes/inference/variational/ | Tutorial | Stanford course notes on variational inference with ELBO derivation |
| 5 | MCMC Sampling — Count Bayesie | https://www.countbayesie.com/blog/2015/3/3/6-amazing-trick-with-monte-carlo-simulations | Blog | Accessible introduction to MCMC concepts with visual examples |
| 6 | An Introduction to MCMC for Machine Learning — Andrieu et al. (summary) | https://www.cs.princeton.edu/courses/archive/spr06/cos598C/papers/AndrieuFreitasDoucetJordan2003.pdf | Slides | Princeton-hosted tutorial on MCMC methods with Metropolis-Hastings and Gibbs sampling |
| 7 | PyMC Documentation — Getting Started | https://www.pymc.io/welcome.html | Docs | Modern probabilistic programming framework with tutorials on conjugate priors and MCMC |

## CML-PGM-001 — Bayesian Networks  [P2]
Subtopics: DAG structure; conditional independence; d-separation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS228 — Bayesian Networks | https://ermongroup.github.io/cs228-notes/representation/directed/ | Tutorial | Stanford course notes on DAG structure, conditional independence, and d-separation |
| 2 | Bayesian Networks — Machine Learning Mastery | https://machinelearningmastery.com/introduction-to-bayesian-belief-networks/ | Blog | Accessible introduction to Bayesian network structure and conditional independence |
| 3 | pgmpy Documentation — Bayesian Networks | https://pgmpy.org/models/bayesiannetwork.html | Docs | Python library for Bayesian network construction, d-separation testing, and inference |
| 4 | d-Separation — Wikipedia | https://en.wikipedia.org/wiki/D-separation | Docs | Formal d-separation rules (causal chain, common cause, common effect) with examples |
| 5 | Bayesian Networks — Kevin Murphy Tutorial | https://www.cs.ubc.ca/~murphyk/Bayes/bnintro.html | Tutorial | Classic tutorial on BN representation with conditional independence and d-separation |

## CML-PGM-003 — Inference in Graphical Models  [P2]
Subtopics: variable elimination; belief propagation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS228 — Variable Elimination | https://ermongroup.github.io/cs228-notes/inference/ve/ | Tutorial | Stanford course notes on variable elimination with worked factor examples |
| 2 | CS228 — Belief Propagation | https://ermongroup.github.io/cs228-notes/inference/jt/ | Tutorial | Stanford course notes on junction tree algorithm and message passing |
| 3 | pgmpy — Inference in Bayesian Networks | https://pgmpy.org/inference.html | Docs | Variable elimination and belief propagation implementations with examples |
| 4 | Probabilistic Graphical Models — Koller & Friedman (summary chapter) | https://mitpress.mit.edu/9780262013192/probabilistic-graphical-models/ | Docs | Reference textbook covering all exact and approximate inference methods |
| 5 | Belief Propagation — Wikipedia | https://en.wikipedia.org/wiki/Belief_propagation | Docs | Overview of sum-product algorithm for message passing on factor graphs |

## CML-PGM-002 — Markov Random Fields  [P3]
Subtopics: undirected models; potential functions

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS228 — Undirected Graphical Models | https://ermongroup.github.io/cs228-notes/representation/undirected/ | Tutorial | Stanford course notes on MRFs, potential functions, and Hammersley-Clifford theorem |
| 2 | Markov Random Fields — Wikipedia | https://en.wikipedia.org/wiki/Markov_random_field | Docs | Formal treatment of undirected models, clique potentials, and Gibbs distributions |
| 3 | pgmpy — Markov Networks | https://pgmpy.org/models/markovnetwork.html | Docs | Python implementation of MRFs with factor/potential function definitions |
| 4 | Machine Learning: Probabilistic Perspective — Kevin Murphy Ch.19 (summary) | https://www.cs.ubc.ca/~murphyk/MLbook/ | Docs | Reference textbook chapter on undirected graphical models |
