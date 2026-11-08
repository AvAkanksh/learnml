# Category D — Early Neural MT and Attention — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-NMT-001 — Encoder-Decoder (seq2seq) [P1]
Subtopics: fixed-vector bottleneck; teacher forcing; beam search

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Visualizing Neural Machine Translation (Seq2Seq with Attention) — Jay Alammar | https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/ | Blog | Canonical illustrated guide: encoder-decoder, bottleneck problem, attention solution |
| 2 | Seq2seq and Attention — Lena Voita's NLP Course | https://lena-voita.github.io/nlp_course/seq2seq_and_attention.html | Tutorial | Illustrated overview: two RNNs (encoder/decoder), bottleneck, attention motivation |
| 3 | d2l.ai — Sequence to Sequence Learning | https://d2l.ai/chapter_recurrent-modern/seq2seq.html | Tutorial | Full seq2seq implementation with teacher forcing and beam search |
| 4 | d2l.ai — Encoder-Decoder Architecture | https://d2l.ai/chapter_recurrent-modern/encoder-decoder.html | Tutorial | Formal treatment of encoder-decoder framework |
| 5 | Introduction to Seq2Seq — Jake Tae | https://jaketae.github.io/study/seq2seq/ | Blog | Best for code: PyTorch LSTM encoder-decoder with teacher-forcing ratio |
| 6 | Jurafsky & Martin SLP3 — Encoder-Decoder Models | https://web.stanford.edu/~jurafsky/slp3/9.pdf | Slides | Textbook treatment including beam search and teacher forcing |
| 7 | Stanford CS224n — NMT and Seq2Seq notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes06-NMT_seq2seq_attention.pdf | Slides | Stanford lecture notes covering seq2seq and attention for NMT |
| 8 | Introduction to Encoder-Decoder Seq2Seq — Paperspace Blog | https://blog.paperspace.com/introduction-to-seq2seq-models/ | Blog | Illustrated guide covering encoder-decoder for machine translation |

## CNLP-NMT-002 — Attention Mechanism Origins [P0]
Subtopics: Bahdanau vs Luong attention; alignment; motivation for the Transformer

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Visualizing Neural Machine Translation (Attention) — Jay Alammar | https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/ | Blog | Canonical illustrated guide to attention in seq2seq with step-by-step diagrams |
| 2 | The Illustrated Transformer — Jay Alammar | https://jalammar.github.io/illustrated-transformer/ | Blog | Bridges attention origins to self-attention in the Transformer |
| 3 | Seq2seq and Attention — Lena Voita's NLP Course | https://lena-voita.github.io/nlp_course/seq2seq_and_attention.html | Tutorial | Covers Bahdanau attention, alignment visualization, motivation for Transformer |
| 4 | d2l.ai — Bahdanau Attention | https://d2l.ai/chapter_attention-mechanisms-and-transformers/bahdanau-attention.html | Tutorial | Mathematical treatment with PyTorch implementation |
| 5 | The Bahdanau Attention Mechanism — Machine Learning Mastery | https://machinelearningmastery.com/the-bahdanau-attention-mechanism/ | Blog | Feed-forward scoring of encoder states, softmax weights, alignment model |
| 6 | The Luong Attention Mechanism — Machine Learning Mastery | https://machinelearningmastery.com/the-luong-attention-mechanism/ | Blog | Dot, general, concat scoring; global vs local attention variants |
| 7 | Attention mechanism — Bahdanau and Luong — Krishnaik.in | https://www.krishnaik.in/ai-tutorials/nlp/attention-mechanism | Tutorial | NumPy snippets comparing additive, dot, and general scoring with illustrations |
| 8 | Stanford CS224n — NMT/Attention lecture notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes06-NMT_seq2seq_attention.pdf | Slides | Stanford lecture notes covering attention mechanisms for NMT |
| 9 | Neural Machine Translation with Luong's Attention — PyImageSearch | https://pyimagesearch.com/2022/08/29/neural-machine-translation-with-luongs-attention-using-tensorflow-and-keras/ | Tutorial | TensorFlow/Keras implementation of Luong attention for NMT |

## CNLP-NMT-003 — Statistical Machine Translation [P3]
Subtopics: phrase-based SMT; IBM alignment models

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Phrase-based Models — Koehn's SMT book slides | https://www2.statmt.org/book/slides/05-phrase-based-models.pdf | Slides | Lecture slides on phrase pair extraction, scoring, distance-based reordering |
| 2 | Word Alignment — Koehn's SMT book slides | https://www2.statmt.org/book/slides/04-word-based-models.pdf | Slides | IBM Models 1-5 alignment models explained with slides |
| 3 | Jurafsky & Martin SLP3 — Machine Translation chapter | https://web.stanford.edu/~jurafsky/slp3/13.pdf | Slides | Textbook chapter covering SMT pipeline and IBM alignment models |
| 4 | Phrase-Based Machine Translation — Stanford CS224n | https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1162/handouts/cs224n-lecture4-PhraseBasedMT.pdf | Slides | Stanford handout: phrase extraction from symmetrized word alignments |
| 5 | Phrase-based Translation — Cornell CS5740 | https://www.cs.cornell.edu/courses/cs5740/2017sp/lectures/09-pbt.pdf | Slides | University lecture on phrase-based translation following Koehn's approach |
| 6 | Language Models — Koehn's SMT book slides | https://www2.statmt.org/book/slides/07-language-models.pdf | Slides | N-gram language model role in SMT decoding |
| 7 | Machine Translation 2 — McGill COMP-599 | https://www.cs.mcgill.ca/~jcheung/teaching/fall-2016/comp599/lectures/lecture22.pdf | Slides | IBM Model 1 alignment: each source word aligns to zero or one target word |
| 8 | d2l.ai — Machine Translation and the Dataset | https://d2l.ai/chapter_recurrent-modern/machine-translation-and-dataset.html | Tutorial | Contextualizes SMT in the evolution toward neural MT |
