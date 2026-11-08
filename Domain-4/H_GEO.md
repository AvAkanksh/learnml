# Category H — Camera Geometry and Multi-View Vision — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-GEO-001 — Camera Models and Calibration [P1]
Subtopics: pinhole model; intrinsics / extrinsics; calibration

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Stanford CS231A — Camera Models Lecture Notes | https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf | Slides | Excellent academic treatment of pinhole model, intrinsics/extrinsics; 3×4 projection matrix |
| 2 | OpenCV — Camera Calibration Tutorial | https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html | Docs | Official tutorial; checkerboard calibration with code |
| 3 | LearnOpenCV — Camera Calibration using OpenCV | https://learnopencv.com/camera-calibration-using-opencv/ | Blog | Practical calibration walkthrough with Python/C++ code |
| 4 | MathWorks — What Is Camera Calibration? | https://www.mathworks.com/help/vision/ug/camera-calibration.html | Docs | Clear explanation with diagrams; intrinsic matrix + rotation/translation extrinsics |
| 5 | First Principles of Computer Vision (Shree Nayar, Columbia) | https://fpcv.cs.columbia.edu/ | Video | Video lectures by Shree Nayar covering pinhole model and calibration |
| 6 | PyImageSearch — Camera Calibration with OpenCV | https://pyimagesearch.com/2021/01/18/camera-calibration-with-opencv/ | Blog | Step-by-step practical guide |
| 7 | Brown University 3D Photography — Camera Calibration | http://mesh.brown.edu/3DP-2018/calibration.html | Tutorial | Covers up to 11 intrinsic parameters including lens distortion coefficients |
| 8 | Zhang's Camera Calibration Method (Microsoft Research) | https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr98-71.pdf | Slides | Foundational flexible calibration technique (technical report PDF) |

## CCV-GEO-002 — Homography [P1]
Subtopics: planar mapping; DLT; RANSAC estimation

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LearnOpenCV — Homography Examples using OpenCV | https://learnopencv.com/homography-examples-using-opencv-python-c/ | Blog | Practical homography with code; warping and stitching examples |
| 2 | OpenCV — Feature Matching + Homography | https://docs.opencv.org/4.x/d1/de0/tutorial_py_feature_homography.html | Docs | Official tutorial; findHomography with RANSAC |
| 3 | UBC — Homography Estimation (Dubrofsky Thesis) | https://www.cs.ubc.ca/sites/default/files/2022-12/Dubrofsky_Elan.pdf | Slides | DLT algorithm and RANSAC in depth; 4-point random sample procedure |
| 4 | Purdue ECE661 — Automatic Homography Computation | https://engineering.purdue.edu/kak/computervision/ECE661.08/solution/hw4_s1.pdf | Slides | RANSAC-based homography with DLT step; worked example with parameters |
| 5 | PyImageSearch — Automatic Panoramic Image Stitching | https://pyimagesearch.com/2018/12/17/image-stitching-with-opencv-and-python/ | Blog | Homography in stitching application with full code |
| 6 | ViSP — Homography Estimation from Points | https://visp-doc.inria.fr/doxygen/visp-daily/tutorial-homography.html | Docs | DLT/HLM solver for clean matches; RANSAC/M-estimator for outliers |
| 7 | Wikipedia — Random Sample Consensus (RANSAC) | https://en.wikipedia.org/wiki/Random_sample_consensus | Tutorial | RANSAC algorithm overview applicable to homography estimation |

## CCV-GEO-003 — Epipolar Geometry [P2]
Subtopics: fundamental vs essential matrix; epipolar constraint

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Stanford CS231A — Epipolar Geometry Lecture Notes | https://web.stanford.edu/class/cs231a/course_notes/03-epipolar-geometry.pdf | Slides | Figures showing epipolar lines drawn on image pairs; essential and fundamental matrices |
| 2 | Duke University — Epipolar Geometry and the Essential Matrix (Tomasi) | https://courses.cs.duke.edu/spring20/compsci527/notes/epipolar-geometry.pdf | Slides | Worked introduction: epipolar plane, baseline, essential matrix with labeled diagram |
| 3 | OpenCV — Epipolar Geometry Tutorial | https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html | Docs | Official tutorial; fundamental matrix computation with code |
| 4 | LearnOpenCV — Epipolar Geometry and Stereo Vision | https://learnopencv.com/introduction-to-epipolar-geometry-and-stereo-vision/ | Blog | Practical explanation with visualizations |
| 5 | Hartley & Zisserman — Epipolar Geometry (Book Chapter) | https://www.robots.ox.ac.uk/~vgg/hzbook/hzbook2/HZepipolar.pdf | Slides | Standard reference chapter for the fundamental matrix with geometric derivations |
| 6 | KTH — Epipolar Geometry Course Notes | https://www.csc.kth.se/utbildning/kth/kurser/DD2423/bildat12/notes/epipolar.pdf | Slides | Image pairs with corresponding points and epipolar lines overlaid |
| 7 | RPI — Epipolar Geometry and the Fundamental Matrix | https://sites.ecse.rpi.edu/~qji/CV/epipolar_fundF.pdf | Slides | Academic lecture notes on fundamental matrix derivation |
| 8 | First Principles of Computer Vision — Epipolar Geometry | https://fpcv.cs.columbia.edu/ | Video | Shree Nayar video lectures on epipolar geometry |

## CCV-GEO-004 — Stereo Vision [P2]
Subtopics: disparity; depth from stereo

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Depth Map from Stereo Images | https://docs.opencv.org/4.x/dd/d53/tutorial_py_depthmap.html | Docs | Official tutorial; StereoBM/StereoSGBM with code |
| 2 | LearnOpenCV — Depth Estimation from Stereo Images | https://learnopencv.com/depth-perception-using-stereo-camera-python-c/ | Blog | End-to-end stereo depth pipeline with OpenCV |
| 3 | GeeksforGeeks — Stereo Vision and Depth Estimation | https://www.geeksforgeeks.org/computer-vision/stereo-vision-and-depth-estimation/ | Blog | Pipeline and formulas; Z=f·B/d depth relation explained |
| 4 | Intel RealSense — Depth from Stereo | https://github.com/IntelRealSense/librealsense/blob/master/doc/depth-from-stereo.md | Tutorial | Block matching, calibration, rectification with OpenCV code |
| 5 | First Principles of Computer Vision — Stereo Vision | https://fpcv.cs.columbia.edu/ | Video | Shree Nayar video lectures on stereo matching |
| 6 | Middlebury Stereo Vision Page | https://vision.middlebury.edu/stereo/ | Docs | Benchmark dataset + evaluation; reference implementations |
| 7 | LearnOpenCV — Stereo Vision and Depth Estimation Using OpenCV AI Kit | https://learnopencv.com/stereo-vision-and-depth-estimation-using-opencv-ai-kit/ | Blog | Practical OAK-D camera depth pipeline with calibration and disparity maps |

## CCV-GEO-005 — Structure from Motion [P2]
Subtopics: bundle adjustment; multi-view reconstruction

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Kai Wu — Structure from Motion Tutorial | https://imkaywu.github.io/tutorials/sfm/ | Tutorial | Incremental pipeline; Ceres Solver bundle adjustment implementation with before/after error |
| 2 | COLMAP — Structure-from-Motion and Multi-View Stereo | https://colmap.github.io/ | Docs | State-of-the-art SfM pipeline; well-documented with incremental and global options |
| 3 | MathWorks — Structure from Motion from Multiple Views | https://www.mathworks.com/help/vision/ug/structure-from-motion-from-multiple-views.html | Tutorial | Incremental SfM on TUM RGB-D dataset; alternating BA with re-triangulation |
| 4 | Ceres Solver — Bundle Adjustment Tutorial | http://ceres-solver.org/nnls_tutorial.html#bundle-adjustment | Tutorial | Practical BA implementation with nonlinear least squares |
| 5 | Bundler: SfM for Unordered Image Collections | https://www.cs.cornell.edu/~snavely/bundler/ | Docs | Classic SfM tool by Noah Snavely |
| 6 | Building Rome in a Day | https://grail.cs.washington.edu/rome/ | Docs | Large-scale SfM project page demonstrating city reconstruction |
| 7 | First Principles of Computer Vision — Structure from Motion | https://fpcv.cs.columbia.edu/ | Video | Shree Nayar video lectures on SfM pipeline |
