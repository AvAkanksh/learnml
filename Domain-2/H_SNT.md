# Category H — Text Classification and Sentiment — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-SNT-001 — Lexicon-Based Sentiment Analysis [P2]
Subtopics: polarity lexicons; rule-based scoring

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | VADER Sentiment Analysis — GitHub (cjhutto) | https://github.com/cjhutto/vaderSentiment | Docs | Official VADER repo: lexicon with valence scores -4 to +4, compound score |
| 2 | Introduction to Sentiment Analysis in Python — JetBrains Blog | https://blog.jetbrains.com/pycharm/2024/12/introduction-to-sentiment-analysis-in-python/ | Blog | VADER walkthrough with SentimentIntensityAnalyzer and polarity_scores() |
| 3 | Sentiment Analysis using VADER — GeeksforGeeks | https://www.geeksforgeeks.org/python/python-sentiment-analysis-using-vader/ | Tutorial | Python NLTK VADER implementation with classification function |
| 4 | What is the VADER model in sentiment analysis? — Educative | https://www.educative.io/answers/what-is-the-vader-model-in-sentiment-analysis | Blog | Rules for negation, punctuation, capitalization, intensifiers explained |
| 5 | NLTK VADER Sentiment Analysis | https://www.nltk.org/howto/sentiment.html | Docs | Practical VADER implementation in NLTK |
| 6 | TextBlob Sentiment Analysis | https://textblob.readthedocs.io/en/dev/quickstart.html#sentiment-analysis | Docs | Simple polarity/subjectivity scoring library |
| 7 | AFINN Lexicon — GitHub | https://github.com/fnielsen/afinn | Docs | Simple word-level sentiment scoring; Finn Nielsen's lexicon |
| 8 | Bing Liu Opinion Lexicon | https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html | Docs | Positive/negative word lists widely used in research |

## CNLP-SNT-002 — Classical Text Classification [P1]
Subtopics: bag-of-words + NB/LR/SVM; n-gram features; strong baselines

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Language Models for Text Classification — Sebastian Raschka | https://magazine.sebastianraschka.com/p/classifier-history-and-jev | Blog | BoW enabling NB/LR/SVM for text; historical perspective from 1961 to modern |
| 2 | scikit-learn Text Classification Tutorial | https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html | Tutorial | End-to-end BoW → TF-IDF → NB/SVM pipeline |
| 3 | Naive Bayes and Sentiment Classification — Jurafsky & Martin SLP3 | https://web.stanford.edu/~jurafsky/slp3/4.pdf | Slides | Multinomial NB for text classification with add-1 smoothing |
| 4 | Text Classification and Naïve Bayes — Stanford CS124 slides | https://web.stanford.edu/class/cs124/lec/naivebayes2024.pdf | Slides | BoW assumption, conditional independence, NB as dependable baseline |
| 5 | HuggingFace Text Classification Tutorial | https://huggingface.co/docs/transformers/en/tasks/sequence_classification | Docs | Modern text classification showing classical baselines comparison |
| 6 | Text Classification and Naïve Bayes — Stanford SLP3 slides | https://web.stanford.edu/~jurafsky/slp3/slides/7_NB.pdf | Slides | Lecture slides on bag-of-words and naive Bayes for text |
| 7 | Text Classification — CUHK lecture notes | https://www1.se.cuhk.edu.hk/~seem5680/lecture/textcat-nbayes-2022spring.pdf | Slides | Multinomial NB with feature selection, SVM comparison |
| 8 | Text Classification with BoW and Naive Bayes — StatQuest (YouTube) | https://www.youtube.com/watch?v=AwpIKZ5r0vU | Video | Visual video explanation of bag-of-words text classification |
