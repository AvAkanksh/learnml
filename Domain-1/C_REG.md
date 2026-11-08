# Category C — Regularization and Model Selection

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-REG-001 — Bias-Variance Tradeoff  [P0]
Subtopics: error decomposition; learning-curve diagnosis of over/underfitting; effect of model complexity and data size

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding the Bias-Variance Tradeoff — Scott Fortmann-Roe | http://scott.fortmann-roe.com/docs/BiasVariance.html | Blog | Classic illustrated essay with bullseye diagrams, error decomposition formula, and model complexity curve |
| 2 | MLU-Explain: Bias-Variance Tradeoff (interactive) | https://mlu-explain.github.io/bias-variance/ | Interactive | Amazon ML University interactive visualization of bias, variance, and total error vs model complexity |
| 3 | Bias-Variance Tradeoff — ML4Devs | https://www.ml4devs.com/what-is/bias-variance-tradeoff/ | Blog | Concise overview with error decomposition, learning-curve diagnosis, and remedies for underfitting/overfitting |
| 4 | d2l.ai — Underfitting and Overfitting | https://d2l.ai/chapter_linear-classification/underfit-overfit.html | Tutorial | Textbook treatment with polynomial examples showing model complexity effect and training/validation curves |
| 5 | Underfitting and Overfitting — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/overfitting | Tutorial | Practical guide to diagnosing over/underfitting with learning curves |
| 6 | Underfitting and Overfitting in ML — GeeksforGeeks | https://www.geeksforgeeks.org/machine-learning/underfitting-and-overfitting-in-machine-learning/ | Blog | Visual comparison of underfitting, good fit, and overfitting with practical remedies |

## CML-REG-003 — Cross-Validation Strategies  [P0]
Subtopics: k-fold; stratified; time-series forward-chaining CV; nested CV for tuning; group k-fold; LOOCV

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 3.1. Cross-validation — scikit-learn | https://scikit-learn.org/stable/modules/cross_validation.html | Docs | Definitive reference covering KFold, StratifiedKFold, TimeSeriesSplit, GroupKFold, LeaveOneOut, and nested CV |
| 2 | Cross-Validation in ML: How to Do It Right — Neptune.ai | https://neptune.ai/blog/cross-validation-in-machine-learning-how-to-do-it-right | Blog | Practical overview with diagrams for k-fold, stratified, nested, and time-series CV |
| 3 | Data 100 Course Notes — Cross Validation and Regularization | https://ds100.org/course-notes/cv-reg | Tutorial | UC Berkeley; k-fold CV, group-based splits for leakage prevention, time-series sequential splits |
| 4 | A Gentle Introduction to k-Fold Cross-Validation — Machine Learning Mastery | https://machinelearningmastery.com/k-fold-cross-validation/ | Blog | Step-by-step walkthrough of k-fold with scikit-learn code and practical guidance on choosing k |
| 5 | d2l.ai — Model Selection | https://d2l.ai/chapter_linear-classification/model-selection.html | Tutorial | Textbook treatment of cross-validation including K-fold implementation |
| 6 | Nested Cross-Validation Explained — Weina Jin | https://weina.me/nested-cross-validation/ | Blog | Clear explanation of why nested CV is needed for unbiased model selection |

## CML-REG-002 — Regularization Techniques  [P1]
Subtopics: L1/L2; early stopping; data augmentation as regularization; shrinkage

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Weight Decay (L2 Regularization) | https://d2l.ai/chapter_linear-classification/weight-decay.html | Tutorial | Textbook treatment of L2 regularization with geometric interpretation and from-scratch implementation |
| 2 | d2l.ai — Dropout | https://d2l.ai/chapter_multilayer-perceptrons/dropout.html | Tutorial | Dropout as regularization with implementation and connection to ensemble averaging |
| 3 | Regularization — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity | Tutorial | L2 regularization, lambda effect on model complexity, and practical guidance |
| 4 | Early Stopping — Machine Learning Mastery | https://machinelearningmastery.com/early-stopping-to-avoid-overtraining-neural-network-models/ | Blog | Practical guide to early stopping as regularization with validation-loss monitoring |
| 5 | Data Augmentation — d2l.ai | https://d2l.ai/chapter_computer-vision/image-augmentation.html | Tutorial | How data augmentation acts as implicit regularization by expanding effective training distribution |
| 6 | Regularization: L1, L2, and Elastic Net — AP Lab Academy | https://www.aplab.academy/en/courses/ml-fundamentals/lessons/regularization-techniques | Tutorial | Covers L1/L2/Elastic Net with geometry of sparsity and shrinkage explanation |

## CML-REG-004 — Hyperparameter Tuning  [P1]
Subtopics: random vs grid search; Bayesian optimization; Hyperband / early-stopping search

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Hyperparameter Tuning — scikit-learn User Guide | https://scikit-learn.org/stable/modules/grid_search.html | Docs | GridSearchCV, RandomizedSearchCV, HalvingGridSearchCV with usage examples |
| 2 | Hyperparameter Tuning — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/hyperparameter-tuning | Tutorial | Practical overview of grid vs random search with visual intuition for random search advantages |
| 3 | Bayesian Optimization — Distill.pub | https://distill.pub/2020/bayesian-optimization/ | Interactive | Interactive visual guide to Bayesian optimization with acquisition functions and GP surrogates |
| 4 | A Conceptual Explanation of Bayesian Optimization — Machine Learning Mastery | https://machinelearningmastery.com/what-is-bayesian-optimization/ | Blog | Accessible introduction to Bayesian optimization with surrogate models and acquisition functions |
| 5 | Optuna: A Hyperparameter Optimization Framework | https://optuna.readthedocs.io/en/stable/ | Docs | Modern framework supporting TPE, CMA-ES, and pruning (Hyperband-style early stopping) |
| 6 | Google's Deep Learning Tuning Playbook | https://github.com/google-research/tuning_playbook | Tutorial | Practical guide to hyperparameter tuning from Google Research with decision trees for tuning strategy |
