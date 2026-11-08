# Category I — Motion, Tracking and Classical Segmentation — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-FLOW-001 — Optical Flow Estimation [P2]
Subtopics: brightness constancy; Lucas-Kanade

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Optical Flow Tutorial | https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html | Docs | Official tutorial; Lucas-Kanade and Farneback with code |
| 2 | Baeldung — Optical Flow: Lucas-Kanade Method | https://www.baeldung.com/cs/optical-flow-lucas-kanade-method | Blog | Brightness constancy constraint; Taylor expansion derivation; n×n window assumption |
| 3 | ETH Zurich — Optical Flow Tutorial (Visual Computing) | https://cvg.ethz.ch/assets/material/visual_computing/exercises/Tutorial5_2023.pdf | Slides | Aperture problem; brightness constancy gives one equation, two unknowns |
| 4 | LearnOpenCV — Optical Flow in OpenCV | https://learnopencv.com/optical-flow-in-opencv/ | Blog | Practical implementation with dense and sparse flow |
| 5 | UIUC CS 543 — Feature Tracking and Optical Flow Lecture | https://courses.grainger.illinois.edu/cs543/sp2012/lectures/Lecture%2008%20-%20Feature%20Tracking%20and%20Optical%20Flow%20-%20Vision_Spring2012.pdf | Slides | Lucas-Kanade derivation, iterative variant, and failure cases |
| 6 | University of Washington — Motion and Optical Flow Slides | https://homes.cs.washington.edu/~shapiro/EE596/notes/Optical_Flow.pdf | Slides | Comprehensive slides covering brightness constancy and flow methods |
| 7 | First Principles of Computer Vision — Optical Flow (Shree Nayar) | https://fpcv.cs.columbia.edu/ | Video | Clear video lectures on brightness constancy and Lucas-Kanade |
| 8 | University of Toronto — Optical Flow & Tracking Lecture | https://www.cs.toronto.edu/~lindell/teaching/420/slides/lecture10.pdf | Slides | Academic treatment of optical flow and tracking fundamentals |

## CCV-FLOW-002 — Dense Optical Flow Methods [P3]
Subtopics: Horn-Schunck

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Dense Optical Flow (Farneback) | https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html | Docs | calcOpticalFlowFarneback tutorial with visualization code |
| 2 | IPOL — Horn & Schunck Optical Flow: Reference Implementation | https://www.ipol.im/pub/art/2013/20/ | Tutorial | Reference implementation with analysis and reproducible results |
| 3 | Horn & Schunck — Determining Optical Flow (MIT DSpace) | https://dspace.mit.edu/handle/1721.1/6337 | Docs | Original foundational work on dense optical flow with smoothness constraint |
| 4 | Wikipedia — Horn-Schunck Method | https://en.wikipedia.org/wiki/Horn%E2%80%93Schunck_method | Tutorial | Algorithm description with global smoothness constraint formulation |
| 5 | Middlebury Optical Flow Evaluation | https://vision.middlebury.edu/flow/ | Docs | Benchmark dataset and evaluation for optical flow methods |
| 6 | First Principles of Computer Vision — Dense Optical Flow | https://fpcv.cs.columbia.edu/ | Video | Shree Nayar video lectures on dense flow methods |

## CCV-SEG-001 — Classical Image Segmentation [P3]
Subtopics: thresholding; watershed; graph cuts

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Image Thresholding Tutorial | https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html | Docs | Otsu's method, adaptive thresholding with code |
| 2 | OpenCV — Watershed Algorithm Tutorial | https://docs.opencv.org/4.x/d3/db4/tutorial_py_watershed.html | Docs | Marker-based watershed; distance transform for separating touching objects |
| 3 | OpenCV — Interactive Foreground Extraction using GrabCut | https://docs.opencv.org/4.x/d8/d83/tutorial_py_grabcut.html | Docs | Graph-cut based segmentation with user-specified seeds |
| 4 | scikit-image — Segmentation Gallery | https://scikit-image.org/docs/stable/auto_examples/segmentation/index.html | Docs | Multiple classical segmentation examples with visual outputs |
| 5 | PyImageSearch — Watershed Segmentation with OpenCV | https://pyimagesearch.com/2015/11/02/watershed-opencv/ | Blog | Hands-on watershed tutorial for separating touching objects |
| 6 | Wikipedia — Otsu's Method | https://en.wikipedia.org/wiki/Otsu%27s_method | Tutorial | Threshold derivation by minimizing intra-class variance |
| 7 | Normalized Cuts and Image Segmentation (Shi & Malik, Berkeley) | https://people.eecs.berkeley.edu/~malik/papers/SM-ncut.pdf | Slides | Foundational spectral segmentation approach (university PDF) |

## CCV-SEG-002 — Classical Object Tracking [P2]
Subtopics: Kalman filter; mean-shift; correlation trackers

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Mean-Shift / CAMShift Tracking Tutorial | https://docs.opencv.org/4.x/d7/d00/tutorial_meanshift.html | Docs | Official mean-shift tracking tutorial with code |
| 2 | LearnOpenCV — Object Tracking using OpenCV | https://learnopencv.com/object-tracking-using-opencv-cpp-python/ | Blog | Comprehensive tracker comparison: KCF, CSRT, MOSSE, MIL |
| 3 | Welch & Bishop — An Introduction to the Kalman Filter (UNC) | https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf | Slides | Classic Kalman filter tutorial with clear predict-update cycle |
| 4 | OpenCV — Object Tracking API (KCF, CSRT, MOSSE) | https://docs.opencv.org/4.x/d9/df8/group__tracking.html | Docs | Multiple correlation tracker implementations |
| 5 | PyImageSearch — Object Tracking with OpenCV | https://pyimagesearch.com/2018/07/30/opencv-object-tracking/ | Blog | Practical tracker comparison and usage with multiple algorithms |
| 6 | Wikipedia — Kalman Filter | https://en.wikipedia.org/wiki/Kalman_filter | Tutorial | Detailed mathematical description of predict-update equations |
