# Category I — Clustering and Mixture Models

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-CLU-001 — K-Means Clustering  [P0]
Subtopics: Lloyd's algorithm; k-means++; choosing k (elbow, silhouette); assumptions and failure modes

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 2.3. Clustering §2.3.2 K-Means — scikit-learn | https://scikit-learn.org/stable/modules/clustering.html#k-means | Docs | Definitive reference: Lloyd's algorithm, k-means++ initialization, mini-batch variant, and limitations |
| 2 | StatQuest: K-Means Clustering — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=4b5d3muPQmA | Video | Clear visual walkthrough of Lloyd's algorithm, convergence, and choosing k |
| 3 | K-Means Clustering in Python: A Practical Guide — Real Python | https://realpython.com/k-means-clustering-python/ | Tutorial | Comprehensive tutorial with elbow method, silhouette analysis, and k-means++ implementation |
| 4 | MLU-Explain: K-Means (interactive) | https://mlu-explain.github.io/k-means/ | Interactive | Amazon ML University interactive visualization of K-means steps and convergence |
| 5 | Elbow Method vs Silhouette Score — Built In | https://builtin.com/data-science/elbow-method | Blog | Compares elbow curve and silhouette plots with Yellowbrick SilhouetteVisualizer code |
| 6 | d2l.ai — K-Means | https://d2l.ai/chapter_clustering/k-means.html | Tutorial | Textbook treatment with convergence analysis and failure modes |
| 7 | K-Means Clustering — IBM | https://www.ibm.com/think/topics/k-means-clustering | Blog | Accessible overview with k-means++ seeding steps and practical limitations |

## CML-CLU-004 — Gaussian Mixture Models  [P1]
Subtopics: soft assignment; EM for GMM; GMM vs k-means

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 2.1. Gaussian Mixture Models — scikit-learn | https://scikit-learn.org/stable/modules/mixture.html | Docs | GaussianMixture with EM algorithm, covariance types, and model selection (BIC/AIC) |
| 2 | Gaussian Mixture Models — CSC 411 University of Toronto | https://www.cs.toronto.edu/~jlucas/teaching/csc411/lectures/lec15_16_handout.pdf | Slides | Intuitive E-step/M-step explanation with soft assignments and GMM vs k-means comparison |
| 3 | d2l.ai — Gaussian Mixture Models | https://d2l.ai/chapter_gaussian-processes/gmm.html | Tutorial | Textbook treatment of GMM with EM algorithm derivation and code |
| 4 | Gaussian Mixture Models Tutorial — ETH Zurich | https://las.inf.ethz.ch/courses/introml-s20/tutorials/tutorial_em.pdf | Slides | ETH tutorial slides with EM procedure and initialization strategies |
| 5 | StatQuest: Gaussian Mixture Models (YouTube) | https://www.youtube.com/watch?v=DODphRRL79c | Video | Visual explanation of soft clustering and EM iteration |
| 6 | Gaussian Mixture Models and EM: Complete Guide — Medium | https://medium.com/@alexkalalw/gaussian-mixture-models-and-the-em-algorithm-a-complete-guide-with-python-implementation-37ab7b46d7c9 | Blog | NumPy implementation from scratch with convergence plots and log-likelihood tracking |

## CML-CLU-005 — Expectation-Maximization Algorithm  [P1]
Subtopics: E/M-step derivation; ELBO view; local-optimum convergence

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Mixture Models and EM — Bishop PRML Chapter 9 (Columbia CS) | https://www.cs.columbia.edu/~verma/classes/ml/ref/lec7_prmlMixturesEM.pdf | Slides | Rigorous treatment of EM with ELBO derivation, convergence proof, and general framework |
| 2 | d2l.ai — Expectation-Maximization | https://d2l.ai/chapter_gaussian-processes/gmm.html | Tutorial | EM algorithm with ELBO view and local-optimum convergence discussion |
| 3 | What Is Expectation Maximization? — Machine Learning Mastery | https://machinelearningmastery.com/expectation-maximization-em-algorithm/ | Blog | Accessible introduction to EM with coin-toss example and convergence properties |
| 4 | EM Algorithm Tutorial — ETH Zurich | https://las.inf.ethz.ch/courses/introml-s20/tutorials/tutorial_em.pdf | Slides | Step-by-step EM procedure with E/M-step derivation and initialization |
| 5 | StatQuest: EM Algorithm (YouTube) | https://www.youtube.com/watch?v=REypj2sy_5U | Video | Visual walkthrough of E and M steps with convergence illustration |

## CML-CLU-003 — DBSCAN and Density-Based Clustering  [P1]
Subtopics: eps / minPts; density reachability; arbitrary-shape clusters

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 2.3. Clustering §2.3.7 DBSCAN — scikit-learn | https://scikit-learn.org/stable/modules/clustering.html#dbscan | Docs | Official docs with eps, min_samples, core/border/noise point definitions, and limitations |
| 2 | A Guide to DBSCAN — DataCamp | https://www.datacamp.com/tutorial/dbscan-clustering-algorithm | Tutorial | Step-by-step walkthrough with core/border/noise point classification and parameter tuning |
| 3 | DBSCAN Clustering Explained — Towards Data Science | https://towardsdatascience.com/dbscan-clustering-explained-97556a2ad556/ | Blog | Clear three-point-type definitions with illustrations of density reachability |
| 4 | DBSCAN — Wikipedia | https://en.wikipedia.org/wiki/DBSCAN | Docs | Encyclopedic overview with formal density reachability definitions and minPts rule of thumb |
| 5 | StatQuest: DBSCAN (YouTube) | https://www.youtube.com/watch?v=RDZUdRSDOok | Video | Visual explanation of eps-neighborhood, core points, and arbitrary-shape cluster discovery |
| 6 | DBSCAN — Krish Naik Tutorial | https://www.krishnaik.in/ai-tutorials/machine-learning/dbscan | Tutorial | Interactive tutorial with moons dataset and eps/minPts parameter tuning |

## CML-CLU-002 — Hierarchical Clustering  [P2]
Subtopics: linkage criteria; dendrograms; complexity

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 2.3. Clustering §2.3.6 Hierarchical Clustering — scikit-learn | https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering | Docs | AgglomerativeClustering with Ward, complete, average, single linkage and dendrogram plotting |
| 2 | StatQuest: Hierarchical Clustering (YouTube) | https://www.youtube.com/watch?v=7xHsRkOdVwo | Video | Visual explanation of agglomerative clustering with different linkage criteria |
| 3 | Hierarchical Clustering — Machine Learning Mastery | https://machinelearningmastery.com/hierarchical-clustering-with-python-and-scikit-learn/ | Blog | Practical guide with dendrogram visualization and linkage comparison |
| 4 | scipy.cluster.hierarchy — SciPy Documentation | https://docs.scipy.org/doc/scipy/reference/cluster.hierarchy.html | Docs | Dendrogram plotting and linkage functions with complexity notes |
| 5 | d2l.ai — Hierarchical Clustering | https://d2l.ai/chapter_clustering/hierarchical.html | Tutorial | Textbook treatment with linkage criteria comparison and complexity analysis |
