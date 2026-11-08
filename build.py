#!/usr/bin/env python3
"""Build data.json for the website from the markdown notes.

Run after editing any notes:  python3 build.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
TAXONOMY = ROOT / "ML_Complete_Taxonomy_All_Domains.md"

DOMAIN_RE = re.compile(r"^# Domain (\d+) — (.+?) \(prefix (\w+)\)")
CAT_RE = re.compile(r"^## (\d+)\.(\d+) (.+)")
TOPIC_HEAD_RE = re.compile(r"^## ([A-Z0-9]+-[A-Z0-9]+-\d+)\s+—\s+(.+?)\s*(?:\[(P[0-3])\])?\s*$")


SCORED_SOURCES = {5: ROOT / "old" / "Domain-5"}  # domains whose resources carry research scores


def cells(line):
    parts = re.split(r"(?<!\\)\|", line.strip().strip("|"))
    return [c.strip().replace("\\|", "|") for c in parts]


def parse_score(raw):
    """'94 (Depth 97, ...) (provisional)' -> (94, 'Depth 97, ...', True); 'None (...)' -> (None, '', False)."""
    m = re.match(r"\s*(\d+(?:\.\d+)?)", raw or "")
    if not m:
        return None, "", False
    detail = re.search(r"\((Depth[^)]*)\)", raw)
    return float(m[1]), detail[1] if detail else "", "provisional" in raw


def rank_by_score(resources):
    """Sort scored resources best-first (unscored/paywalled last, original order kept for ties)."""
    for r in resources:
        val, detail, prov = parse_score(r["score"])
        r["score"] = (f"{val:g}" if val is not None else "")
        r["scoreDetail"], r["provisional"] = detail, prov
        r["_v"] = val
    resources.sort(key=lambda r: -(r["_v"] if r["_v"] is not None else -1))
    for i, r in enumerate(resources, 1):
        r["rank"] = str(i)
        del r["_v"]
    return resources


def parse_taxonomy():
    domains, topics = [], {}
    domain = cat = None
    for line in TAXONOMY.read_text().splitlines():
        if m := DOMAIN_RE.match(line):
            domain = {"num": int(m[1]), "name": m[2], "prefix": m[3],
                      "audience": "", "categories": []}
            domains.append(domain)
            cat = None
        elif line.startswith("# "):
            domain = None
        elif domain and line.startswith("Most relevant to:"):
            domain["audience"] = line.split(":", 1)[1].strip()
        elif domain and (m := CAT_RE.match(line)):
            cat = {"num": f"{m[1]}.{m[2]}", "name": m[3].strip(), "topics": []}
            domain["categories"].append(cat)
        elif domain and cat and re.match(r"^\| P[0-3] \|", line):
            pri, tid, name, subs = cells(line)[:4]
            new = "(new)" in name
            name = name.replace("**(new)**", "").replace("(new)", "").strip()
            topics[tid] = {"id": tid, "title": name, "priority": pri, "new": new,
                           "subtopics": [s.strip() for s in subs.split(";") if s.strip()]}
            cat["topics"].append(tid)
    return domains, topics


def parse_table(lines):
    """Turn markdown table lines into resources (rows with a URL) and notes."""
    head = cells(lines[0])
    resources, notes = [], []
    for line in lines[2:]:
        row = dict(zip(head, cells(line)))
        url = row.get("URL", "").split(" ")[0]
        if url.startswith("http"):
            resources.append({
                "rank": row.get("Rank", ""),
                "title": row.get("Title", ""),
                "url": url,
                "type": row.get("Type") or row.get("Publisher/Author", ""),
                "access": row.get("Accessibility", ""),
                "score": row.get("Score", ""),
                "notes": row.get("Notes", ""),
            })
        elif row.get("Notes"):
            notes.append(row["Notes"])
    return resources, notes


def parse_topic_body(body):
    subtopics, resources, notes, text = [], [], [], []
    i = 0
    while i < len(body):
        line = body[i]
        if line.startswith("Subtopics:"):
            subtopics = [s.strip() for s in line.split(":", 1)[1].split(";") if s.strip()]
        elif line.startswith("|"):
            j = i
            while j < len(body) and body[j].startswith("|"):
                j += 1
            r, n = parse_table(body[i:j])
            resources += r
            notes += n
            i = j
            continue
        elif line.strip() and line.strip() != "---":
            text.append(line)
        i += 1
    if text:
        notes.append("\n".join(text))
    return subtopics, resources, notes


def parse_category_file(path):
    lines = path.read_text().splitlines()
    title = lines[0].split("—", 1)[1].strip() if "—" in lines[0] else lines[0]
    title = re.sub(r"\s+—\s+(Top\s+)?Resources$", "", title)
    found, cur, body, intro = [], None, [], []

    def flush():
        if cur:
            subs, res, notes = parse_topic_body(body)
            cur.update(subtopics=subs, resources=res, notes=notes)
            found.append(cur)

    for line in lines[1:]:
        if m := TOPIC_HEAD_RE.match(line):
            flush()
            cur, body = {"id": m[1], "title": m[2].strip(), "priority": m[3]}, []
        elif cur:
            body.append(line)
        else:
            intro.append(line)
    flush()
    return title, found


def main():
    domains, tax = parse_taxonomy()
    out_topics = {}
    for d in domains:
        # index every topic found in this domain's files by ID
        file_topics, file_of = {}, {}
        for f in sorted((ROOT / f"Domain-{d['num']}").glob("*.md")):
            for t in parse_category_file(f)[1]:
                file_topics[t["id"]] = t
                file_of[t["id"]] = str(f.relative_to(ROOT))
        if d["num"] in SCORED_SOURCES:
            # scored research files replace resources (and notes) for the topics they cover
            for f in sorted(SCORED_SOURCES[d["num"]].glob("*.md")):
                for t in parse_category_file(f)[1]:
                    if t["id"] in file_topics and t["resources"]:
                        file_topics[t["id"]].update(resources=rank_by_score(t["resources"]),
                                                    notes=t["notes"])
        placed = set()
        for cat in d["categories"]:
            files = [file_of[t] for t in cat["topics"] if t in file_of]
            cat["file"] = max(set(files), key=files.count) if files else None
            # topics only present in the file go to the category that owns the file
            extra = [t for t, f in file_of.items()
                     if f == cat["file"] and t not in tax and t not in placed]
            ids = cat["topics"] + extra
            for tid in ids:
                placed.add(tid)
                base = tax.get(tid, {})
                ft = file_topics.get(tid, {})
                out_topics[tid] = {
                    "id": tid,
                    "title": base.get("title") or ft.get("title", tid),
                    "priority": base.get("priority") or ft.get("priority") or "P2",
                    "new": base.get("new", False),
                    "subtopics": base.get("subtopics") or ft.get("subtopics", []),
                    "resources": ft.get("resources", []),
                    "notes": ft.get("notes", []),
                    "domain": d["num"],
                    "category": cat["num"],
                }
            cat["topics"] = ids
        lost = set(file_topics) - placed
        if lost:
            print("WARNING: topics in files but not placed:", sorted(lost))
    data = {"domains": domains, "topics": out_topics}
    (ROOT / "data.json").write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")))
    n_res = sum(len(t["resources"]) for t in out_topics.values())
    empty = [t for t, v in out_topics.items() if not v["resources"]]
    print(f"{len(domains)} domains, {sum(len(d['categories']) for d in domains)} categories, "
          f"{len(out_topics)} topics, {n_res} resources; {len(empty)} topics without resources: {empty}")


if __name__ == "__main__":
    main()
