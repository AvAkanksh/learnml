# Learn ML — ML Interview Field Guide

**Website: https://avakanksh.github.io/learnml/**

406 ML interview topics across 7 domains, ranked P0–P3 by how often they come up, with 2,700+ curated blogs, tutorials and course notes.

| # | Domain | Notes |
|---|---|---|
| 1 | Classical Machine Learning | [`Domain-1/`](Domain-1) |
| 2 | Classical NLP | [`Domain-2/`](Domain-2) |
| 3 | Classical Reinforcement Learning | [`Domain-3/`](Domain-3) |
| 4 | Classical Computer Vision | [`Domain-4/`](Domain-4) |
| 5 | Modern NLP and LLMs | [`Domain-5/`](Domain-5) |
| 6 | Modern Reinforcement Learning | [`Domain-6/`](Domain-6) |
| 7 | Modern Computer Vision | [`Domain-7/`](Domain-7) |

The full topic list lives in [`ML_Complete_Taxonomy_All_Domains.md`](ML_Complete_Taxonomy_All_Domains.md).

## Updating the website

The site is plain HTML/JS (`index.html`, `assets/`) that reads `data.json`. After editing any markdown notes, regenerate the data and push:

```bash
python3 build.py      # rewrites data.json from the markdown
git add -A && git commit -m "Update notes" && git push
```

To preview locally: `python3 -m http.server` and open http://localhost:8000.
