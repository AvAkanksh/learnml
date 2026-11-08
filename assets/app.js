(() => {
  "use strict";

  const app = document.getElementById("app");
  const PRIS = ["P0", "P1", "P2", "P3"];
  const PRI_INFO = {
    P0: ["Core", "Comes up in most interviews for the domain. Be ready to derive or explain it from scratch."],
    P1: ["Frequent", "Standard follow-up territory, or a common first question for the relevant role."],
    P2: ["Role-specific", "Asked mainly for specialised roles: inference/infra, research, CV, RL."],
    P3: ["Niche / depth", "Rarely a first question. Knowing it signals depth."],
  };
  let DATA = null;
  let order = [];            // all topic ids in curriculum order
  const ui = { pri: new Set(), hideDone: false };

  // ---------- storage (wrapped: may be unavailable) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("learnml." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("learnml." + k, JSON.stringify(v)); } catch (e) {} },
  };
  let done = new Set(store.get("done", []));
  let visited = new Set(store.get("visited", []));
  const saveDone = () => store.set("done", [...done]);
  const toggleDone = (id) => { done.has(id) ? done.delete(id) : done.add(id); saveDone(); };

  // ---------- helpers ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
  const T = (id) => DATA.topics[id];
  const domainOf = (n) => DATA.domains.find((d) => d.num === +n);
  const catOf = (t) => domainOf(t.domain).categories.find((c) => c.num === t.category);
  const cleanCat = (s) => s.replace(/\s*\(cross-ref[^)]*\)/i, "");
  const fmt = (n) => n.toLocaleString("en-US");
  const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
  const domainTopics = (d) => d.categories.flatMap((c) => c.topics);
  const countDone = (ids) => ids.filter((i) => done.has(i)).length;
  const priChip = (p) => `<span class="pri ${p}">${p}</span>`;
  const checkSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
  const chev = `<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>`;
  const ring = (a, b) => {
    const r = 9, c = 2 * Math.PI * r, f = b ? a / b : 0;
    return `<svg class="mini-ring" viewBox="0 0 22 22"><circle cx="11" cy="11" r="${r}" fill="none" stroke="var(--line)" stroke-width="2.5"/>
      <circle cx="11" cy="11" r="${r}" fill="none" stroke="${f === 1 ? "var(--ok)" : "var(--accent)"}" stroke-width="2.5"
      stroke-dasharray="${c * f} ${c}" transform="rotate(-90 11 11)" stroke-linecap="round"/></svg>`;
  };
  const priBar = (ids) => {
    const n = ids.length;
    return `<div class="pri-bar">${PRIS.map((p) => {
      const k = ids.filter((i) => T(i).priority === p).length;
      return k ? `<i style="width:${(100 * k) / n}%;background:var(--${p.toLowerCase()})" title="${p}: ${k}"></i>` : "";
    }).join("")}</div>`;
  };

  // ---------- views ----------
  function viewHome() {
    const all = order.length;
    const nRes = order.reduce((s, i) => s + T(i).resources.length, 0);
    const nCats = DATA.domains.reduce((s, d) => s + d.categories.length, 0);
    const d0 = countDone(order);
    const last = store.get("last", null);
    const nextP0 = order.find((i) => T(i).priority === "P0" && !done.has(i));
    const resume = last && T(last) ? last : nextP0;

    return `
    <section class="hero">
      <div>
        <div class="eyebrow">ML Interview Field Guide · 7 domains</div>
        <h1>Learn machine learning, <em>in the order interviews ask it.</em></h1>
        <p class="lede">${fmt(all)} topics, from logistic regression to KV caches, ranked P0 to P3 by how often they come up. Each topic links to the best blogs, tutorials and course notes we found for it.</p>
        <div class="btn-row">
          <a class="btn primary" href="#/path/P0">Start with the P0 core →</a>
          <a class="btn" href="#/curriculum">Explore the curriculum</a>
        </div>
      </div>
      <div class="plate">
        <div class="plate-label"><span>Fig. 01 — Your progress</span><span>${pct(d0, all)}%</span></div>
        <div class="stat-grid">
          <div class="stat"><b>${d0}</b><span>of ${fmt(all)} topics done</span></div>
          <div class="stat"><b>${countDone(order.filter((i) => T(i).priority === "P0"))}</b><span>of ${order.filter((i) => T(i).priority === "P0").length} P0 topics</span></div>
          <div class="stat"><b>${fmt(nRes)}</b><span>curated resources</span></div>
          <div class="stat"><b>${nCats}</b><span>categories</span></div>
        </div>
        <div class="progress"><i style="width:${pct(d0, all)}%"></i></div>
        <div class="plate-foot">
          <span>Saved in this browser only</span>
          ${d0 ? `<button class="link-btn" data-act="reset">Reset progress</button>` : ""}
        </div>
        ${resume ? `<a class="btn" style="margin-top:14px;width:100%;justify-content:space-between" href="#/topic/${resume}">
          <span>${last && T(last) ? "Continue" : "Next up"}: ${esc(T(resume).title)}</span><span>→</span></a>` : ""}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Seven domains</h2><span class="fig">Fig. 02 — Classical → Modern</span></div>
      <div class="domain-grid">${DATA.domains.map(domainCard).join("")}</div>
    </section>

    <section class="section">
      <div class="section-head"><h2>How priority works</h2><span class="fig">Fig. 03 — Tiers</span></div>
      <div class="legend">${PRIS.map((p) => `
        <a class="plate" href="#/path/${p}" style="text-decoration:none">
          <div style="display:flex;justify-content:space-between;align-items:center">${priChip(p)}<span class="cat-count">${order.filter((i) => T(i).priority === p).length} topics</span></div>
          <h3 style="font-family:var(--serif);margin:10px 0 0;font-size:18px">${PRI_INFO[p][0]}</h3>
          <p>${PRI_INFO[p][1]}</p>
        </a>`).join("")}</div>
      <p style="color:var(--muted);font-size:13px;margin-top:14px">Tiers are an editorial judgement based on common interview patterns for MLE, Applied Scientist, Research Scientist and LLM roles. They aren't computed from a dataset of real questions.</p>
    </section>`;
  }

  function domainCard(d) {
    const ids = domainTopics(d);
    const k = countDone(ids);
    const nRes = ids.reduce((s, i) => s + T(i).resources.length, 0);
    return `<a class="plate domain-card" href="#/domain/${d.num}">
      <div class="plate-label"><span>Domain ${d.num} · ${esc(d.prefix)}</span><span>${k}/${ids.length}</span></div>
      <div style="display:flex;gap:14px;align-items:flex-end">
        <span class="domain-num">${String(d.num).padStart(2, "0")}</span>
        <h3>${esc(d.name)}</h3>
      </div>
      <p>${esc(d.audience.split(/(?<=\.)\s/)[0])}</p>
      ${priBar(ids)}
      <div class="meta-row"><span>${d.categories.length} categories</span><span>${ids.length} topics</span><span>${fmt(nRes)} resources</span></div>
      <div class="progress"><i style="width:${pct(k, ids.length)}%"></i></div>
    </a>`;
  }

  function filtersBar() {
    return `<div class="filters">
      <button class="filter ${ui.pri.size ? "" : "on"}" data-act="pri" data-p="">All</button>
      ${PRIS.map((p) => `<button class="filter ${ui.pri.has(p) ? "on" : ""}" data-act="pri" data-p="${p}">${p} · ${PRI_INFO[p][0]}</button>`).join("")}
      <span class="sep"></span>
      <button class="filter ${ui.hideDone ? "on" : ""}" data-act="hideDone">Hide done</button>
    </div>`;
  }
  const passes = (id) => (!ui.pri.size || ui.pri.has(T(id).priority)) && !(ui.hideDone && done.has(id));

  function topicRow(id) {
    const t = T(id);
    return `<a class="topic-row ${done.has(id) ? "is-done" : ""}" href="#/topic/${id}">
      <button class="check ${done.has(id) ? "on" : ""}" data-act="done" data-id="${id}" aria-label="Mark done">${checkSvg}</button>
      <span class="tid">${id}</span>
      <span class="ttl"><span>${esc(t.title)}</span> ${t.new ? `<span class="tag-new">new</span>` : ""}
        <small>${esc(t.subtopics.join(" · "))}</small></span>
      <span class="rc">${t.resources.length} res.</span>
      ${priChip(t.priority)}
    </a>`;
  }

  function categoryBlock(c, open) {
    const ids = c.topics.filter(passes);
    if (!ids.length) return "";
    return `<details class="cat" data-cat="${c.num}" ${open ? "open" : ""}>
      <summary>${chev}<span class="cat-num">${c.num}</span><span class="cat-name">${esc(cleanCat(c.name))}</span>
        <span class="cat-count">${countDone(c.topics)}/${c.topics.length}</span>${ring(countDone(c.topics), c.topics.length)}</summary>
      <div class="topic-list">${ids.map(topicRow).join("")}</div>
    </details>`;
  }

  function viewDomain(n) {
    const d = domainOf(n);
    if (!d) return notFound();
    const ids = domainTopics(d);
    const k = countDone(ids);
    const filtering = ui.pri.size || ui.hideDone;
    const body = d.categories.map((c, i) => categoryBlock(c, filtering || i === 0)).join("");
    const prev = domainOf(d.num - 1), next = domainOf(d.num + 1);
    return `
      <div class="crumbs"><a href="#/">Home</a>/<a href="#/curriculum">Curriculum</a>/<span>Domain ${d.num}</span></div>
      <div class="page-head">
        <div class="eyebrow">Domain ${d.num} · prefix ${esc(d.prefix)}</div>
        <h1>${esc(d.name)}</h1>
        <p>${esc(d.audience)}</p>
        <div class="head-progress"><span>${k}/${ids.length} done</span><div class="progress"><i style="width:${pct(k, ids.length)}%"></i></div><span>${pct(k, ids.length)}%</span></div>
      </div>
      ${filtersBar()}
      ${body || `<div class="empty">No topics match these filters.</div>`}
      <div class="pager">
        ${prev ? `<a href="#/domain/${prev.num}"><small>← Domain ${prev.num}</small>${esc(prev.name)}</a>` : ""}
        ${next ? `<a class="next" href="#/domain/${next.num}"><small>Domain ${next.num} →</small>${esc(next.name)}</a>` : ""}
      </div>`;
  }

  function viewCurriculum() {
    const k = countDone(order);
    return `
      <div class="crumbs"><a href="#/">Home</a>/<span>Curriculum</span></div>
      <div class="page-head">
        <div class="eyebrow">Full curriculum</div>
        <h1>Every topic, by domain</h1>
        <p>Categories inside each domain are ordered by importance, and topics inside each category run P0 → P3. Click a category to expand it.</p>
        <div class="head-progress"><span>${k}/${order.length} done</span><div class="progress"><i style="width:${pct(k, order.length)}%"></i></div><span>${pct(k, order.length)}%</span></div>
      </div>
      ${filtersBar()}
      ${DATA.domains.map((d) => {
        const blocks = d.categories.map((c) => categoryBlock(c, !!(ui.pri.size || ui.hideDone))).join("");
        if (!blocks) return "";
        const ids = domainTopics(d);
        return `<section class="section" style="padding-top:20px">
          <div class="section-head"><h2><a href="#/domain/${d.num}" style="text-decoration:none">${d.num}. ${esc(d.name)}</a></h2>
          <span class="fig">${countDone(ids)}/${ids.length} · ${d.categories.length} categories</span></div>${blocks}</section>`;
      }).join("") || `<div class="empty">No topics match these filters.</div>`}`;
  }

  function viewPath(p) {
    if (!PRIS.includes(p)) p = "P0";
    const ids = order.filter((i) => T(i).priority === p);
    const k = countDone(ids);
    const groups = DATA.domains.map((d) => {
      const di = ids.filter((i) => T(i).domain === d.num && !(ui.hideDone && done.has(i)));
      if (!di.length) return "";
      return `<details class="cat" open><summary>${chev}<span class="cat-num">D${d.num}</span><span class="cat-name">${esc(d.name)}</span>
        <span class="cat-count">${countDone(di)}/${di.length}</span>${ring(countDone(di), di.length)}</summary>
        <div class="topic-list">${di.map(topicRow).join("")}</div></details>`;
    }).join("");
    return `
      <div class="crumbs"><a href="#/">Home</a>/<span>Study path</span></div>
      <div class="page-head">
        <div class="eyebrow">Study path · ${p}</div>
        <h1>${PRI_INFO[p][0]} topics</h1>
        <p>${PRI_INFO[p][1]} Suggested order: finish every P0 in your target domains, then P1, then P2 only for specialised roles.</p>
        <div class="head-progress"><span>${k}/${ids.length} done</span><div class="progress"><i style="width:${pct(k, ids.length)}%"></i></div><span>${pct(k, ids.length)}%</span></div>
      </div>
      <div class="filters">
        ${PRIS.map((q) => `<a class="filter ${q === p ? "on" : ""}" style="text-decoration:none" href="#/path/${q}">${q} · ${PRI_INFO[q][0]}</a>`).join("")}
        <span class="sep"></span>
        <button class="filter ${ui.hideDone ? "on" : ""}" data-act="hideDone">Hide done</button>
      </div>
      ${groups || `<div class="empty">All done here. 🎉</div>`}`;
  }

  function viewTopic(id) {
    const t = T(id);
    if (!t) return notFound();
    store.set("last", id);
    const d = domainOf(t.domain), c = catOf(t);
    const idx = order.indexOf(id);
    const prev = T(order[idx - 1]), next = T(order[idx + 1]);
    const res = t.resources.map((r, i) => {
      const meta = [r.type && `<span class="chip">${esc(r.type)}</span>`,
        r.access && `<span class="chip">${esc(r.access)}</span>`,
        r.score && `<span class="score">score ${esc(r.score)}</span>`].filter(Boolean).join("");
      return `<a class="res ${i < 3 ? "top" : ""} ${visited.has(r.url) ? "visited" : ""}" href="${esc(r.url)}" target="_blank" rel="noopener" data-url="${esc(r.url)}">
        <span class="res-rank">${esc(r.rank || i + 1)}</span>
        <div><h4>${inline(r.title)}</h4>
          <div class="host"><span>${esc(host(r.url))} ↗</span>${meta}</div>
          ${r.notes ? `<p>${inline(r.notes)}</p>` : ""}</div>
      </a>`;
    }).join("");
    const isDone = done.has(id);
    return `
      <div class="crumbs"><a href="#/">Home</a>/<a href="#/domain/${d.num}">${d.num}. ${esc(d.name)}</a>/<span>${c.num} ${esc(cleanCat(c.name))}</span></div>
      <div class="page-head">
        <div class="topic-head-meta">${priChip(t.priority)}<span>${id}</span>${t.new ? `<span class="tag-new">new</span>` : ""}<span>· ${t.resources.length} resources</span></div>
        <h1>${esc(t.title)}</h1>
        <div class="subtopics">${t.subtopics.map((s) => `<span class="chip">${inline(s)}</span>`).join("")}</div>
        <div class="btn-row" style="margin-top:20px">
          <button class="btn ${isDone ? "done" : "primary"}" data-act="done" data-id="${id}">${isDone ? "✓ Done" : "Mark as done"}</button>
          ${t.resources[0] ? `<a class="btn" href="${esc(t.resources[0].url)}" target="_blank" rel="noopener" data-url="${esc(t.resources[0].url)}">Open top resource ↗</a>` : ""}
        </div>
      </div>
      <div class="topic-layout">
        <div>
          ${res ? `<div class="res-list">${res}</div>` : `<div class="plate empty">No resources collected for this topic yet.</div>`}
          ${t.notes.length ? `<details class="notes"><summary>Research notes for this topic</summary>${t.notes.map((n) => `<div>${inline(n)}</div>`).join("")}</details>` : ""}
          <div class="pager">
            ${prev ? `<a href="#/topic/${prev.id}"><small>← Previous</small>${esc(prev.title)}</a>` : ""}
            ${next ? `<a class="next" href="#/topic/${next.id}"><small>Next →</small>${esc(next.title)}</a>` : ""}
          </div>
        </div>
        <aside class="side">
          <div class="plate">
            <h5>${c.num} · ${esc(cleanCat(c.name))}</h5>
            <ul class="side-list">${c.topics.map((i) => `<li><a href="#/topic/${i}" class="${i === id ? "cur" : ""} ${done.has(i) ? "done-l" : ""}">
              <span class="dot ${done.has(i) ? "on" : ""}"></span><span style="flex:1">${esc(T(i).title)}</span>${priChip(T(i).priority)}</a></li>`).join("")}</ul>
          </div>
          <div class="plate">
            <h5>Domain ${d.num} categories</h5>
            <ul class="side-list">${d.categories.map((x) => `<li><a href="#/topic/${x.topics[0]}" class="${x.num === c.num ? "cur" : ""}">
              <span style="font-family:var(--mono);font-size:11px;color:var(--muted);width:34px">${x.num}</span><span style="flex:1">${esc(cleanCat(x.name))}</span>
              <span style="font-size:11px;color:var(--muted)">${countDone(x.topics)}/${x.topics.length}</span></a></li>`).join("")}</ul>
          </div>
        </aside>
      </div>`;
  }

  const notFound = () => `<div class="empty" style="padding:120px 0"><h2 style="font-family:var(--serif)">Page not found</h2><a class="btn" href="#/">Go home</a></div>`;

  // ---------- router ----------
  function render(keepScroll) {
    const [, page, arg] = (location.hash.replace(/^#/, "") || "/").split("/");
    const y = window.scrollY;
    let html, nav = page || "home";
    if (!page) html = viewHome();
    else if (page === "curriculum") html = viewCurriculum();
    else if (page === "domain") { html = viewDomain(arg); nav = "curriculum"; }
    else if (page === "path") html = viewPath(arg);
    else if (page === "topic") { html = viewTopic(decodeURIComponent(arg || "")); nav = "curriculum"; }
    else html = notFound();
    // keep open/closed state of categories across re-renders
    const openState = keepScroll ? new Map([...app.querySelectorAll("details.cat[data-cat]")].map((el) => [el.dataset.cat, el.open])) : null;
    app.innerHTML = html;
    if (openState) app.querySelectorAll("details.cat[data-cat]").forEach((el) => { if (openState.has(el.dataset.cat)) el.open = openState.get(el.dataset.cat); });
    document.querySelectorAll(".topnav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === nav));
    const t = page === "topic" && T(arg) ? T(arg).title + " — " : page === "domain" && domainOf(arg) ? domainOf(arg).name + " — " : "";
    document.title = t + "Learn ML";
    window.scrollTo(0, keepScroll ? y : 0);
  }
  window.addEventListener("hashchange", () => render(false));

  // ---------- actions ----------
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    const link = e.target.closest("a[data-url]");
    if (link && !el) { visited.add(link.dataset.url); store.set("visited", [...visited]); link.classList.add("visited"); }
    if (!el) return;
    const act = el.dataset.act;
    if (act === "done") { e.preventDefault(); e.stopPropagation(); toggleDone(el.dataset.id); render(true); }
    else if (act === "pri") { const p = el.dataset.p; if (!p) ui.pri.clear(); else ui.pri.has(p) ? ui.pri.delete(p) : ui.pri.add(p); render(true); }
    else if (act === "hideDone") { ui.hideDone = !ui.hideDone; render(true); }
    else if (act === "reset") { if (confirm("Reset all progress?")) { done.clear(); saveDone(); render(true); } }
  });

  // theme
  document.getElementById("themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.dataset.theme = cur === "dark" ? "light" : "dark";
    try { localStorage.setItem("learnml.theme", root.dataset.theme); } catch (e) {}
  });

  // ---------- search ----------
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  let sel = 0, hits = [];
  const openSearch = () => { overlay.hidden = false; input.value = ""; runSearch(); input.focus(); };
  const closeSearch = () => { overlay.hidden = true; };
  document.getElementById("openSearch").addEventListener("click", openSearch);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
  results.addEventListener("click", (e) => { if (e.target.closest("a")) closeSearch(); });
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === "/" && !typing) || (e.key === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); openSearch(); }
    else if (e.key === "Escape" && !overlay.hidden) closeSearch();
    else if (!overlay.hidden && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      e.preventDefault(); sel = Math.max(0, Math.min(hits.length - 1, sel + (e.key === "ArrowDown" ? 1 : -1))); paint();
    } else if (!overlay.hidden && e.key === "Enter" && hits[sel]) { location.hash = "#/topic/" + hits[sel].id; closeSearch(); }
  });
  input.addEventListener("input", runSearch);

  let index = null;
  function buildIndex() {
    index = order.map((id) => {
      const t = T(id);
      return { id, title: t.title.toLowerCase(), subs: t.subtopics.join(" · ").toLowerCase(),
        res: t.resources.map((r) => r.title).join(" · ").toLowerCase(), all: (id + " " + cleanCat(catOf(t).name)).toLowerCase() };
    });
  }
  const hl = (s, words) => {
    let h = esc(s);
    words.forEach((w) => { if (w.length > 1) h = h.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
    return h;
  };
  function runSearch() {
    const q = input.value.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    sel = 0;
    if (!words.length) {
      hits = order.filter((i) => T(i).priority === "P0" && !done.has(i)).slice(0, 8).map((id) => ({ id, why: "" }));
      paint("Suggested · next P0 topics", words); return;
    }
    hits = [];
    for (const it of index) {
      let score = 0, why = "";
      for (const w of words) {
        const re = new RegExp("\\b" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        const m = (txt, strong, weak) => (re.test(txt) ? strong : txt.includes(w) ? weak : 0);
        let s;
        if ((s = m(it.title, it.title.startsWith(w) ? 12 : 8, 2))) score += s;
        else if ((s = m(it.subs, 4, 1))) { score += s; why = why || "sub"; }
        else if ((s = m(it.all, 3, 1))) score += s;
        else if ((s = m(it.res, 1.5, 0.5))) { score += s; why = why || "res"; }
        else { score = 0; break; }
      }
      if (score) hits.push({ id: it.id, score, why });
    }
    hits.sort((a, b) => b.score - a.score || PRIS.indexOf(T(a.id).priority) - PRIS.indexOf(T(b.id).priority));
    hits = hits.slice(0, 40);
    paint(hits.length ? `${hits.length}${hits.length === 40 ? "+" : ""} topics` : "", words);
  }
  function paint(head, words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean)) {
    if (!hits.length) { results.innerHTML = `<div class="empty">No matches.</div>`; return; }
    results.innerHTML = (head !== undefined ? `<div class="sr-head">${esc(head)}</div>` : results.querySelector(".sr-head")?.outerHTML || "") +
      hits.map((h, i) => {
        const t = T(h.id);
        let sub = t.subtopics.join(" · ");
        if (h.why === "res") { const r = t.resources.find((r) => words.some((w) => r.title.toLowerCase().includes(w))); if (r) sub = "Resource: " + r.title; }
        return `<a class="sr ${i === sel ? "sel" : ""}" href="#/topic/${h.id}"><span class="tid">${h.id}</span>
          <span class="ttl">${hl(t.title, words)}<small>${hl(sub, words)}</small></span>${priChip(t.priority)}</a>`;
      }).join("");
    results.querySelector(".sr.sel")?.scrollIntoView({ block: "nearest" });
  }

  // ---------- boot ----------
  fetch("data.json").then((r) => r.json()).then((d) => {
    DATA = d;
    order = DATA.domains.flatMap(domainTopics);
    buildIndex();
    render(false);
  }).catch(() => { app.innerHTML = `<div class="empty">Couldn't load data.json. If you opened this file directly, serve it with <code>python3 -m http.server</code>.</div>`; });
})();
