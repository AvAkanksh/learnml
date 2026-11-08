# Category E — Vision Evaluation Metrics — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-EVL-001 — Classification and Detection Metrics [P0]
Subtopics: IoU; mAP computation; precision-recall per class; top-k accuracy

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Baeldung — Mean Average Precision (mAP) in Object Detection | https://www.baeldung.com/cs/ml-map-object-detection | Blog | Concise walkthrough of IoU, precision-recall, AP, and mAP averaging across classes |
| 2 | KDnuggets — Evaluating Object Detection Models Using Mean Average Precision | https://www.kdnuggets.com/2021/03/evaluating-object-detection-models-using-mean-average-precision.html | Blog | Worked example with cat image and IoU scores; step-by-step mAP computation |
| 3 | V7 Darwin — Mean Average Precision (mAP) Explained: Everything You Need to Know | https://www.v7darwin.com/blog/mean-average-precision | Blog | Shows precision falling from 100% at IoU 0.2 to 67% at 0.8 on same example |
| 4 | Lightly — A Comprehensive Guide to Mean Average Precision | https://www.lightly.ai/blog/mean-average-precision | Blog | PASCAL VOC vs COCO mAP conventions; mAP@[.5:.95] explained |
| 5 | Built In — Mean Average Precision (mAP) Explained | https://builtin.com/articles/mean-average-precision | Blog | Clear treatment of AP and mAP terminology differences across benchmarks |
| 6 | Ultralytics — What Is mAP? Mean Average Precision in Object Detection | https://www.ultralytics.com/blog/mean-average-precision-map-in-object-detection | Blog | IoU threshold mechanics; true positive classification at different cutoffs |
| 7 | TorchMetrics — Mean Average Precision (mAP) | https://torchmetrics.readthedocs.io/en/stable/detection/mean_average_precision.html | Docs | Implementation reference; IoU thresholds, per-size breakdowns |
| 8 | PyTorch — Image Classification Reference | https://pytorch.org/vision/stable/models.html | Docs | Top-1 and top-5 accuracy reported for all torchvision models |

## CCV-EVL-002 — Segmentation Metrics [P0]
Subtopics: mIoU; Dice coefficient; pixel accuracy

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | APXML — Segmentation Evaluation Metrics (IoU, Dice) | https://apxml.com/courses/cnns-for-computer-vision/chapter-4-image-segmentation-techniques/segmentation-evaluation-metrics | Tutorial | Formal mIoU and Dice definitions; per-dataset vs per-image computation |
| 2 | KindaTechnical — Segmentation Evaluation Metrics: mIoU and AP | https://kindatechnical.com/computer-vision/training-a-segmentation-model-on-custom-data.html | Blog | Practical walkthrough of mIoU and AP; Dice=2·IoU/(1+IoU) conversion |
| 3 | TorchMetrics — JaccardIndex (IoU) | https://torchmetrics.readthedocs.io/en/stable/classification/jaccard_index.html | Docs | Implementation reference for IoU/Jaccard computation in PyTorch |
| 4 | GeeksforGeeks — Mean Average Precision (mAP) in Computer Vision | https://www.geeksforgeeks.org/computer-vision/mean-average-precision-map-in-computer-vision/ | Blog | Covers IoU computation and its role in segmentation evaluation |
| 5 | Keras — Model Evaluation Metrics | https://keras.io/api/metrics/classification_metrics/ | Docs | API docs for IoU and pixel accuracy metrics |
| 6 | RankSeg — Segmentation Metrics Documentation | https://rankseg.readthedocs.io/en/stable/metrics.html | Docs | Formal mIoU and Dice definitions with per-dataset computation caveat |
