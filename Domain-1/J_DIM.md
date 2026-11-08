# Category J — Dimensionality Reduction and Manifold Learning

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-DIM-001 — Principal Component Analysis  [P0]
Subtopics: variance-maximization derivation; covariance eigendecomposition; PCA via SVD; choosing components; need for standardization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | A Tutorial on Principal Component Analysis — Jonathon Shlens | https://www.cs.princeton.edu/picasso/mats/PCA-Tutorial-Intuition_jp.pdf | Slides | Classic PCA tutorial with variance-maximization derivation and covariance eigendecomposition |
| 2 | PCA — scikit-learn User Guide | https://scikit-learn.org/stable/modules/decomposition.html#pca | Docs | PCA via SVD, explained variance ratio, choosing components, and standardization requirement |
| 3 | StatQuest: PCA — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=FgakZw6K1QQ | Video | Excellent visual explanation of PCA step by step with variance maximization intuition |
| 4 | d2l.ai — PCA | https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/eigendecomposition.html | Tutorial | Textbook treatment connecting eigendecomposition to PCA with code examples |
| 5 | Making Sense of PCA — Gregory Gundersen | https://gregorygundersen.com/blog/2022/09/03/pca/ | Blog | Clean derivation connecting variance maximization, eigendecomposition, and SVD approaches |
| 6 | SVD and PCA — Princeton Lecture | https://tglab.princeton.edu/wp-content/uploads/2011/03/Lecture_SVD.pdf | Slides | Princeton lecture notes on SVD-based PCA with formal derivation |
| 7 | Setosa.io: PCA (interactive) | https://setosa.io/ev/principal-component-analysis/ | Interactive | Beautiful interactive visualization of PCA on 2D data showing variance directions |

## CML-DIM-003 — t-SNE  [P1]
Subtopics: perplexity; KL objective; crowding problem; why not for downstream features

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | How to Use t-SNE Effectively — Distill.pub | https://distill.pub/2016/misread-tsne/ | Interactive | Definitive interactive guide to t-SNE perplexity effects and common misinterpretations |
| 2 | t-SNE — Laurens van der Maaten (official page) | https://lvdmaaten.github.io/tsne/ | Docs | Original author's page with FAQ covering perplexity, crowding problem, and when not to use |
| 3 | Dimension Reduction with t-SNE — Paperspace Blog | https://blog.paperspace.com/dimension-reduction-with-t-sne/ | Blog | Tutorial-style walkthrough covering KL objective, perplexity, and crowding problem |
| 4 | t-SNE Clearly Explained — Towards Data Science | https://medium.com/data-science/t-sne-clearly-explained-d84c537f53a | Blog | Intuitive explanation with perplexity as effective number of neighbors and Student-t distribution fix |
| 5 | CSC 411 Lecture 13: t-SNE — University of Toronto | https://www.cs.toronto.edu/~jlucas/teaching/csc411/lectures/lec13_handout.pdf | Slides | University lecture covering KL divergence objective and crowding problem formally |
| 6 | scikit-learn t-SNE User Guide | https://scikit-learn.org/stable/modules/manifold.html#t-sne | Docs | Practical guidance on perplexity, why not for downstream features, and computational cost |

## CML-DIM-004 — UMAP  [P1]
Subtopics: graph construction; local vs global structure; comparison to t-SNE

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding UMAP — Google PAIR | https://pair-code.github.io/understanding-umap/ | Interactive | Google's interactive guide to UMAP parameters, local vs global structure, and comparison to t-SNE |
| 2 | UMAP Documentation | https://umap-learn.readthedocs.io/en/latest/how_umap_works.html | Docs | Official docs explaining fuzzy simplicial set construction and optimization |
| 3 | UMAP Explained: How It Beats t-SNE — Let's Data Science | https://letsdatascience.com/blog/umap-explained-the-faster-smarter-alternative-to-t-sne | Blog | Comparison to t-SNE covering speed, global structure preservation, and parameter tuning |
| 4 | Understanding UMAP — DataCamp | https://www.datacamp.com/tutorial/understanding-umap-guide-to-dimensionality-reduction | Tutorial | Practical guide to UMAP graph construction and n_neighbors/min_dist parameters |
| 5 | UMAP vs t-SNE — Diving into Genetics | https://divingintogeneticsandgenomics.com/learn/compare/umap-vs-tsne/ | Blog | Single-cell benchmark comparing UMAP and t-SNE on speed, global structure, and accuracy metrics |

## CML-DIM-002 — LDA for Dimensionality Reduction  [P2]
Subtopics: Fisher criterion; between/within-class scatter

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.2. Linear and Quadratic Discriminant Analysis — scikit-learn | https://scikit-learn.org/stable/modules/lda_qda.html | Docs | LDA for dimensionality reduction with Fisher criterion and scatter matrices |
| 2 | Linear Discriminant Analysis — Sebastian Raschka | https://sebastianraschka.com/Articles/2014_python_lda.html | Blog | Step-by-step LDA implementation with between/within-class scatter matrix derivation |
| 3 | d2l.ai — Linear Discriminant Analysis | https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/eigendecomposition.html | Tutorial | Connects Fisher criterion to eigenvalue problem |
| 4 | StatQuest: Linear Discriminant Analysis (YouTube) | https://www.youtube.com/watch?v=azXCzI57Yfc | Video | Visual explanation of maximizing between-class vs within-class scatter |
| 5 | Fisher's Linear Discriminant — Wikipedia | https://en.wikipedia.org/wiki/Linear_discriminant_analysis#Fisher's_linear_discriminant | Docs | Formal Fisher criterion derivation with scatter matrix definitions |

## CML-DIM-005 — Manifold Learning Methods  [P3]
Subtopics: Isomap; Locally Linear Embedding

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 2.2. Manifold Learning — scikit-learn | https://scikit-learn.org/stable/modules/manifold.html | Docs | Covers Isomap, LLE, Spectral Embedding, MDS with Swiss roll examples |
| 2 | d2l.ai — Manifold Learning | https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/eigendecomposition.html | Tutorial | Textbook treatment connecting manifold hypothesis to dimensionality reduction |
| 3 | Isomap and LLE — Machine Learning Mastery | https://machinelearningmastery.com/dimensionality-reduction-algorithms-with-python/ | Blog | Practical guide with Python implementations of Isomap and LLE |
| 4 | Manifold Learning on the Swiss Roll — scikit-learn Example | https://scikit-learn.org/stable/auto_examples/manifold/plot_compare_methods.html | Tutorial | Visual comparison of Isomap, LLE, t-SNE, and MDS on Swiss roll dataset |
