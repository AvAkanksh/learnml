# Category G — ML System Design

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-SYS-001 — ML System Design Framework  [P0]
Subtopics: problem framing and success metrics; data collection/labeling; offline vs online evaluation; serving and monitoring

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Rules of Machine Learning: Best Practices — Google | https://developers.google.com/machine-learning/guides/rules-of-ml | Tutorial | Google's definitive 43-rule guide covering problem framing, metrics, serving, and monitoring |
| 2 | Machine Learning System Design — Chip Huyen | https://huyenchip.com/machine-learning-systems-design/toc.html | Blog | Comprehensive framework: problem framing, data pipeline, training, evaluation, deployment, monitoring |
| 3 | ML System Design Template — GitHub (alirezadir) | https://github.com/alirezadir/AIMLInterviews/blob/main/src/MLSD/ml-system-design.md | Tutorial | Step-by-step ML system design template covering all stages from problem definition to monitoring |
| 4 | MLOps: Continuous Delivery for ML — Google Cloud Architecture | https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning | Tutorial | Google Cloud's MLOps architecture covering CI/CD, serving, and monitoring patterns |
| 5 | Practical ML System Design — Eugene Yan | https://eugeneyan.com/writing/system-design-for-discovery/ | Blog | Real-world system design walkthrough covering retrieval, ranking, and serving for recommendations |
| 6 | Introduction to Machine Learning in Production — DeepLearning.AI | https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/ | Tutorial | Andrew Ng's MLOps specialization covering full ML lifecycle |

## CML-SYS-002 — Training-Serving Skew and Data Drift  [P0]
Subtopics: feature consistency; covariate/label/concept drift; monitoring and retraining triggers

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | What Is Data Drift in ML, and How to Detect It — Evidently AI | https://www.evidentlyai.com/ml-in-production/data-drift | Blog | Comprehensive guide to covariate drift, concept drift, and monitoring with detection methods |
| 2 | Training-Serving Skew — Google ML Glossary | https://developers.google.com/machine-learning/guides/rules-of-ml#training-serving_skew | Tutorial | Google's rules covering feature consistency between training and serving |
| 3 | Training-Serving Skew — Giskard | https://www.giskard.ai/glossary/training-serving-skew | Blog | Clear explanation of engineering-level skew vs time-based drift with examples |
| 4 | Data Drift vs Concept Drift: Detection Guide — Memx | https://memx.app/glossary/data-drift/ | Blog | Distinguishes covariate drift P(X) from concept drift P(Y|X) with detection approaches |
| 5 | Monitoring ML Models in Production — Neptune.ai | https://neptune.ai/blog/how-to-monitor-your-models-in-production-guide | Blog | Practical guide to monitoring strategies and retraining triggers |
| 6 | Evidently AI — Open-source ML Monitoring | https://docs.evidentlyai.com/ | Docs | Open-source toolkit for data drift detection and model monitoring |

## CML-SYS-003 — Feature Stores and Data Pipelines  [P1]
Subtopics: point-in-time correctness; online vs offline features; batch vs streaming

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | What Is a Feature Store? — Feast Documentation | https://docs.feast.dev/getting-started/concepts | Docs | Official Feast docs covering online/offline stores, point-in-time joins, and batch vs streaming |
| 2 | Feature Stores Explained — Chip Huyen | https://huyenchip.com/2023/01/08/self-serve-feature-platforms.html | Blog | Feature platform design covering point-in-time correctness and online/offline serving patterns |
| 3 | Feature Stores — Hopsworks Documentation | https://docs.hopsworks.ai/latest/ | Docs | Alternative feature store covering similar patterns with batch and streaming ingestion |
| 4 | Feature Stores for ML — Google Cloud | https://cloud.google.com/vertex-ai/docs/featurestore/overview | Docs | Google's feature store covering online serving, batch materialization, and time-travel queries |
| 5 | Real-time ML with Feature Stores — Tecton Blog | https://www.tecton.ai/blog/what-is-a-feature-store/ | Blog | Practical overview of feature store architecture and online vs offline feature patterns |

## CML-SYS-004 — Model Deployment Patterns  [P1]
Subtopics: batch vs real-time inference; shadow / canary deployment; latency budgets

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | ML Model Deployment Strategies — Neptune.ai | https://neptune.ai/blog/ml-model-serving-best-practices | Blog | Covers batch vs real-time inference, shadow mode, canary deployments, A/B testing |
| 2 | Continuous Delivery for ML — Martin Fowler | https://martinfowler.com/articles/cd4ml.html | Blog | Canonical article on ML deployment patterns including shadow mode and canary releases |
| 3 | Serving Patterns — Google Cloud ML Architecture | https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning | Tutorial | Covers serving infrastructure, latency budgets, and deployment strategies |
| 4 | TensorFlow Serving Documentation | https://www.tensorflow.org/tfx/guide/serving | Docs | Production model serving with batching, versioning, and canary model updates |
| 5 | Model Serving with BentoML | https://docs.bentoml.com/en/latest/ | Docs | Modern model serving framework with adaptive batching and deployment patterns |
