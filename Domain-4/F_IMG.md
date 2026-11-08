# Category F — Image Representation and Filtering — Top Resources

> Resources: curated blogs, tutorials, and university slides. No papers.

## CCV-IMG-001 — Image Representation and Color Spaces [P2]
Subtopics: RGB / HSV / Lab; bit depth

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LearnOpenCV — Color Spaces in OpenCV (C++/Python) | https://learnopencv.com/color-spaces-in-opencv-cpp-python/ | Blog | RGB, HSV, Lab with OpenCV conversion code; segmentation example comparing thresholds |
| 2 | PyImageSearch — OpenCV Color Spaces (cv2.cvtColor) | https://pyimagesearch.com/2021/04/28/opencv-color-spaces-cv2-cvtcolor/ | Blog | Step-by-step guide; HSV as cylinder; BGR order caveat |
| 3 | OpenCV — Changing Colorspaces Tutorial | https://docs.opencv.org/4.x/df/d9d/tutorial_py_colorspaces.html | Docs | Official tutorial; cvtColor for HSV object tracking |
| 4 | Roboflow — OpenCV Color Spaces | https://blog.roboflow.com/opencv-color-spaces/ | Blog | Five color spaces with visual outputs; BGR-to-RGB Matplotlib caveat |
| 5 | Real Python — Image Segmentation Using Color Spaces in OpenCV + Python | https://realpython.com/python-opencv-color-spaces/ | Tutorial | HSV color segmentation with practical fish-detection example |
| 6 | Luis Llamas — Color Spaces in OpenCV: BGR, HSV, and Lab | https://www.luisllamas.es/en/opencv-color-spaces-hsv-lab/ | Blog | Per-channel decomposition showing Lab and HSV value channels side by side |
| 7 | scikit-image — Color Module | https://scikit-image.org/docs/stable/api/skimage.color.html | Docs | API reference for color conversions including Lab |

## CCV-IMG-002 — Convolution and Image Filtering [P1]
Subtopics: kernel convolution; Gaussian / median / bilateral filters

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | LearnOpenCV — Image Filtering Using Convolution in OpenCV | https://learnopencv.com/image-filtering-using-convolution-in-opencv/ | Blog | Identity, blur, sharpen kernels; Gaussian/median/bilateral built-in functions with Colab |
| 2 | OpenCV — Smoothing Images Tutorial | https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html | Docs | Official tutorial: averaging, Gaussian, median, bilateral filtering with code |
| 3 | PyImageSearch — Convolutions with OpenCV and Python | https://pyimagesearch.com/2016/07/25/convolutions-with-opencv-and-python/ | Blog | Implement convolution from scratch; then use OpenCV built-ins |
| 4 | d2l.ai — Convolutions for Images (§7.1) | https://d2l.ai/chapter_convolutional-neural-networks/conv-layer.html | Tutorial | Mathematical definition of cross-correlation/convolution with code |
| 5 | OpenCV — 2D Convolution / Image Filtering Tutorial | https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html | Docs | cv2.filter2D for custom kernels; averaging, Gaussian, median, bilateral |

## CCV-IMG-003 — Fourier Transforms for Images [P2]
Subtopics: frequency-domain filtering; DFT / FFT

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Fourier Transform (Python Tutorial) | https://docs.opencv.org/4.x/de/dbc/tutorial_py_fourier_transform.html | Docs | cv2.dft() and NumPy FFT; optimal DFT size; frequency-domain filtering |
| 2 | University of Venice — Filtering in Frequency Domain (Slides) | https://www.dsi.unive.it/~bergamasco/teachingfiles/cvslides/5_filtering_in_frequency_domain.pdf | Slides | DFT, FFT, convolution theorem, frequency filtering |
| 3 | University of Michigan EECS 504 — Pyramids Lecture | https://web.eecs.umich.edu/~ahowens/eecs504/w20/slides/lec4-pyramid.pdf | Slides | Covers frequency representation link to image pyramids |
| 4 | GeeksforGeeks — Fourier Transform of an Image using OpenCV Python | https://www.geeksforgeeks.org/how-to-find-the-fourier-transform-of-an-image-using-opencv-python/ | Blog | Practical Python tutorial with cv2.dft() |
| 5 | Florida State University — Fourier Transform Filtering (Interactive) | https://micro.magnet.fsu.edu/primer/java/digitalimaging/processing/fouriertransform/ | Interactive | Apply filter masks to Fourier transform and see result interactively |

## CCV-IMG-004 — Image Pyramids [P2]
Subtopics: Gaussian / Laplacian pyramids; link to feature pyramids

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | OpenCV — Image Pyramids Tutorial | https://docs.opencv.org/4.x/dc/dff/tutorial_py_pyramids.html | Docs | Official tutorial; Gaussian and Laplacian pyramids; image blending example |
| 2 | MIT 6.869 — Image Pyramids Lecture Notes | http://6.869.csail.mit.edu/fa19/lectures/notes_lecture_7.pdf | Slides | Laplacian as detail present at one scale missing from the level above |
| 3 | University of Michigan EECS 504 — Pyramids Lecture | https://web.eecs.umich.edu/~ahowens/eecs504/w20/slides/lec4-pyramid.pdf | Slides | Gaussian/Laplacian pyramids; image blending; link to wavelets and CNNs |
| 4 | Dive into Deep Learning — Multiscale Object Detection (§14.5) | https://d2l.ai/chapter_computer-vision/multiscale-object-detection.html | Tutorial | Feature pyramids for detection; link between image pyramids and FPN concepts |
| 5 | Feature Pyramid Networks (FPN) Explained | https://www.abhik.ai/concepts/computer-vision/feature-pyramid-networks | Blog | FPN top-down pathway and lateral connections for multi-scale detection |
| 6 | Datature — Feature Pyramid Network (FPN) Explained | https://datature.io/glossary/feature-pyramid-network-fpn | Blog | FPN neck architecture; ~5% extra FLOPs; PANet and BiFPN successors |
| 7 | The AI Learner — Image Pyramids | https://theailearner.com/2019/08/19/image-pyramids/ | Blog | 3-level Python example of Gaussian and Laplacian pyramids with code |
