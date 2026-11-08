# Category G — Edges, Corners and Feature Descriptors — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-FRQ-001 — Edge Detection [P1]
Subtopics: Canny pipeline; Sobel; gradient magnitude/direction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LearnOpenCV — Edge Detection Using OpenCV | https://learnopencv.com/edge-detection-using-opencv/ | Blog | Both Sobel and Canny in Python/C++; theory alongside code |
| 2 | PyImageSearch — OpenCV Edge Detection (cv2.Canny) | https://pyimagesearch.com/2021/05/12/opencv-edge-detection-cv2-canny/ | Blog | Focused Canny tutorial starting with image gradients |
| 3 | OpenCV — Canny Edge Detection Tutorial | https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html | Docs | Official tutorial; Canny pipeline steps (Gaussian blur, gradient, NMS, hysteresis) |
| 4 | OpenCV — Sobel Derivatives Tutorial | https://docs.opencv.org/4.x/d2/d2c/tutorial_sobel_derivatives.html | Docs | Official tutorial; Sobel gradient computation in x and y directions |
| 5 | DebuggerCafe — Edge Detection in Computer Vision Using OpenCV | https://debuggercafe.com/edge-detection-in-computer-vision-using-opencv/ | Blog | Covers Canny and Sobel with practical examples |
| 6 | PythonProgramming.net — Canny Edge Detection Gradients Tutorial | https://pythonprogramming.net/canny-edge-detection-gradients-python-opencv-tutorial/ | Tutorial | Beginner-friendly step-by-step with Python/OpenCV |

## CCV-FRQ-002 — Corner Detection [P2]
Subtopics: Harris; FAST

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Baeldung — Harris Corner Detection Explained | https://www.baeldung.com/cs/harris-corner-detection | Blog | Math: SSD formulation, Taylor expansion, eigenvalue-based response scoring |
| 2 | OpenCV — Harris Corner Detection Tutorial | https://docs.opencv.org/4.x/dc/d0d/tutorial_py_features_harris.html | Docs | Python Harris tutorial with cv2.cornerHarris and parameter explanation |
| 3 | OpenCV — FAST Algorithm for Corner Detection | https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html | Docs | Official tutorial; FAST keypoint detector with Bresenham circle of 16 pixels |
| 4 | OpenCV — Harris Corner Detection (C++) | https://docs.opencv.org/4.x/d4/d7d/tutorial_harris_detector.html | Docs | Official tutorial; cv::cornerHarris; response value R; blockSize, apertureSize, k |
| 5 | OpenCV — Shi-Tomasi Corner Detector & Good Features to Track | https://docs.opencv.org/4.x/d4/d8c/tutorial_py_shi_tomasi.html | Docs | Alternative corner detection scoring function |
| 6 | BTU Georgia — Feature Detection and Extraction Lecture | https://btu.edu.ge/wp-content/uploads/2023/05/Lesson-3_-Feature-Detection-and-Extraction.pdf | Slides | Academic lecture covering Harris, FAST, and other detectors |

## CCV-FEA-001 — SIFT [P1]
Subtopics: scale-space extrema; orientation assignment; descriptor construction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Introduction to SIFT Tutorial | https://docs.opencv.org/5.x/da/df5/tutorial_py_sift_intro.html | Docs | Scale-space, keypoint localization, orientation, descriptor; cv.SIFT_create() |
| 2 | Edmund Weitz — SIFT: Scale-Invariant Feature Transform | https://weitz.de/sift/ | Interactive | Most visual SIFT explainer; interactive scale-space and keypoint diagrams |
| 3 | Analytics Vidhya — Detailed Guide to SIFT with Python Code | https://www.analyticsvidhya.com/blog/2019/10/detailed-guide-powerful-sift-technique-image-matching-python/ | Blog | Scale space, keypoint localization, orientation, descriptors, matching; updated 2025 |
| 4 | Roboflow — What is SIFT? | https://blog.roboflow.com/sift/ | Blog | Four-step pipeline overview with keypoint filtering figures |
| 5 | Scholarpedia — Scale Invariant Feature Transform | http://www.scholarpedia.org/article/Scale_Invariant_Feature_Transform | Tutorial | Technical reference with scale-invariant interest point figure |
| 6 | University of Konstanz — Chapter 6: SIFT | https://ip2025.inf.uni-konstanz.de/lectures/SIFT | Tutorial | Academic visual walkthrough; blob detection with normalized LoG |
| 7 | ThePythonCode — SIFT Feature Extraction using OpenCV in Python | https://thepythoncode.com/article/sift-feature-extraction-using-opencv-in-python | Tutorial | Code tutorial for SIFT extraction and matching |

## CCV-FEA-002 — SURF [P3]
Subtopics: box-filter approximation to SIFT

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Introduction to SURF Tutorial | https://docs.opencv.org/4.x/df/dd2/tutorial_py_surf_intro.html | Docs | Official tutorial; box-filter approximation of SIFT; Hessian-based detector |
| 2 | LearnOpenCV — Feature Based Image Alignment | https://learnopencv.com/image-alignment-feature-based-using-opencv-c-python/ | Blog | Uses SURF/SIFT for alignment; practical comparison |
| 3 | Analytics Vidhya — Feature Detection, Description and Matching | https://www.analyticsvidhya.com/blog/2021/06/feature-detection-description-and-matching-of-images-using-opencv/ | Blog | Covers SIFT, SURF, ORB comparison with OpenCV code |
| 4 | Ultralytics — What is SIFT? | https://www.ultralytics.com/blog/what-is-the-scale-invariant-feature-transform-sift | Blog | Context for SURF as SIFT speedup; four-step pipeline overview |

## CCV-FEA-003 — ORB [P2]
Subtopics: oriented FAST + rotated BRIEF; efficiency

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — ORB (Oriented FAST and Rotated BRIEF) Tutorial | https://docs.opencv.org/4.x/d1/d89/tutorial_py_orb.html | Docs | Official tutorial; ORB as free alternative to SIFT/SURF; oriented FAST + rotated BRIEF |
| 2 | LearnOpenCV — ORB Feature Matching | https://learnopencv.com/tag/orb | Blog | ORB tutorials for OpenCV 4.x/5.x; modern Python/C++ |
| 3 | Scaler — Feature Matching with OpenCV | https://www.scaler.com/topics/feature-matching-opencv-python/ | Tutorial | ORB detection + brute-force matching workflow |
| 4 | Analytics Vidhya — Feature Detection, Description and Matching | https://www.analyticsvidhya.com/blog/2021/06/feature-detection-description-and-matching-of-images-using-opencv/ | Blog | Covers ORB speed and binary descriptor advantages |
| 5 | AI Engineer Lab — Feature Detection: Harris, SIFT, ORB & Homography | https://ai-engineer-zt0.pages.dev/AI-Engineer/cv-engineer/phase-01-classical-cv-opencv/lab-03-feature-detection/ | Tutorial | Hands-on lab comparing Harris, SIFT, ORB with homography |

## CCV-FEA-004 — HOG [P2]
Subtopics: gradient histograms; pedestrian detection

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LearnOpenCV — Histogram of Oriented Gradients Explained | https://learnopencv.com/histogram-of-oriented-gradients/ | Blog | Full HOG computation pipeline with visualizations; 9×1 normalized histograms in 8×8 cells |
| 2 | Hannibunny — HOG Features: Step-by-Step | https://hannibunny.github.io/orbook/features/HoGfeatures.html | Tutorial | Object recognition lecture; detailed step-by-step HOG computation |
| 3 | Duke University — HOG Lecture Notes | https://courses.cs.duke.edu/fall15/cps274/notes/hog.pdf | Slides | Academic notes; each cell as 18-slice histogram; block normalization |
| 4 | GeeksforGeeks — Pedestrian Detection using OpenCV-Python | https://www.geeksforgeeks.org/pedestrian-detection-using-opencv-python/ | Blog | Practical HOG + Linear SVM pedestrian detection with OpenCV |
| 5 | CVPR 2005 — HOG for Human Detection (Dalal & Triggs Original Slides) | https://courses.cs.washington.edu/courses/cse576/12sp/notes/CVPR2005_HOG.pdf | Slides | Original presentation slides from the authors |
| 6 | Automatic Addison — How to Detect Pedestrians Using OpenCV | https://automaticaddison.com/how-to-detect-pedestrians-in-images-and-video-using-opencv/ | Blog | Photo and video pedestrian detection using OpenCV's built-in HOG detector |
| 7 | Built In — Histogram of Oriented Gradients: An Overview | https://builtin.com/articles/histogram-of-oriented-gradients | Blog | Feature descriptor overview for object detection |
