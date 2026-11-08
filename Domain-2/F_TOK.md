# Category F — Text Preprocessing and Tokenization — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-TOK-001 — Text Normalization [P2]
Subtopics: lowercasing; Unicode normalization; punctuation handling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Words and Tokens chapter | https://web.stanford.edu/~jurafsky/slp3/2.pdf | Slides | Textbook treatment of text normalization, tokenization fundamentals |
| 2 | Text Normalization Techniques in NLP — APXML | https://apxml.com/courses/nlp-fundamentals/chapter-1-nlp-text-processing-techniques/text-normalization-techniques | Tutorial | Comprehensive: Unicode normalization, lowercasing, punctuation handling |
| 3 | Text Cleaning and Normalization in NLP — CodeSignal | https://codesignal.com/learn/courses/foundations-of-nlp-data-processing-2/lessons/text-cleaning-and-normalization-in-nlp | Tutorial | NFKD decomposition, removing combining marks, Unicode-aware cleaning |
| 4 | Text Normalization in NLP — NPBlue | https://npblue.com/tech/nlp/processing/text-normalization/ | Blog | NFKC vs NFC comparison, case folding trade-offs |
| 5 | Lowercasing and Normalization — The Neural Base | https://theneuralbase.com/nltk/learn/beginner/lowercasing-and-normalization/ | Tutorial | Unicode normalize("NFKC") with NLTK examples |
| 6 | spaCy — Linguistic Features documentation | https://spacy.io/usage/linguistic-features | Docs | Official docs on tokenization, normalization in production NLP |
| 7 | Cleaning / Normalizing Text — The Neural Base | https://theneuralbase.com/text-preprocessing/learn/beginner/cleaning-normalizing-text/ | Tutorial | Multi-script handling, NFKD for accented characters |
| 8 | Python unicodedata module documentation | https://docs.python.org/3/library/unicodedata.html | Docs | Official Python docs for Unicode normalization functions |

## CNLP-TOK-002 — Stemming and Lemmatization [P1]
Subtopics: Porter/Snowball; lemmatization vs stemming; morphological analysis

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Words and Tokens | https://web.stanford.edu/~jurafsky/slp3/2.pdf | Slides | Textbook: Porter stemmer, morphological analysis, lemmatization |
| 2 | Lemmatization vs. Stemming: A Deep Dive — GeeksforGeeks | https://www.geeksforgeeks.org/nlp/lemmatization-vs-stemming-a-deep-dive-into-nlps-text-normalization-techniques/ | Tutorial | Detailed comparison with code examples for both approaches |
| 3 | Stemming in NLP — PorterStemmer, Snowball, Lancaster — Krishnaik.in | https://www.krishnaik.in/ai-tutorials/nlp/stemming | Tutorial | NLTK examples comparing Porter, Snowball, Lancaster stemmers |
| 4 | Stemming: Porter Vs. Snowball Vs. Lancaster — Towards AI | https://towardsai.net/p/l/stemming-porter-vs-snowball-vs-lancaster | Blog | Head-to-head comparison: Porter gives "fairli", Snowball gives "fair" |
| 5 | A Detailed Study on Stemming vs Lemmatization — Turing | https://www.turing.com/kb/stemming-vs-lemmatization-in-python | Blog | Speed vs accuracy trade-off with Python code |
| 6 | NLTK — PorterStemmer and WordNetLemmatizer | https://www.nltk.org/howto/stem.html | Docs | Official NLTK docs with Porter, Snowball, Lancaster stemmers |
| 7 | spaCy — Lemmatization documentation | https://spacy.io/usage/linguistic-features#lemmatization | Docs | Production lemmatization with spaCy pipelines |
| 8 | Stemming vs Lemmatization: NLP Comparison — APXML | https://apxml.com/courses/nlp-fundamentals/chapter-1-nlp-text-processing-techniques/stemming-vs-lemmatization | Tutorial | Rule-based stemming vs POS-aware lemmatization, trade-offs |

## CNLP-TOK-003 — Rule-Based and Statistical Tokenization [P2]
Subtopics: regex tokenizers; multi-word expressions

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Words and Tokens | https://web.stanford.edu/~jurafsky/slp3/2.pdf | Slides | Textbook: regex-based tokenization, word segmentation, MWE handling |
| 2 | spaCy — Tokenization documentation | https://spacy.io/usage/linguistic-features#tokenization | Docs | Rule-based tokenization with exception rules and custom patterns |
| 3 | NLTK Tokenize documentation | https://www.nltk.org/api/nltk.tokenize.html | Docs | RegexpTokenizer, word_tokenize, sentence tokenization APIs |
| 4 | HuggingFace — Summary of the tokenizers | https://huggingface.co/docs/transformers/en/tokenizer_summary | Docs | Overview of tokenization approaches from rule-based to subword |
| 5 | Stanford CoreNLP — TokenizerAnnotator | https://stanfordnlp.github.io/CoreNLP/tokenize.html | Docs | Rule-based tokenization in Stanford CoreNLP |
| 6 | Multi-Word Expressions in NLP — ACL Wiki | https://aclweb.org/aclwiki/Multiword_Expressions | Docs | Community resource on MWE identification and handling |
| 7 | Python re module documentation | https://docs.python.org/3/library/re.html | Docs | Official regex documentation for building custom tokenizers |

## CNLP-TOK-004 — Edit Distance and String Similarity [P1]
Subtopics: Levenshtein DP; Damerau-Levenshtein; applications

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Edit Distance Problem — Hello Algo (Ch. 14.6) | https://www.hello-algo.com/en/chapter_dynamic_programming/edit_distance_problem/ | Tutorial | Textbook-style DP tutorial with implementation and matrix visualization |
| 2 | Measuring Text Similarity Using the Levenshtein Distance — Paperspace | https://blog.paperspace.com/measuring-text-similarity-using-levenshtein-distance/ | Blog | Step-by-step DP matrix illustration, Python walkthrough |
| 3 | Jurafsky & Martin SLP3 — Minimum Edit Distance | https://web.stanford.edu/~jurafsky/slp3/2.pdf | Slides | Textbook treatment of edit distance with alignment and applications |
| 4 | Jurafsky & Martin SLP3 — Minimum Edit Distance slides | https://web.stanford.edu/~jurafsky/slp3/slides/2_EditDistance.pdf | Slides | Lecture slides with step-by-step DP table fill |
| 5 | Levenshtein Distance: A Comprehensive Guide — DigitalOcean | https://www.digitalocean.com/community/tutorials/levenshtein-distance-python | Tutorial | Python step-by-step DP matrix ("book" to "back" example), spell checking |
| 6 | Edit Distance (Levenshtein Distance) Problem — EnjoyAlgorithms | https://www.enjoyalgorithms.com/blog/edit-distance/ | Blog | "intention"→"execution" example, memoized top-down approach |
| 7 | Edit Distance — Wikipedia | https://en.wikipedia.org/wiki/Edit_distance | Blog | Reference with Levenshtein, Damerau-Levenshtein, and other variants |
| 8 | Levenshtein Distance — Wikipedia | https://en.wikipedia.org/wiki/Levenshtein_distance | Blog | Detailed article with pseudocode, Wagner-Fischer algorithm, applications |
