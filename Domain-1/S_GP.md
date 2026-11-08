# Category S — Gaussian Processes

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-GP-001 — Gaussian Process Regression  [P2]
Subtopics: kernel functions; posterior mean/variance derivation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | A Visual Exploration of Gaussian Processes — Distill.pub | https://distill.pub/2019/visual-exploration-gaussian-processes/ | Interactive | Definitive interactive visual guide to GP regression with kernel exploration and posterior derivation |
| 2 | d2l.ai — Gaussian Processes | https://d2l.ai/chapter_gaussian-processes/index.html | Tutorial | Textbook treatment covering kernel functions, posterior mean/variance, and implementation |
| 3 | Gaussian Processes for Machine Learning — Rasmussen & Williams (free textbook) | https://gaussianprocess.org/gpml/chapters/RW.pdf | Slides | Canonical GP textbook — free PDF with full posterior derivation and kernel cookbook |
| 4 | The Kernel Cookbook — David Duvenaud | https://www.cs.toronto.edu/~duvenaud/cookbook/ | Blog | Comprehensive visual guide to kernel functions (RBF, Matérn, periodic, etc.) with GP examples |
| 5 | Gaussian Process Regression — scikit-learn | https://scikit-learn.org/stable/modules/gaussian_process.html | Docs | GaussianProcessRegressor with kernel selection and posterior predictions |
| 6 | GPyTorch Documentation | https://gpytorch.ai/ | Docs | Modern GP library with scalable kernel methods and exact/approximate inference |
| 7 | Gaussian Processes — Martin Krasser | https://krasserm.github.io/2018/03/19/gaussian-processes/ | Blog | From-scratch NumPy implementation with posterior derivation and kernel visualization |

## CML-GP-002 — GP Classification and Model Selection  [P3]
Subtopics: Laplace approximation; marginal-likelihood tuning

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Gaussian Process Classification — scikit-learn | https://scikit-learn.org/stable/modules/gaussian_process.html#gaussian-process-classification | Docs | GaussianProcessClassifier with Laplace approximation for non-Gaussian likelihoods |
| 2 | d2l.ai — Gaussian Process Classification | https://d2l.ai/chapter_gaussian-processes/gp-inference.html | Tutorial | Textbook treatment of Laplace approximation and marginal-likelihood hyperparameter tuning |
| 3 | GPML Ch.3 & Ch.5 — Classification and Model Selection | https://gaussianprocess.org/gpml/chapters/RW.pdf | Slides | Canonical textbook covering Laplace/EP approximation and log marginal likelihood optimization |
| 4 | GPyTorch — Model Selection Tutorial | https://docs.gpytorch.ai/en/stable/examples/01_Exact_GPs/index.html | Docs | Marginal-likelihood optimization for kernel hyperparameter tuning with PyTorch |
| 5 | GP Model Selection — Martin Krasser | https://krasserm.github.io/2018/03/19/gaussian-processes/ | Blog | Practical guide to marginal likelihood for kernel hyperparameter optimization |
