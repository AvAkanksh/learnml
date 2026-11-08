# Category M — Instance-Based and Generative Classifiers

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-GEN-004 — k-Nearest Neighbors  [P0]
Subtopics: distance metrics; choosing k; curse of dimensionality; feature-scaling sensitivity; KD-trees / ANN

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.6. Nearest Neighbors — scikit-learn | https://scikit-learn.org/stable/modules/neighbors.html | Docs | KNeighborsClassifier with distance metrics (Euclidean, Manhattan, Minkowski), KD-tree, ball tree algorithms |
| 2 | StatQuest: KNN — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=HVXime0nQeI | Video | Visual explanation of KNN, choosing k, and distance metric effects |
| 3 | k-Nearest Neighbors — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/classification | Tutorial | Practical overview of KNN with curse of dimensionality discussion |
| 4 | d2l.ai — Nearest Neighbors | https://d2l.ai/chapter_appendix-tools-for-deep-learning/index.html | Tutorial | KNN with distance metrics and scaling sensitivity |
| 5 | KNN Algorithm — Machine Learning Mastery | https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/ | Blog | From-scratch implementation with distance metrics and choosing k |
| 6 | Approximate Nearest Neighbors — Annoy/FAISS docs | https://github.com/facebookresearch/faiss/wiki | Docs | FAISS documentation for ANN search at scale with IVF, HNSW indexes |

## CML-GEN-001 — Naive Bayes Classifiers  [P1]
Subtopics: conditional independence; Gaussian/Multinomial/Bernoulli; Laplace smoothing; text use

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.9. Naive Bayes — scikit-learn | https://scikit-learn.org/stable/modules/naive_bayes.html | Docs | GaussianNB, MultinomialNB, BernoulliNB with Laplace smoothing (alpha parameter) |
| 2 | StatQuest: Naive Bayes — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=O2L2Uv9pdDA | Video | Clear visual explanation of conditional independence assumption and Bayes' theorem application |
| 3 | Naive Bayes Classifier — Machine Learning Mastery | https://machinelearningmastery.com/naive-bayes-classifier-scratch-python/ | Blog | From-scratch implementation with Gaussian NB and text classification example |
| 4 | d2l.ai — Naive Bayes | https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/naive-bayes.html | Tutorial | Textbook treatment with conditional independence, Laplace smoothing, and text classification |
| 5 | Naive Bayes for Text Classification — Sebastian Raschka | https://sebastianraschka.com/Articles/2014_naive_bayes_1.html | Blog | Practical Multinomial NB for text with Laplace smoothing derivation |

## CML-GEN-003 — Discriminative vs Generative Modeling  [P1]
Subtopics: joint vs conditional; data efficiency; Naive Bayes vs logistic regression

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS229 Lecture Notes — Generative Learning Algorithms | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford; GDA, Naive Bayes as generative models, comparison with logistic regression |
| 2 | On Discriminative vs. Generative Classifiers — Andrew Ng & Michael Jordan (summary) | https://ai.stanford.edu/~ang/papers/nips01-discriminativegenerative.pdf | Slides | Seminal comparison showing NB converges faster but LR has lower asymptotic error |
| 3 | Generative vs Discriminative Models — Machine Learning Mastery | https://machinelearningmastery.com/generative-vs-discriminative-machine-learning-models/ | Blog | Accessible comparison of joint P(X,Y) vs conditional P(Y|X) modeling approaches |
| 4 | d2l.ai — Softmax Regression | https://d2l.ai/chapter_linear-classification/softmax-regression.html | Tutorial | Discriminative modeling perspective connecting to generative alternatives |
| 5 | Generative and Discriminative Classifiers — Stanford CS228 | https://ermongroup.github.io/cs228-notes/learning/discriminative/ | Tutorial | Stanford probabilistic graphical models course notes comparing the two approaches |

## CML-GEN-002 — Linear and Quadratic Discriminant Analysis  [P2]
Subtopics: shared vs class-specific covariance; decision boundaries

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.2. Linear and Quadratic Discriminant Analysis — scikit-learn | https://scikit-learn.org/stable/modules/lda_qda.html | Docs | LDA (shared covariance → linear boundary) vs QDA (class-specific → quadratic boundary) |
| 2 | Linear Discriminant Analysis — Sebastian Raschka | https://sebastianraschka.com/Articles/2014_python_lda.html | Blog | LDA with shared vs class covariance, Fisher criterion, and Python implementation |
| 3 | StatQuest: LDA (YouTube) | https://www.youtube.com/watch?v=azXCzI57Yfc | Video | Visual comparison of LDA and QDA decision boundaries |
| 4 | LDA vs QDA — scikit-learn Example | https://scikit-learn.org/stable/auto_examples/classification/plot_lda_qda.html | Tutorial | Visual comparison showing linear vs quadratic decision boundaries on synthetic data |
| 5 | CS229 Lecture Notes — Gaussian Discriminant Analysis | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford derivation of LDA and QDA from Gaussian class-conditional densities |
