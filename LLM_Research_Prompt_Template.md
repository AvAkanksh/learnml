# Reusable Prompt Template — Hand to Any Other LLM for Domain Research

Use this for each of the remaining 6 domains (Classical ML, Classical NLP, Classical RL, Classical CV, Modern RL, Modern CV). Copy the whole block below, fill in the two `<<...>>` placeholders, and paste it to the other model (ChatGPT, Gemini, another Claude session, etc.) as your prompt. Keep it as one domain per run — don't batch multiple domains in one prompt, since that's what caused scope/quality problems here when tried all at once.

---

## PROMPT TO COPY

You are acting as a Technical Research Librarian ranking the best 3 technical blogs/tutorials for each topic below, for ML interview preparation (roles: MLE, Applied Scientist, Research Scientist, relevant specialist tracks). Do not write explanations of the concepts — this is a topic-to-resource index, not a tutorial.

**Domain:** <<paste domain name, e.g. "Classical Machine Learning">>

**Topics to cover** (ID | Topic | Subtopics — use these exactly, do not rename or merge/split them):

<<paste that domain's topic table(s) from ML_Complete_Taxonomy_All_Domains.md here>>

### For every topic, do this process:

1. **Search** for candidate resources specific to that exact topic (not a generic survey of the whole category unless the topic itself is that broad).
2. **Build a candidate pool of up to ~10** distinct sources. Prefer specialized technical blogs, official docs, and recognized educator sites over generic SEO/AI-generated content. A primary research paper may be listed only as a clearly labeled fallback if no adequate blog/tutorial exists.
3. **Actually read the full content of every candidate** before scoring it — not just a title or search snippet. If you cannot browse/fetch a page (no live web access, blocked, paywalled, or you're uncertain you actually retrieved it), **say so explicitly and do not score it** as if you'd read it.
4. **Score each fully-read candidate 0–100 on each of these 7 criteria**, then combine with this exact weighted formula:

   `Score = 0.25×Depth + 0.20×Relevance + 0.20×Pedagogy + 0.10×Implementation + 0.10×Authority + 0.10×Currency + 0.05×UsefulnessEvidence`

   - **Depth** — technical correctness, derivations, precision
   - **Relevance** — how completely it covers *this specific topic's* subtopics (not the whole category)
   - **Pedagogy** — clarity, structure, diagrams/intuition
   - **Implementation** — code, tensor shapes, worked examples
   - **Authority** — author expertise, citations, alignment with primary sources
   - **Currency** — reflects current methods/implementations
   - **UsefulnessEvidence** — real signals only (e.g. actual GitHub stars/forks you observed), never invented. **If unknown, mark it "unknown" and renormalize the score over the remaining weights — never assign it a made-up number.**

5. **Select the top 3** by score. If two top candidates are near-duplicate in content/style, swap the weaker one for a complementary candidate (different angle: conceptual / mathematical / implementation) — but never sacrifice quality just to force variety.
6. **If fewer than 3 candidates meet a minimum quality bar** (genuinely on-topic, sufficient substance, not invented), say so explicitly for that topic instead of filling the slot with a weak or fabricated link.

### Hard rules (do not violate these):

- **Never invent a URL, title, author, date, or popularity number.** If you don't know it, say "unknown."
- **Never route through, or suggest, a paywall-bypass/anti-bot-circumvention proxy or mirror** to access a blocked page. If a page is paywalled or blocked, mark it as such and move to the next candidate — don't work around it.
- **A 403/blocked/paywalled page is not "unavailable forever"** — if you truly cannot access it, disclose that plainly rather than guessing at its content.
- Flag clearly if your top picks end up concentrated on one author/site — don't force artificial diversity, but tell me if it happened and why.

### Output format — two deliverables:

**1. Index table** (one row per topic):

| ID | Topic | Subtopics | #1 Best Blog | #2 Best Blog | #3 Best Blog |
|---|---|---|---|---|---|

(Markdown links for each resource: `[Title](URL)`)

**2. Audit table** (one row per selected resource, 3 rows per topic):

| Topic ID | Rank | Resource | Author/Publisher | Date (if known) | Score | Score breakdown (7 criteria, "unknown" where applicable) | Why selected | Verification status (fully-read / url-resolves-only / unverified) |
|---|---|---|---|---|---|---|---|---|

At the end, give me: total topics covered, total resource links, how many were fully verified (content actually read) vs. only confirmed-reachable vs. excluded, and any domain-level gaps or limitations you noticed.

---

## Notes for you (not part of the prompt above)

- **Different models browse differently.** Some can genuinely fetch live pages, some can only use trained knowledge plus a search tool, some can't browse at all. The "say so explicitly" instruction above is there so a model without real browsing doesn't quietly fabricate a plausible-sounding citation — watch for that failure mode specifically when you review the output, since it's the easiest way these runs go wrong.
- **Spot-check it the way we did for GQA**: pick 1–2 of its top-3 picks per domain and verify the link actually resolves and is actually about that topic, before trusting the rest.
- **Bring the results back here** if you want them merged into this same taxonomy file / folded into a matching OpenSpec change — I can assemble multiple domains' outputs into one consistent set of files the same way Domain 5 is structured.
