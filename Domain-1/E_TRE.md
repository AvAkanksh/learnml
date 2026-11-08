# Category E — Trees and Ensembles

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-TRE-001 — Decision Trees  [P0]
Subtopics: Gini vs entropy; information gain; overfitting and pruning; continuous/categorical splits

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Decision Trees — scikit-learn User Guide | https://scikit-learn.org/stable/modules/tree.html | Docs | Definitive reference covering Gini, entropy, cost-complexity pruning, and split mechanics with examples |
| 2 | StatQuest: Decision Trees — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=7VeUPuFGJHk | Video | Excellent visual explanation of Gini impurity, information gain, and tree building step by step |
| 3 | Visual Introduction to Machine Learning — R2D3 | http://www.r2d3.us/visual-intro-to-machine-learning-part-1/ | Interactive | Beautiful interactive visualization of decision tree splits on real data |
| 4 | Decision Tree Deep-Dive: Information Gain and Gini Impurity — Ameer Saleem | https://ameersaleem.substack.com/p/decision-tree-deep-dive-information | Blog | Derives information gain and Gini gain formulas with comparison on same examples |
| 5 | scikit-learn: Decision Tree Learning — Entropy, Gini, IG | https://www.bogotobogo.com/python/scikit-learn/scikt_machine_learning_Decision_Tree_Learning_Informatioin_Gain_IG_Impurity_Entropy_Gini_Classification_Error.php | Tutorial | Formulas side by side with plotting code showing Gini vs entropy vs classification error curves |
| 6 | d2l.ai — Decision Trees | https://d2l.ai/chapter_tabular-modern/index.html | Tutorial | Textbook treatment of tree splitting criteria with code |
| 7 | Decision Tree in Machine Learning — GeeksforGeeks | https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/ | Blog | Beginner-friendly intro with information gain and Gini index worked examples |

## CML-TRE-002 — Random Forests  [P0]
Subtopics: bagging + feature subsampling; why decorrelation reduces variance; OOB error; key hyperparameters

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Ensemble methods — scikit-learn User Guide (Random Forests) | https://scikit-learn.org/stable/modules/ensemble.html#random-forests | Docs | Feature subsampling, OOB score, hyperparameters (n_estimators, max_features, max_depth) with API |
| 2 | StatQuest: Random Forests — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=J4Wdy0Wc_xQ | Video | Clear visual explanation of bagging, feature subsampling, and OOB error estimation |
| 3 | Random Forests from Scratch: Bagging and OOB Error — Sesen.ai | https://sesen.ai/blog/random-forests-from-scratch-bagging | Blog | From-scratch implementation showing decorrelation effect (correlation 0.58→0.42) and OOB error calculation |
| 4 | d2l.ai — Bagging | https://d2l.ai/chapter_ensemble/bagging.html | Tutorial | Textbook treatment of bootstrap aggregating with variance reduction analysis |
| 5 | Random Forest Explained: A Visual Guide — Medium | https://medium.com/data-science/random-forest-explained-a-visual-guide-with-code-examples-9f736a6e1b3c | Blog | Visual guide with OOB mechanics and feature subsampling illustrations |
| 6 | An Introduction to Random Forests — Machine Learning Mastery | https://machinelearningmastery.com/random-forest-ensemble-in-python/ | Blog | Practical guide with scikit-learn code covering key hyperparameters and their effects |

## CML-TRE-003 — Bagging Fundamentals  [P1]
Subtopics: bootstrap; variance-reduction argument; bagging vs boosting

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Ensemble methods — scikit-learn User Guide (Bagging) | https://scikit-learn.org/stable/modules/ensemble.html#bagging-meta-estimator | Docs | BaggingClassifier/Regressor with bootstrap, max_samples, max_features parameters |
| 2 | d2l.ai — Bagging | https://d2l.ai/chapter_ensemble/bagging.html | Tutorial | Bootstrap sampling, variance reduction through averaging, and comparison with boosting |
| 3 | StatQuest: Bootstrapping — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=Xz0x-8-cgaQ | Video | Visual explanation of bootstrap sampling as foundation for bagging |
| 4 | Bagging vs Boosting in Machine Learning — Machine Learning Mastery | https://machinelearningmastery.com/bagging-and-random-forest-ensemble-algorithms-for-machine-learning/ | Blog | Clear comparison of bagging (variance reduction) vs boosting (bias reduction) |
| 5 | Ensemble Learning: Bagging, Boosting — Google ML Crash Course | https://developers.google.com/machine-learning/decision-forests/ensemble-methods | Tutorial | Concise comparison of bagging and boosting with practical guidance |

## CML-TRE-004 — Feature Importance in Tree Ensembles  [P1]
Subtopics: impurity-importance bias; permutation importance; SHAP for trees

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Permutation Importance — scikit-learn User Guide | https://scikit-learn.org/stable/modules/permutation_importance.html | Docs | Permutation importance vs impurity-based importance with bias discussion and examples |
| 2 | Interpretable Machine Learning — SHAP (Shapley Values) | https://christophm.github.io/interpretable-ml-book/shap.html | Blog | Christoph Molnar's free book chapter on SHAP with tree-specific TreeSHAP explanation |
| 3 | Interpretable ML — Feature Importance | https://christophm.github.io/interpretable-ml-book/feature-importance.html | Blog | Covers impurity-based importance bias and permutation importance as alternative |
| 4 | SHAP Documentation — TreeExplainer | https://shap.readthedocs.io/en/latest/example_notebooks/api_examples/explainers/Tree.html | Docs | Official SHAP TreeExplainer for tree ensembles with usage examples |
| 5 | Permutation Importance vs SHAP — MetricGate | https://metricgate.com/blogs/permutation-importance-vs-shap/ | Blog | Side-by-side comparison with R demo on correlated features |
| 6 | Beware Default Random Forest Importances — explained.ai | https://explained.ai/rf-importance/ | Blog | Terrence Parr's classic post on impurity-importance bias with high-cardinality features |
