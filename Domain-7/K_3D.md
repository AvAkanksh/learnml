# Category K — 3D Vision and Neural Rendering

> Resources: curated blogs, tutorials, and university slides. No papers.

## MCV-3D-001 — Neural Radiance Fields (NeRF) [P1]
Subtopics: volume rendering equation; positional encoding; slow training/rendering

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | How Neural Radiance Fields (NeRF) and Instant NGP Work | https://theaisummer.com/nerf/ | Blog | AI Summer; volume rendering, positional encoding, and Instant NGP acceleration |
| 2 | The Annotated NeRF — Training NeRF on Custom Dataset in PyTorch | https://learnopencv.com/annotated-nerf-pytorch/ | Tutorial | LearnOpenCV; PyTorch walkthrough covering volume rendering, positional encoding, hierarchical sampling |
| 3 | NeRF From Nothing: A Tutorial with PyTorch | https://medium.com/@amit25173/nerf-from-nothing-a-tutorial-with-pytorch-8a2821ced3d2 | Tutorial | Step-by-step positional encoding and volumetric rendering implementation |
| 4 | A Beginner's 12-Step Visual Guide to Understanding NeRF | https://medium.com/data-science/a-12-step-visual-guide-to-understanding-nerf-representing-scenes-as-neural-radiance-fields-24a36aef909a | Blog | Most illustrated option; step-by-step visuals of the full pipeline |
| 5 | NeRF Project Page | https://www.matthewtancik.com/nerf | Blog | Official project page with visual results |
| 6 | Frank Dellaert — NeRF Explosion 2020 | https://dellaert.github.io/NeRF/ | Blog | Blog covering the NeRF landscape and variants |
| 7 | Keras — 3D Volumetric Rendering with NeRF | https://keras.io/examples/vision/nerf/ | Tutorial | Official Keras example with Fourier-feature encoder and ray generation |
| 8 | Computer Graphics and Deep Learning with NeRF — PyImageSearch | https://pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/ | Tutorial | PyImageSearch; TensorFlow/Keras code for positional encoding and hierarchical sampling |
| 9 | bmild/nerf (GitHub) | https://github.com/bmild/nerf | Docs | Original NeRF implementation |
| 10 | NeRFStudio | https://github.com/nerfstudio-project/nerfstudio | Docs | Modular NeRF framework; great for learning and experimentation |

## MCV-3D-002 — 3D Gaussian Splatting [P1]
Subtopics: explicit Gaussians; differentiable rasterization; real-time rendering vs NeRF

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Introduction to 3D Gaussian Splatting | https://huggingface.co/blog/gaussian-splatting | Blog | Hugging Face; differentiable rasterizer, training loop, tile-based rendering |
| 2 | Hugging Face ML for 3D Course — 3D Gaussian Splatting | https://huggingface.co/learn/ml-for-3d-course/unit3/what-is-it | Tutorial | HF course; position, covariance, color, alpha parameters, tile-based rasterization |
| 3 | Understanding 3D Gaussian Splatting via Render Engines | https://radiancefields.com/understanding-3d-gaussian-splatting-via-render-engines | Blog | Radiance Fields; comparison with NeRF, no neural networks needed |
| 4 | 3DGS Project Page | https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/ | Docs | Official project page with visual comparisons |
| 5 | graphdeco-inria/gaussian-splatting (GitHub) | https://github.com/graphdeco-inria/gaussian-splatting | Docs | Official implementation |
| 6 | Spatial Computing 101: NeRFs vs Gaussian Splatting | https://vidyatec.com/blog/spatial-computing-101-nerfs-vs-gaussian-splatting/ | Blog | Vidya; NeRF vs 3DGS comparison with speed benchmarks |
| 7 | 3D Gaussian Splatting | https://www.plainconcepts.com/3d-gaussian-splatting/ | Blog | Plain Concepts; practical pipeline from COLMAP to rendering |
| 8 | Papers With Code — 3D Gaussian Splatting | https://paperswithcode.com/paper/3d-gaussian-splatting-for-real-time-radiance | Docs | Summary with benchmarks |

## MCV-3D-003 — Vision Foundation Models for 3D [P3]
Subtopics: general-purpose 3D perception models

| Rank | Title | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Depth Anything V2: Depth Estimation Tutorials | https://blog.roboflow.com/depth-anything/ | Tutorial | Roboflow; relative vs absolute depth, model internals, practical usage |
| 2 | Depth Anything for Monocular Depth Estimation | https://learnopencv.com/depth-anything/ | Tutorial | LearnOpenCV; affine-invariant loss, disparity space, inference commands |
| 3 | Monocular Depth Estimation: Technical Explanation | https://www.lightly.ai/blog/monocular-depth-estimation | Blog | Lightly; technical overview of depth estimation approaches |
| 4 | Metric and Relative Monocular Depth Estimation Guide | https://huggingface.co/blog/Isayoften/monocular-depth-estimation-guide | Blog | HF blog; metric depth and fine-tuning Depth Anything V2 with code |
| 5 | DUSt3R Made 3D Reconstruction Work Without Camera Poses | https://papers-100-lines.medium.com/dust3r-made-3d-reconstruction-work-without-camera-poses-mast3r-made-it-accurate-1c54a7d5b7f2 | Blog | DUSt3R and MASt3R explained; pointmap regression, global alignment |
| 6 | MASt3R & MASt3R-SfM for Image Matching and 3D Reconstruction | https://learnopencv.com/mast3r-sfm-grounding-image-matching-3d/ | Tutorial | LearnOpenCV; hands-on MASt3R tutorial with code |
| 7 | 3D Foundation Models — NAVER LABS Europe | https://europe.naverlabs.com/research/3d-foundation-models/ | Blog | Official project page for DUSt3R and MASt3R (original authors) |
| 8 | Papers With Code — Depth Estimation | https://paperswithcode.com/task/depth-estimation | Docs | Task page with leaderboards |
