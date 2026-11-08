# Category C — Object Detection — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-DET-001 — R-CNN Family [P0]
Subtopics: two-stage pipeline; RPN; RoI pooling vs RoIAlign; Faster R-CNN

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — R-CNNs (§14.8) | https://d2l.ai/chapter_computer-vision/rcnn.html | Tutorial | R-CNN → Fast R-CNN → Faster R-CNN evolution; RoI pooling and RoIAlign explained with code |
| 2 | Viso.ai — Faster R-CNN: Beginner's to Advanced Guide | https://viso.ai/deep-learning/faster-r-cnn-2 | Blog | Architecture diagrams; RPN, RoIAlign, two-stage pipeline explained |
| 3 | PyImageSearch — Faster R-CNNs | https://pyimagesearch.com/2023/11/13/faster-r-cnns/ | Blog | Two-part series on Faster R-CNN building blocks; end-to-end detection |
| 4 | CloudFactory Wiki — Faster R-CNN | https://wiki.cloudfactory.com/docs/mp-wiki/model-architectures/faster-r-cnn | Tutorial | RPN, RoI pooling, classification head explained |
| 5 | DigitalOcean — Faster R-CNN Explained: Object Detection | https://www.digitalocean.com/community/tutorials/faster-r-cnn-explained-object-detection | Blog | Practical walkthrough covering RPN and full pipeline |
| 6 | MathWorks — Getting Started with Faster R-CNN | https://www.mathworks.com/help/vision/ug/faster-r-cnn-basics.html | Docs | Clear two-stage pipeline explanation with diagrams |
| 7 | LearnOpenCV — Object Detection and Instance Segmentation Using Mask R-CNN | https://learnopencv.com/deep-learning-based-object-detection-and-instance-segmentation-using-mask-rcnn-in-opencv-python-c/ | Blog | Practical OpenCV implementation covering R-CNN family concepts |

## CCV-DET-002 — YOLO Foundations [P0]
Subtopics: single-stage detection; grid prediction; anchors; speed/accuracy trade-off

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Roboflow — YOLO Object Detection Explained | https://blog.roboflow.com/yolo-object-detection/ | Blog | 7×7 grid, 2 boxes per cell, 30-dim output; well-illustrated with diagrams |
| 2 | DataCamp — YOLO Object Detection Explained | https://www.datacamp.com/blog/yolo-object-detection-explained | Blog | Grid, bounding box, IOU, NMS walkthrough; covers YOLOv1 through modern versions |
| 3 | Dive into Deep Learning — SSD: Single Shot Multibox Detection (§14.7) | https://d2l.ai/chapter_computer-vision/ssd.html | Tutorial | Single-shot detection concepts and code applicable to understanding YOLO |
| 4 | V7 Darwin — YOLO Algorithm for Object Detection Explained | https://www.v7darwin.com/blog/yolo-object-detection | Blog | Training details; predictor assignment based on highest current IOU with ground truth |
| 5 | GeeksforGeeks — YOLO: You Only Look Once | https://www.geeksforgeeks.org/machine-learning/yolo-you-only-look-once-real-time-object-detection/ | Blog | Output reshaping (7×7×30) and loss components explained |
| 6 | Ultralytics — YOLO Documentation | https://docs.ultralytics.com/ | Docs | Official YOLO docs; comprehensive guide to modern YOLO versions |
| 7 | Lightly — YOLO Object Detection Explained | https://www.lightly.ai/blog/yolo | Blog | Single-regression approach; speed vs accuracy comparison with two-stage detectors |

## CCV-DET-003 — SSD [P2]
Subtopics: multi-scale single-shot detection

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Dive into Deep Learning — SSD (§14.7) | https://d2l.ai/chapter_computer-vision/ssd.html | Tutorial | Textbook-style chapter with SVG architecture figure and full code implementation |
| 2 | Jonathan Hui — SSD Object Detection: Single Shot MultiBox Detector | https://jonathan-hui.medium.com/ssd-object-detection-single-shot-multibox-detector-for-real-time-processing-9bd8deac0e06 | Blog | Detailed mechanics; Conv4_3 handles smallest objects, deeper layers handle larger ones |
| 3 | Ontario Tech — SSD: Single Shot MultiBox Detector | https://csci4052u.science.ontariotechu.ca/objdet/ssd/ | Tutorial | Structured walkthrough; benchmark comparison SSD vs Faster R-CNN vs YOLO |
| 4 | Analytics Vidhya — Real-Time Object Detection with SSDs | https://www.analyticsvidhya.com/blog/2023/11/real-time-object-detection-with-ssds-single-shot-multibox-detectors/ | Blog | Multi-scale feature map predictions explained with architecture overview |
| 5 | MathWorks — Getting Started with SSD Multibox Detection | https://www.mathworks.com/help/vision/ug/getting-started-with-ssd.html | Docs | Practical SSD implementation with multi-scale feature guidance |
| 6 | Google Research — SSD: Single Shot MultiBox Detector | https://research.google/pubs/ssd-single-shot-multibox-detector/ | Docs | Official publication page with description |

## CCV-DET-004 — NMS and Anchor Design [P0]
Subtopics: IoU thresholding; soft-NMS; anchor-based vs anchor-free

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Pete Warden — Non-Max Suppressions, How do they Work? | https://petewarden.com/2022/02/21/non-max-suppressions-how-do-they-work/ | Blog | Detailed NMS walkthrough with Python Colab notebook; covers merging variants |
| 2 | Dive into Deep Learning — Anchor Boxes (§14.4) | https://d2l.ai/chapter_computer-vision/anchor.html | Tutorial | Anchor box generation, IoU computation, assignment with code |
| 3 | APXML — Non-Maximum Suppression Variants | https://apxml.com/courses/cnns-for-computer-vision/chapter-3-object-detection-algorithms/non-maximum-suppression-variants | Tutorial | Covers standard NMS, soft-NMS (Gaussian score decay), and DIoU-NMS |
| 4 | GeeksforGeeks — What is Non-Maximum Suppression? | https://www.geeksforgeeks.org/computer-vision/what-is-non-maximum-suppression/ | Blog | NMS walkthrough with OpenCV cv2.dnn.NMSBoxes() example |
| 5 | Analytics Vidhya — Non-Maximum Suppression (NMS) | https://www.analyticsvidhya.com/blog/2020/08/selecting-the-right-bounding-box-using-non-max-suppression/ | Blog | Beginner-friendly NMS tutorial with dog/person example |
| 6 | Ultralytics — Anchor-Free Detectors | https://www.ultralytics.com/glossary/anchor-free-detectors | Blog | Overview of FCOS (point-based) and CenterNet (keypoint-based) anchor-free methods |
| 7 | Anchor-Based vs Anchor-Free Object Detection | https://www.abhik.ai/concepts/computer-vision/anchor-based-vs-anchor-free | Blog | Contrasts anchor-based and anchor-free designs; covers FCOS and CenterNet |
| 8 | Dive into Deep Learning — Multiscale Object Detection (§14.5) | https://d2l.ai/chapter_computer-vision/multiscale-object-detection.html | Tutorial | Multi-scale anchor design across feature maps |
