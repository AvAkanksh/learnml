# Category D — Neural Network Fundamentals

> Resources: curated blogs, tutorials, and university slides. No papers.

## CML-NN-001 — Backpropagation  [P0]
Subtopics: chain rule on computation graphs; deriving MLP gradients by hand; vanishing/exploding gradients

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS231n — Backpropagation, Intuitions | https://cs231n.github.io/optimization-2/ | Tutorial | Stanford; computation graph walkthrough with chain rule, local gradients, and backward pass examples |
| 2 | Calculus on Computational Graphs: Backpropagation — Chris Olah | https://colah.github.io/posts/2015-08-Backprop/ | Blog | Beautiful illustrated explanation of chain rule on computation graphs with clear diagrams |
| 3 | d2l.ai — Backpropagation | https://d2l.ai/chapter_multilayer-perceptrons/backprop.html | Tutorial | Textbook derivation of MLP gradients by hand with computation graph diagrams and PyTorch code |
| 4 | Backpropagation — ML Glossary | https://ml-cheatsheet.readthedocs.io/en/latest/backpropagation.html | Docs | Concise single-neuron gradient derivation showing chain rule products for each weight |
| 5 | Lecture 6: Backpropagation — University of Toronto CSC321 | https://www.cs.toronto.edu/~rgrosse/courses/csc321_2017/readings/L06%20Backpropagation.pdf | Slides | Roger Grosse's lecture notes with formal chain rule on computation graphs |
| 6 | Yes, You Should Understand Backprop — Andrej Karpathy | https://karpathy.medium.com/yes-you-should-understand-backprop-e023f7d7a6e4 | Blog | Practical pitfalls: vanishing gradients through sigmoids, exploding gradients, dead ReLUs |
| 7 | Neural Networks and Deep Learning Ch.2 — How Backpropagation Works | http://neuralnetworksanddeeplearning.com/chap2.html | Tutorial | Michael Nielsen's free online book with step-by-step derivation and visual explanations |

## CML-NN-003 — Optimizers  [P0]
Subtopics: SGD; momentum; Adam and bias correction; RMSProp; learning-rate schedules and warmup

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | An Overview of Gradient Descent Optimization Algorithms — Sebastian Ruder | https://ruder.io/optimizing-gradient-descent/ | Blog | Definitive blog covering SGD, momentum, NAG, Adagrad, RMSProp, Adam with animations and formulas |
| 2 | d2l.ai — Optimization Algorithms | https://d2l.ai/chapter_optimization/index.html | Tutorial | Comprehensive textbook covering SGD, momentum, Adam, RMSProp, learning-rate scheduling with code |
| 3 | CS231n — Neural Networks Part 3: Learning | https://cs231n.github.io/neural-networks-3/ | Tutorial | Stanford; SGD, momentum, Adam, RMSProp with learning rate annealing strategies |
| 4 | Deep Learning Optimizers: From SGD to AdamW — Let's Data Science | https://letsdatascience.com/blog/deep-learning-optimizers-sgd-to-adamw | Blog | Clear progression from SGD through momentum to Adam/AdamW with bias correction explained |
| 5 | Adam: A Method for Stochastic Optimization (explained) — Machine Learning Mastery | https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/ | Blog | Practical guide to Adam with bias correction derivation and hyperparameter guidance |
| 6 | Choosing Deep Learning Optimizers — apxml | https://apxml.com/courses/deep-learning-regularization-optimization/chapter-6-adaptive-optimizers/choosing-optimizers-guidelines | Tutorial | Decision guide: when to use SGD vs Adam vs AdamW with practical defaults |

## CML-NN-004 — Normalization Layers  [P0]
Subtopics: BatchNorm train vs inference behavior; LayerNorm; why normalization helps optimization; small-batch issues

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Build Better Deep Learning Models with Batch and Layer Normalization — Pinecone | https://www.pinecone.io/learn/batch-layer-normalization/ | Blog | Illustrated step-by-step walkthrough of BatchNorm and LayerNorm with train vs inference behavior |
| 2 | d2l.ai — Batch Normalization | https://d2l.ai/chapter_convolutional-modern/batch-norm.html | Tutorial | Textbook treatment covering BatchNorm mechanics, train/inference modes, and why it helps optimization |
| 3 | Group Normalization — Yuxin Wu & Kaiming He (summary) | https://wandb.ai/wandb_fc/GroupNorm/reports/Group-Normalization-in-Pytorch-With-Examples--VmlldzoxMzU0MzMy | Blog | Weights & Biases report comparing BatchNorm, LayerNorm, InstanceNorm, GroupNorm with diagrams |
| 4 | Batch Norm vs Layer Norm: When to Use Which — Abhik.ai | https://www.abhik.ai/concepts/deep-learning/batch-vs-layer-norm | Blog | Practical rule of thumb: LayerNorm for transformers/RNNs, BatchNorm for CNNs, with small-batch issues |
| 5 | Layer Normalization vs Batch Normalization — Coursera | https://www.coursera.org/articles/layer-normalization-vs-batch-normalization | Blog | Clean comparison with diagrams showing which dimensions each method normalizes over |
| 6 | CS231n — Neural Networks Part 2: Setting Up the Data and the Loss | https://cs231n.github.io/neural-networks-2/ | Tutorial | Stanford; BatchNorm section covering practical usage and why it helps training |

## CML-NN-005 — Loss Functions  [P0]
Subtopics: cross-entropy; MSE; hinge; focal loss; matching loss to output distribution

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Loss Functions | https://d2l.ai/chapter_linear-classification/softmax-regression-concise.html | Tutorial | Cross-entropy loss derivation from MLE, softmax-cross-entropy connection, numerical stability |
| 2 | Loss Functions — ML Glossary | https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html | Docs | Concise reference for cross-entropy, MSE, MAE, hinge loss with formulas and use cases |
| 3 | Cross-Entropy Loss — Google ML Crash Course | https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax | Tutorial | Softmax and cross-entropy for multiclass with worked examples |
| 4 | Focal Loss for Dense Object Detection (explained) — Lei Mao | https://leimao.github.io/blog/Focal-Loss-Explained/ | Blog | Clear derivation of focal loss formula and γ parameter effect on hard example weighting |
| 5 | 5 Regression Loss Functions All Machine Learners Should Know — Machine Learning Mastery | https://machinelearningmastery.com/loss-and-loss-functions-for-training-deep-learning-neural-networks/ | Blog | Practical overview of MSE, MAE, Huber, and when to use each based on output distribution |
| 6 | Hinge Loss — scikit-learn SGDClassifier docs | https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html | Docs | Hinge loss usage in SVM-style linear classifiers with scikit-learn implementation |

## CML-NN-002 — Activation Functions  [P0]
Subtopics: ReLU and dying ReLU; sigmoid/tanh saturation; GELU; Leaky ReLU

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Activation Functions in Neural Networks — Neurohive | https://neurohive.io/en/guides/activation-functions-neural-networks/ | Blog | Comprehensive guide with derivative plots comparing sigmoid, tanh, ReLU, GELU, SiLU side by side |
| 2 | CS231n — Neural Networks Part 1: Activation Functions | https://cs231n.github.io/neural-networks-1/ | Tutorial | Stanford; ReLU, dying ReLU problem, Leaky ReLU, sigmoid/tanh saturation with practical recommendations |
| 3 | d2l.ai — Multilayer Perceptrons (Activation Functions) | https://d2l.ai/chapter_multilayer-perceptrons/mlp.html | Tutorial | Textbook treatment of ReLU, sigmoid, tanh with plots and gradient analysis |
| 4 | Activation Functions — An Alchemist's Notes on Deep Learning | https://notes.kvfrans.com/3-building-blocks/activations.html | Blog | Clean overview of sigmoid/tanh saturation, ReLU family, and GELU/Swish/Mish for transformers |
| 5 | Activation Function: ReLU, SiLU, GELU and More — Ultralytics | https://www.ultralytics.com/glossary/activation-function | Docs | Modern reference covering dying ReLU, GELU as standard in BERT/GPT, SwiGLU for LLMs |
| 6 | Activation Functions Demystified: ReLU, Sigmoid, and Friends | https://satyamcser.medium.com/activation-functions-demystified-relu-sigmoid-and-friends-6a5c9834511c | Blog | Intuitive analogies with sigmoid as dimmer switch, ReLU as on/off, dying ReLU explanation |

## CML-NN-006 — Dropout and Neural-Net Regularization  [P1]
Subtopics: inverted-dropout scaling; dropout as implicit ensemble; weight decay

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Dropout | https://d2l.ai/chapter_multilayer-perceptrons/dropout.html | Tutorial | Inverted dropout scaling, ensemble interpretation, and from-scratch + framework implementation |
| 2 | CS231n — Neural Networks Part 2: Regularization | https://cs231n.github.io/neural-networks-2/#reg | Tutorial | Stanford; dropout, L2 weight decay, max norm constraints with practical guidance |
| 3 | Dropout Regularization — Machine Learning Mastery | https://machinelearningmastery.com/dropout-regularization-deep-learning-models-keras/ | Blog | Practical guide with Keras examples for input/hidden layer dropout and rate selection |
| 4 | d2l.ai — Weight Decay | https://d2l.ai/chapter_linear-classification/weight-decay.html | Tutorial | Weight decay as L2 regularization with geometric interpretation |
| 5 | A Gentle Introduction to Dropout — Machine Learning Mastery | https://machinelearningmastery.com/dropout-for-regularizing-deep-neural-networks/ | Blog | Explains dropout as ensemble of thinned networks and inverted-dropout at test time |

## CML-NN-007 — Weight Initialization  [P1]
Subtopics: Xavier/Glorot; He init; symmetry breaking

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Numerical Stability and Initialization | https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html | Tutorial | Xavier and He initialization derived from variance preservation with code examples |
| 2 | CS231n — Neural Networks Part 2: Weight Initialization | https://cs231n.github.io/neural-networks-2/#init | Tutorial | Stanford; symmetry breaking, Xavier/He derivation, calibrating variances for ReLU networks |
| 3 | Weight Initialization in Neural Networks — Machine Learning Mastery | https://machinelearningmastery.com/weight-initialization-for-deep-learning-neural-networks/ | Blog | Practical guide covering zero init problem, Xavier, He, and when to use each |
| 4 | Weight Initialization Techniques — Deeplearning.ai | https://www.deeplearning.ai/ai-notes/initialization/ | Tutorial | Interactive visualizations showing effect of different initializations on activations |
| 5 | How to initialize deep neural networks — Xavier and Kaiming — Pierre Ouannes | https://pouannes.github.io/blog/initialization/ | Blog | Derives Xavier and He formulas from scratch with variance propagation analysis |

## CML-NN-008 — Numerical Stability in Training  [P2]
Subtopics: log-sum-exp / stable softmax; gradient clipping; mixed-precision basics

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | d2l.ai — Numerical Stability and Initialization | https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html | Tutorial | Covers vanishing/exploding gradients and numerical stability fundamentals |
| 2 | The Log-Sum-Exp Trick — Gregory Gundersen | https://gregorygundersen.com/blog/2020/02/09/log-sum-exp/ | Blog | Clean derivation of the log-sum-exp trick for numerically stable softmax |
| 3 | Mixed Precision Training — NVIDIA Developer Blog | https://developer.nvidia.com/blog/mixed-precision-training-deep-neural-networks/ | Blog | Definitive guide to FP16/FP32 mixed precision with loss scaling explanation |
| 4 | Gradient Clipping — d2l.ai | https://d2l.ai/chapter_recurrent-neural-networks/bptt.html | Tutorial | Gradient clipping in context of BPTT for RNNs with implementation |
| 5 | PyTorch — Automatic Mixed Precision | https://pytorch.org/docs/stable/amp.html | Docs | Official PyTorch AMP documentation with GradScaler and autocast usage |
