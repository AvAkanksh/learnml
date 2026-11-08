# Category K — Syntax, Semantics and Discourse — Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CNLP-SYN-001 — Constituency Parsing [P3]
Subtopics: CFGs; CYK; PCFGs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Constituency Grammars | https://web.stanford.edu/~jurafsky/slp3/12.pdf | Slides | CFGs, CYK algorithm, PCFGs with full derivations |
| 2 | Parsing I: CFGs and the CYK Algorithm — RBC Borealis | https://rbcborealis.com/research-blogs/tutorial-15-parsing-i-context-free-grammars-and-cyk-algorithm/ | Blog | Chart-construction figures and worked CYK example |
| 3 | Parsing III: PCFGs and the Inside-Outside Algorithm — RBC Borealis | https://rbcborealis.com/research-blogs/tutorial-19-parsing-iii-pcfgs-and-inside-outside-algorithm/ | Blog | PCFGs, inside algorithm, highest-weight tree retrieval with NLTK code |
| 4 | The CKY Parsing Algorithm and PCFGs — McGill COMP-550 | https://www.cs.mcgill.ca/~jcheung/teaching/fall-2017/comp550/lectures/lecture12.pdf | Slides | Four CYK steps: convert to CNF, set up table, fill, read off parses |
| 5 | CKY algorithm / PCFGs — UMass CS585 | https://people.cs.umass.edu/~miyyer/cs585/lectures/17-parsing.pdf | Slides | University lecture on CYK and probabilistic parsing |
| 6 | CYK Parsing — Edinburgh IADS Lecture 22 | https://opencourse.inf.ed.ac.uk/sites/default/files/2024-02/IADS_22_cyk_parsing.pdf | Slides | Step-by-step CYK chart fill with "my very heavy orange book" example |
| 7 | Statistical Constituent-based Parsing — Ben-Gurion NLP | https://www.cs.bgu.ac.il/~elhadad/nlp16/nlp03-statistical.html | Tutorial | Probabilistic CYK: matrix of probabilities instead of booleans |
| 8 | NLTK Parsing Tutorial | https://www.nltk.org/book/ch08.html | Tutorial | Practical CFG/PCFG parsing with Python |
| 9 | CYK Algorithm — Wikipedia | https://en.wikipedia.org/wiki/CYK_algorithm | Blog | DP parsing algorithm with worked example and pseudocode |

## CNLP-SYN-002 — Dependency Parsing [P2]
Subtopics: transition-based vs graph-based parsing

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Dependency Parsing | https://web.stanford.edu/~jurafsky/slp3/old_oct19/15.pdf | Slides | Both families: transition-based trace, beam search, directed graph figures |
| 2 | Dependency Parsing II — UMD CMSC 470 slides | https://www.cs.umd.edu/class/fall2019/cmsc470/slides/slides_24.pdf | Slides | Chu-Liu-Edmonds step-by-step, arc-standard and arc-eager comparison table |
| 3 | Graph-Based and Transition-Based Parsing — Nivre (Uppsala/Prague) | https://ufal.mff.cuni.cz/~bejcek/parseme/prague/Nivre2.pdf | Slides | Slide deck with example transition sequences and graph-based comparison |
| 4 | Graph-Based Dependency Parsing — Vivek Srikumar slides | https://svivek.com/teaching/machine-learning/lectures/slides/dependency-parsing/3-graph-based-parsing.pdf | Slides | MST parsing and graph-based approach explained |
| 5 | Universal Dependencies | https://universaldependencies.org/ | Docs | The standard dependency annotation framework |
| 6 | spaCy Dependency Parsing docs | https://spacy.io/usage/linguistic-features#dependency-parse | Docs | Production dependency parser with visualization |
| 7 | Stanford Dependencies Manual | https://nlp.stanford.edu/software/dependencies_manual.pdf | Docs | Stanford typed dependency manual and relation definitions |
| 8 | Dependency Parsing — Wikipedia | https://en.wikipedia.org/wiki/Dependency_grammar | Blog | Overview of transition-based and graph-based approaches |

## CNLP-SYN-003 — Syntactic Ambiguity Resolution [P3]
Subtopics: chart parsing; probabilistic disambiguation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Constituency Grammars | https://web.stanford.edu/~jurafsky/slp3/12.pdf | Slides | Chart parsing (Earley, CYK) and probabilistic disambiguation |
| 2 | Statistical Constituent-based Parsing — Ben-Gurion NLP | https://www.cs.bgu.ac.il/~elhadad/nlp16/nlp03-statistical.html | Tutorial | Weighted memoization matrix for probabilistic disambiguation |
| 3 | Parsing with the CYK Algorithm — McGill slides | https://www.cs.mcgill.ca/~jcheung/teaching/fall-2016/comp599/lectures/lecture11.pdf | Slides | CYK for ambiguous grammars with disambiguation |
| 4 | Earley Parser — Wikipedia | https://en.wikipedia.org/wiki/Earley_parser | Blog | Chart parsing algorithm for ambiguous grammars |
| 5 | NLTK Parsing with Ambiguity | https://www.nltk.org/book/ch08.html | Tutorial | Demonstrations of syntactic ambiguity in parsing |
| 6 | Chart Parser — Wikipedia | https://en.wikipedia.org/wiki/Chart_parser | Blog | General chart parsing framework description |
| 7 | Statistical Parsing — Wikipedia | https://en.wikipedia.org/wiki/Statistical_parsing | Blog | Overview of probabilistic approaches to disambiguation |

## CNLP-SEM-001 — Lexical Semantics [P3]
Subtopics: WordNet; word-sense disambiguation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | WordNet — Princeton | https://wordnet.princeton.edu/ | Docs | The canonical lexical database; synsets, hypernymy, relations |
| 2 | Word Sense Disambiguation — Stanford SLP3 slides | https://web.stanford.edu/~jurafsky/slp3/slides/Chapter18.wsd.pdf | Slides | Supervised WSD, most-frequent-sense baseline, gloss-overlap approach |
| 3 | NLTK WordNet Interface | https://www.nltk.org/howto/wordnet.html | Docs | Practical Python access to WordNet synsets and relations |
| 4 | Word-sense disambiguation — Wikipedia | https://en.wikipedia.org/wiki/Word-sense_disambiguation | Blog | Overview of Lesk algorithm and supervised/unsupervised approaches |
| 5 | NLP-progress — Word Sense Disambiguation | http://nlpprogress.com/english/word_sense_disambiguation.html | Docs | Task description with "mouse" example, WordNet 3.0 baselines |
| 6 | WordNet — Wikipedia | https://en.wikipedia.org/wiki/WordNet | Blog | Structure, relations, and applications |
| 7 | BabelNet | https://babelnet.org/ | Docs | Multilingual semantic network built on WordNet + Wikipedia |

## CNLP-SEM-002 — Coreference Resolution [P2]
Subtopics: mention detection; rule-based and statistical approaches

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Jurafsky & Martin SLP3 — Coreference Resolution | https://web.stanford.edu/~jurafsky/slp3/old_dec21/21.pdf | Slides | Mention detection, rule-based sieves, mention-pair/rank/end-to-end architectures |
| 2 | What is Coreference Resolution? — Thinkstack | https://www.thinkstack.ai/glossary/coreference-resolution/ | Blog | Mention detection as first step, coreference chains/clusters explained |
| 3 | Coreference Resolution with BERT-based Models — John Snow Labs | https://www.johnsnowlabs.com/coreference-resolution-with-bert-based-models/ | Tutorial | Hands-on Spark NLP guide with SpanBERT coreference pipeline |
| 4 | Stanford CoreNLP Coreference docs | https://stanfordnlp.github.io/CoreNLP/coref.html | Docs | Production coreference resolution system documentation |
| 5 | Coreference — Wikipedia | https://en.wikipedia.org/wiki/Coreference | Blog | Overview of mention detection and resolution approaches |
| 6 | spaCy Coreference (coreferee) | https://spacy.io/universe/project/coreferee | Docs | Practical coreference resolution in spaCy ecosystem |
| 7 | CoNLL-2012 Shared Task on Coreference | https://conll.cemantix.org/2012/introduction.html | Docs | Benchmark task and evaluation metrics for coreference |
| 8 | Hobbs Algorithm — Wikipedia | https://en.wikipedia.org/wiki/Hobbs%27_algorithm | Blog | Classic rule-based pronoun resolution algorithm |

## CNLP-SEM-003 — Semantic Role Labeling [P3]
Subtopics: predicate-argument structure

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Automatic Semantic Role Labeling — Stanford HLT-NAACL tutorial | https://nlp.stanford.edu/kristina/papers/SRL-Tutorial-post-HLT-NAACL-06.pdf | Slides | Comprehensive SRL tutorial: FrameNet, PropBank, features, systems |
| 2 | Semantic Roles & SRL — UW Ling571 slides | http://courses.washington.edu/ling571/ling571_WIN2016/slides/ling571_class12_sem_srl_flat.pdf | Slides | University lecture on semantic roles and labeling approaches |
| 3 | Semantic Role Labeling — Texas A&M slides | https://people.engr.tamu.edu/huangrh/Fall18-638/l15_srl.pdf | Slides | Adapted from Jurafsky: predicate-argument structure, PropBank roles |
| 4 | Semantic Role Labeling — UMD CS585 slides | https://www.cs.umd.edu/~miyyer/cs585_2018/lectures/18-srl.pdf | Slides | Numbered arguments Arg0-ArgN, frame files, FrameNet vs PropBank |
| 5 | PropBank | https://propbank.github.io/ | Docs | Proposition Bank annotation framework: Arg0 proto-agent, Arg1 proto-patient |
| 6 | FrameNet | https://framenet.icsi.berkeley.edu/ | Docs | Frame semantics resource; frames, frame elements, lexical units |
| 7 | AllenNLP SRL Demo | https://demo.allennlp.org/semantic-role-labeling | Interactive | Interactive SRL demo with BERT-based model |
| 8 | Semantic Role Labeling — Wikipedia | https://en.wikipedia.org/wiki/Semantic_role_labeling | Blog | Overview of SRL approaches and resources |
