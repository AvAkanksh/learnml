# Category B — Linear Models and GLMs

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-LIN-002 — Logistic Regression  [P0]
Subtopics: log-odds & sigmoid; log-loss derivation; why not MSE; gradient derivation; softmax multiclass; decision boundary

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Data 100 Course Notes — Logistic Regression II | https://ds100.org/course-notes/logistic-reg-2 | Tutorial | UC Berkeley; log-loss derivation, "why not MSE" with plotted loss surfaces, gradient derivation, decision boundary — best single free resource |
| 2 | Data 100 Course Notes — Logistic Regression I | https://ds100.org/course-notes/logistic-reg-1 | Tutorial | UC Berkeley; log-odds & sigmoid properly derived, decision boundary at T=0.5, empirical sigmoid motivation with "graph of averages" |
| 3 | 1.1. Linear Models §1.1.11 Logistic Regression — scikit-learn | https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression | Docs | Only source with precise softmax multinomial notation and full solver-capability matrix (lbfgs, liblinear, saga, etc.) |
| 4 | Logistic Regression: Sigmoid Function — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/logistic-regression/sigmoid-function | Tutorial | Clean walkthrough of log-odds, sigmoid, and probability interpretation with exercises |
| 5 | MLU-Explain: Logistic Regression (interactive) | https://mlu-explain.github.io/logistic-regression/ | Interactive | Amazon ML University; log-loss as negative log-likelihood with interactive gradient-descent visualization |
| 6 | Softmax Classification with Cross-Entropy (2/2) | https://peterroelants.github.io/posts/cross-entropy-softmax | Blog | Full softmax Jacobian derivation with NumPy implementation — closes the multiclass gap |
| 7 | Logistic Regression — ML Glossary | https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html | Docs | Concise reference with sigmoid, cost function, gradient derivation, and decision boundary formulas |
| 8 | Why Do We Use Sigmoid in Logistic Regression? — Daily Dose of DS | https://www.dailydoseofds.com/why-do-we-use-sigmoid-in-logistic-regression/ | Blog | Shows sigmoid arises naturally from Gaussian class-conditional posteriors — deeper "why" than log-odds alone |

## CML-LIN-001 — Linear Regression  [P0]
Subtopics: OLS & normal equations; assumptions (linearity, homoscedasticity, independence); closed form vs gradient descent; multicollinearity

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Data 100 Course Notes — Ordinary Least Squares | https://ds100.org/course-notes/ols | Tutorial | UC Berkeley; normal equations derived via geometric projection, multicollinearity via rank, Python with NumPy + sklearn verification |
| 2 | Data 100 Course Notes — sklearn and Gradient Descent | https://ds100.org/course-notes/gradient-descent | Tutorial | UC Berkeley; closed-form vs gradient descent comparison, batch/stochastic/mini-batch GD, convexity discussion |
| 3 | 1.1. Linear Models §1.1.1 OLS — scikit-learn | https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares | Docs | Implementation reference: SVD-based solving at O(n·p²), multicollinearity making estimates noise-sensitive |
| 4 | Ordinary Least Squares — Gregory Gundersen | https://gregorygundersen.com/blog/2020/01/04/ols/ | Blog | Best geometric intuition for OLS: orthogonal projection, "normal" as perpendicularity, mean-centering interpretation |
| 5 | d2l.ai — Linear Regression | https://d2l.ai/chapter_linear-regression/index.html | Tutorial | Textbook covering closed-form, gradient descent, and MLE under Gaussian noise with PyTorch code |
| 6 | Linear Regression — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/linear-regression | Tutorial | Accessible intro covering model form, loss function, and gradient descent basics |
| 7 | Normal Equation for Linear Regression — DataCamp | https://www.datacamp.com/tutorial/tutorial-normal-equation-for-linear-regression | Tutorial | Step-by-step Python walkthrough deriving normal equation from scratch on synthetic data |

## CML-LIN-004 — Regularized Linear Models  [P0]
Subtopics: L1 vs L2 geometry and sparsity; Ridge closed form; Elastic Net; coordinate descent

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.1. Linear Models — Ridge, Lasso, Elastic Net — scikit-learn | https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification | Docs | Definitive reference: Ridge closed form (XᵀX + αI)⁻¹Xᵀy, Lasso via coordinate descent, Elastic Net mixing parameter |
| 2 | Ridge and Lasso Regression in Python — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2016/01/ridge-lasso-regression-python-complete-tutorial/ | Blog | Complete tutorial with L1/L2 geometry figures and Python implementation |
| 3 | A Comprehensive Guide for Linear, Ridge, and Lasso Regression — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2017/06/a-comprehensive-guide-for-linear-ridge-and-lasso-regression/ | Blog | L1 diamond vs L2 circle geometry with contour intersection figures explaining sparsity |
| 4 | Data 100 Course Notes — Cross Validation and Regularization | https://ds100.org/course-notes/cv-reg | Tutorial | UC Berkeley; Ridge/Lasso with regularization path plots and cross-validation for λ selection |
| 5 | d2l.ai — Weight Decay | https://d2l.ai/chapter_linear-classification/weight-decay.html | Tutorial | L2 regularization as weight decay with geometric interpretation and implementation |
| 6 | Regularization: L1, L2, and Elastic Net — AP Lab Academy | https://www.aplab.academy/en/courses/ml-fundamentals/lessons/regularization-techniques | Tutorial | Covers all three with geometry of sparsity section |
| 7 | L1 vs L2 Regularization: The Geometric Intuition — MetricGate | https://metricgate.com/blogs/regularization-l1-vs-l2-intuition/ | Blog | Focused on geometric explanation of why L1 produces sparsity with path plots |

## CML-LIN-003 — Generalized Linear Models  [P2]
Subtopics: exponential family; link functions; Poisson/Gamma regression

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.1. Linear Models §1.1.14 GLMs — scikit-learn | https://scikit-learn.org/stable/modules/linear_model.html#generalized-linear-models | Docs | Covers exponential family, link functions (log, logit, identity), Poisson/Gamma/Tweedie regression with API |
| 2 | d2l.ai — Generalized Linear Models | https://d2l.ai/chapter_linear-regression/generalization-deep.html | Tutorial | Textbook treatment connecting logistic regression to the GLM framework via exponential family |
| 3 | Generalized Linear Models — Penn State STAT 504 | https://online.stat.psu.edu/stat504/lesson/6 | Tutorial | University course notes covering exponential family, link functions, Poisson and logistic regression as GLMs |
| 4 | GLMs Explained — StatQuest (YouTube) | https://www.youtube.com/watch?v=vpKpFMUMaVw | Video | Josh Starmer's visual explanation of GLMs connecting link functions to exponential family distributions |
| 5 | Build Better Models with GLMs — Pinecone | https://www.pinecone.io/learn/series/glm/ | Blog | Practical guide to GLMs with Poisson and Gamma regression examples |
