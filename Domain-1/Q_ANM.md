# Category Q — Anomaly Detection

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-ANM-001 — Statistical and Distance-Based Anomaly Detection  [P1]
Subtopics: z-score / IQR; Mahalanobis distance; kNN / LOF

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Outlier Detection — scikit-learn User Guide | https://scikit-learn.org/stable/modules/outlier_detection.html | Docs | LOF, Isolation Forest, One-Class SVM, and Elliptic Envelope with comparison examples |
| 2 | Anomaly Detection — Machine Learning Mastery | https://machinelearningmastery.com/model-based-outlier-detection-and-removal-in-python/ | Blog | Z-score, IQR, and model-based outlier detection with Python code |
| 3 | Local Outlier Factor (LOF) — scikit-learn | https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html | Docs | LOF implementation with kNN-based local density estimation |
| 4 | Mahalanobis Distance for Outlier Detection — Machine Learning Mastery | https://machinelearningmastery.com/mahalanobis-distance/ | Blog | Mahalanobis distance explained with covariance and application to outlier detection |
| 5 | Anomaly Detection Overview — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course | Tutorial | Conceptual overview of anomaly detection approaches |
| 6 | d2l.ai — Anomaly Detection | https://d2l.ai/chapter_gaussian-processes/index.html | Tutorial | Statistical approaches to anomaly detection with distribution-based methods |

## CML-ANM-002 — Isolation Forest  [P1]
Subtopics: path length; anomaly-score derivation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Isolation Forest — scikit-learn User Guide | https://scikit-learn.org/stable/modules/outlier_detection.html#isolation-forest | Docs | IsolationForest with path length scoring, contamination parameter, and comparison examples |
| 2 | Isolation Forest — scikit-learn API | https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html | Docs | Complete parameter reference with anomaly score derivation from average path length |
| 3 | How Isolation Forest Works — Machine Learning Mastery | https://machinelearningmastery.com/isolation-forest-for-anomaly-detection/ | Blog | Step-by-step: random splits isolate anomalies in fewer steps, path length as anomaly score |
| 4 | Isolation Forest Explained — Towards Data Science | https://towardsdatascience.com/isolation-forest-is-the-best-anomaly-detection-algorithm-for-big-data-right-now-e410b0b9412/ | Blog | Intuitive explanation of why anomalies have shorter path lengths in random trees |
| 5 | Anomaly Detection with Isolation Forest — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2021/07/anomaly-detection-using-isolation-forest-a-complete-guide/ | Blog | Complete guide with path length formula and anomaly score normalization |

## CML-ANM-003 — One-Class SVM and Novelty Detection  [P2]
Subtopics: boundary-based novelty detection

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Novelty and Outlier Detection — scikit-learn | https://scikit-learn.org/stable/modules/outlier_detection.html#novelty-detection | Docs | One-Class SVM for novelty detection vs outlier detection distinction with examples |
| 2 | One-Class SVM — scikit-learn API | https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html | Docs | OneClassSVM with RBF kernel, nu parameter as upper bound on fraction of outliers |
| 3 | One-Class SVM Tutorial — Machine Learning Mastery | https://machinelearningmastery.com/one-class-classification-algorithms/ | Blog | Practical guide to one-class SVM, one-class kNN, and other novelty detection methods |
| 4 | Novelty Detection with One-Class SVM — scikit-learn Example | https://scikit-learn.org/stable/auto_examples/svm/plot_oneclass.html | Tutorial | Worked example showing decision boundary of One-Class SVM on 2D data |
| 5 | Anomaly Detection — d2l.ai | https://d2l.ai/chapter_gaussian-processes/index.html | Tutorial | Boundary-based approaches to anomaly and novelty detection |
