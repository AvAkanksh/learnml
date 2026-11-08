# Category E — Classical Language Modeling — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-LM-001 — N-gram Language Models [P1]
Subtopics: Markov assumption; MLE counts; sparsity

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — N-gram Language Models | https://web.stanford.edu/~jurafsky/slp3/3.pdf | Slides | Definitive textbook chapter: Markov assumption, MLE, sparsity, smoothing |
| 2 | d2l.ai — Language Models | https://d2l.ai/chapter_recurrent-neural-networks/language-model.html | Tutorial | N-gram models with Markov assumption, Laplace smoothing, code examples |
| 3 | Lena Voita — Language Modeling | https://lena-voita.github.io/nlp_course/language_modeling.html | Tutorial | Clean illustrated treatment of n-gram models and their limitations |
| 4 | N-grams and Language Models — Uni Düsseldorf slides | https://user.phil-fak.uni-duesseldorf.de/~kallmeyer/MachineLearning/n-grams-language-models.pdf | Slides | University lecture: Markov assumption, MLE counts, sparsity problem |
| 5 | NLP Smoothing Tutorial — Bill MacCartney (Stanford) | https://nlp.stanford.edu/~wcmac/papers/20050421-smoothing-tutorial.pdf | Slides | Classic slides on n-gram sparsity problems and smoothing solutions |
| 6 | N-gram Language Model with Laplace and Kneser-Ney Smoothing — Metricgate | https://metricgate.com/docs/ngram-language-model/ | Blog | Overview of n-gram pipeline with Laplace and Kneser-Ney code |
| 7 | Kneser–Ney smoothing — Wikipedia | https://en.wikipedia.org/wiki/Kneser%E2%80%93Ney_smoothing | Blog | Clear formula with "San Francisco" example for continuation probability |
| 8 | d2l.ai — Working with Sequences | https://d2l.ai/chapter_recurrent-neural-networks/sequence.html | Tutorial | Autoregressive models and Markov chain formulation |

## CNLP-LM-002 — Smoothing Techniques [P2]
Subtopics: Laplace; backoff / interpolation; Kneser-Ney

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | NLP Smoothing Tutorial — Bill MacCartney (Stanford, 2005) | https://nlp.stanford.edu/~wcmac/papers/20050421-smoothing-tutorial.pdf | Slides | Classic slides: Kneser-Ney intuition, modified KN as best performer |
| 2 | Jurafsky & Martin SLP3 — N-gram Language Models (smoothing) | https://web.stanford.edu/~jurafsky/slp3/3.pdf | Slides | Laplace, add-k, backoff, interpolation, Kneser-Ney all in one chapter |
| 3 | An Empirical Study of Smoothing Techniques — Chen & Goodman | https://dash.harvard.edu/bitstream/handle/1/25104739/tr-10-98.pdf | Slides | Seminal empirical comparison; Modified Kneser-Ney is best — Harvard hosted PDF |
| 4 | Kneser–Ney smoothing — Wikipedia | https://en.wikipedia.org/wiki/Kneser%E2%80%93Ney_smoothing | Blog | Bigram formula with discount and continuation probability explanation |
| 5 | Smoothing N-gram Language Models — Mississippi State lecture | https://isip.piconepress.com/courses/msstate/ece_8463/lectures/current/lecture_33/lecture_33.pdf | Slides | University lecture: discounting with backoff model, step-by-step bigram example |
| 6 | Lena Voita — Language Modeling (smoothing section) | https://lena-voita.github.io/nlp_course/language_modeling.html | Tutorial | Illustrated treatment of smoothing in context of language models |
| 7 | d2l.ai — Language Models (smoothing discussion) | https://d2l.ai/chapter_recurrent-neural-networks/language-model.html | Tutorial | Laplace smoothing context in language model chapter |
| 8 | Language Models — Koehn's SMT book slides | https://www2.statmt.org/book/slides/07-language-models.pdf | Slides | N-gram smoothing in the context of statistical MT |

## CNLP-LM-003 — Perplexity and LM Evaluation [P0]
Subtopics: definition and link to cross-entropy; interpreting values; comparing across tokenizers

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — N-gram Language Models (perplexity) | https://web.stanford.edu/~jurafsky/slp3/3.pdf | Slides | Textbook definition: perplexity as exponential of cross-entropy |
| 2 | Perplexity: Language Model Evaluation Explained — Metricgate | https://metricgate.com/blogs/perplexity-language-model-evaluation/ | Blog | Score of 32 = choosing among 32 equally likely words; R code example |
| 3 | HuggingFace — Perplexity of fixed-length models | https://huggingface.co/docs/transformers/en/perplexity | Docs | Official HF docs on computing perplexity with strided windows |
| 4 | Perplexity: How Language Models Are Scored — Ultralytics | https://www.ultralytics.com/glossary/perplexity | Blog | Formula with worked example; PyTorch perplexity = exp(loss) |
| 5 | Lena Voita — Language Modeling (perplexity section) | https://lena-voita.github.io/nlp_course/language_modeling.html | Tutorial | Illustrated treatment connecting perplexity to cross-entropy |
| 6 | Writing an LLM from scratch part 21 — Perplexed by Perplexity | https://www.gilesthomas.com/2025/10/llm-from-scratch-21-perplexed-by-perplexity | Blog | Derives perplexity from cross-entropy with worked numeric examples |
| 7 | The Relationship Between Perplexity And Entropy In NLP — TopBots | https://www.topbots.com/perplexity-and-entropy-in-nlp/ | Blog | Information-theory background: cross-entropy and model perplexity |
| 8 | Perplexity for LLM Evaluation — GeeksforGeeks | https://www.geeksforgeeks.org/nlp/perplexity-for-llm-evaluation/ | Tutorial | Lower = better, Python walkthrough for causal models |
