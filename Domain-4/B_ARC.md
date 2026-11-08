# Category B — Classic CNN Architectures — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-ARC-001 — LeNet [P3]
Subtopics: early CNN for digits

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — LeNet | https://d2l.ai/chapter_convolutional-neural-networks/lenet.html | Tutorial | Full LeNet-5 implementation on MNIST with training loop; PyTorch/TF/MXNet |
| 2 | AI Singapore — Illustrated: 10 CNN Architectures | https://aisingapore.org/illustrated-10-cnn-architectures/ | Blog | Visual tour starting with LeNet-5; hand-drawn architecture diagrams |
| 3 | PyImageSearch — LeNet: Recognizing Handwritten Digits | https://pyimagesearch.com/2016/08/01/lenet-recognizing-handwritten-digits-using-deep-learning/ | Blog | Practical LeNet implementation tutorial with deep learning |
| 4 | Analytics Vidhya — The Architecture of LeNet-5 | https://www.analyticsvidhya.com/blog/2021/03/the-architecture-of-lenet-5/ | Blog | Step-by-step layer breakdown with diagrams |
| 5 | Ontario Tech — Early CNN Architectures | https://csci4052u.science.ontariotechu.ca/convnets/early_convnets.html | Tutorial | Academic walkthrough from LeNet through GoogLeNet |

## CCV-ARC-002 — AlexNet [P2]
Subtopics: ReLU; dropout; GPU training

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — AlexNet | https://d2l.ai/chapter_convolutional-modern/alexnet.html | Tutorial | History + implementation covering ReLU, dropout, dual-GPU training with code |
| 2 | AI Singapore — Illustrated: 10 CNN Architectures | https://aisingapore.org/illustrated-10-cnn-architectures/ | Blog | Illustrated walkthrough of AlexNet's innovations including ReLU and dropout |
| 3 | UIUC — CNN Architectures Lecture Slides | https://slazebni.cs.illinois.edu/spring24/lec07_cnn_architectures.pdf | Slides | University lecture slides covering AlexNet through modern architectures |
| 4 | Ontario Tech — Early CNN Architectures (AlexNet) | https://csci4052u.science.ontariotechu.ca/convnets/early_convnets.html | Tutorial | Covers AlexNet's 2012 ImageNet breakthrough and innovations |
| 5 | CS231n Lecture 5 Slides (2024) | https://cs231n.stanford.edu/slides/2024/lecture_5.pdf | Slides | Stanford slides covering AlexNet architecture in historical context |

## CCV-ARC-003 — VGG [P1]
Subtopics: stacked 3×3 filters; receptive-field equivalence

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — VGG | https://d2l.ai/chapter_convolutional-modern/vgg.html | Tutorial | VGG blocks, 3×3 filter stacking, receptive field equivalence explained with code |
| 2 | AI Singapore — Illustrated: 10 CNN Architectures | https://aisingapore.org/illustrated-10-cnn-architectures/ | Blog | Visual VGG-16 diagram with parameter counts per layer |
| 3 | GeeksforGeeks — VGG-16 CNN Model | https://www.geeksforgeeks.org/vgg-16-cnn-model/ | Blog | Step-by-step layer breakdown with implementation |
| 4 | UIUC — CNN Architectures Lecture Slides | https://slazebni.cs.illinois.edu/spring24/lec07_cnn_architectures.pdf | Slides | Lecture slides covering VGG architecture details |
| 5 | Ontario Tech — Early CNN Architectures (VGG) | https://csci4052u.science.ontariotechu.ca/convnets/early_convnets.html | Tutorial | Explanation of VGG's uniform 3×3 design philosophy |

## CCV-ARC-004 — GoogLeNet / Inception [P1]
Subtopics: 1×1 convolutions for reduction; multi-branch modules

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — GoogLeNet | https://d2l.ai/chapter_convolutional-modern/googlenet.html | Tutorial | Inception module with 1×1 conv reduction; full code implementation |
| 2 | Hugging Face — GoogLeNet (Computer Vision Course) | https://huggingface.co/learn/computer-vision-course/en/unit2/cnns/googlenet | Tutorial | PyTorch Inception module code; 1×1 before 3×3/5×5 branches with ReLU |
| 3 | How GoogleNet Showed That Size Doesn't Matter | https://www.vizuaranewsletter.com/p/how-googlenet-aka-inception-v1-showed | Blog | Worked example: 1×1 conv reduces 5×5 path parameters from 4,800 to 592 (~90% cut) |
| 4 | AI Singapore — Illustrated: 10 CNN Architectures | https://aisingapore.org/illustrated-10-cnn-architectures/ | Blog | Illustrated Inception module diagram with multi-branch parallel paths |
| 5 | UIUC — CNN Architectures Lecture Slides | https://slazebni.cs.illinois.edu/spring24/lec07_cnn_architectures.pdf | Slides | Lecture slides with Inception module details |
| 6 | Ontario Tech — Early CNN Architectures (GoogLeNet) | https://csci4052u.science.ontariotechu.ca/convnets/early_convnets.html | Tutorial | Inception module reduces operations ~10× via 1×1 convolutions |

## CCV-ARC-005 — ResNet [P0]
Subtopics: residual learning; identity shortcuts; bottleneck blocks; why it eases optimization

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — ResNet | https://d2l.ai/chapter_convolutional-modern/resnet.html | Tutorial | Residual learning derivation; identity shortcuts; bottleneck blocks; full code |
| 2 | Residual Networks and Skip Connections Explained | https://www.ml4devs.com/what-is/residual-networks/ | Blog | Math-focused: y=f(x)+x form and gradient expression showing why identity path helps |
| 3 | Weights & Biases — Exploring ResNets | https://wandb.ai/site/articles/exploring-resnets-with-w-b | Blog | Theory + from-scratch implementation with Colab notebook; CIFAR-10 experiments |
| 4 | DataCamp — ResNet Architecture Tutorial | https://www.datacamp.com/tutorial/resnet-architecture | Tutorial | F(x)=H(x)−x residual formulation; skip path diagrams; bottleneck section |
| 5 | GeeksforGeeks — Residual Networks (ResNet) | https://www.geeksforgeeks.org/deep-learning/residual-networks-resnet-deep-learning/ | Blog | Overview of ResNet architecture with layer details |
| 6 | Analytics Vidhya — ResNet from Scratch in TensorFlow | https://www.analyticsvidhya.com/blog/2021/08/how-to-code-your-resnet-from-scratch-in-tensorflow/ | Tutorial | Build ResNet from scratch covering skip connections and bottleneck blocks |
| 7 | UIUC — CNN Architectures Lecture Slides | https://slazebni.cs.illinois.edu/spring24/lec07_cnn_architectures.pdf | Slides | Lecture slides covering ResNet skip connections |
| 8 | CS231n Lecture 5 Slides (2024) | https://cs231n.stanford.edu/slides/2024/lecture_5.pdf | Slides | Stanford slides covering ResNet architecture |

## CCV-ARC-006 — DenseNet [P2]
Subtopics: dense connectivity; feature reuse

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — DenseNet | https://d2l.ai/chapter_convolutional-modern/densenet.html | Tutorial | Dense block mechanics, growth rate, transition layers with code |
| 2 | GeeksforGeeks — DenseNet Explained | https://www.geeksforgeeks.org/computer-vision/densenet-explained/ | Blog | Dense block as building unit; feature reuse reduces redundancy |
| 3 | Ontario Tech — DenseNet | https://csci4052u.science.ontariotechu.ca/convnets/densenet.html | Tutorial | Explains feature reuse: early features directly accessible to later layers |
| 4 | AI Singapore — Illustrated: 10 CNN Architectures | https://aisingapore.org/illustrated-10-cnn-architectures/ | Blog | Visual DenseNet connectivity diagram |
| 5 | APXML — DenseNet Architecture Connectivity | https://apxml.com/courses/cnns-for-computer-vision/chapter-1-cnn-foundations-modern-architectures/densenet-architecture-connectivity | Tutorial | Input channel formula per layer; parameter-efficiency vs memory tradeoff |

## CCV-ARC-007 — EfficientNet and MobileNet [P1]
Subtopics: depthwise-separable conv FLOPs; inverted residuals; compound scaling

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | EfficientNet Explained: Compound Scaling and Neural Architecture Search | https://amaarora.github.io/posts/2020-08-13-efficientnet.html | Blog | Most detailed walkthrough: NAS for B0 baseline, compound scaling for B1–B7 |
| 2 | Google AI Blog — EfficientNet: Improving Accuracy and Efficiency | https://blog.research.google/2019/05/efficientnet-improving-accuracy-and.html | Blog | Official blog explaining compound scaling method with diagrams |
| 3 | Google AI Blog — MobileNetV2: The Next Generation of On-Device CV | https://blog.research.google/2018/04/mobilenetv2-next-generation-of-on.html | Blog | Official blog; inverted residuals and linear bottlenecks |
| 4 | Built In — Image Classification With MobileNet | https://builtin.com/machine-learning/mobilenet | Blog | Beginner-friendly; Sobel-filter analogy for depthwise separable convolutions |
| 5 | Viso.ai — EfficientNet: Boost CNN Accuracy with Less Compute | https://viso.ai/deep-learning/efficientnet/ | Blog | Diagrams comparing baseline vs depth/width/resolution vs compound scaling |
| 6 | HackMD — MobileNet-V2: Summary and Implementation | https://hackmd.io/@machine-learning/ryaDuxe5L | Tutorial | Compares standard vs separable conv with diagrams; inverted residual blocks |
| 7 | Keras — EfficientNet Applications | https://keras.io/api/applications/efficientnet/ | Docs | API docs with architecture descriptions and usage |
| 8 | KindaTechnical — EfficientNet: Scaling CNNs Efficiently | https://kindatechnical.com/computer-vision/efficientnet-scaling-cnns-efficiently.html | Blog | Compound scaling and depthwise-separable convolutions |
