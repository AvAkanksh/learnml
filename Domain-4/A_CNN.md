# Category A — CNN Foundations — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-CNN-001 — Convolutional Layer Mechanics [P0]
Subtopics: output-size formula; parameter count; receptive-field growth; weight sharing and translation equivariance; stride / padding / dilation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS231n: Convolutional Neural Networks for Visual Recognition | https://cs231n.github.io/convolutional-networks/ | Tutorial | Stanford notes; output size formula ((W−F+2P)/S+1), parameter counting, stride, padding, weight sharing |
| 2 | CS231n Lecture 5 Slides (2024) — Convolutional Networks | https://cs231n.stanford.edu/slides/2024/lecture_5.pdf | Slides | Stanford lecture slides covering conv mechanics, pooling, and modern architectures |
| 3 | Dive into Deep Learning — Convolutions for Images (Ch. 7) | https://d2l.ai/chapter_convolutional-neural-networks/index.html | Tutorial | Interactive textbook with runnable code for padding, stride, channels, dilation |
| 4 | Computing Receptive Fields of Convolutional Neural Networks | https://distill.pub/2019/computing-receptive-fields/ | Interactive | Distill article; interactive deep dive on receptive field growth formulas across layers |
| 5 | A Guide to Receptive Field Arithmetic for CNNs | https://nikasa1889.github.io/2017/04/07/A-guide-to-receptive-field-arithmetic-for-Convolutional-Neural-Networks/ | Blog | Classic visual guide with fixed-size feature map diagrams and recursive RF formulas |
| 6 | vdumoulin/conv_arithmetic — Convolution Animations | https://github.com/vdumoulin/conv_arithmetic | Interactive | Animated GIFs for every conv configuration (padding, stride, dilation, transposed) |
| 7 | LearnOpenCV — Understanding Convolutional Neural Networks | https://learnopencv.com/understanding-convolutional-neural-networks-cnn/ | Blog | Practical walkthrough with diagrams covering output size and parameter count |
| 8 | Understanding the Receptive Field of Deep Convolutional Networks | https://theaisummer.com/receptive-field/ | Blog | Covers how dilated convolutions, pooling, and skip connections affect receptive field |
| 9 | 3Blue1Brown — But what is a convolution? | https://www.youtube.com/watch?v=KuXjwB4LzSA | Video | Beautiful visual intuition for the convolution operation |
| 10 | UIUC — CNN Architectures Lecture Slides | https://slazebni.cs.illinois.edu/spring24/lec07_cnn_architectures.pdf | Slides | University lecture slides covering conv layer details and modern architectures |

## CCV-CNN-002 — Pooling and Downsampling [P1]
Subtopics: max vs average; global average pooling; strided convolutions

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS231n: Convolutional Neural Networks — Pooling Layer | https://cs231n.github.io/convolutional-networks/#pool | Tutorial | Clear explanation of max/avg pooling with output size formulas |
| 2 | Dive into Deep Learning — Pooling (§7.5) | https://d2l.ai/chapter_convolutional-neural-networks/pooling.html | Tutorial | Interactive code + math for max/avg pooling, stride, padding |
| 3 | Global Average Pooling Layers for Object Localization | https://alexisbcook.github.io/2017/global-average-pooling-layers-for-object-localization/ | Blog | Focused post on GAP and its role in replacing fully connected layers |
| 4 | Machine Learning Mastery — Pooling Layers for CNNs | https://machinelearningmastery.com/pooling-layers-for-convolutional-neural-networks/ | Blog | Practical intro with Keras code examples for all pooling types |
| 5 | Keras Documentation — Pooling Layers | https://keras.io/api/layers/pooling_layers/ | Docs | Official API docs: MaxPooling2D, AveragePooling2D, GlobalAveragePooling2D |
| 6 | PyTorch Tutorial — Training a Classifier | https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html | Tutorial | End-to-end CNN training walkthrough showing pooling in context |

## CCV-CNN-003 — CNN Training Fundamentals [P1]
Subtopics: backprop through conv; BatchNorm in CNNs

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Understanding the Backward Pass through Batch Normalization Layer | https://kratzert.github.io/2016/02/12/understanding-the-gradient-flow-through-the-batch-normalization-layer.html | Blog | Step-by-step gradient derivation for BatchNorm with computation graph |
| 2 | Dive into Deep Learning — Batch Normalization (§8.5) | https://d2l.ai/chapter_convolutional-modern/batch-norm.html | Tutorial | Math + code for BN in conv nets; train vs inference behavior; per-channel statistics |
| 3 | Backpropagation In Convolutional Neural Networks | https://jefkine.com/general/2016/09/05/backpropagation-in-convolutional-neural-networks/ | Blog | Step-by-step derivation of backprop through conv and pooling layers |
| 4 | CS231n: Convolutional Neural Networks | https://cs231n.github.io/convolutional-networks/ | Tutorial | Covers gradient computation through conv layers |
| 5 | GeeksforGeeks — What is Batch Normalization in CNN? | https://www.geeksforgeeks.org/computer-vision/what-is-batch-normalization-in-cnn/ | Blog | BN math and PyTorch CNN examples; scale and shift parameter learning |
| 6 | Batch Normalization Tutorial | https://nabidalam.github.io/posts/batch-normalization-tutorial/ | Blog | Clear walkthrough of BN in CNNs with examples |
| 7 | UW CSE 493G1 — Recitation on CNN Backprop | https://courses.cs.washington.edu/courses/cse493g1/26wi/schedule/recitations/rec3-sol.pdf | Slides | University lecture PDF with worked backprop through conv layers |

## CCV-CNN-004 — Data Augmentation [P0]
Subtopics: flips / crops / color jitter; mixup / cutmix; test-time augmentation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Albumentations Documentation | https://albumentations.ai/docs/ | Docs | Industry-standard augmentation library; extensive transform catalog with visual examples |
| 2 | Dive into Deep Learning — Image Augmentation (§14.1) | https://d2l.ai/chapter_computer-vision/image-augmentation.html | Tutorial | Covers standard augmentations with code and pedagogical treatment |
| 3 | PyTorch — Illustration of transforms (torchvision) | https://pytorch.org/vision/stable/auto_examples/transforms/plot_transforms_illustrations.html | Docs | Visual gallery of ALL torchvision augmentations with before/after images |
| 4 | timm — Mixup & CutMix Guide | https://timm.fast.ai/mixup_cutmix | Tutorial | Hands-on guide covering training flags for mixup and cutmix with probability settings |
| 5 | Data Augmentation Techniques — Cutout, Mixup, CutMix Visually Explained | https://www.pmgautam.com/posts/augmentations-visually-explained.html | Blog | Visual tutorial with Python code for Mixup, CutMix, and Cutout with soft labels |
| 6 | Albumentations — Test-Time Augmentation Guide | https://albumentations.ai/docs/4-advanced-guides/test-time-augmentation/ | Docs | TTA for classification, segmentation, and detection with compute-cost table |
| 7 | Neptune.ai Blog — Data Augmentation in Python | https://neptune.ai/blog/data-augmentation-in-python | Blog | Covers TTA and standard augmentation strategies comprehensively |
| 8 | qubvel/ttach — Image Test Time Augmentation with PyTorch | https://github.com/qubvel/ttach | Docs | PyTorch TTA library with D4 transforms and wrappers for classification/segmentation |
| 9 | Kaggle — Data Augmentation Techniques | https://www.kaggle.com/code/alexisbcook/data-augmentation | Tutorial | Practical notebook with Keras augmentation layers |

## CCV-CNN-005 — Transfer Learning and Fine-Tuning [P0]
Subtopics: feature extraction vs full fine-tuning; layer freezing; domain shift

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | CS231n: Transfer Learning | https://cs231n.github.io/transfer-learning/ | Tutorial | Stanford notes; when to freeze, fine-tune, or train from scratch based on dataset size/similarity |
| 2 | TensorFlow — Transfer Learning and Fine-Tuning | https://www.tensorflow.org/tutorials/images/transfer_learning | Tutorial | Official guide separating feature extraction vs fine-tuning with cats-vs-dogs example |
| 3 | PyTorch Tutorial — Transfer Learning for Computer Vision | https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html | Tutorial | Official PyTorch tutorial; feature extraction vs fine-tuning with ResNet |
| 4 | Dive into Deep Learning — Fine-Tuning (§14.2) | https://d2l.ai/chapter_computer-vision/fine-tuning.html | Tutorial | Code + conceptual walkthrough of fine-tuning pretrained models |
| 5 | Keras — Transfer Learning & Fine-Tuning Guide | https://keras.io/guides/transfer_learning/ | Docs | Official Keras guide covering freezing, unfreezing, fine-tuning strategies |
| 6 | Hugging Face — Fine-Tuning a Pretrained Model | https://huggingface.co/docs/transformers/training | Docs | Modern approach using HF Trainer for vision models |
| 7 | Machine Learning Mastery — Transfer Learning for Deep Learning | https://machinelearningmastery.com/transfer-learning-for-deep-learning/ | Blog | Practical guide explaining feature extraction vs fine-tuning with Keras examples |
