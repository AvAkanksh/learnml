# ML Interview Complete Taxonomy — All 7 Domains (Priority-Ranked)

Topic/subtopic index only — no resource links yet.

## How to read this file

**Priority tiers**

| Tier | Meaning |
|---|---|
| **P0** | Core — comes up in most interviews for roles touching this domain; expect to derive/explain from scratch and handle follow-ups |
| **P1** | Frequent — standard follow-up territory or a common primary question for the relevant role |
| **P2** | Role-specific — asked mainly for specialized roles (inference/infra, research, CV, RL) |
| **P3** | Niche/depth — rarely a primary question; signals depth if you know it |

- Domains keep their 1–7 numbering. **Categories inside each domain are ordered by importance**, rows inside each table are sorted P0 → P3, and **subtopics inside each cell are listed most-asked first**. **Exception — Domain 5** follows a learning order instead: categories, rows and subtopics are arranged so each one builds on the ones before it.
- IDs are stable (Domain 5 IDs were already approved); ordering by priority means IDs are not sequential within a table. Topics marked **(new)** were added in this revamp to fill high-frequency interview gaps.
- **Caveat:** priority tiers are an editorial judgment based on widely-known interview patterns for MLE / Applied Scientist / Research Scientist / LLM / Inference roles — they are **not** computed from a measured dataset of interview questions. If you want them calibrated against real question banks, that's a separate research pass.

## Summary (counted from this file)

| Domain | Categories | Topics | P0 | P1 | P2 | P3 |
|---|---:|---:|---:|---:|---:|---:|
| 1. Classical ML | 19 | 76 | 27 | 32 | 13 | 4 |
| 2. Classical NLP | 11 | 35 | 7 | 13 | 10 | 5 |
| 3. Classical RL | 12 | 37 | 13 | 14 | 9 | 1 |
| 4. Classical CV | 9 | 39 | 10 | 11 | 14 | 4 |
| 5. Modern NLP / LLMs | 20 | 160 | 47 | 70 | 40 | 3 |
| 6. Modern RL | 10 | 23 | 2 | 9 | 9 | 3 |
| 7. Modern CV | 11 | 36 | 6 | 18 | 10 | 2 |
| **Total** | **92** | **406** | **112** | **167** | **105** | **22** |

**Suggested study order:** all P0 rows in your target role's domains first (112 topics total; ~47 of them are LLM), then P1, then P2 only for specialized roles.

---

# Domain 1 — Classical Machine Learning (prefix CML)

Most relevant to: every ML role; heaviest for MLE, Applied Scientist, Data Scientist.

## 1.1 Model Evaluation and Data Integrity

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-EVA-001 | Classification Metrics | confusion matrix; precision/recall/F1 trade-off; ROC-AUC vs PR-AUC; threshold selection; macro vs micro averaging |
| P0 | CML-EVA-003 | Data Leakage | target leakage; preprocessing fit on full data; temporal leakage; train-test contamination; duplicate entities across splits |
| P1 | CML-EVA-002 | Regression Metrics | MSE vs MAE (outlier sensitivity); RMSE; R² / adjusted R²; residual analysis |

## 1.2 Linear Models and GLMs

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-LIN-002 | Logistic Regression | log-odds & sigmoid; log-loss derivation; why not MSE; gradient derivation; softmax multiclass; decision boundary |
| P0 | CML-LIN-001 | Linear Regression | OLS & normal equations; assumptions (linearity, homoscedasticity, independence); closed form vs gradient descent; multicollinearity |
| P0 | CML-LIN-004 | Regularized Linear Models | L1 vs L2 geometry and sparsity; Ridge closed form; Elastic Net; coordinate descent |
| P2 | CML-LIN-003 | Generalized Linear Models | exponential family; link functions; Poisson/Gamma regression |

## 1.3 Regularization and Model Selection

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-REG-001 | Bias-Variance Tradeoff | error decomposition; learning-curve diagnosis of over/underfitting; effect of model complexity and data size |
| P0 | CML-REG-003 | Cross-Validation Strategies | k-fold; stratified; time-series forward-chaining CV; nested CV for tuning; group k-fold; LOOCV |
| P1 | CML-REG-002 | Regularization Techniques | L1/L2; early stopping; data augmentation as regularization; shrinkage |
| P1 | CML-REG-004 | Hyperparameter Tuning | random vs grid search; Bayesian optimization; Hyperband / early-stopping search |

## 1.4 Neural Network Fundamentals

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-NN-001 | Backpropagation (new) | chain rule on computation graphs; deriving MLP gradients by hand; vanishing/exploding gradients |
| P0 | CML-NN-003 | Optimizers (new) | SGD; momentum; Adam and bias correction; RMSProp; learning-rate schedules and warmup |
| P0 | CML-NN-004 | Normalization Layers (new) | BatchNorm train vs inference behavior; LayerNorm; why normalization helps optimization; small-batch issues |
| P0 | CML-NN-005 | Loss Functions (new) | cross-entropy; MSE; hinge; focal loss; matching loss to output distribution |
| P0 | CML-NN-002 | Activation Functions (new) | ReLU and dying ReLU; sigmoid/tanh saturation; GELU; Leaky ReLU |
| P1 | CML-NN-006 | Dropout and Neural-Net Regularization (new) | inverted-dropout scaling; dropout as implicit ensemble; weight decay |
| P1 | CML-NN-007 | Weight Initialization (new) | Xavier/Glorot; He init; symmetry breaking |
| P2 | CML-NN-008 | Numerical Stability in Training (new) | log-sum-exp / stable softmax; gradient clipping; mixed-precision basics |

## 1.5 Trees and Ensembles

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-TRE-001 | Decision Trees | Gini vs entropy; information gain; overfitting and pruning; continuous/categorical splits |
| P0 | CML-TRE-002 | Random Forests | bagging + feature subsampling; why decorrelation reduces variance; OOB error; key hyperparameters |
| P1 | CML-TRE-003 | Bagging Fundamentals | bootstrap; variance-reduction argument; bagging vs boosting |
| P1 | CML-TRE-004 | Feature Importance in Tree Ensembles | impurity-importance bias; permutation importance; SHAP for trees |

## 1.6 Boosting Algorithms

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-BST-002 | Gradient Boosting Machines | fitting pseudo-residuals; functional gradient descent; shrinkage/learning rate; boosting vs bagging |
| P0 | CML-BST-003 | XGBoost | regularized objective; second-order Taylor approximation; split-gain formula; sparsity-aware splits |
| P1 | CML-BST-001 | AdaBoost | sample reweighting; exponential loss; weak-learner weights |
| P1 | CML-BST-004 | LightGBM | histogram splits; leaf-wise growth; GOSS / EFB |
| P2 | CML-BST-005 | CatBoost | ordered boosting; ordered target statistics for categoricals; prediction shift |

## 1.7 ML System Design

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-SYS-001 | ML System Design Framework (new) | problem framing and success metrics; data collection/labeling; offline vs online evaluation; serving and monitoring |
| P0 | CML-SYS-002 | Training-Serving Skew and Data Drift (new) | feature consistency; covariate/label/concept drift; monitoring and retraining triggers |
| P1 | CML-SYS-003 | Feature Stores and Data Pipelines (new) | point-in-time correctness; online vs offline features; batch vs streaming |
| P1 | CML-SYS-004 | Model Deployment Patterns (new) | batch vs real-time inference; shadow / canary deployment; latency budgets |

## 1.8 Mathematical and Statistical Foundations

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-FND-002 | Probability and Statistics Foundations | Bayes' theorem; MLE vs MAP; common distributions; expectation/variance; CLT |
| P0 | CML-FND-006 | Hypothesis Testing and A/B Testing (new) | p-values and significance; power and sample size; t-test / chi-square; multiple testing; A/B pitfalls (peeking, novelty, SRM) |
| P1 | CML-FND-001 | Linear Algebra for ML | eigendecomposition; SVD; matrix calculus; rank and projections |
| P1 | CML-FND-005 | Information Theory for ML | entropy; cross-entropy; KL divergence and asymmetry; mutual information |
| P1 | CML-FND-004 | Convex Optimization for ML | convexity; GD convergence; Lagrangian duality; KKT |
| P2 | CML-FND-003 | Statistical Learning Theory | PAC learning; VC dimension; generalization bounds |

## 1.9 Clustering and Mixture Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-CLU-001 | K-Means Clustering | Lloyd's algorithm; k-means++; choosing k (elbow, silhouette); assumptions and failure modes |
| P1 | CML-CLU-004 | Gaussian Mixture Models | soft assignment; EM for GMM; GMM vs k-means |
| P1 | CML-CLU-005 | Expectation-Maximization Algorithm | E/M-step derivation; ELBO view; local-optimum convergence |
| P1 | CML-CLU-003 | DBSCAN and Density-Based Clustering | eps / minPts; density reachability; arbitrary-shape clusters |
| P2 | CML-CLU-002 | Hierarchical Clustering | linkage criteria; dendrograms; complexity |

## 1.10 Dimensionality Reduction and Manifold Learning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-DIM-001 | Principal Component Analysis | variance-maximization derivation; covariance eigendecomposition; PCA via SVD; choosing components; need for standardization |
| P1 | CML-DIM-003 | t-SNE | perplexity; KL objective; crowding problem; why not for downstream features |
| P1 | CML-DIM-004 | UMAP | graph construction; local vs global structure; comparison to t-SNE |
| P2 | CML-DIM-002 | LDA for Dimensionality Reduction | Fisher criterion; between/within-class scatter |
| P3 | CML-DIM-005 | Manifold Learning Methods | Isomap; Locally Linear Embedding |

## 1.11 Feature Engineering and Selection

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-FEA-001 | Feature Engineering Techniques | categorical encoding (one-hot, target encoding and its leakage risk); scaling; missing-value imputation; interaction features |
| P1 | CML-FEA-002 | Feature Selection Methods | filter / wrapper / embedded; mutual information; L1-based selection; RFE |

## 1.12 Imbalanced Learning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-IMB-003 | Evaluation Under Class Imbalance | why accuracy fails; PR-AUC; balanced accuracy; MCC |
| P0 | CML-IMB-001 | Resampling Techniques | over/undersampling; SMOTE; ADASYN; resample only inside training folds |
| P1 | CML-IMB-002 | Cost-Sensitive Learning | class weights; threshold moving; focal loss |

## 1.13 Instance-Based and Generative Classifiers

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-GEN-004 | k-Nearest Neighbors (new) | distance metrics; choosing k; curse of dimensionality; feature-scaling sensitivity; KD-trees / ANN |
| P1 | CML-GEN-001 | Naive Bayes Classifiers | conditional independence; Gaussian/Multinomial/Bernoulli; Laplace smoothing; text use |
| P1 | CML-GEN-003 | Discriminative vs Generative Modeling | joint vs conditional; data efficiency; Naive Bayes vs logistic regression |
| P2 | CML-GEN-002 | Linear and Quadratic Discriminant Analysis | shared vs class-specific covariance; decision boundaries |

## 1.14 Support Vector Machines

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CML-SVM-002 | Soft-Margin SVM and Hinge Loss | C trade-off; hinge loss; SVM vs logistic regression |
| P1 | CML-SVM-003 | Kernel Methods and the Kernel Trick | RBF/polynomial kernels; Mercer's condition; kernel choice |
| P1 | CML-SVM-001 | Maximum Margin Classifiers | margin geometry; support vectors; hard margin |
| P3 | CML-SVM-004 | SVM Optimization | dual formulation; SMO |

## 1.15 Recommender Systems

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CML-REC-001 | Collaborative Filtering and Matrix Factorization (new) | user-item matrix; ALS / SGD factorization; implicit feedback; cold start |
| P1 | CML-REC-002 | Two-Tower Retrieval and Ranking Pipelines (new) | candidate generation vs ranking; two-tower embeddings; ANN retrieval; negative sampling |
| P1 | CML-REC-003 | Recommender Evaluation (new) | precision@k / recall@k; NDCG; MAP; offline vs online metrics |
| P2 | CML-REC-004 | Content-Based and Hybrid Recommenders (new) | item features; hybrid blending |

## 1.16 Calibration and Uncertainty

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CML-CAL-001 | Probability Calibration | reliability diagrams; ECE; Platt scaling; isotonic regression |
| P2 | CML-CAL-002 | Uncertainty Estimation in Classical ML | ensembles; bootstrap; conformal prediction |

## 1.17 Anomaly Detection

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CML-ANM-001 | Statistical and Distance-Based Anomaly Detection | z-score / IQR; Mahalanobis distance; kNN / LOF |
| P1 | CML-ANM-002 | Isolation Forest | path length; anomaly-score derivation |
| P2 | CML-ANM-003 | One-Class SVM and Novelty Detection | boundary-based novelty detection |

## 1.18 Probabilistic Graphical Models and Bayesian ML

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CML-PGM-004 | Bayesian Inference Fundamentals | priors/posteriors; conjugacy; MCMC basics; variational inference intro |
| P2 | CML-PGM-001 | Bayesian Networks | DAG structure; conditional independence; d-separation |
| P2 | CML-PGM-003 | Inference in Graphical Models | variable elimination; belief propagation |
| P3 | CML-PGM-002 | Markov Random Fields | undirected models; potential functions |

## 1.19 Gaussian Processes

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | CML-GP-001 | Gaussian Process Regression | kernel functions; posterior mean/variance derivation |
| P3 | CML-GP-002 | GP Classification and Model Selection | Laplace approximation; marginal-likelihood tuning |

---

# Domain 2 — Classical NLP (prefix CNLP)

Most relevant to: NLP Engineer, Applied Scientist (NLP), Research Scientist. Overall lower frequency today than Domain 5, except retrieval and sequence-model basics.

## 2.1 Lexical Retrieval (TF-IDF / BM25)

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CNLP-IR-002 | BM25 | term saturation (k1); length normalization (b); BM25 vs TF-IDF; role in hybrid search |
| P0 | CNLP-IR-001 | TF-IDF | TF and IDF derivation; vector space model; cosine similarity |
| P2 | CNLP-IR-003 | Classical IR Architectures | inverted index; boolean retrieval; vector-space ranking |

## 2.2 Neural Sequence Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CNLP-NEU-002 | LSTM Networks | gate equations; why LSTMs mitigate vanishing gradients; cell state; parameter count |
| P0 | CNLP-NEU-001 | Recurrent Neural Networks | BPTT; vanishing/exploding gradients; gradient clipping |
| P1 | CNLP-NEU-003 | GRU Networks | update/reset gates; GRU vs LSTM |

## 2.3 Distributional Word Representations

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CNLP-EMB-002 | Word2Vec | skip-gram vs CBOW; negative-sampling objective; hierarchical softmax; analogy arithmetic |
| P1 | CNLP-EMB-003 | GloVe | co-occurrence ratios; weighted least-squares objective; vs Word2Vec |
| P1 | CNLP-EMB-004 | FastText | subword n-grams; OOV handling; morphology |
| P2 | CNLP-EMB-001 | Distributional Semantics Foundations | co-occurrence / PMI matrices; SVD-based embeddings |

## 2.4 Early Neural MT and Attention

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CNLP-NMT-002 | Attention Mechanism Origins | Bahdanau vs Luong attention; alignment; motivation for the Transformer |
| P1 | CNLP-NMT-001 | Encoder-Decoder (seq2seq) | fixed-vector bottleneck; teacher forcing; beam search |
| P3 | CNLP-NMT-003 | Statistical Machine Translation | phrase-based SMT; IBM alignment models |

## 2.5 Classical Language Modeling

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CNLP-LM-003 | Perplexity and LM Evaluation | definition and link to cross-entropy; interpreting values; comparing across tokenizers |
| P1 | CNLP-LM-001 | N-gram Language Models | Markov assumption; MLE counts; sparsity |
| P2 | CNLP-LM-002 | Smoothing Techniques | Laplace; backoff / interpolation; Kneser-Ney |

## 2.6 Text Preprocessing and Tokenization

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CNLP-TOK-004 | Edit Distance and String Similarity | Levenshtein DP (coding-interview staple); Damerau-Levenshtein; applications |
| P1 | CNLP-TOK-002 | Stemming and Lemmatization | Porter/Snowball; lemmatization vs stemming; morphological analysis |
| P2 | CNLP-TOK-001 | Text Normalization | lowercasing; Unicode normalization; punctuation handling |
| P2 | CNLP-TOK-003 | Rule-Based and Statistical Tokenization | regex tokenizers; multi-word expressions |

## 2.7 Sequence Labeling

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CNLP-SEQ-004 | Named Entity Recognition | BIO tagging; BiLSTM-CRF; entity-level F1 |
| P1 | CNLP-SEQ-001 | Hidden Markov Models | Viterbi (DP); forward algorithm; Baum-Welch |
| P1 | CNLP-SEQ-002 | Conditional Random Fields | linear-chain CRF; discriminative vs HMM; CRF layer on BiLSTM |
| P2 | CNLP-SEQ-003 | Part-of-Speech Tagging | tagsets; HMM/CRF taggers |

## 2.8 Text Classification and Sentiment

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CNLP-SNT-002 | Classical Text Classification | bag-of-words + NB/LR/SVM; n-gram features; strong baselines |
| P2 | CNLP-SNT-001 | Lexicon-Based Sentiment Analysis | polarity lexicons; rule-based scoring |

## 2.9 Classical NLP Evaluation

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CNLP-EVL-001 | Classical NLP Evaluation Metrics | BLEU (n-gram precision, brevity penalty); ROUGE-N/L; limitations; chrF / METEOR |

## 2.10 Topic Modeling

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CNLP-TPM-001 | Latent Dirichlet Allocation | generative story; Dirichlet priors; Gibbs sampling; choosing number of topics |
| P2 | CNLP-TPM-002 | Latent Semantic Analysis | SVD-based topic extraction |

## 2.11 Syntax, Semantics and Discourse

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | CNLP-SYN-002 | Dependency Parsing | transition-based vs graph-based parsing |
| P2 | CNLP-SEM-002 | Coreference Resolution | mention detection; rule-based and statistical approaches |
| P3 | CNLP-SYN-001 | Constituency Parsing | CFGs; CYK; PCFGs |
| P3 | CNLP-SYN-003 | Syntactic Ambiguity Resolution | chart parsing; probabilistic disambiguation |
| P3 | CNLP-SEM-001 | Lexical Semantics | WordNet; word-sense disambiguation |
| P3 | CNLP-SEM-003 | Semantic Role Labeling | predicate-argument structure |

---

# Domain 3 — Classical Reinforcement Learning (prefix CRL)

Most relevant to: RL / Research Scientist roles, and increasingly LLM post-training roles (PPO, GAE, policy gradients underpin RLHF — see Domain 5 H and Domain 6).

## 3.1 MDP Foundations

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-MDP-002 | Bellman Equations | expectation vs optimality equations; derivation; contraction intuition |
| P0 | CRL-MDP-001 | Markov Decision Processes | states, actions, rewards, transitions; Markov property; episodic vs continuing |
| P0 | CRL-MDP-003 | Value Functions | V vs Q; advantage function; relationship via Bellman |
| P1 | CRL-MDP-004 | Discounting and Reward Shaping (new) | role of gamma; potential-based shaping; sparse vs dense rewards |

## 3.2 Temporal-Difference and Monte Carlo Learning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-TD-004 | Q-Learning | off-policy TD control; update rule; convergence conditions; max-operator overestimation |
| P0 | CRL-TD-003 | SARSA | on-policy TD control; SARSA vs Q-learning (cliff-walking example) |
| P0 | CRL-TD-002 | Temporal-Difference Learning | TD(0); TD error; bootstrapping vs MC; bias-variance |
| P1 | CRL-TD-001 | Monte Carlo Policy Evaluation | first-visit / every-visit; high variance; no bootstrapping |
| P1 | CRL-TD-006 | Off-Policy Learning and Importance Sampling | behavior vs target policy; ordinary vs weighted IS; variance blow-up |
| P2 | CRL-TD-005 | Eligibility Traces and TD(λ) | forward/backward views; credit assignment |

## 3.3 Policy Gradient Methods

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-PG-001 | Policy Gradient Theorem | log-derivative trick; score-function estimator; derivation |
| P0 | CRL-PG-002 | REINFORCE | MC policy gradient; baselines for variance reduction |

## 3.4 Trust-Region and Proximal Methods

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-TRP-002 | PPO | clipped surrogate objective; why clipping; KL penalty variant; implementation details (GAE, minibatch epochs) |
| P1 | CRL-TRP-001 | TRPO | KL-constrained update; natural gradient; conjugate gradient |

## 3.5 Actor-Critic Methods

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-AC-001 | Actor-Critic Fundamentals | combining policy and value learning; advantage estimation; critic bias |
| P1 | CRL-AC-004 | Generalized Advantage Estimation (new) | λ-weighted TD residuals; bias-variance knob; use in PPO / RLHF |
| P1 | CRL-AC-002 | A2C | synchronous advantage actor-critic |
| P2 | CRL-AC-003 | A3C | asynchronous parallel workers |

## 3.6 Value-Based Deep RL

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-VAL-001 | Deep Q-Networks | target networks; experience replay; why both stabilize training |
| P1 | CRL-VAL-002 | Double DQN | overestimation-bias correction |
| P1 | CRL-VAL-004 | Replay Buffer Design | prioritized experience replay; buffer size effects |
| P2 | CRL-VAL-003 | Dueling DQN | value/advantage decomposition |

## 3.7 Bandits and Exploration

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CRL-BAN-002 | Bandit Algorithms | epsilon-greedy; UCB; Thompson sampling; contextual bandits |
| P0 | CRL-BAN-001 | Multi-Armed Bandits | regret; exploration-exploitation trade-off; bandits vs A/B tests |
| P2 | CRL-BAN-003 | Exploration Strategies in Deep RL (new) | entropy bonus; curiosity / intrinsic motivation; optimism |

## 3.8 Dynamic Programming

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CRL-DP-002 | Value Iteration | Bellman backup; convergence |
| P1 | CRL-DP-001 | Policy Iteration | evaluation + improvement; convergence sketch |

## 3.9 Continuous Control

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CRL-CTR-003 | SAC | maximum-entropy objective; soft Q; temperature tuning |
| P2 | CRL-CTR-001 | DDPG | deterministic policy gradient; continuous actions |
| P2 | CRL-CTR-002 | TD3 | twin critics; delayed updates; target smoothing |

## 3.10 Offline RL and Imitation Learning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CRL-OFF-002 | Imitation Learning | behavior cloning; compounding error; DAgger |
| P1 | CRL-OFF-001 | Offline RL Fundamentals | distributional shift; extrapolation error; batch-constrained learning |
| P2 | CRL-OFF-003 | Inverse Reinforcement Learning | reward inference from demonstrations; MaxEnt IRL |

## 3.11 Model-Based RL

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CRL-MOD-001 | Model-Based RL Fundamentals | learned dynamics; sample efficiency; model bias |
| P2 | CRL-MOD-002 | Model-Based Planning Algorithms | MPC; Dyna-style methods |

## 3.12 Multi-Agent and Hierarchical RL

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | CRL-HMA-002 | Multi-Agent RL Fundamentals | cooperative vs competitive; Markov games; non-stationarity |
| P3 | CRL-HMA-001 | Hierarchical RL | options framework; temporal abstraction |

---

# Domain 4 — Classical Computer Vision (prefix CCV)

Most relevant to: CV Engineer, Applied Scientist (vision), MLE on perception/robotics teams. Deep-learning-era CNN topics dominate; hand-crafted CV is mostly P2/P3 unless the role is geometry/3D.

## 4.1 CNN Foundations

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CCV-CNN-001 | Convolutional Layer Mechanics | output-size formula; parameter count; receptive-field growth; weight sharing and translation equivariance; stride / padding / dilation |
| P0 | CCV-CNN-005 | Transfer Learning and Fine-Tuning (new) | feature extraction vs full fine-tuning; layer freezing; domain shift |
| P0 | CCV-CNN-004 | Data Augmentation (new) | flips / crops / color jitter; mixup / cutmix; test-time augmentation |
| P1 | CCV-CNN-002 | Pooling and Downsampling | max vs average; global average pooling; strided convolutions |
| P1 | CCV-CNN-003 | CNN Training Fundamentals | backprop through conv; BatchNorm in CNNs |

## 4.2 Classic CNN Architectures

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CCV-ARC-005 | ResNet | residual learning; identity shortcuts; bottleneck blocks; why it eases optimization |
| P1 | CCV-ARC-007 | EfficientNet and MobileNet | depthwise-separable conv FLOPs; inverted residuals; compound scaling |
| P1 | CCV-ARC-004 | GoogLeNet / Inception | 1×1 convolutions for reduction; multi-branch modules |
| P1 | CCV-ARC-003 | VGG | stacked 3×3 filters; receptive-field equivalence |
| P2 | CCV-ARC-002 | AlexNet | ReLU; dropout; GPU training |
| P2 | CCV-ARC-006 | DenseNet | dense connectivity; feature reuse |
| P3 | CCV-ARC-001 | LeNet | early CNN for digits |

## 4.3 Object Detection

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CCV-DET-001 | R-CNN Family | two-stage pipeline; RPN; RoI pooling vs RoIAlign; Faster R-CNN |
| P0 | CCV-DET-002 | YOLO Foundations | single-stage detection; grid prediction; anchors; speed/accuracy trade-off |
| P0 | CCV-DET-004 | NMS and Anchor Design (new) | IoU thresholding; soft-NMS; anchor-based vs anchor-free |
| P2 | CCV-DET-003 | SSD | multi-scale single-shot detection |

## 4.4 Segmentation Architectures

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CCV-SEGN-001 | U-Net | encoder-decoder; skip connections; medical segmentation |
| P1 | CCV-SEGN-002 | Mask R-CNN | mask branch; RoIAlign; instance segmentation |

## 4.5 Vision Evaluation Metrics

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | CCV-EVL-001 | Classification and Detection Metrics | IoU; mAP computation; precision-recall per class; top-k accuracy |
| P0 | CCV-EVL-002 | Segmentation Metrics | mIoU; Dice coefficient; pixel accuracy |

## 4.6 Image Representation and Filtering

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CCV-IMG-002 | Convolution and Image Filtering | kernel convolution; Gaussian / median / bilateral filters |
| P2 | CCV-IMG-001 | Image Representation and Color Spaces | RGB / HSV / Lab; bit depth |
| P2 | CCV-IMG-004 | Image Pyramids | Gaussian / Laplacian pyramids; link to feature pyramids |
| P2 | CCV-IMG-003 | Fourier Transforms for Images | frequency-domain filtering; DFT / FFT |

## 4.7 Edges, Corners and Feature Descriptors

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CCV-FRQ-001 | Edge Detection | Canny pipeline; Sobel; gradient magnitude/direction |
| P1 | CCV-FEA-001 | SIFT | scale-space extrema; orientation assignment; descriptor construction |
| P2 | CCV-FRQ-002 | Corner Detection | Harris; FAST |
| P2 | CCV-FEA-004 | HOG | gradient histograms; pedestrian detection |
| P2 | CCV-FEA-003 | ORB | oriented FAST + rotated BRIEF; efficiency |
| P3 | CCV-FEA-002 | SURF | box-filter approximation to SIFT |

## 4.8 Camera Geometry and Multi-View Vision

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | CCV-GEO-001 | Camera Models and Calibration | pinhole model; intrinsics / extrinsics; calibration |
| P1 | CCV-GEO-002 | Homography | planar mapping; DLT; RANSAC estimation |
| P2 | CCV-GEO-003 | Epipolar Geometry | fundamental vs essential matrix; epipolar constraint |
| P2 | CCV-GEO-004 | Stereo Vision | disparity; depth from stereo |
| P2 | CCV-GEO-005 | Structure from Motion | bundle adjustment; multi-view reconstruction |

## 4.9 Motion, Tracking and Classical Segmentation

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | CCV-FLOW-001 | Optical Flow Estimation | brightness constancy; Lucas-Kanade |
| P2 | CCV-SEG-002 | Classical Object Tracking | Kalman filter; mean-shift; correlation trackers |
| P3 | CCV-FLOW-002 | Dense Optical Flow Methods | Horn-Schunck |
| P3 | CCV-SEG-001 | Classical Image Segmentation | thresholding; watershed; graph cuts |

---

# Domain 5 — Modern NLP and LLMs (prefix LLM)

Most relevant to: LLM Engineer, Research Scientist/Engineer, Applied Scientist, Inference/Serving and AI Infra roles. Full rows are inline here (this replaces the category-only summary in the previous version). Categories, topics and subtopics follow a learning order (each builds on the previous ones), not importance order; original A–T letters dropped in favor of 5.x numbering, IDs unchanged.

## 5.1 Language Modeling and Tokenization

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-LMT-001 | Language Modeling Objectives | next-token cross-entropy; teacher forcing; perplexity; CLM vs MLM vs prefix LM; span corruption |
| P0 | LLM-LMT-002 | Byte Pair Encoding (BPE) | merge algorithm; vocabulary construction; byte-level BPE; regex pre-tokenization |
| P2 | LLM-LMT-004 | WordPiece | greedy longest-match; likelihood-based merges |
| P1 | LLM-LMT-003 | Unigram LM Tokenization | SentencePiece; EM pruning; subword regularization; vs BPE |
| P1 | LLM-LMT-005 | Tokenizer Design Trade-offs | vocab size vs sequence length; multilingual cost; digit tokenization; code; byte-level / tokenizer-free |
| P1 | LLM-LMT-006 | Embedding Layers and Weight Tying | input/output tying; embedding scaling; vocab projection cost |
| P1 | LLM-LMT-007 | In-Context Learning and Prompting (new) | zero/few-shot prompting; prompt sensitivity; why ICL emerges |

## 5.2 Attention and Positional Encoding

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-ATN-001 | Scaled Dot-Product Attention | Q/K/V projections; why scale by √d_k; O(n²d) time/memory |
| P0 | LLM-ATN-002 | Multi-Head Attention (MHA) | head splitting; per-head dim; concat + output projection; why multiple heads |
| P1 | LLM-ATN-009 | Attention Masking Variants | causal; padding; sliding-window; block-sparse |
| P1 | LLM-ATN-006 | Sinusoidal and Learned Positional Encodings | sinusoidal formula; learned absolute PE; extrapolation limits |
| P0 | LLM-ATN-007 | Rotary Position Embeddings (RoPE) | rotation derivation; relative-position property; frequency bands; context extension (PI, NTK-aware, YaRN) |
| P2 | LLM-ATN-008 | ALiBi and Relative Position Biases | linear bias; extrapolation vs RoPE |
| P1 | LLM-ATN-003 | Multi-Query Attention (MQA) | shared K/V; memory savings; quality trade-off |
| P0 | LLM-ATN-004 | Grouped-Query Attention (GQA) | grouping factor; KV-cache size formula; MHA vs MQA vs GQA |
| P1 | LLM-ATN-005 | Multi-Head Latent Attention (MLA) | low-rank KV compression; decoupled RoPE; cache size vs GQA |

## 5.3 Transformer Foundations

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-TRF-001 | Original Transformer Architecture | encoder-decoder; sublayers; residual + norm; "Attention Is All You Need" walkthrough |
| P1 | LLM-TRF-006 | Residual Connections and Depth Scaling | residual stream view; depth stability; residual scaling |
| P0 | LLM-TRF-005 | Normalization Strategies | LayerNorm vs RMSNorm; Pre-LN vs Post-LN stability; QK-Norm |
| P1 | LLM-TRF-004 | Feed-Forward Networks and Activations | expansion ratio; GELU; GeGLU; SwiGLU |
| P1 | LLM-TRF-003 | Encoder-only Architecture (BERT-style) | bidirectional attention; MLM; [CLS]/[SEP]; when to use encoders |
| P0 | LLM-TRF-002 | Decoder-only Architecture (GPT-style) | causal masking; autoregressive generation loop; block dataflow |
| P0 | LLM-TRF-009 | Implementing a Transformer Block from Scratch (new) | attention tensor shapes; mask implementation; numerically stable softmax; common bugs |
| P2 | LLM-TRF-007 | Weight Initialization for Transformers | scaled init; muP; fan-in/out |
| P0 | LLM-TRF-008 | Parameter Count, FLOPs and Memory Estimation (new) | per-layer params (~12d²); training FLOPs ≈ 6ND; inference ≈ 2N FLOPs/token; weights + optimizer-state + activation memory |

## 5.4 Pretraining and Data Engineering

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P2 | LLM-PRE-001 | Pretraining Corpus Construction | CommonCrawl pipelines; provenance and licensing |
| P1 | LLM-PRE-002 | Data Deduplication | exact vs near-dup; MinHash/LSH; effects on memorization |
| P1 | LLM-PRE-003 | Data Quality Filtering | heuristic filters; classifier filtering; perplexity filtering |
| P1 | LLM-PRE-004 | Data Mixture Design | domain weights; up/down-sampling; DoReMi-style optimization |
| P2 | LLM-PRE-007 | Synthetic Data for Pretraining | textbook-style synthetic corpora; contamination risk |
| P0 | LLM-PRE-005 | Scaling Laws | loss vs compute/data/params; Kaplan laws; Chinchilla (~20 tokens/param) |
| P1 | LLM-PRE-006 | Token Budget and Compute-Optimal Decisions | FLOPs budgeting; over-training for cheaper inference |

## 5.5 Optimization and Distributed Training

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-OPT-001 | AdamW for LLMs | decoupled weight decay; optimizer-state memory (2× params); β2 / ε at scale |
| P1 | LLM-OPT-003 | Learning Rate Schedules and Warmup | warmup; cosine; WSD |
| P0 | LLM-OPT-004 | Mixed Precision Training | BF16 vs FP16; FP32 master weights; loss scaling |
| P1 | LLM-OPT-011 | Training Instability and Loss Spikes (new) | loss spikes; logit growth and z-loss; gradient clipping; attention-entropy collapse; debugging divergence |
| P2 | LLM-OPT-002 | Muon and Orthogonalized Optimizers | Newton-Schulz orthogonalization; vs AdamW |
| P1 | LLM-OPT-005 | Gradient Checkpointing | activation recomputation; memory vs compute |
| P0 | LLM-OPT-006 | ZeRO and FSDP | ZeRO stages 1/2/3; sharding optimizer/gradients/params; communication overlap |
| P1 | LLM-OPT-007 | Tensor Parallelism | column/row-parallel layers; all-reduce placement |
| P1 | LLM-OPT-008 | Pipeline Parallelism | micro-batches; bubble fraction; 1F1B / interleaved |
| P2 | LLM-OPT-009 | Expert Parallelism | expert placement; all-to-all cost |
| P2 | LLM-OPT-010 | 3D/4D Parallelism Composition | combining TP + PP + DP + EP; topology mapping |

## 5.6 Fine-tuning and Mid-training

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-FTN-001 | Supervised Fine-Tuning (SFT) | chat templates; loss masking on prompt tokens; data quality vs quantity |
| P1 | LLM-FTN-002 | Instruction Tuning and Dataset Construction | task diversity; FLAN-style mixtures; data curation |
| P2 | LLM-FTN-006 | Adapters and Prefix/Prompt Tuning | bottleneck adapters; prefix tuning; soft prompts |
| P0 | LLM-FTN-003 | LoRA | low-rank update math; rank/alpha; which layers; parameter savings; merging |
| P1 | LLM-FTN-004 | QLoRA | NF4; double quantization; paged optimizers |
| P2 | LLM-FTN-005 | DoRA and LoRA Variants | magnitude/direction decomposition |
| P1 | LLM-FTN-009 | Knowledge Distillation for LLMs | logit vs sequence-level KD; on-policy distillation |
| P1 | LLM-FTN-007 | Continual Pretraining and Mid-training | domain adaptation; replay mixes; catastrophic forgetting |
| P3 | LLM-FTN-008 | Curriculum Learning for LLMs | difficulty ordering; staged curricula |

## 5.7 Preference Optimization and RL Post-training

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-PFO-001 | Reward Modeling | Bradley-Terry loss; preference data collection; RM over-optimization |
| P0 | LLM-PFO-002 | RLHF with PPO | pipeline (SFT → RM → PPO); KL penalty to reference; critic/value model; memory cost of 4 models |
| P0 | LLM-PFO-003 | Direct Preference Optimization (DPO) | derivation from KL-regularized RL; implicit reward; β; DPO vs PPO trade-offs |
| P1 | LLM-PFO-004 | DPO Variants: IPO, KTO, SimPO, ORPO | IPO's fix for overfitting; KTO unpaired data; reference-free SimPO; ORPO combined loss |
| P1 | LLM-PFO-009 | Reward Hacking and Preference-Optimization Pitfalls | length bias; sycophancy; over-optimization |
| P1 | LLM-PFO-007 | RL with Verifiable Rewards (RLVR) | rule/verifier rewards; math and code checkers |
| P0 | LLM-PFO-005 | GRPO | group-relative advantage; no value network; why it suits verifiable rewards |
| P2 | LLM-PFO-006 | DAPO and GRPO Refinements | decoupled clipping; dynamic sampling; token-level loss |
| P1 | LLM-PFO-008 | Process vs Outcome Reward Models | step-level vs final-answer supervision; PRM data |

## 5.8 Reasoning and Test-time Compute

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-RSN-001 | Chain-of-Thought and Self-Consistency | CoT elicitation; majority voting over samples |
| P2 | LLM-RSN-004 | Self-Reflection and Self-Correction | critique loops; verifier-guided revision |
| P2 | LLM-RSN-005 | Tree-of-Thought and Search-Based Reasoning | MCTS over steps; deliberate search |
| P0 | LLM-RSN-003 | Test-Time Compute Scaling | best-of-N; verifier-guided search; compute-optimal inference |
| P1 | LLM-RSN-002 | Reasoning-Oriented RL Training | o1/R1-style long-CoT RL; reward design |
| P1 | LLM-RSN-006 | Distilling Reasoning Capabilities | long-CoT distillation into small models |

## 5.9 Evaluation and Benchmarking

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P1 | LLM-EVL-001 | Knowledge and Reasoning Benchmarks | MMLU; GPQA; contamination and saturation |
| P1 | LLM-EVL-002 | Mathematical Reasoning Benchmarks | GSM8K; MATH; AIME-style; answer verification |
| P1 | LLM-EVL-003 | Coding Benchmarks | HumanEval pass@k; SWE-bench; execution-based eval |
| P1 | LLM-EVL-006 | Calibration and Uncertainty for LLMs | verbalized vs logit confidence; selective prediction |
| P0 | LLM-EVL-005 | Hallucination Detection and Measurement | factuality benchmarks; attribution / citation checks; mitigation |
| P0 | LLM-EVL-004 | LLM-as-Judge Evaluation | pairwise vs pointwise; position/length/self bias; judge calibration |
| P0 | LLM-EVL-007 | Building Task-Specific Eval Sets (new) | golden datasets; annotation guidelines and agreement; offline-online metric alignment; regression testing |

## 5.10 LLM Inference Fundamentals

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-INF-002 | Decoding / Sampling Algorithms | greedy; temperature; top-k; top-p; min-p; repetition penalties |
| P1 | LLM-INF-003 | Beam Search and Structured Decoding | beam search; grammar/JSON-constrained decoding |
| P0 | LLM-INF-001 | Prefill vs Decode Phases | compute-bound prefill vs memory-bound decode; arithmetic intensity; phase bottlenecks |
| P0 | LLM-INF-011 | Latency/Throughput Metrics | TTFT; TPOT / ITL; throughput vs latency; goodput and SLOs |
| P0 | LLM-INF-004 | Static vs Continuous Batching | iteration-level scheduling; padding waste; throughput gains |
| P1 | LLM-INF-005 | Chunked Prefill | interleaving prefill with decode; latency smoothing |
| P1 | LLM-INF-010 | Disaggregated Prefill/Decode Serving | separate GPU pools; KV transfer; when it pays off |
| P0 | LLM-INF-006 | Speculative Decoding Fundamentals | draft-then-verify; rejection sampling preserves distribution; acceptance rate and speedup |
| P2 | LLM-INF-007 | Medusa | multiple decoding heads; tree verification |
| P2 | LLM-INF-008 | EAGLE | feature-level drafting; EAGLE-1/2/3 |
| P2 | LLM-INF-009 | Multi-Token Prediction | multiple next-token heads; training and inference use |

## 5.11 KV Cache and Memory Optimization

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-KVC-001 | KV Cache Fundamentals | why cache K/V; append mechanics; tensor shapes; memory formula (2·layers·kv_heads·head_dim·seq·batch·bytes) |
| P0 | LLM-KVC-002 | MHA vs MQA vs GQA vs MLA Cache Comparison | per-token cache size by variant; worked examples |
| P2 | LLM-KVC-008 | Static vs Dynamic KV Allocation | pre-allocated vs growable; implementation trade-offs |
| P0 | LLM-KVC-003 | PagedAttention | fragmentation; OS virtual-memory analogy; block tables |
| P1 | LLM-KVC-004 | Prefix Caching and RadixAttention | shared-prefix reuse; radix-tree index; cache hit rates |
| P1 | LLM-KVC-005 | KV Cache Quantization | INT8/FP8 KV; per-token vs per-channel scales |
| P1 | LLM-KVC-006 | Eviction: StreamingLLM and H2O | attention sinks; heavy-hitter eviction |
| P2 | LLM-KVC-007 | Compression: SnapKV and PyramidKV | importance-based selection; layer-wise budgets |
| P2 | LLM-KVC-009 | GPU/CPU KV Offloading | offload/prefetch; PCIe/NVLink bandwidth |
| P2 | LLM-KVC-010 | Distributed KV Transfer and Cache-Aware Scheduling | cross-node KV transfer; cache-aware routing |

## 5.12 Inference Kernels and Hardware

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-KRN-005 | GPU Memory Hierarchy and Roofline | HBM/SRAM bandwidth; arithmetic intensity; compute- vs memory-bound |
| P1 | LLM-KRN-004 | CUDA and Triton Kernel Programming | fused kernels; memory coalescing; occupancy |
| P0 | LLM-KRN-001 | FlashAttention | SRAM vs HBM; tiling; online softmax; why IO-awareness gives speedup |
| P1 | LLM-KRN-002 | FlashAttention-2 and -3 | work partitioning; FP8; Hopper features (TMA, warp specialization) |
| P1 | LLM-KRN-003 | Flash-Decoding and FlashInfer | split-KV decode parallelism; paged-KV kernels |
| P2 | LLM-KRN-006 | CUDA Graphs for Inference | launch overhead; capture/replay |
| P2 | LLM-KRN-007 | Performance Profiling | Nsight / torch profiler; finding bottleneck kernels |

## 5.13 Quantization and Compression

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-QNT-001 | Quantization Fundamentals | symmetric vs asymmetric; per-tensor/channel/group; weight-only vs weight+activation; outliers |
| P1 | LLM-QNT-006 | QAT vs PTQ | accuracy vs cost; when QAT is worth it |
| P1 | LLM-QNT-002 | GPTQ | second-order error compensation; layer-wise PTQ |
| P1 | LLM-QNT-003 | AWQ | activation-aware salient weights; per-channel scaling |
| P1 | LLM-QNT-004 | SmoothQuant | migrating activation outliers into weights; W8A8 |
| P1 | LLM-QNT-005 | FP8 and FP4 Inference | E4M3/E5M2; microscaling (MX) formats; scaling factors |
| P2 | LLM-QNT-007 | Pruning and Sparsity | structured vs unstructured; 2:4 sparsity |

## 5.14 LLM Serving Systems

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-SRV-001 | vLLM Architecture and Scheduling | PagedAttention integration; continuous batching; scheduler loop |
| P1 | LLM-SRV-002 | SGLang Architecture | RadixAttention; structured generation |
| P1 | LLM-SRV-003 | TensorRT-LLM | kernel fusion; engine compilation |
| P2 | LLM-SRV-004 | TGI and Other Serving Frameworks | architecture comparison |
| P2 | LLM-SRV-005 | llama.cpp and CPU/Edge Inference | GGUF; quantized CPU inference |
| P1 | LLM-SRV-006 | Scheduler Design and Request Routing | SLO-aware scheduling; load balancing; preemption |
| P2 | LLM-SRV-007 | Autoscaling and Multi-Model Serving | model multiplexing; cold starts |

## 5.15 Advanced Architectures and MoE

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-ARC-001 | Mixture-of-Experts Fundamentals | sparse activation; top-k gating; total vs active params |
| P0 | LLM-ARC-002 | MoE Load Balancing and Routing | auxiliary loss; capacity factor; token dropping; router z-loss |
| P1 | LLM-ARC-003 | DeepSeekMoE and Fine-Grained Experts | shared experts; fine-grained segmentation; aux-loss-free balancing |
| P1 | LLM-ARC-004 | Sliding-Window and Local Attention | window size; local+global layer patterns |
| P2 | LLM-ARC-005 | Sparse and Block-Sparse Attention | strided; BigBird/Longformer patterns |
| P3 | LLM-ARC-010 | Cross-Layer KV Sharing | layer-wise KV sharing; memory beyond GQA/MLA |
| P1 | LLM-ARC-011 | Long-Context Architecture Techniques | context extension; memory/retrieval-augmented architectures |
| P2 | LLM-ARC-006 | Linear Attention | kernelized attention; RWKV; linear-time derivation |
| P1 | LLM-ARC-007 | State-Space Models: Mamba and Mamba-2 | selective SSM; parallel scan; SSD duality; vs attention |
| P2 | LLM-ARC-008 | Gated DeltaNet and Linear-Recurrent Models | delta rule; gating; vs Mamba |
| P2 | LLM-ARC-009 | Hybrid Attention/SSM Architectures | Jamba / Zamba-style interleaving |

## 5.16 Retrieval and RAG

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-RAG-003 | RAG Fundamentals | retrieve-then-generate; chunking strategies; prompt assembly; failure modes |
| P0 | LLM-RAG-001 | Embedding Models for Retrieval | contrastive training; bi-encoders; embedding dimension/normalization |
| P1 | LLM-RAG-009 | Vector Databases and ANN Search (new) | HNSW; IVF / PQ; recall-latency trade-offs |
| P0 | LLM-RAG-002 | Hybrid Search and Reranking | BM25 + dense fusion (RRF); cross-encoder rerankers; latency trade-offs |
| P0 | LLM-RAG-008 | RAG Evaluation (new) | retrieval recall@k / MRR; faithfulness/groundedness; answer relevance; LLM-judged RAG metrics |
| P1 | LLM-RAG-007 | Long Context vs RAG | when to retrieve vs stuff context; needle-in-a-haystack; lost-in-the-middle |
| P2 | LLM-RAG-004 | Self-RAG and Adaptive Retrieval | retrieval-decision tokens; self-critique |
| P1 | LLM-RAG-006 | Agentic RAG | iterative retrieval; query rewriting/decomposition |
| P2 | LLM-RAG-005 | GraphRAG | graph construction; community summaries |

## 5.17 Agents and Tool Use

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P0 | LLM-AGT-001 | Function / Tool Calling | tool schemas; invocation formats; error handling |
| P1 | LLM-AGT-007 | Structured Output Generation | JSON mode; grammar-constrained decoding; schema validation |
| P0 | LLM-AGT-002 | ReAct | thought/action/observation loop; failure modes |
| P1 | LLM-AGT-003 | Agent Planning Strategies | task decomposition; plan-and-execute |
| P1 | LLM-AGT-006 | Long-Term Agent Memory | episodic vs semantic memory; memory retrieval |
| P1 | LLM-AGT-005 | Model Context Protocol (MCP) | client/server architecture; tools vs resources vs prompts |
| P2 | LLM-AGT-004 | Multi-Agent Orchestration | role specialization; debate/consensus; coordination overhead |
| P2 | LLM-AGT-008 | Computer-Use and GUI Agents | screen parsing; action grounding; benchmarks |
| P1 | LLM-AGT-009 | Agent Evaluation and Failure Modes (new) | task-success metrics; trajectory evaluation; loops and tool misuse |

## 5.18 Multimodal LLM Foundations

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P1 | LLM-MLM-001 | Vision-Language Model Architectures | vision encoder + projector + LLM; cross-attention vs token projection |
| P2 | LLM-MLM-003 | Tokenizing Non-Text Modalities | image patches; audio tokens |
| P2 | LLM-MLM-002 | Multimodal Pretraining Objectives | contrastive + generative objectives |
| P1 | LLM-MLM-004 | Multimodal Instruction Tuning | visual instruction data; multimodal preference tuning |

## 5.19 Interpretability, Reliability and Safety

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P1 | LLM-SAF-001 | Mechanistic Interpretability Fundamentals | circuits; features; superposition |
| P2 | LLM-SAF-003 | Activation Patching and Causal Tracing | causal interventions; localizing computation |
| P1 | LLM-SAF-002 | Sparse Autoencoders | dictionary learning on activations; monosemantic features |
| P0 | LLM-SAF-004 | Prompt Injection and Jailbreaks | direct vs indirect injection; jailbreak taxonomies; defenses |
| P2 | LLM-SAF-005 | Adversarial Attacks on LLMs | adversarial suffixes (GCG); robustness evals |
| P2 | LLM-SAF-006 | Privacy Risks in LLMs | memorization; training-data extraction; DP mitigations |
| P1 | LLM-SAF-007 | Production Reliability and Guardrails | input/output filters; monitoring; fallbacks |

## 5.20 Production LLMOps and Emerging Research

| Pri | ID | Topic | Subtopics (learning order) |
|---|---|---|---|
| P2 | LLM-OPS-001 | LLMOps Pipelines | prompt/model versioning; deployment pipelines |
| P1 | LLM-OPS-002 | Observability and Monitoring | tracing; drift; cost/latency dashboards |
| P1 | LLM-OPS-003 | Cost Optimization for LLM Serving | model routing/cascades; caching; batching economics |
| P3 | LLM-OPS-004 | Emerging Architecture and Training Research | placeholder for frontier items, labeled established / emerging / unreplicated during research |

---

# Domain 6 — Modern Reinforcement Learning (prefix MRL)

Most relevant to: LLM post-training / reasoning teams, RL Research Scientist. Overlaps with Domain 3 (classical RL) and Domain 5.7 / 5.8 are cross-referenced, not duplicated.

## 6.1 RL for LLM Reasoning (cross-ref LLM-PFO-007, LLM-RSN-002)

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MRL-RSN-001 | RL with Verifiable Rewards (RLVR) | verifier/rule-based rewards; reward sparsity; see LLM-PFO-007 |
| P1 | MRL-RSN-002 | Long-Chain-of-Thought RL Training | o1/R1-style recipes; response-length growth; see LLM-RSN-002 |
| P1 | MRL-RSN-003 | Process Reward Models for RL | step-level vs outcome rewards; PRM training signal |
| P1 | MRL-RSN-004 | Practical Dynamics of LLM RL Training (new) | entropy collapse; KL-penalty choices; rollout staleness / off-policyness; length bias |

## 6.2 Preference Optimization as RL (cross-ref Domain 5.7)

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MRL-PRF-001 | GRPO and Group-Relative Methods | group baselines replacing value nets; see LLM-PFO-005 |
| P2 | MRL-PRF-002 | DAPO and GRPO Refinements | decoupled clipping; dynamic sampling; see LLM-PFO-006 |
| P2 | MRL-PRF-003 | DPO and Alternatives as Implicit Policy Learning | DPO/IPO/KTO/SimPO viewed through the KL-regularized RL lens |

## 6.3 Reward Hacking and Policy Evaluation

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-RWD-001 | Reward Hacking in Modern RL | specification gaming; over-optimization; see LLM-PFO-009 |
| P2 | MRL-RWD-002 | Off-Policy Evaluation | importance-sampling estimators; doubly robust; counterfactual evaluation |

## 6.4 Test-Time Compute and Reasoning-Policy Optimization (cross-ref LLM-RSN-003)

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-TTC-001 | Test-Time Compute Scaling Laws | compute-optimal search budgets; train vs test compute trade-off |
| P2 | MRL-TTC-002 | Reasoning-Policy Optimization | optimizing for multi-step deliberation quality |

## 6.5 Agentic and Tool-Use RL

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-AGT-001 | Agentic RL Fundamentals | multi-turn trajectories; credit assignment across tool calls; environment design |
| P2 | MRL-AGT-002 | Tool-Use Reward Design | task-completion rewards; shaping tool-call correctness |

## 6.6 Offline RL Advances

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-OFL-001 | Modern Offline RL Algorithms | CQL; IQL; conservatism vs extrapolation error |
| P2 | MRL-OFL-002 | Offline-to-Online RL | fine-tuning offline policies online |

## 6.7 Decision Transformers and Trajectory Modeling

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-TRJ-001 | Decision Transformers | RL as sequence modeling; return-to-go conditioning; limits vs value-based offline RL |
| P3 | MRL-TRJ-002 | Trajectory Transformer Models | autoregressive state-action-reward modeling; beam-search planning |

## 6.8 World Models and Model-Based Planning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MRL-WRL-001 | World Model Fundamentals | latent dynamics (Dreamer-style); learning in imagination |
| P2 | MRL-WRL-002 | Model-Based Planning at Scale | MuZero; learned model + MCTS |

## 6.9 Multi-Agent RL and Self-Play

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | MRL-MUL-002 | Self-Play and Emergent Strategy | AlphaZero-style self-play; league training |
| P3 | MRL-MUL-001 | Modern Multi-Agent RL Algorithms | population-based training; centralized training / decentralized execution |

## 6.10 Scalable Deep RL Infrastructure

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P2 | MRL-ADV-002 | Distributed and Scalable Deep RL | actor-learner split; rollout/training throughput balance |
| P3 | MRL-ADV-001 | Modern Policy Optimization Refinements | IMPALA / V-trace; off-policy corrections at scale |

---

# Domain 7 — Modern Computer Vision (prefix MCV)

Most relevant to: CV / generative-media Research and Applied Scientists, multimodal teams.

## 7.1 Diffusion Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MCV-DIF-001 | Denoising Diffusion Probabilistic Models (DDPM) | forward noising; reverse process; noise-prediction (ε) objective; ELBO link |
| P0 | MCV-DIF-004 | Classifier-Free Guidance (new) | conditional/unconditional mixing; guidance scale trade-off; vs classifier guidance |
| P1 | MCV-DIF-002 | DDIM | deterministic non-Markovian sampling; fewer steps |
| P1 | MCV-DIF-003 | Score-Based Generative Models | score matching; Langevin dynamics; SDE / probability-flow ODE |

## 7.2 Foundational Deep Generative Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MCV-GEN-001 | Variational Autoencoders (new) | ELBO derivation; reparameterization trick; KL term; posterior collapse |
| P1 | MCV-GEN-002 | Generative Adversarial Networks (new) | minimax objective; mode collapse; training instability; WGAN |

## 7.3 Vision Transformers

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MCV-VIT-001 | Vision Transformer (ViT) | patch embedding; position embeddings; CLS token; data hunger vs CNN inductive bias |
| P1 | MCV-VIT-003 | Swin Transformer | windowed attention; shifted windows; hierarchical features |
| P2 | MCV-VIT-002 | DeiT | distillation token; data-efficient training |
| P2 | MCV-VIT-004 | ConvNeXt | modernized ConvNet design choices |

## 7.4 Contrastive and Vision-Language Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P0 | MCV-VLC-001 | CLIP | symmetric InfoNCE; zero-shot classification; prompt templates |
| P0 | MCV-SSL-005 | Contrastive Learning: SimCLR and MoCo (new) | InfoNCE; positive/negative pairs; augmentations; batch size vs memory bank |
| P1 | MCV-VLC-002 | SigLIP | pairwise sigmoid loss vs softmax; batch-size decoupling |
| P2 | MCV-VLC-003 | Vision-Language Alignment Techniques | joint embedding spaces; cross-modal retrieval |

## 7.5 Self-Supervised Visual Representation Learning

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-SSL-001 | Masked Autoencoders (MAE) | high masking ratio; asymmetric encoder-decoder; vs BERT MLM |
| P1 | MCV-SSL-002 | DINO | self-distillation; momentum teacher; centering/sharpening to avoid collapse |
| P1 | MCV-SSL-003 | DINOv2 and DINOv3 | data curation; scaling; dense-feature quality |
| P3 | MCV-SSL-004 | iBOT | masked image modeling + self-distillation |

## 7.6 Latent Diffusion and Modern Generative Architectures

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-LAT-002 | Stable Diffusion Architecture | VAE latent space; U-Net denoiser; text cross-attention |
| P1 | MCV-LAT-001 | Latent Diffusion Models | why diffuse in latent space; compute savings |
| P1 | MCV-LAT-003 | Diffusion Transformers (DiT) | patchified latents; adaLN conditioning; scaling |

## 7.7 Flow Matching and Few-Step Generation

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-FLW-001 | Flow Matching | velocity-field regression; simulation-free training; vs diffusion |
| P2 | MCV-FLW-002 | Rectified Flow | straight paths; reflow; few-step sampling |
| P2 | MCV-FLW-003 | Consistency Models | consistency distillation/training; one-step generation |

## 7.8 Detection and Segmentation Foundation Models

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-SFM-001 | Segment Anything (SAM) | promptable segmentation; image encoder + prompt encoder + mask decoder |
| P1 | MCV-DET-001 | DETR and Transformer-Based Detection (new) | object queries; Hungarian matching loss; no NMS; RT-DETR / DINO-DETR |
| P2 | MCV-SFM-003 | Open-Vocabulary Grounding Models | text-to-region grounding; open-set detection |
| P2 | MCV-SFM-002 | SAM 2 | video segmentation; memory attention |

## 7.9 Controllable Generation

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-CTL-001 | ControlNet | zero-initialized copies; spatial conditions (edges/pose/depth) |
| P2 | MCV-CTL-002 | Other Controllable Generation Techniques | inversion; diffusion-based editing |

## 7.10 Multimodal LLMs and Video

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-MM-001 | Multimodal LLM Architectures | encoder + projector + LLM; see LLM-MLM-001 |
| P2 | MCV-MM-002 | Video Understanding Models | spatiotemporal attention; frame sampling |
| P2 | MCV-MM-003 | Video Generation Models | spatiotemporal diffusion; temporal consistency |

## 7.11 3D Vision and Neural Rendering

| Pri | ID | Topic | Subtopics (most-asked first) |
|---|---|---|---|
| P1 | MCV-3D-001 | Neural Radiance Fields (NeRF) | volume rendering equation; positional encoding; slow training/rendering |
| P1 | MCV-3D-002 | 3D Gaussian Splatting | explicit Gaussians; differentiable rasterization; real-time rendering vs NeRF |
| P3 | MCV-3D-003 | Vision Foundation Models for 3D | general-purpose 3D perception models |

---

## What changed in this revamp

- Every topic has a **P0–P3 tier**. Categories, rows, and subtopic lists are ordered most-important first.
- **Domain 5 is now fully inline** (no longer a category summary pointing to another file), and is ordered as a learning path (prerequisites first) rather than by importance.
- **New high-frequency topics added** — all marked **(new)**:
  - **Classical ML:** a whole Neural Network Fundamentals category (backprop, optimizers, normalization, losses, activations, dropout, init, numerical stability), plus ML System Design, Recommender Systems, k-NN, and Hypothesis/A-B Testing.
  - **Classical RL:** Generalized Advantage Estimation (GAE), discounting/reward shaping, and deep-RL exploration strategies.
  - **Classical CV:** transfer learning, data augmentation, and NMS/anchor design.
  - **LLMs:** parameter/FLOPs/memory estimation, implementing a transformer block from scratch, in-context learning, training instability, RAG evaluation, vector DBs/ANN, agent evaluation, and task-specific eval sets.
  - **Modern RL:** practical dynamics of LLM RL training.
  - **Modern CV:** classifier-free guidance, VAEs, GANs, contrastive learning (SimCLR/MoCo — this was in the original brief and was missing), and DETR.
- **Existing IDs unchanged.**
- The **Domain 5 copy in `openspec/changes/llm-syllabus-domain5/taxonomy-draft.md` is now behind this file**: it lacks the priorities and the new LLM rows. Decide which one is the source of truth before research starts.
