# Category F — Boosting Algorithms

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-BST-001 — AdaBoost  [P1]
Subtopics: sample reweighting; exponential loss; weak-learner weights

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Ensemble methods §1.12.3 AdaBoost — scikit-learn | https://scikit-learn.org/stable/modules/ensemble.html#adaboost | Docs | AdaBoostClassifier/Regressor with SAMME algorithm, sample weight updates, and learning rate |
| 2 | StatQuest: AdaBoost — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=LsK-xG1cLYA | Video | Clear visual walkthrough of sample reweighting and weak-learner weight calculation |
| 3 | d2l.ai — Boosting | https://d2l.ai/chapter_ensemble/boosting.html | Tutorial | Textbook treatment covering AdaBoost, exponential loss connection, and weak-learner weights |
| 4 | Explaining AdaBoost — Robert Schapire | http://www.schapire.net/papers/explaining-adaboost.pdf | Slides | Original author's accessible explanation of AdaBoost as exponential loss minimization |
| 5 | AdaBoost Algorithm: Complete Guide — Let's Data Science | https://letsdatascience.com/blog/adaboost-the-definitive-guide-to-adaptive-boosting | Blog | Step-by-step walkthrough with sample reweighting examples and exponential loss connection |
| 6 | Lecture Notes: AdaBoost & Exponential Loss — FAU Pattern Recognition | https://lme.tf.fau.de/lecture-notes/lecture-notes-pr/lecture-notes-in-pattern-recognition-episode-38-adaboost-exponential-loss/ | Tutorial | University lecture connecting AdaBoost to forward stagewise additive modeling with exponential loss |

## CML-BST-002 — Gradient Boosting Machines  [P0]
Subtopics: fitting pseudo-residuals; functional gradient descent; shrinkage/learning rate; boosting vs bagging

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | How Gradient Boosting Works — explained.ai | https://explained.ai/gradient-boosting/ | Blog | Terrence Parr's definitive visual guide: pseudo-residuals, functional gradient descent, shrinkage, with diagrams |
| 2 | Ensemble methods §1.12.4 Gradient Boosting — scikit-learn | https://scikit-learn.org/stable/modules/ensemble.html#gradient-tree-boosting | Docs | GradientBoostingClassifier/Regressor with shrinkage, subsampling, deviance/exponential loss |
| 3 | StatQuest: Gradient Boost — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=3CC4N4z3GJc | Video | Step-by-step visual explanation of fitting to pseudo-residuals with learning rate effect |
| 4 | d2l.ai — Gradient Boosting | https://d2l.ai/chapter_ensemble/gradient-boosting.html | Tutorial | Textbook treatment of functional gradient descent with code implementation |
| 5 | Gradient Boosting from Scratch — Machine Learning Mastery | https://machinelearningmastery.com/gradient-boosting-machine-ensemble-in-python/ | Blog | Practical Python tutorial with comparison to bagging and learning rate effects |
| 6 | A Gentle Introduction to Gradient Boosting — Machine Learning Mastery | https://machinelearningmastery.com/gentle-introduction-gradient-boosting-algorithm-machine-learning/ | Blog | Conceptual overview connecting boosting to gradient descent in function space |

## CML-BST-003 — XGBoost  [P0]
Subtopics: regularized objective; second-order Taylor approximation; split-gain formula; sparsity-aware splits

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Introduction to Boosted Trees — XGBoost Documentation | https://xgboost.readthedocs.io/en/stable/tutorials/model.html | Docs | Official tutorial deriving regularized objective, Taylor expansion, and split gain formula |
| 2 | XGBoost Regularized Learning Objective — apxml | https://apxml.com/courses/mastering-gradient-boosting-algorithms/chapter-4-xgboost-extreme-gradient-boosting/xgboost-regularized-objective | Tutorial | Second-order Taylor approximation, split gain formula, and regularization terms explained step by step |
| 3 | StatQuest: XGBoost — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=OtD8wVaFm6E | Video | Visual explanation of XGBoost's regularized objective and split finding |
| 4 | XGBoost: A Complete Guide — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2018/09/an-end-to-end-guide-to-understand-the-math-behind-xgboost/ | Blog | Math behind XGBoost: Taylor approximation, optimal leaf weights, split gain with worked examples |
| 5 | XGBoost Documentation — Learning Task Parameters | https://xgboost.readthedocs.io/en/stable/parameter.html | Docs | Complete parameter reference including regularization (lambda, gamma, alpha) and sparsity handling |
| 6 | Complete Guide to XGBoost — Machine Learning Mastery | https://machinelearningmastery.com/gentle-introduction-xgboost-applied-machine-learning/ | Blog | Practical overview with sparsity-aware splits and system design features |

## CML-BST-004 — LightGBM  [P1]
Subtopics: histogram splits; leaf-wise growth; GOSS / EFB

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LightGBM Features — Official Documentation | https://lightgbm.readthedocs.io/en/stable/Features.html | Docs | Authoritative source on histogram-based splits, leaf-wise growth, GOSS, and EFB |
| 2 | LightGBM Guide: Leaf-Wise Growth & Histogram Splitting — Let's Data Science | https://letsdatascience.com/blog/lightgbm-the-definitive-guide-to-speed-and-efficiency | Blog | Clear explanation of leaf-wise vs level-wise growth and histogram splitting |
| 3 | XGBoost vs LightGBM vs CatBoost — MetricGate | https://metricgate.com/blogs/xgboost-vs-lightgbm-vs-catboost/ | Blog | Side-by-side comparison of tree growth strategies, GOSS, and EFB across all three frameworks |
| 4 | LightGBM Explained — Medium | https://medium.com/learn-dplyr/lightgbm-explained-how-it-differs-from-random-forest-and-xgboost-286836838fe7 | Blog | Compares LightGBM's leaf-wise with XGBoost's level-wise default and histogram binning |
| 5 | LightGBM Parameters — Official Documentation | https://lightgbm.readthedocs.io/en/stable/Parameters.html | Docs | Complete parameter reference including num_leaves, min_data_in_leaf, histogram bin size |

## CML-BST-005 — CatBoost  [P2]
Subtopics: ordered boosting; ordered target statistics for categoricals; prediction shift

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CatBoost — Official Documentation: Algorithms | https://catboost.ai/en/docs/concepts/algorithm-main-stages | Docs | Authoritative source on ordered boosting and ordered target statistics |
| 2 | CatBoost Guide: Handling Categorical Data — Let's Data Science | https://letsdatascience.com/blog/catboost-the-definitive-guide-to-categorical-boosting | Blog | Ordered target statistics, ordered boosting, and prediction shift explained with examples |
| 3 | CatBoost's Approach to Categorical Variables — Medium | https://medium.com/@mdburkee/explain-catboosts-approach-to-handling-categorical-variables-2f37e714a914 | Blog | Clear explanation of ordered target encoding and averaging over random permutations |
| 4 | CatBoost — Hyperskill Tutorial | https://hyperskill.org/learn/step/42877 | Tutorial | Educational walkthrough of CatBoost's key innovations including ordered boosting |
| 5 | Why CatBoost Works So Well — Towards Data Science | https://towardsdatascience.com/catboost-inner-workings-and-optimizations/ | Blog | Deep dive into prediction shift problem and how ordered boosting solves it |
