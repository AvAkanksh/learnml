# Category K — Feature Engineering and Selection

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-FEA-001 — Feature Engineering Techniques  [P0]
Subtopics: categorical encoding (one-hot, target encoding and its leakage risk); scaling; missing-value imputation; interaction features

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 6.3. Preprocessing Data — scikit-learn | https://scikit-learn.org/stable/modules/preprocessing.html | Docs | StandardScaler, MinMaxScaler, OneHotEncoder, OrdinalEncoder, SimpleImputer with usage examples |
| 2 | Category Encoders — scikit-learn-contrib | https://contrib.scikit-learn.org/category_encoders/ | Docs | TargetEncoder with leakage-prevention via internal CV, plus binary, hashing, and other encoders |
| 3 | Feature Engineering for Machine Learning — Alice Zheng (Google ML Crash Course) | https://developers.google.com/machine-learning/crash-course/representation/feature-engineering | Tutorial | Practical guide to encoding categoricals, scaling numericals, and creating interaction features |
| 4 | 6.4. Imputation of Missing Values — scikit-learn | https://scikit-learn.org/stable/modules/impute.html | Docs | SimpleImputer, IterativeImputer (MICE), KNNImputer with practical guidance |
| 5 | Target Encoding Done Right — Kaggle Tutorial | https://www.kaggle.com/code/ryanholbrook/target-encoding | Tutorial | Step-by-step target encoding with smoothing and cross-validation to prevent leakage |
| 6 | Feature Engineering Techniques — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2020/10/7-feature-engineering-techniques-machine-learning/ | Blog | Overview of encoding, scaling, interaction features, and missing value handling |
| 7 | Encoding Categorical Features — explained.ai | https://explained.ai/rf-importance/index.html | Blog | Terrence Parr on encoding pitfalls including high-cardinality and one-hot issues |

## CML-FEA-002 — Feature Selection Methods  [P1]
Subtopics: filter / wrapper / embedded; mutual information; L1-based selection; RFE

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.13. Feature Selection — scikit-learn | https://scikit-learn.org/stable/modules/feature_selection.html | Docs | VarianceThreshold, SelectKBest (mutual info, chi2), RFE, SelectFromModel (L1) with examples |
| 2 | Feature Selection for Machine Learning — Machine Learning Mastery | https://machinelearningmastery.com/feature-selection-machine-learning-python/ | Blog | Practical guide covering filter, wrapper (RFE), and embedded (L1, tree importance) methods |
| 3 | Feature Selection — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/representation/feature-crosses | Tutorial | Practical guidance on feature selection and feature crosses |
| 4 | An Introduction to Feature Selection — Machine Learning Mastery | https://machinelearningmastery.com/an-introduction-to-feature-selection/ | Blog | Taxonomy of filter/wrapper/embedded methods with when to use each |
| 5 | Mutual Information for Feature Selection — scikit-learn | https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.mutual_info_classif.html | Docs | Mutual information scorer for classification with non-parametric estimation |
| 6 | Recursive Feature Elimination — scikit-learn Example | https://scikit-learn.org/stable/auto_examples/feature_selection/plot_rfe_digits.html | Tutorial | Worked RFE example on digits dataset with feature ranking visualization |
