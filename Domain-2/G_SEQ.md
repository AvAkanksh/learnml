# Category G — Sequence Labeling — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-SEQ-001 — Hidden Markov Models [P1]
Subtopics: Viterbi (DP); forward algorithm; Baum-Welch

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Hidden Markov Models appendix | https://web.stanford.edu/~jurafsky/slp3/A.pdf | Slides | Full textbook treatment: Viterbi, forward algorithm, Baum-Welch |
| 2 | Introduction to Hidden Markov Models — Harvard (Degirmenci) | https://scholar.harvard.edu/files/adegirmenci/files/hmm_adegirmenci_2014.pdf | Slides | Trellis diagrams, sum-product for forward, max-product for Viterbi |
| 3 | Viterbi Algorithm for HMMs — GeeksforGeeks | https://www.geeksforgeeks.org/artificial-intelligence/viterbi-algorithm-for-hidden-markov-models-hmms/ | Tutorial | Step-by-step: initialization, recursion, backtracking with implementation |
| 4 | An Introduction to POS Tagging and the HMM — freeCodeCamp | https://www.freecodecamp.org/news/an-introduction-to-part-of-speech-tagging-and-the-hidden-markov-model-953d45338f24/ | Blog | HMM for POS tagging with Viterbi walkthrough |
| 5 | Lena Voita — Sequence Labeling | https://lena-voita.github.io/nlp_course/sequence_labeling.html | Tutorial | Illustrated HMMs in context of sequence labeling for NLP |
| 6 | HMM Forward, Backward, Viterbi — Aarhus University slides | https://birc.au.dk/~cstorm/courses/ML_e19/slides/ml-3-hmm-implementations.pdf | Slides | Implementation slides including log-space Viterbi and scaled forward values |
| 7 | Hidden Markov Models — Stanford CS262 slides | https://web.stanford.edu/class/cs262/presentations/lecture7.pdf | Slides | University lecture with trellis diagrams and algorithm pseudocode |
| 8 | Viterbi algorithm — Wikipedia | https://en.wikipedia.org/wiki/Viterbi_algorithm | Blog | Reference with pseudocode and links to Rabiner's classic HMM tutorial |
| 9 | HMMTeacher — NCBI/PMC | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8830650/ | Tutorial | Compact non-programming tutorial: Forward and Viterbi with worked examples |

## CNLP-SEQ-002 — Conditional Random Fields [P1]
Subtopics: linear-chain CRF; discriminative vs HMM; CRF layer on BiLSTM

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | An Introduction to CRFs for Relational Learning — McCallum & Sutton | https://people.cs.umass.edu/~mccallum/papers/crf-tutorial.pdf | Slides | Most thorough tutorial: linear-chain CRFs, training, inference, Markov assumption |
| 2 | Lena Voita — Sequence Labeling (CRF section) | https://lena-voita.github.io/nlp_course/sequence_labeling.html | Tutorial | Illustrated treatment of CRFs vs HMMs for sequence labeling |
| 3 | CRF Layer on the Top of BiLSTM — createmomo blog | https://createmomo.github.io/2017/09/12/CRF_Layer_on_the_Top_of_BiLSTM_1/ | Blog | Best illustrated: diagrams of BiLSTM scores and CRF path selection |
| 4 | BiLSTM-CNN-CRF for Sequence Labeling — TheAnig | https://www.theanig.dev/blog/ner-lstm-cnn-icml | Tutorial | PyTorch: character CNN + BiLSTM + CRF on CoNLL 2003 |
| 5 | Conditional Random Fields Explained — Metricgate | https://metricgate.com/docs/crf-conditional-random-field/ | Blog | BIO/BIOES tagging, feature engineering, Viterbi decoding pipeline |
| 6 | BiLSTM + CRF — airoads.org | https://airoads.org/ch11-nlp/ch04-sequence-labeling/02-bilstm-crf/ | Tutorial | Flowcharts: embedding → BiLSTM → CRF; emission and transition scores |
| 7 | Tutorial on CRFs for Sequence Prediction — Quattoni slides | https://www.cs.upc.edu/~aquattoni/AllMyPapers/crf_tutorial_talk.pdf | Slides | Academic slides: feature functions, dynamic programming for inference |
| 8 | Jurafsky & Martin SLP3 — Sequence Labeling chapter | https://web.stanford.edu/~jurafsky/slp3/8.pdf | Slides | Textbook chapter on CRFs, HMMs, and sequence labeling |

## CNLP-SEQ-003 — Part-of-Speech Tagging [P2]
Subtopics: tagsets; HMM/CRF taggers

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | POS tagging — Penn Treebank tags and nltk.pos_tag — Krishnaik.in | https://www.krishnaik.in/ai-tutorials/nlp/parts-of-speech-tagging | Tutorial | Penn Treebank tagset with NLTK pos_tag() examples and full tag table |
| 2 | Part-of-Speech Tagging: Tag Sets, Algorithms — Interactive | https://mbrenndoerfer.com/writing/part-of-speech-tagging-nlp-guide | Blog | Penn Treebank and Universal tagsets, HMM/CRF/neural taggers comparison |
| 3 | Jurafsky & Martin SLP3 — Sequence Labeling (POS section) | https://web.stanford.edu/~jurafsky/slp3/8.pdf | Slides | Textbook: POS tagging with HMM, CRF, and neural approaches |
| 4 | An Introduction to POS Tagging and the HMM — freeCodeCamp | https://www.freecodecamp.org/news/an-introduction-to-part-of-speech-tagging-and-the-hidden-markov-model-953d45338f24/ | Blog | HMM-based POS tagging walkthrough |
| 5 | Part-of-Speech Tagging — Stony Brook slides | https://www3.cs.stonybrook.edu/~ychoi/cse628/lecture/05-pos.pdf | Slides | Penn Treebank as the most common tagset in NLP |
| 6 | Sequence Prediction and POS Tagging — Cornell CS5740 slides | https://www.cs.cornell.edu/courses/cs5740/2017sp/lectures/10-seq.pdf | Slides | University lecture on POS tagging with tagset description |
| 7 | Part-of-Speech (POS) Tagging: 4 Python Tutorials — Spot Intelligence | https://spotintelligence.com/2023/01/24/part-of-speech-pos-tagging-in-nlp-python/ | Tutorial | Four Python approaches: NLTK, spaCy, TextBlob, Flair |
| 8 | spaCy — POS Tagging documentation | https://spacy.io/usage/linguistic-features#pos-tagging | Docs | Production POS tagging with spaCy |

## CNLP-SEQ-004 — Named Entity Recognition [P1]
Subtopics: BIO tagging; BiLSTM-CRF; entity-level F1

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | BIO Tagging for Named Entity Recognition — Interactive | https://mbrenndoerfer.com/writing/bio-tagging-sequence-labeling-ner | Blog | BIO scheme with "Barack Obama" / "New York City" example, span→BIO code |
| 2 | Named Entity Recognition: Types, BIO Tagging & Evaluation | https://mbrenndoerfer.com/writing/named-entity-recognition-ner-tutorial | Blog | Why CRF layer matters: penalizes invalid transitions (I-PER after O) |
| 3 | CRF Layer on Top of BiLSTM — createmomo blog | https://createmomo.github.io/2017/09/12/CRF_Layer_on_the_Top_of_BiLSTM_1/ | Blog | Diagrams showing BiLSTM scores and CRF valid label path selection |
| 4 | BiLSTM-CNN-CRF for Sequence Labeling — TheAnig | https://www.theanig.dev/blog/ner-lstm-cnn-icml | Tutorial | PyTorch: character CNN + BiLSTM + CRF on CoNLL 2003, BIO to BIOES |
| 5 | HuggingFace — Token Classification (NER) | https://huggingface.co/docs/transformers/en/tasks/token_classification | Docs | Modern transformer-based NER with HuggingFace, entity-level F1 |
| 6 | Jurafsky & Martin SLP3 — Information Extraction (NER) | https://web.stanford.edu/~jurafsky/slp3/21.pdf | Slides | Textbook chapter: NER systems, BIO tagging, evaluation |
| 7 | CRF for NER with Spark NLP — John Snow Labs | https://www.johnsnowlabs.com/step-by-step-tutorial-conditional-random-fields-for-named-entity-recognition-in-python/ | Tutorial | Step-by-step NER tutorial with CRF pipeline in Python |
| 8 | spaCy — Named Entity Recognition | https://spacy.io/usage/linguistic-features#named-entities | Docs | Production NER with spaCy, entity types and evaluation |
