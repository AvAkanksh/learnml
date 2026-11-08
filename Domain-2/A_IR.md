# Category A — Lexical Retrieval (TF-IDF / BM25) — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-IR-001 — TF-IDF [P0]
Subtopics: TF and IDF derivation; vector space model; cosine similarity

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Vector Semantics and Embeddings | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Textbook chapter: TF-IDF derivation, cosine similarity, vector space model |
| 2 | TF-IDF Explained: Formula, Worked Example & Python Code | https://www.interviewbit.com/varsity/blog/tf-idf-explained/ | Blog | Infographic of formula, 3-document worked example, scikit-learn code |
| 3 | Understanding TF-IDF — GeeksforGeeks | https://www.geeksforgeeks.org/machine-learning/understanding-tf-idf-term-frequency-inverse-document-frequency/ | Tutorial | Step-by-step TF/IDF computation with per-term calculations |
| 4 | Analyzing Documents with TF-IDF — Programming Historian | https://programminghistorian.org/en/lessons/analyzing-documents-with-tfidf | Tutorial | Academic-style lesson on real text with scikit-learn |
| 5 | TF-IDF: An Introduction — Built In | https://builtin.com/articles/tf-idf | Blog | Pairs explanation with video tutorial and from-scratch Python |
| 6 | scikit-learn TfidfVectorizer documentation | https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html | Docs | Official API docs with formula details and usage examples |
| 7 | TF-IDF with Scikit-Learn — Intro to Cultural Analytics | https://melaniewalsh.github.io/Intro-Cultural-Analytics/05-Text-Analysis/03-TF-IDF-Scikit-Learn.html | Tutorial | Altair heatmap visualization of top-scoring TF-IDF terms per document |
| 8 | TF-IDF Made Simple & How To Get Started In Python | https://spotintelligence.com/2022/11/28/tf-idf/ | Blog | Beginner-friendly with Python tutorial |
| 9 | TF-IDF — Term Frequency-Inverse Document Frequency — LearnDataSci | https://www.learndatasci.com/glossary/tf-idf-term-frequency-inverse-document-frequency/ | Blog | Concise reference with numeric example (TF=20/100, IDF=log10(10000/100)=2) |

## CNLP-IR-002 — BM25 [P0]
Subtopics: term saturation (k1); length normalization (b); BM25 vs TF-IDF; role in hybrid search

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | BM25 Explained: How Keyword Relevance Scoring Works | https://dataaspirant.com/blog/bm25-explained/ | Blog | Structured guide: k1/b parameters, Python + Elasticsearch code |
| 2 | Jurafsky & Martin SLP3 — Information Retrieval chapter | https://web.stanford.edu/~jurafsky/slp3/14.pdf | Slides | Textbook treatment of BM25, TF-IDF, and vector space ranking |
| 3 | BM25 Algorithm — KodeKloud | https://notes.kodekloud.com/docs/Fundamentals-of-RAG/Keyword-Search-Retrieval/BM25-Algorithm/page | Tutorial | Visual comparison of two documents showing saturation behavior |
| 4 | BM25 formula: k1 and b parameters — The Neural Base | https://theneuralbase.com/hybrid-search/learn/advanced/bm25-formula-k1-and-b-parameters/ | Blog | Sweet-spot ranges for k1 and effect on score curves |
| 5 | Mastering BM25: A Deep Dive — Zilliz Learn | https://zilliz.com/learn/mastering-bm25-a-deep-dive-into-the-algorithm-and-application-in-milvus | Tutorial | BM25 as TF-IDF extension with saturating TF and IDF formulas |
| 6 | Okapi BM25 — Wikipedia | https://en.wikipedia.org/wiki/Okapi_BM25 | Blog | Reference formula with standard parameter ranges (k1∈[1.2,2.0], b=0.75) |
| 7 | TF-IDF and BM25 for RAG — A Complete Guide | https://www.ai-bites.net/tf-idf-and-bm25-for-rag-a-complete-guide/ | Blog | BM25 for RAG pipelines with toy corpus and bm25s code |
| 8 | What is BM25 Full-Text Search? — Spice.ai | https://spice.ai/learn/bm25-full-text-search | Blog | Conceptual overview of saturation and length normalization |
| 9 | Elasticsearch BM25 Similarity documentation | https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html | Docs | Official docs showing how BM25 is configured in production search |

## CNLP-IR-003 — Classical IR Architectures [P2]
Subtopics: inverted index; boolean retrieval; vector-space ranking

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Boolean Retrieval — Stanford IR Book Chapter 1 | https://nlp.stanford.edu/IR-book/html/htmledition/boolean-retrieval-1.html | Tutorial | Online textbook chapter covering boolean retrieval with inverted index |
| 2 | Vector Space Model — Stanford IR Book Chapter 6 | https://nlp.stanford.edu/IR-book/html/htmledition/the-vector-space-model-for-scoring-1.html | Tutorial | Detailed treatment of vector-space ranking and cosine scoring |
| 3 | Boolean and Vector Space Retrieval Models — UT Austin slides | https://www.cs.utexas.edu/~mooney/ir-course/slides_pdfs/IR%20Models.pdf | Slides | University lecture covering boolean and vector-space models side by side |
| 4 | Boolean model and Inverted index — Stanford IR essir slides | https://nlp.stanford.edu/IR-book/essir2011/pdf/01intro.pdf | Slides | Manning's slides: inverted index construction and boolean queries |
| 5 | Inverted Index — GeeksforGeeks | https://www.geeksforgeeks.org/dbms/inverted-index/ | Tutorial | Step-by-step building of inverted index with stemming |
| 6 | CS6200 Information Retrieval — Indexing slides (Northeastern) | https://www.khoury.northeastern.edu/home/vip/teach/IRcourse/2_indexing_ngrams/slides/indexing_1.pdf | Slides | Forward vs inverted index, compression, batch building |
| 7 | Boolean and Vector Space Retrieval — Georgetown slides | https://ir.cs.georgetown.edu/~nazli/classes/ir-Slides/Boolean-VectorSpace-13.pdf | Slides | Cosine similarity intuition: documents similar when vectors point same direction |
| 8 | Jurafsky & Martin SLP3 — Vector Semantics chapter | https://web.stanford.edu/~jurafsky/slp3/6.pdf | Slides | Vector space model and cosine similarity foundations |
| 9 | Elasticsearch: Inverted Index | https://www.elastic.co/guide/en/elasticsearch/guide/current/inverted-index.html | Docs | Practical explanation of inverted index in Elasticsearch |
