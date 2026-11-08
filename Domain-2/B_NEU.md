# Category B — Neural Sequence Models — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-NEU-001 — Recurrent Neural Networks [P0]
Subtopics: BPTT; vanishing/exploding gradients; gradient clipping

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding LSTM Networks — colah's blog | https://colah.github.io/posts/2015-08-Understanding-LSTMs/ | Blog | Canonical illustrated post; covers RNN basics and long-term dependency problem |
| 2 | d2l.ai — Backpropagation Through Time | https://d2l.ai/chapter_recurrent-neural-networks/bptt.html | Tutorial | Dedicated BPTT section with gradient derivation and truncation strategies |
| 3 | Recurrent Neural Networks Tutorial Part 3 — Denny Britz (WildML) | https://dennybritz.com/posts/wildml/recurrent-neural-networks-tutorial-part-3/ | Blog | Classic BPTT derivation with unrolled RNN diagram and NumPy implementation |
| 4 | How to implement an RNN — Peter Roelants | https://peterroelants.github.io/posts/rnn-implementation-part01/ | Blog | Builds minimal RNN, trains with BPTT, plots loss surface showing vanishing gradients |
| 5 | d2l.ai — Recurrent Neural Networks (Ch. 9) | https://d2l.ai/chapter_recurrent-neural-networks/ | Tutorial | Full chapter: sequence models, BPTT section, implementation from scratch |
| 6 | Jurafsky & Martin SLP3 — RNNs and LSTMs | https://web.stanford.edu/~jurafsky/slp3/9.pdf | Slides | Textbook treatment of RNNs, BPTT, vanishing gradients |
| 7 | Stanford CS224n — Language Models and RNNs notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes05-LM_RNN.pdf | Slides | Stanford lecture notes covering RNN architectures and training |
| 8 | BPTT Explained Step-by-Step with a Simple RNN Example | https://www.aryanupadhyay.com/post/backpropagation-through-time-rnn-explained | Blog | Toy three-word dataset, traces gradient paths to each weight matrix |
| 9 | Vanishing Gradient Problem in RNNs — APXML | https://apxml.com/courses/deep-learning-fundamentals-keras/chapter-5-recurrent-neural-networks-rnns/vanishing-gradient-problem | Tutorial | Clear conceptual walkthrough with worked numerical gradient shrinkage example |

## CNLP-NEU-002 — LSTM Networks [P0]
Subtopics: gate equations; why LSTMs mitigate vanishing gradients; cell state; parameter count

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding LSTM Networks — colah's blog | https://colah.github.io/posts/2015-08-Understanding-LSTMs/ | Blog | The definitive illustrated LSTM guide: cell state conveyor, forget/input/output gates |
| 2 | d2l.ai — Long Short-Term Memory (LSTM) | https://d2l.ai/chapter_recurrent-modern/lstm.html | Tutorial | Gate equations, from-scratch and concise PyTorch implementation |
| 3 | LSTM Gate Equations: Math & NumPy Implementation | https://mbrenndoerfer.com/writing/lstm-gate-equations-mathematical-guide-implementation | Blog | Worked example with parameter count analysis and NumPy code |
| 4 | Jurafsky & Martin SLP3 — RNNs and LSTMs | https://web.stanford.edu/~jurafsky/slp3/9.pdf | Slides | Textbook chapter with gate equations and parameter count analysis |
| 5 | Understanding LSTM — IIT Kanpur slides | https://www.cse.iitk.ac.in/users/sigml/lec/Slides/LSTM.pdf | Slides | University lecture slides with mathematical rigor and gate diagrams |
| 6 | Stanford CS224n — Language Models and RNNs notes | https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes05-LM_RNN.pdf | Slides | Stanford lecture notes covering LSTM architecture details |
| 7 | Illustrated RNN, LSTM, GRU Booklet — Northeastern | https://www.khoury.northeastern.edu/home/vip/teach/MLcourse/7_adv_NN/notes/chatGPT_responses/Illustrated_RNN_LSTM_GRU_Booklet.pdf | Slides | Visual tutorial comparing all three architectures with diagrams |
| 8 | d2l.ai — Modern Recurrent Neural Networks (Ch. 10) | https://d2l.ai/chapter_recurrent-modern/index.html | Tutorial | Chapter overview connecting LSTM to GRU and encoder-decoder models |

## CNLP-NEU-003 — GRU Networks [P1]
Subtopics: update/reset gates; GRU vs LSTM

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Gated Recurrent Units (GRU) | https://d2l.ai/chapter_recurrent-modern/gru.html | Tutorial | Full GRU derivation, from-scratch and concise implementation, GRU vs LSTM |
| 2 | Understanding LSTM Networks — colah's blog (GRU section) | https://colah.github.io/posts/2015-08-Understanding-LSTMs/ | Blog | Covers GRU as LSTM variant: merged cell/hidden state, update/reset gates |
| 3 | GRU — update and reset gates, NumPy step — Krishnaik.in | https://www.krishnaik.in/ai-tutorials/nlp/gru | Tutorial | NumPy walkthrough of one GRU step with gate equations |
| 4 | Recurrent Neural Networks: GRU cells VS LSTM — AI Summer | https://theaisummer.com/gru/ | Blog | PyTorch implementation comparing GRU and LSTM architectures |
| 5 | Gated Recurrent Unit Networks — GeeksforGeeks | https://www.geeksforgeeks.org/machine-learning/gated-recurrent-unit-networks/ | Tutorial | Overview with Cho et al. 2014 attribution, 2 vs 3 gates comparison |
| 6 | GRU — CITS4012 Natural Language Processing | https://weiliu2k.github.io/CITS4012/LSTM/gru.html | Tutorial | University notebook with gate linear layers in code |
| 7 | What Is a Gated Recurrent Unit (GRU)? GRU vs LSTM — Telnyx | https://telnyx.com/learn-ai/gated-recurrent-unit | Blog | Clear comparison: 2 gates vs 3, no separate cell state, PyTorch convention note |
| 8 | Jurafsky & Martin SLP3 — RNNs chapter | https://web.stanford.edu/~jurafsky/slp3/9.pdf | Slides | Textbook treatment of GRU architecture |
