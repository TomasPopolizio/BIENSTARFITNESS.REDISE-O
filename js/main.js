/* =========================================================
   BIENSTAR FITNESS — Interacciones
   ========================================================= */
(function () {
  "use strict";

  const D = window.BIENSTAR;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const DAYS_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const waLink = (msg) => `https://wa.me/${D.contacto.whatsapp}?text=${encodeURIComponent(msg)}`;

  // Hora actual en Buenos Aires, sin importar dónde esté quien mira el sitio
  function nowBA() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10) };
  }
  const toMin = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };
  const NOW = nowBA();

  const slotLabel = (s) => (s.tipo === "circuito" ? `Circuito · ${D.circuitoFoco[s.dia]}` : D.tipoLabel[s.tipo]);

  document.documentElement.classList.remove("no-js");

  /* ---------- Links globales ---------- */
  $$(".js-wa").forEach((a) => {
    a.href = waLink(a.dataset.msg || "¡Hola! 💛");
    a.target = "_blank";
    a.rel = "noopener";
  });
  $("#cAddress").textContent = `${D.contacto.direccion}, ${D.contacto.localidad}`;
  const phone = $("#cPhone");
  phone.textContent = D.contacto.telefono;
  phone.href = waLink("¡Hola! Quisiera hacer una consulta 💛");
  phone.target = "_blank";
  $("#directions").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(D.contacto.mapsQuery)}`;
  $("#map").src = `https://www.google.com/maps?q=${encodeURIComponent(D.contacto.mapsQuery)}&output=embed`;
  $("#igLink").href = D.contacto.instagram;
  $("#igTutorial").href = D.contacto.instagram;
  $("#appLink").href = D.contacto.appTurnos;
  $("#vipPrice").textContent = D.vipPrecio;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    links.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- Abierto / cerrado ---------- */
  (function status() {
    const el = $("#status");
    const txt = $(".status__text", el);
    const today = D.horarioAtencion[NOW.day];
    const open = today && NOW.minutes >= today[0] * 60 && NOW.minutes < today[1] * 60;
    if (open) {
      el.classList.add("is-open");
      txt.textContent = `Abierto ahora · hasta las ${today[1]} h`;
    } else {
      el.classList.add("is-closed");
      let d = NOW.day;
      for (let i = 0; i < 7; i++) {
        const h = D.horarioAtencion[d];
        if (h && (d !== NOW.day || NOW.minutes < h[0] * 60)) {
          const when = d === NOW.day ? "hoy" : d === (NOW.day + 1) % 7 ? "mañana" : `el ${DAYS[d].toLowerCase()}`;
          txt.textContent = `Cerrado · abre ${when} a las ${h[0]} h`;
          return;
        }
        d = (d + 1) % 7;
      }
      txt.textContent = "Cerrado";
    }
  })();

  /* ---------- Próxima clase (hero) ---------- */
  (function nextClass() {
    const box = $("#nextClass");
    for (let i = 0; i < 7; i++) {
      const d = (NOW.day + i) % 7;
      const list = D.horarios
        .filter((s) => s.dia === d && (i > 0 || toMin(s.hora) > NOW.minutes))
        .sort((a, b) => toMin(a.hora) - toMin(b.hora));
      if (list.length) {
        const t = list[0].hora;
        const same = list.filter((s) => s.hora === t);
        const when = i === 0 ? "Hoy" : i === 1 ? "Mañana" : DAYS[d];
        box.innerHTML = `<span class="next-class__time">${esc(t)}</span><span><small>Próxima clase · ${esc(when)}</small>${same
          .map((s) => `${esc(slotLabel(s))} <span style="color:var(--ink-soft)">· Sala ${s.sala}</span>`)
          .join("<br/>")}</span>`;
        box.hidden = false;
        return;
      }
    }
  })();

  /* ---------- Clases ---------- */
  const ICONS = {
    reformer:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 34h40M8 34v6M40 34v6M40 22v12"/><rect x="12" y="29" width="14" height="5" rx="2"/><circle cx="14" cy="21" r="3"/><path d="M17 24c4-6 10-6 14 0l6 5"/></svg>',
    circuito:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="24" cy="24" r="16" stroke-dasharray="5 5"/><circle cx="24" cy="8" r="4" fill="currentColor"/><circle cx="38" cy="30" r="4"/><circle cx="10" cy="30" r="4"/><path d="M20 24h8"/></svg>',
    funcional:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 24h36"/><rect x="8" y="16" width="6" height="16" rx="2"/><rect x="34" y="16" width="6" height="16" rx="2"/><rect x="3" y="19" width="5" height="10" rx="1.5"/><rect x="40" y="19" width="5" height="10" rx="1.5"/></svg>',
  };
  $("#classesGrid").innerHTML = D.clases
    .map(
      (c) => `
      <article class="class-card reveal">
        <span class="class-card__room">Sala ${c.sala}</span>
        <div class="class-card__icon" aria-hidden="true">${ICONS[c.id] || ""}</div>
        <h3>${esc(c.nombre)}</h3>
        <p class="class-card__sub">${esc(c.resumen)}</p>
        <p>${esc(c.descripcion)}</p>
        <div class="tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <a class="class-card__link" href="#horarios" data-room="${c.sala}">Ver horarios →</a>
      </article>`
    )
    .join("");

  /* ---------- Horarios ---------- */
  const state = { room: 1, day: NOW.day >= 1 && NOW.day <= 5 ? NOW.day : 1 };
  const dayTabs = $("#dayTabs");
  const roomTabs = $("#roomTabs");

  function renderDays() {
    dayTabs.innerHTML = [1, 2, 3, 4, 5]
      .map((d) => {
        const count = D.horarios.filter((s) => s.sala === state.room && s.dia === d).length;
        return `<button role="tab" data-day="${d}" aria-selected="${d === state.day}">
          ${DAYS_SHORT[d]}<small>${count} clases</small>${d === NOW.day ? '<span class="today" title="Hoy"></span>' : ""}
        </button>`;
      })
      .join("");
  }

  function renderSlots() {
    const list = D.horarios
      .filter((s) => s.sala === state.room && s.dia === state.day)
      .sort((a, b) => toMin(a.hora) - toMin(b.hora));
    const isToday = state.day === NOW.day;
    const nextTime = isToday ? (list.find((s) => toMin(s.hora) > NOW.minutes) || {}).hora : null;

    $("#dayFocus").innerHTML =
      state.room === 2
        ? `${DAYS[state.day]} · foco <em>${esc(D.circuitoFoco[state.day])}</em>`
        : `${DAYS[state.day]} · <em>turno mañana y tarde</em>`;

    $("#slots").innerHTML = list.length
      ? list
          .map((s, i) => {
            const cls = ["slot", `slot--${s.tipo}`];
            if (isToday && toMin(s.hora) + 50 <= NOW.minutes) cls.push("is-past");
            if (s.hora === nextTime) cls.push("is-next");
            const name = s.tipo === "circuito" ? "Pilates Circuito" : D.tipoLabel[s.tipo];
            const sub = s.tipo === "circuito" ? D.circuitoFoco[s.dia] : "50 min · turno fijo";
            return `<li class="${cls.join(" ")}" style="animation-delay:${i * 35}ms">
              <span class="slot__time">${esc(s.hora)}</span>
              <span class="slot__name">${esc(name)}<small>${esc(sub)}</small></span>
            </li>`;
          })
          .join("")
      : `<li class="slot">Sin clases este día.</li>`;
  }

  function setRoom(room) {
    state.room = room;
    $$("button", roomTabs).forEach((b) => b.setAttribute("aria-selected", String(+b.dataset.room === room)));
    renderDays();
    renderSlots();
  }

  roomTabs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) setRoom(+b.dataset.room);
  });
  dayTabs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    state.day = +b.dataset.day;
    $$("button", dayTabs).forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    renderSlots();
  });
  $$("[data-room]", $("#classesGrid")).forEach((a) => a.addEventListener("click", () => setRoom(+a.dataset.room)));
  renderDays();
  renderSlots();

  /* ---------- Quiz ---------- */
  const QUIZ = [
    {
      q: "¿Qué buscás principalmente?",
      opts: [
        { t: "Mejorar mi postura y cuidar mi espalda", e: "🌿", s: { reformer: 3 } },
        { t: "Tonificar y ganar fuerza", e: "💪", s: { power: 2, circuito: 1 } },
        { t: "Moverme, sudar y tener más energía", e: "⚡", s: { funcional: 3 } },
        { t: "Variedad: que cada día sea distinto", e: "✨", s: { circuito: 3 } },
      ],
    },
    {
      q: "¿Cómo preferís organizarte?",
      opts: [
        { t: "Siempre el mismo día y horario", e: "📌", s: { reformer: 1, power: 1, funcional: 1 } },
        { t: "Elegir mis clases semana a semana", e: "📲", s: { circuito: 2 } },
      ],
    },
    {
      q: "¿En qué momento del día te queda mejor?",
      opts: [
        { t: "A la mañana", e: "☀️", p: "m" },
        { t: "A la siesta / tarde temprano", e: "🌤️", p: "t" },
        { t: "Después del trabajo", e: "🌙", p: "n" },
      ],
    },
  ];
  const RESULTS = {
    reformer: { name: "Pilates Reformer", room: 1, txt: "Control, conciencia corporal y fluidez en Reformer, Chair, Cadillac y más. Ideal para cuidar tu postura con turno fijo y grupos reducidos." },
    power: { name: "Pilates Power", room: 1, txt: "La versión más intensa del método: fuerza y tonificación sin perder el control y la técnica del Pilates." },
    funcional: { name: "Entrenamiento Funcional", room: 1, txt: "Fuerza, potencia y resistencia con patrones naturales de movimiento. Clases dinámicas que se adaptan a tu ritmo." },
    circuito: { name: "Pilates Circuito", room: 2, txt: "Estaciones con un foco distinto cada día y turnos libres que reservás vos desde la app." },
  };
  const inPeriod = (hora, p) => {
    const m = toMin(hora);
    return p === "m" ? m < 13 * 60 : p === "t" ? m >= 13 * 60 && m < 17 * 60 : m >= 17 * 60;
  };

  const quizCard = $("#quizCard");
  let qi = 0;
  let score = {};
  let period = null;

  function progress() {
    return `<div class="quiz__progress">${QUIZ.map((_, i) => `<span class="${i <= qi ? "is-done" : ""}"></span>`).join("")}</div>`;
  }

  function renderQ() {
    const Q = QUIZ[qi];
    quizCard.innerHTML = `${progress()}
      <p class="quiz__q">${esc(Q.q)}</p>
      <div class="quiz__opts">${Q.opts
        .map((o, i) => `<button class="quiz__opt" data-i="${i}"><span aria-hidden="true">${o.e}</span>${esc(o.t)}</button>`)
        .join("")}</div>`;
  }

  function renderResult() {
    const best = Object.keys(RESULTS).sort((a, b) => (score[b] || 0) - (score[a] || 0))[0];
    const R = RESULTS[best];
    let slots = D.horarios.filter((s) => s.tipo === best && inPeriod(s.hora, period));
    let note = "";
    if (!slots.length) {
      slots = D.horarios.filter((s) => s.tipo === best);
      note = " (en ese momento del día no hay, te mostramos todos)";
    }
    slots.sort((a, b) => a.dia - b.dia || toMin(a.hora) - toMin(b.hora));
    const times = slots.slice(0, 10).map((s) => `${DAYS_SHORT[s.dia]} ${s.hora}`);
    const msg = `¡Hola! Hice el test en la web y me recomendó ${R.name} (Sala ${R.room}). Quisiera reservar una clase 💛`;
    quizCard.innerHTML = `<div class="quiz__result">
      <small>Tu clase ideal · Sala ${R.room}</small>
      <h3>${esc(R.name)}</h3>
      <p>${esc(R.txt)}</p>
      <p style="margin-bottom:10px;font-size:.9rem">Horarios sugeridos${esc(note)}:</p>
      <div class="quiz__times">${times.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="quiz__actions">
        <a class="btn btn--primary" href="${waLink(msg)}" target="_blank" rel="noopener">Reservar por WhatsApp</a>
        <button class="quiz__restart" type="button">Hacer el test de nuevo</button>
      </div>
    </div>`;
  }

  quizCard.addEventListener("click", (e) => {
    if (e.target.closest(".quiz__restart")) {
      qi = 0; score = {}; period = null;
      renderQ();
      return;
    }
    const b = e.target.closest(".quiz__opt");
    if (!b) return;
    const o = QUIZ[qi].opts[+b.dataset.i];
    if (o.s) Object.entries(o.s).forEach(([k, v]) => (score[k] = (score[k] || 0) + v));
    if (o.p) period = o.p;
    qi++;
    qi < QUIZ.length ? renderQ() : renderResult();
    const first = $(".quiz__opt, .quiz__result a", quizCard);
    if (first) first.focus({ preventScroll: true });
  });
  renderQ();

  /* ---------- Opiniones ---------- */
  const reviews = $("#reviews");
  reviews.innerHTML = D.opiniones
    .map(
      (r) => `
      <article class="review">
        <div class="review__stars" aria-label="5 estrellas">★★★★★</div>
        <blockquote>“${esc(r.texto)}”</blockquote>
        ${r.respuesta ? `<div class="review__reply"><b>Respuesta de Bienstar:</b> ${esc(r.respuesta)}</div>` : ""}
        <div class="review__author">
          <span class="review__avatar" aria-hidden="true">${esc(r.autor.charAt(0))}</span>
          <span>${esc(r.autor)}<small>Opinión en Google</small></span>
        </div>
      </article>`
    )
    .join("");
  const step = () => (reviews.firstElementChild ? reviews.firstElementChild.offsetWidth + 18 : 300);
  $("#prevReview").addEventListener("click", () => reviews.scrollBy({ left: -step(), behavior: "smooth" }));
  $("#nextReview").addEventListener("click", () => reviews.scrollBy({ left: step(), behavior: "smooth" }));

  /* ---------- Capacitaciones ---------- */
  $("#trainingList").innerHTML = D.capacitaciones
    .map((c, i) => `<li class="reveal"><span>${String(i + 1).padStart(2, "0")}</span>${esc(c)}</li>`)
    .join("");

  /* ---------- Acordeones ---------- */
  let accId = 0;
  function accordion(el, items) {
    el.innerHTML = items
      .map(({ title, body }) => {
        const id = `acc-${++accId}`;
        return `<div class="acc">
          <button class="acc__btn" aria-expanded="false" aria-controls="${id}">${esc(title)}<span class="acc__icon" aria-hidden="true"></span></button>
          <div class="acc__panel" id="${id}" role="region"><div><div class="acc__body">${body}</div></div></div>
        </div>`;
      })
      .join("");
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".acc__btn");
      if (b) b.setAttribute("aria-expanded", String(b.getAttribute("aria-expanded") !== "true"));
    });
  }
  accordion($("#faqList"), D.faq.map((f) => ({ title: f.q, body: `<p>${esc(f.a)}</p>` })));
  accordion(
    $("#rulesList"),
    D.pautas.map((p) => ({ title: p.titulo, body: `<ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` }))
  );

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }
})();
