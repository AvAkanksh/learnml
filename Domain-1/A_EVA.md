# Category A — Model Evaluation and Data Integrity

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-EVA-001 — Classification Metrics  [P0]
Subtopics: confusion matrix; precision/recall/F1 trade-off; ROC-AUC vs PR-AUC; threshold selection; macro vs micro averaging

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Metrics and scoring: quantifying the quality of predictions | https://scikit-learn.org/stable/modules/model_evaluation.html | Docs | Definitive reference covering confusion matrix, precision/recall/F1, ROC-AUC, PR-AUC, and macro/micro/weighted averaging with runnable examples |
| 2 | Classification: ROC and AUC — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc | Tutorial | Clean walkthrough of ROC curve, AUC as probability interpretation, and threshold selection with interactive widget |
| 3 | Classification: Accuracy, Precision, Recall — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall | Tutorial | Formulas for precision, recall, F1 with hand-worked numeric examples and trade-off explanation |
| 4 | Classification: Thresholds and the Confusion Matrix — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/classification/thresholding | Tutorial | Defines confusion matrix with spam example, explains why 0.5 threshold is often wrong |
| 5 | ROC Curves and Precision-Recall Curves for Imbalanced Classification | https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-imbalanced-classification/ | Blog | Best implementation walkthrough: synthetic imbalanced data, shows ROC-AUC vs PR-AUC gap concretely with scikit-learn code |
| 6 | MLU-Explain: ROC & AUC (interactive visual essay) | https://mlu-explain.github.io/roc-auc/ | Interactive | Amazon ML University interactive explainer with visual animations of ROC curve construction |
| 7 | Precision, Recall, F1 Score, and More | https://www.mit.edu/~edchen93/posts/precision-recall-f1-confusion-matrix-classification-metrics/ | Blog | MIT-hosted guide with live calculator and two worked matrices showing same F1 from opposite error profiles |
| 8 | Confusion Matrix in Machine Learning — Code and Debug | https://codeanddebug.in/blog/confusion-matrix-in-machine-learning/ | Blog | Interactive guide covering TP/FP/FN/TN, F1, ROC-AUC with scikit-learn code and 3×3 multiclass example |

## CML-EVA-003 — Data Leakage  [P0]
Subtopics: target leakage; preprocessing fit on full data; temporal leakage; train-test contamination; duplicate entities across splits

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Leakage and the Reproducibility Crisis in ML-based Science | https://reproducible.cs.princeton.edu/ | Blog | Princeton project page with 8-type leakage taxonomy covering target leakage, train-test contamination, temporal leakage, and duplicate entities |
| 2 | Common pitfalls §12.2 "Data leakage" — scikit-learn | https://scikit-learn.org/stable/common_pitfalls.html | Docs | Definitive treatment of preprocessing-before-splitting leakage with wrong-vs-right code pair proving numerical harm |
| 3 | 3 Subtle Ways Data Leakage Can Ruin Your Models | https://machinelearningmastery.com/3-subtle-ways-data-leakage-can-ruin-your-models-and-how-to-prevent-it/ | Blog | Three worked scenarios: target leakage, preprocessing contamination, temporal leakage — each with leaky and corrected Python code |
| 4 | Data Leakage — Kaggle Learn (Intermediate ML, Lesson 7) | https://www.kaggle.com/code/alexisbcook/data-leakage | Tutorial | Kaggle's standard leakage lesson covering target leakage vs train-test contamination with exercises |
| 5 | Understanding Data Leakage in Machine Learning — NBD Lite | https://www.nb-data.com/p/understanding-data-leakage-in-machine | Blog | Covers target leakage, preprocessing contamination, and overlapping rows with clear diagrams |
| 6 | Data 100 Course Notes — Cross Validation and Regularization | https://ds100.org/course-notes/cv-reg | Tutorial | UC Berkeley notes covering duplicate/group entities and temporal leakage as cross-validation pitfalls |

## CML-EVA-002 — Regression Metrics  [P1]
Subtopics: MSE vs MAE (outlier sensitivity); RMSE; R² / adjusted R²; residual analysis

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | A Comprehensive Overview of Regression Evaluation Metrics — NVIDIA Developer Blog | https://developer.nvidia.com/blog/a-comprehensive-overview-of-regression-evaluation-metrics/ | Blog | Thorough coverage of MSE, MAE, RMSE, R² with practical notes on outlier sensitivity and when to use each |
| 2 | Evaluation Metrics for Your Regression Model — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2021/05/know-the-best-evaluation-metrics-for-your-regression-model/ | Blog | Walks through MSE, MAE, RMSE, R², adjusted R² with scikit-learn implementations |
| 3 | Regression Evaluation Metrics (MAE, MSE, R²) — apxml | https://apxml.com/courses/getting-started-with-scikit-learn/chapter-2-supervised-learning-regression/regression-evaluation-metrics | Tutorial | Formulas for all metrics with R² explained as comparison against mean-baseline |
| 4 | 3.4. Metrics and scoring — scikit-learn (regression section) | https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics | Docs | Official reference for mean_squared_error, mean_absolute_error, r2_score with API usage |
| 5 | Understanding Regression Metrics — Datarock | https://datarock.com.au/understanding-regression-metrics/ | Blog | Clear comparison: MAE weights all residuals equally vs MSE amplifying outliers |
| 6 | d2l.ai — Linear Regression | https://d2l.ai/chapter_linear-regression/index.html | Tutorial | Textbook treatment covering MSE as loss function with gradient derivation and code |
