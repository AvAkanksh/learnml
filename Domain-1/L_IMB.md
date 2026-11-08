# Category L — Imbalanced Learning

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-IMB-003 — Evaluation Under Class Imbalance  [P0]
Subtopics: why accuracy fails; PR-AUC; balanced accuracy; MCC

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | ROC Curves and Precision-Recall Curves for Imbalanced Classification — Machine Learning Mastery | https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-imbalanced-classification/ | Blog | Shows concretely why accuracy and ROC-AUC can mislead under imbalance; PR-AUC comparison with code |
| 2 | 3.4. Metrics and scoring (imbalanced metrics) — scikit-learn | https://scikit-learn.org/stable/modules/model_evaluation.html#balanced-accuracy-score | Docs | balanced_accuracy_score, matthews_corrcoef, precision_recall_curve, average_precision_score |
| 3 | The Advantages of the Matthews Correlation Coefficient (MCC) — Chicco & Jurman | https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-020-6451-2 | Blog | Explains why MCC is more informative than F1 and accuracy for imbalanced binary classification |
| 4 | Tour of Evaluation Metrics for Imbalanced Classification — Machine Learning Mastery | https://machinelearningmastery.com/tour-of-evaluation-metrics-for-imbalanced-classification/ | Blog | Comprehensive tour: accuracy pitfalls, PR-AUC, balanced accuracy, G-mean, MCC with code |
| 5 | Imbalanced Classification with Python — Machine Learning Mastery | https://machinelearningmastery.com/what-is-imbalanced-classification/ | Blog | Overview of why accuracy fails with worked examples showing misleading 99% accuracy |

## CML-IMB-001 — Resampling Techniques  [P0]
Subtopics: over/undersampling; SMOTE; ADASYN; resample only inside training folds

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | imbalanced-learn User Guide — Over-sampling | https://imbalanced-learn.org/stable/over_sampling.html | Docs | SMOTE, ADASYN, RandomOverSampler with pipeline integration to resample only inside CV folds |
| 2 | imbalanced-learn User Guide — Under-sampling | https://imbalanced-learn.org/stable/under_sampling.html | Docs | RandomUnderSampler, TomekLinks, NearMiss with usage examples |
| 3 | SMOTE for Imbalanced Classification — Machine Learning Mastery | https://machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/ | Blog | SMOTE algorithm explained with Python implementation and comparison to random oversampling |
| 4 | How to Use SMOTE Correctly — Neptune.ai | https://neptune.ai/blog/how-to-deal-with-imbalanced-classification-and-regression-data | Blog | Emphasizes resampling only inside cross-validation folds to prevent leakage |
| 5 | ADASYN — imbalanced-learn | https://imbalanced-learn.org/stable/references/generated/imblearn.over_sampling.ADASYN.html | Docs | ADASYN adaptive synthetic sampling that focuses on harder-to-learn boundary samples |
| 6 | imbalanced-learn Pipeline — scikit-learn Compatible | https://imbalanced-learn.org/stable/references/generated/imblearn.pipeline.Pipeline.html | Docs | Pipeline ensuring resampling happens only during fit, not during predict |

## CML-IMB-002 — Cost-Sensitive Learning  [P1]
Subtopics: class weights; threshold moving; focal loss

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Cost-Sensitive Learning for Imbalanced Classification — Machine Learning Mastery | https://machinelearningmastery.com/cost-sensitive-learning-for-imbalanced-classification/ | Blog | Covers class_weight='balanced', sample_weight, and threshold moving with code |
| 2 | scikit-learn — class_weight parameter | https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html | Docs | class_weight='balanced' automatically adjusts weights inversely proportional to class frequencies |
| 3 | Focal Loss for Dense Object Detection (explained) — Lei Mao | https://leimao.github.io/blog/Focal-Loss-Explained/ | Blog | Focal loss formula, gamma parameter effect, and connection to cross-entropy for hard examples |
| 4 | Threshold Moving for Imbalanced Classification — Machine Learning Mastery | https://machinelearningmastery.com/threshold-moving-for-imbalanced-classification/ | Blog | How to optimize decision threshold for imbalanced data using precision-recall tradeoff |
| 5 | 3.3. Tuning the Decision Threshold — scikit-learn | https://scikit-learn.org/stable/modules/classification_threshold.html | Docs | TunedThresholdClassifierCV for optimizing threshold on a target metric |
