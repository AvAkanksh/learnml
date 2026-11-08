# Category N — Support Vector Machines

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-SVM-002 — Soft-Margin SVM and Hinge Loss  [P1]
Subtopics: C trade-off; hinge loss; SVM vs logistic regression

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | 1.4. Support Vector Machines — scikit-learn | https://scikit-learn.org/stable/modules/svm.html | Docs | SVC with C parameter trade-off, hinge loss, and comparison with logistic regression |
| 2 | Support Vector Machine — Explained (Soft Margin / Kernel Tricks) — Medium | https://medium.com/bite-sized-machine-learning/support-vector-machine-explained-soft-margin-kernel-tricks-3728dfb92cee | Blog | Visual "street" analogy for margin with soft-margin penalty C and hinge loss explanation |
| 3 | CS229 Lecture Notes — Support Vector Machines | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford; hinge loss formulation, C as regularization trade-off, connection to logistic regression |
| 4 | StatQuest: SVM — Josh Starmer (YouTube) | https://www.youtube.com/watch?v=efR1C6CvhmE | Video | Visual explanation of soft margin, C parameter effect, and hinge loss vs log loss |
| 5 | SVM vs Logistic Regression — Machine Learning Mastery | https://machinelearningmastery.com/support-vector-machines-for-machine-learning/ | Blog | Practical comparison of SVM hinge loss vs logistic regression log loss |
| 6 | d2l.ai — SVM and Hinge Loss | https://d2l.ai/chapter_linear-classification/softmax-regression.html | Tutorial | Connection between SVM hinge loss and other classification losses |

## CML-SVM-003 — Kernel Methods and the Kernel Trick  [P1]
Subtopics: RBF/polynomial kernels; Mercer's condition; kernel choice

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Kernel Trick Explained — DataCamp | https://www.datacamp.com/tutorial/kernel-trick | Tutorial | Clear walkthrough: SVM dual uses dot products, kernel replaces them, RBF/polynomial examples |
| 2 | 1.4. SVM §1.4.6 Kernel Functions — scikit-learn | https://scikit-learn.org/stable/modules/svm.html#kernel-functions | Docs | RBF, polynomial, sigmoid kernels with custom kernel support and Mercer's theorem reference |
| 3 | CS229 Lecture Notes — Kernels | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford; kernel trick derivation, Mercer's condition, kernel construction rules |
| 4 | SVMs and the Kernel Trick: A Comprehensive Guide — Medium | https://medium.com/@dswithgk/support-vector-machines-svm-the-kernel-trick-a-comprehensive-guide-part-i-6a6b16d346ca | Blog | Formula-based walkthrough covering weight vector, Gram matrix, and kernel choice |
| 5 | Support Vector Machines and Kernels for Computational Biology — NCBI | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2547983/ | Tutorial | Academic tutorial with figures showing maximum margin and kernel width effects |
| 6 | Kernel Methods — Machine Learning Mastery | https://machinelearningmastery.com/introduction-to-support-vector-machines/ | Blog | Practical guide to kernel choice (RBF for general, polynomial for structured data) |

## CML-SVM-001 — Maximum Margin Classifiers  [P1]
Subtopics: margin geometry; support vectors; hard margin

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS229 Lecture Notes — Margin and Support Vectors | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford; geometric margin derivation, functional vs geometric margin, support vector identification |
| 2 | StatQuest: SVM Main Ideas (YouTube) | https://www.youtube.com/watch?v=efR1C6CvhmE | Video | Visual explanation of maximum margin hyperplane, support vectors, and margin geometry |
| 3 | 1.4. Support Vector Machines — scikit-learn | https://scikit-learn.org/stable/modules/svm.html | Docs | SVC implementation with support_vectors_ attribute and margin visualization examples |
| 4 | SVM Tutorial — MIT OpenCourseWare 6.034 | https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/resources/lecture-16-learning-support-vector-machines/ | Tutorial | MIT lecture on margin geometry and support vector identification |
| 5 | Support Vector Machine — Wikipedia | https://en.wikipedia.org/wiki/Support_vector_machine | Docs | Formal treatment of maximum margin classification with geometric derivation |

## CML-SVM-004 — SVM Optimization  [P3]
Subtopics: dual formulation; SMO

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS229 Lecture Notes — SVM Dual and SMO | https://cs229.stanford.edu/main_notes.pdf | Slides | Stanford; Lagrangian dual derivation, KKT conditions, and SMO algorithm overview |
| 2 | Sequential Minimal Optimization — Wikipedia | https://en.wikipedia.org/wiki/Sequential_minimal_optimization | Docs | SMO algorithm description with analytical two-variable sub-problem solution |
| 3 | SVM Dual Formulation — Cornell CS 4/5780 | https://www.cs.cornell.edu/courses/cs4780/2018fa/lectures/lecturenote09.html | Tutorial | Cornell ML course notes deriving dual SVM formulation step by step |
| 4 | libsvm — A Library for Support Vector Machines | https://www.csie.ntu.edu.tw/~cjlin/libsvm/ | Docs | Chih-Jen Lin's canonical SVM library implementing SMO variants with practical guide |
| 5 | Understanding SVM Optimization — Sebastian Raschka | https://sebastianraschka.com/faq/docs/svm-optimization.html | Blog | FAQ explaining dual formulation and why SMO is preferred over general QP solvers |
