# Category C — Distributional Word Representations — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-EMB-001 — Distributional Semantics Foundations [P2]
Subtopics: co-occurrence / PMI matrices; SVD-based embeddings

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Vector Semantics and Embeddings | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Full textbook chapter: co-occurrence matrices, PPMI, SVD-based embeddings |
| 2 | Stanford CS224n — GloVe lecture notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes02-wordvecs2.pdf | Slides | Connects count-based and prediction-based methods via co-occurrence |
| 3 | Simple word embeddings with co-occurrences and SVD — Yale NLP | https://svivek.com/teaching/deep-learning-nlp/fall2023//notebooks/Simple_word_embeddings_with_co_occurrences_and_SVD.html | Tutorial | Hands-on notebook building SVD embeddings from co-occurrence matrix with NumPy |
| 4 | Term Co-occurrence Pointwise Mutual Information (PMI) — Metricgate | https://metricgate.com/docs/term-cooccurrence-pmi/ | Blog | PPMI matrix construction and truncated SVD pipeline explained |
| 5 | CS 6120 NLP — Distributional Semantics slides (UMich) | https://web.eecs.umich.edu/~wangluxy/archive/neu_courses/cs6120_sp2018/slides/slides_cs6120_sp18/semantics_part1.pdf | Slides | Pipeline: corpus → co-occurrence matrix → SVD; sparse PPMI to dense vectors |
| 6 | Capturing Semantics — Word Embeddings (Princeton) | https://www.cs.princeton.edu/courses/archive/fall16/cos402/lectures/402-lec10.pdf | Slides | Rank-300 SVD on PPMI; dot products approximate PPMI values |
| 7 | d2l.ai — Word Embedding (word2vec) | https://d2l.ai/chapter_natural-language-processing-pretraining/word2vec.html | Tutorial | Contextualizes count-based methods before introducing prediction-based Word2Vec |
| 8 | Word Embeddings: Word2Vec, GloVe and Vector Semantics | https://mbrenndoerfer.com/writing/word-embeddings-word2vec-glove-distributed-representations | Blog | Interactive overview connecting distributional hypothesis to embeddings |

## CNLP-EMB-002 — Word2Vec [P0]
Subtopics: skip-gram vs CBOW; negative-sampling objective; hierarchical softmax; analogy arithmetic

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | The Illustrated Word2vec — Jay Alammar | https://jalammar.github.io/illustrated-word2vec/ | Blog | Canonical visual guide: personality embeddings, skip-gram, negative sampling, analogies |
| 2 | Word2Vec Tutorial Part 2 — Negative Sampling — Chris McCormick | http://mccormickml.com/2017/01/11/word2vec-tutorial-part-2-negative-sampling/ | Blog | Classic illustrated walkthrough of negative sampling with unigram table explanation |
| 3 | d2l.ai — Word Embedding (word2vec) | https://d2l.ai/chapter_natural-language-processing-pretraining/word2vec.html | Tutorial | Formal treatment of skip-gram and CBOW with negative sampling math |
| 4 | d2l.ai — Approximate Training (Negative Sampling) | https://d2l.ai/chapter_natural-language-processing-pretraining/approx-training.html | Tutorial | Dedicated section on negative sampling objective and hierarchical softmax |
| 5 | Stanford CS224n — Word Vectors lecture notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes01-wordvecs1.pdf | Slides | Lecture notes on skip-gram, CBOW, and negative sampling objective |
| 6 | Jurafsky & Martin SLP3 — Vector Semantics and Embeddings | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Textbook chapter covering Word2Vec, skip-gram, CBOW, and negative sampling |
| 7 | TensorFlow — Word2Vec tutorial | https://www.tensorflow.org/text/tutorials/word2vec | Tutorial | Official skip-gram with negative sampling implementation from scratch |
| 8 | Stanford CS224n 2023 — Word Vectors II slides | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1234/slides/cs224n-2023-lecture02-wordvecs2.pdf | Slides | Skip-gram vs CBOW comparison, negative sampling as binary logistic regression |
| 9 | Word2Vec Skip-Gram and CBOW — StatQuest (YouTube) | https://www.youtube.com/watch?v=CsgiVnW401c | Video | Visual video explanation of both architectures |

## CNLP-EMB-003 — GloVe [P1]
Subtopics: co-occurrence ratios; weighted least-squares objective; vs Word2Vec

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Stanford GloVe project page | https://nlp.stanford.edu/projects/glove/ | Docs | Official page with algorithm description, pre-trained vectors, and demos |
| 2 | d2l.ai — GloVe: Global Vectors for Word Representation | https://d2l.ai/chapter_natural-language-processing-pretraining/glove.html | Tutorial | Mathematical derivation connecting co-occurrence log to dot products |
| 3 | GloVe Explained — APXML | https://apxml.com/courses/nlp-fundamentals/chapter-4-nlp-word-embeddings/glove-word-representation | Tutorial | Co-occurrence-ratio intuition with ice/steam example, objective function |
| 4 | Stanford CS224n — GloVe lecture notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes02-wordvecs2.pdf | Slides | GloVe objective and its connection to matrix factorization |
| 5 | GloVe Word Embedding in NLP — GeeksforGeeks | https://www.geeksforgeeks.org/nlp/glove-word-embedding-in-nlp/ | Tutorial | Step-by-step co-occurrence matrix to embedding walkthrough |
| 6 | Jurafsky & Martin SLP3 — Vector Semantics (GloVe section) | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Textbook treatment in context of count vs prediction methods |
| 7 | How To Implement GloVe Embeddings In Python — Spot Intelligence | https://spotintelligence.com/2023/11/27/glove-embedding/ | Blog | Python implementation tutorial with gensim and TensorFlow |
| 8 | Word Embeddings: Word2Vec, GloVe and Vector Semantics | https://mbrenndoerfer.com/writing/word-embeddings-word2vec-glove-distributed-representations | Blog | Interactive comparison of GloVe and Word2Vec approaches |

## CNLP-EMB-004 — FastText [P1]
Subtopics: subword n-grams; OOV handling; morphology

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | A Visual Guide to FastText Word Embeddings — Amitness | https://amitness.com/posts/fasttext-embeddings | Blog | Best visual guide: n-gram generation, hashing, skip-gram with subword sum |
| 2 | d2l.ai — Subword Embedding | https://d2l.ai/chapter_natural-language-processing-pretraining/subword-embedding.html | Tutorial | Formal treatment of fastText as subword-level skip-gram model |
| 3 | FastText official tutorial | https://fasttext.cc/docs/en/unsupervised-tutorial.html | Docs | Official tutorial on training fastText embeddings |
| 4 | Introduction to FastText Embeddings — Analytics Vidhya | https://www.analyticsvidhya.com/blog/2023/01/introduction-to-fasttext-embeddings-and-its-implication/ | Blog | OOV handling explained with character n-gram embedding summation |
| 5 | FastText and Subword Embeddings — DEV Community | https://dev.to/priyeshdave6/day-14-fasttext-and-subword-embeddings-34ed | Blog | Words as bag of subword units with 3-6 character n-grams |
| 6 | Jurafsky & Martin SLP3 — Vector Semantics | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Textbook context for subword embeddings |
| 7 | Gensim FastText documentation | https://radimrehurek.com/gensim/models/fasttext.html | Docs | Python library docs with API reference and training examples |
| 8 | What Is FastText? Compared To Word2Vec & GloVe — Spot Intelligence | https://spotintelligence.com/2023/12/05/fasttext/ | Blog | Beginner-friendly comparison with Python tutorial |
