# Category O — Recommender Systems

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-REC-001 — Collaborative Filtering and Matrix Factorization  [P0]
Subtopics: user-item matrix; ALS / SGD factorization; implicit feedback; cold start

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Google ML Crash Course — Collaborative Filtering | https://developers.google.com/machine-learning/recommendation/collaborative/basics | Tutorial | Clean overview of user-item matrix, matrix factorization, and cold-start problem |
| 2 | Matrix Factorization for Recommender Systems — Eugene Yan | https://eugeneyan.com/writing/system-design-for-discovery/ | Blog | Practical system design with ALS/SGD factorization and implicit feedback handling |
| 3 | Recommender Systems — d2l.ai | https://d2l.ai/chapter_recommender-systems/index.html | Tutorial | Textbook covering matrix factorization, ALS, implicit feedback, and evaluation |
| 4 | Collaborative Filtering — Surprise Library Documentation | https://surprise.readthedocs.io/en/stable/ | Docs | Python library implementing SVD, ALS, KNN-based CF with evaluation framework |
| 5 | Implicit Feedback Collaborative Filtering — Machine Learning Mastery | https://machinelearningmastery.com/collaborative-filtering-for-movie-recommendations/ | Blog | Practical tutorial with matrix factorization and handling implicit feedback |
| 6 | ALS for Collaborative Filtering — Spark MLlib | https://spark.apache.org/docs/latest/ml-collaborative-filtering.html | Docs | Distributed ALS implementation for large-scale implicit/explicit feedback |

## CML-REC-002 — Two-Tower Retrieval and Ranking Pipelines  [P1]
Subtopics: candidate generation vs ranking; two-tower embeddings; ANN retrieval; negative sampling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Google ML Crash Course — Retrieval and Ranking | https://developers.google.com/machine-learning/recommendation/dnn/retrieval | Tutorial | Two-stage architecture: candidate generation with embeddings, then ranking with features |
| 2 | Two-Tower Models for Retrieval — Eugene Yan | https://eugeneyan.com/writing/real-time-recommendations/ | Blog | Practical two-tower architecture with ANN retrieval and negative sampling strategies |
| 3 | TensorFlow Recommenders — Two-Tower Tutorial | https://www.tensorflow.org/recommenders/examples/basic_retrieval | Tutorial | Official tutorial building a two-tower retrieval model with TFRS |
| 4 | d2l.ai — Deep Factorization Machines | https://d2l.ai/chapter_recommender-systems/deepfm.html | Tutorial | Neural recommender architectures beyond matrix factorization |
| 5 | Approximate Nearest Neighbors for Retrieval — FAISS | https://github.com/facebookresearch/faiss/wiki | Docs | FAISS for ANN retrieval at scale with IVF, HNSW, and PQ indexes |

## CML-REC-003 — Recommender Evaluation  [P1]
Subtopics: precision@k / recall@k; NDCG; MAP; offline vs online metrics

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Recommender Systems Evaluation — d2l.ai | https://d2l.ai/chapter_recommender-systems/ranking.html | Tutorial | NDCG, precision@k, recall@k derivations with code |
| 2 | Evaluation Metrics for Recommender Systems — Google ML Crash Course | https://developers.google.com/machine-learning/recommendation/dnn/re-ranking | Tutorial | Offline metrics (NDCG, MAP) vs online metrics (CTR, engagement) |
| 3 | Ranking Metrics — scikit-learn | https://scikit-learn.org/stable/modules/model_evaluation.html#ranking | Docs | NDCG, DCG, and label ranking metrics with scikit-learn implementation |
| 4 | Evaluating Recommender Systems — Machine Learning Mastery | https://machinelearningmastery.com/recommender-systems-resources/ | Blog | Overview of offline vs online evaluation approaches for recommender systems |
| 5 | RecBole — Evaluation Metrics Documentation | https://recbole.io/docs/user_guide/evaluation.html | Docs | Comprehensive evaluation framework with precision@k, recall@k, NDCG, MAP implementations |

## CML-REC-004 — Content-Based and Hybrid Recommenders  [P2]
Subtopics: item features; hybrid blending

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Google ML Crash Course — Content-Based Filtering | https://developers.google.com/machine-learning/recommendation/content-based/basics | Tutorial | Item feature-based recommendations and similarity computation |
| 2 | d2l.ai — Feature-Rich Recommender Systems | https://d2l.ai/chapter_recommender-systems/ctr.html | Tutorial | Content features combined with collaborative filtering |
| 3 | Hybrid Recommender Systems — Machine Learning Mastery | https://machinelearningmastery.com/recommender-systems-resources/ | Blog | Overview of hybrid blending strategies: weighted, switching, mixed, cascade |
| 4 | LightFM — Hybrid Recommender Documentation | https://making.lyst.com/lightfm/docs/home.html | Docs | Hybrid model combining collaborative and content-based features |
| 5 | Content-Based Filtering — Wikipedia | https://en.wikipedia.org/wiki/Recommender_system#Content-based_filtering | Docs | Overview of item feature extraction and content-based similarity approaches |
