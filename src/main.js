import "./styles.css";

const PRODUCTS = [
  {
    id: "anticavity",
    name: "Anticavity",
    family: "The original · Clove & peppermint",
    line: "Formula No. 7, improved twice.",
    note: "The house tin. A clinical dose of fluoride, with nano-hydroxyapatite to rebuild the enamel it protects.",
    image: "/assets/products/hero_1.jpg",
    full: "/assets/products/product_1.jpg",
    ground: "#4A1F24",
    accent: "#C88A3E",
    ingredients: [
      "Sodium Fluoride 1450 ppm",
      "Nano-Hydroxyapatite",
      "Xylitol",
      "Potassium Nitrate",
      "Arginine",
      "Calcium Glycerophosphate",
    ],
  },
  {
    id: "fresh-breath",
    name: "Fresh Breath",
    family: "Herbal · Spearmint",
    line: "Two minutes, properly spent.",
    note: "A green tin for a grown-up mouth. Zinc, xylitol and a quiet antiseptic blend — not a disguised chewing gum.",
    image: "/assets/products/hero_2.jpg",
    full: "/assets/products/product_2.jpg",
    ground: "#1F332A",
    accent: "#A9B98C",
    ingredients: [
      "Sodium Fluoride 1000 ppm",
      "Xylitol",
      "Zinc Citrate",
      "Cetylpyridinium Chloride",
      "Chlorhexidine",
      "Zinc Lactate",
      "Sodium Bicarbonate",
    ],
  },
  {
    id: "charcoal",
    name: "Charcoal",
    family: "Whitening · Black carton",
    line: "Ornament is earned.",
    note: "Activated charcoal and peroxide, held in check by nano-hydroxyapatite. Brightening without the theatre.",
    image: "/assets/products/hero_3.jpg",
    full: "/assets/products/product_3.jpg",
    ground: "#0A0908",
    accent: "#B9BCC7",
    ingredients: [
      "Sodium Fluoride 1000 ppm",
      "Nano-Hydroxyapatite",
      "Sodium Bicarbonate",
      "Activated Charcoal",
      "Hydrogen Peroxide",
    ],
  },
  {
    id: "enamel",
    name: "Enamel",
    family: "Repair · Navy carton",
    line: "Proof over promise.",
    note: "The Blue Box instinct, kept. Arginine and calcium glycerophosphate sit beside a 1450 ppm fluoride dose.",
    image: "/assets/products/hero_4.jpg",
    full: "/assets/products/product_4.jpg",
    ground: "#22335C",
    accent: "#9FBFA8",
    ingredients: [
      "Sodium Fluoride 1450 ppm",
      "Nano-Hydroxyapatite",
      "Xylitol",
      "Arginine",
      "Potassium Nitrate",
      "Calcium Glycerophosphate",
    ],
  },
  {
    id: "gum",
    name: "Gum Care",
    family: "Clinical · Burgundy carton",
    line: "Plain speech.",
    note: "Shirley’s instinct: treat the gum as carefully as the tooth. Zinc, chlorhexidine, and a measured antiseptic.",
    image: "/assets/products/hero_5.jpg",
    full: "/assets/products/product_5.jpg",
    ground: "#4A1F24",
    accent: "#C88A3E",
    ingredients: [
      "Sodium Fluoride 1000 ppm",
      "Zinc Citrate",
      "Cetylpyridinium Chloride",
      "Triclosan",
      "Pyrophosphates",
      "Chlorhexidine",
    ],
  },
  {
    id: "sensitive",
    name: "Sensitive",
    family: "Comfort · Teal carton",
    line: "The reason Shirley married a chemist.",
    note: "Potassium nitrate, strontium chloride, potassium citrate. Built for enamel that has already been asked too much.",
    image: "/assets/products/hero_6.jpg",
    full: "/assets/products/product_6.jpg",
    ground: "#1F332A",
    accent: "#9FBFA8",
    ingredients: [
      "Sodium Fluoride 1450 ppm",
      "Potassium Nitrate",
      "Strontium Chloride",
      "Potassium Citrate",
    ],
  },
  {
    id: "smoker",
    name: "Smoker",
    family: "Stain · Burgundy carton",
    line: "A grown-up tin.",
    note: "Peroxide, pyrophosphates and bicarbonate for a mouth that lives in London weather and London habits.",
    image: "/assets/products/hero_7.jpg",
    full: "/assets/products/product_7.jpg",
    ground: "#4A1F24",
    accent: "#C88A3E",
    ingredients: [
      "Sodium Fluoride 1000 ppm",
      "Zinc Citrate",
      "Hydrogen Peroxide",
      "Pyrophosphates",
      "Sodium Bicarbonate",
      "Hexametaphosphate",
    ],
  },
  {
    id: "total",
    name: "Total Care",
    family: "Daily · The whole house",
    line: "A house, not a factory.",
    note: "The complete modern paste: repair, calm, clean. Nano-hydroxyapatite with zinc and a fluoride backbone.",
    image: "/assets/products/hero_8.jpg",
    full: "/assets/products/product_8.jpg",
    ground: "#22335C",
    accent: "#9FBFA8",
    ingredients: [
      "Sodium Fluoride 1000 ppm",
      "Nano-Hydroxyapatite",
      "Potassium Nitrate",
      "Zinc Citrate",
      "Cetylpyridinium Chloride",
      "Pyrophosphates",
      "Hexametaphosphate",
    ],
  },
  {
    id: "whitening",
    name: "Whitening",
    family: "Bright · Navy carton",
    line: "Purity, perfected.",
    note: "A fluoride-free whitening paste for those who want the science without the ion. Peroxide, bicarbonate, blue covarine.",
    image: "/assets/products/hero_9.jpg",
    full: "/assets/products/product_9.jpg",
    ground: "#22335C",
    accent: "#B9BCC7",
    ingredients: [
      "Nano-Hydroxyapatite",
      "Sodium Bicarbonate",
      "Hydrogen Peroxide",
      "Pyrophosphates",
      "Hexametaphosphate",
      "Carbamide Peroxide",
      "Blue Covarine",
    ],
  },
];

const SCENES = [
  { id: "title", length: 1.3, cream: false, chapter: "Prologue", num: "00", year: "1881" },
  { id: "born", length: 1.45, cream: false, chapter: "Chapter I · 1881", num: "01", year: "1881" },
  { id: "shirley", length: 1.55, cream: false, chapter: "Before the shop", num: "02", year: "1907" },
  { id: "street", length: 1.45, cream: false, chapter: "Autumn 1910", num: "03", year: "1910" },
  { id: "arthur", length: 1.4, cream: false, chapter: "The chemist", num: "04", year: "1910" },
  { id: "winters", length: 1.45, cream: false, chapter: "Four winters", num: "05", year: "1914" },
  { id: "ninepence", length: 1.2, cream: true, chapter: "Formula No. 7", num: "06", year: "1914" },
  { id: "gladys", length: 1.45, cream: true, chapter: "The daughter", num: "07", year: "1914" },
  { id: "rule", length: 1.15, cream: false, chapter: "The house rule", num: "08", year: "1910" },
  { id: "britain", length: 1.35, cream: false, chapter: "Chapter II · The island", num: "09", year: "1924" },
  { id: "edward", length: 1.45, cream: false, chapter: "The second generation", num: "10", year: "1960" },
  { id: "damu", length: 1.5, cream: false, chapter: "Chapter III · DAMU", num: "11", year: "1999" },
  { id: "rebuild", length: 1.45, cream: true, chapter: "Eleven quiet years", num: "12", year: "1999" },
  { id: "science", length: 1.55, cream: false, chapter: "The name returns", num: "13", year: "2010" },
  { id: "collection", length: 2.2, cream: true, chapter: "The range", num: "14", year: "now" },
  { id: "close", length: 1.35, cream: false, chapter: "The house", num: "15", year: "now" },
];

const UNIT = 110;
const totalLength = SCENES.reduce((n, s) => n + s.length, 0);

let cursor = 0;
SCENES.forEach((scene) => {
  scene.start = cursor / totalLength;
  cursor += scene.length;
  scene.end = cursor / totalLength;
});

const stage = document.getElementById("stage");
const track = document.getElementById("scroll-track");
const bar = document.getElementById("progress-bar");
const chapterLabel = document.getElementById("chapter-label");
const chapterNum = document.getElementById("chapter-num");
const chrome = document.getElementById("chrome");
const yearsEl = document.getElementById("years");
const playBtn = document.getElementById("play");
const replayBtn = document.getElementById("replay");
const controls = document.getElementById("controls");
const overlay = document.getElementById("overlay");
const grid = document.getElementById("product-grid");

const nodes = new Map(
  [...document.querySelectorAll(".scene")].map((el) => [el.dataset.scene, el])
);

track.style.height = `${totalLength * UNIT}vh`;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(n, a = 0, b = 1) {
  return Math.max(a, Math.min(b, n));
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeIn(t) {
  return t * t * t;
}

function motionOf(el) {
  if (el.classList.contains("scene--products")) return "rise";
  const plate = el.querySelector(".scene__plate");
  if (!plate || plate.classList.contains("plate--title")) return "fade";
  if (plate.classList.contains("plate--right")) return "from-right";
  if (plate.classList.contains("plate--center")) return "iris";
  return "zoom";
}

function applyMotion(el, t, isFirst, hasNext, mobile) {
  const motion = motionOf(el);
  const enterK = isFirst ? 1 : easeOut(clamp(t / 0.26));
  const exitK = !hasNext ? 0 : t > 0.73 ? easeIn(clamp((t - 0.73) / 0.27)) : 0;
  const shown = enterK > 0.01 && (1 - exitK) > 0.02;

  el.style.visibility = shown ? "visible" : "hidden";
  el.classList.toggle("is-live", enterK > 0.45 && exitK < 0.55);

  let z = 12;
  if (exitK > 0) z = motion === "from-right" ? 16 : 42;
  if (enterK < 1 && enterK > 0.02) {
    if (motion === "from-right" || motion === "iris") z = 38;
    if (motion === "zoom") z = 20;
    if (motion === "rise" || motion === "fade") z = 24;
  }
  el.style.zIndex = String(z);

  const frame = el.querySelector(".scene__frame img");
  const plate = el.querySelector(".scene__plate");

  if (motion === "zoom") {
    const origin = mobile ? "50% 32%" : "72% 48%";
    el.style.transformOrigin = origin;
    const scale = 1 + (1 - enterK) * 0.42 + exitK * 1.25;
    el.style.opacity = String(Math.min(enterK, 1 - exitK * 0.92));
    el.style.transform = `scale(${scale})`;
    const radius = Math.min(enterK, 1 - exitK) * 145;
    el.style.clipPath =
      enterK >= 0.99 && exitK === 0 ? "none" : `circle(${radius}% at ${origin})`;
  } else if (motion === "from-right") {
    el.style.transformOrigin = "center";
    const x = (1 - enterK) * 72 - exitK * 18;
    el.style.opacity = String(Math.min(enterK, 1 - exitK));
    el.style.transform = `translate3d(${x}%, 0, 0)`;
    const leftCut = (1 - enterK) * 100;
    el.style.clipPath =
      enterK >= 0.99 && exitK === 0 ? "none" : `inset(0 0 0 ${leftCut}%)`;
  } else if (motion === "iris") {
    el.style.transformOrigin = "50% 50%";
    const radius = Math.min(enterK, 1 - exitK) * 160;
    el.style.opacity = String(0.2 + 0.8 * Math.min(enterK, 1 - exitK));
    el.style.transform = `scale(${1 + (1 - enterK) * 0.18 + exitK * 0.28})`;
    el.style.clipPath =
      enterK >= 0.99 && exitK === 0 ? "none" : `circle(${radius}% at 50% 48%)`;
  } else if (motion === "rise") {
    el.style.transformOrigin = "center";
    el.style.opacity = String(Math.min(enterK, 1 - exitK));
    el.style.transform = `translate3d(0, ${(1 - enterK) * 48}px, 0)`;
    el.style.clipPath = "none";
  } else {
    el.style.transformOrigin = "center";
    el.style.opacity = String(Math.min(enterK, 1 - exitK));
    el.style.transform = `scale(${1 + (1 - enterK) * 0.06})`;
    el.style.clipPath = "none";
  }

  if (frame && !mobile) {
    const ken = 1.02 + t * 0.07;
    frame.style.transform = `scale(${ken})`;
    frame.style.transformOrigin = motion === "from-right" ? "30% 50%" : "70% 45%";
  } else if (frame) {
    frame.style.transform = "none";
  }

  if (!plate) return;
  const pEnter = isFirst ? 1 : easeOut(clamp((t - 0.16) / 0.34));
  const pExit = t > 0.68 ? easeIn(clamp((t - 0.68) / 0.24)) : 0;
  const pVis = pEnter * (1 - pExit);
  plate.style.opacity = String(pVis);

  if (plate.classList.contains("plate--title")) {
    plate.style.transform = `translateY(${(1 - pEnter) * 18}px)`;
    return;
  }

  if (mobile) {
    plate.style.transform = `translateY(${(1 - pEnter) * 22}px)`;
    return;
  }

  if (motion === "from-right") {
    plate.style.transform = `translateY(-50%) translateX(${(1 - pEnter) * 56}px)`;
  } else if (motion === "zoom") {
    plate.style.transform = `translateY(calc(-50% + ${(1 - pEnter) * 18}px)) translateX(${(1 - pEnter) * -42}px)`;
  } else if (motion === "iris") {
    plate.style.transform = `translate(-50%, calc(-50% + ${(1 - pEnter) * 40}px)) scale(${0.94 + pEnter * 0.06})`;
  } else {
    plate.style.transform = "";
  }
}

function localProgress(scene, global) {
  const span = scene.end - scene.start;
  return clamp((global - scene.start) / span);
}

function hydratePhotos(currentId) {
  const idx = SCENES.findIndex((s) => s.id === currentId);
  [idx - 1, idx, idx + 1, idx + 2].forEach((i) => {
    if (i < 0 || i >= SCENES.length) return;
    const img = nodes.get(SCENES[i].id)?.querySelector(".scene-photo");
    if (!img?.dataset.src) return;
    if (img.getAttribute("src") !== img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
}

function render(global) {
  bar.style.width = `${global * 100}%`;

  let current = SCENES[0];
  for (const scene of SCENES) {
    if (global >= scene.start && global < scene.end) {
      current = scene;
      break;
    }
    if (global >= scene.end) current = scene;
  }

  chapterLabel.textContent = current.chapter;
  chapterNum.textContent = current.num;
  chrome.classList.toggle("is-cream", current.cream);
  yearsEl.classList.toggle("is-cream", current.cream);
  controls.classList.toggle("is-cream", current.cream);

  yearsEl.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.year === current.year);
  });

  hydratePhotos(current.id);

  SCENES.forEach((scene, index) => {
    const el = nodes.get(scene.id);
    if (!el) return;
    const t = localProgress(scene, global);
    const next = SCENES[index + 1];
    el.classList.toggle("is-cream", scene.cream);
    applyMotion(el, t, index === 0, Boolean(next), window.innerWidth <= 980);
  });
}

function getProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return clamp(window.scrollY / max);
}

function setProgress(p) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo(0, p * max);
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    render(getProgress());
    ticking = false;
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);

yearsEl.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    stopPlay();
    const scene = SCENES.find((s) => s.year === btn.dataset.year);
    if (!scene) return;
    const target = scene.start + (scene.end - scene.start) * 0.28;
    animateScrollTo(target, 1400);
  });
});

function animateScrollTo(targetProgress, duration) {
  const from = getProgress();
  const start = performance.now();
  function step(now) {
    const t = clamp((now - start) / duration);
    const k = 1 - Math.pow(1 - t, 3);
    setProgress(lerp(from, targetProgress, k));
    render(getProgress());
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let playing = false;
let playRaf = 0;
let playStart = 0;
let playFrom = 0;

function stopPlay() {
  playing = false;
  playBtn.classList.remove("is-on");
  playBtn.setAttribute("aria-pressed", "false");
  cancelAnimationFrame(playRaf);
}

function startPlay() {
  playing = true;
  playBtn.classList.add("is-on");
  playBtn.setAttribute("aria-pressed", "true");
  playFrom = getProgress();
  if (playFrom > 0.97) playFrom = 0;
  playStart = performance.now();
  const remaining = Math.max(0.001, 1 - playFrom);
  const duration = Math.max(18000, remaining * 88000);

  const tick = (now) => {
    if (!playing) return;
    const t = clamp((now - playStart) / duration);
    setProgress(playFrom + remaining * t);
    render(getProgress());
    if (t < 1) playRaf = requestAnimationFrame(tick);
    else stopPlay();
  };
  playRaf = requestAnimationFrame(tick);
}

function restartPlay() {
  if (!houseOpen) return;
  overlay.hidden = true;
  document.body.style.overflow = "";
  stopPlay();
  setProgress(0);
  render(0);
  startPlay();
}

playBtn.addEventListener("click", () => {
  if (!houseOpen) return;
  if (playing) stopPlay();
  else startPlay();
});

replayBtn.addEventListener("click", restartPlay);

window.addEventListener(
  "wheel",
  () => {
    if (playing) stopPlay();
  },
  { passive: true }
);

window.addEventListener("keydown", (e) => {
  if (!houseOpen) return;
  if (e.code === "Space") {
    e.preventDefault();
    if (playing) stopPlay();
    else startPlay();
  }
  if (e.key === "Escape") closeOverlay();
});

function renderProducts() {
  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <article class="tin" data-id="${p.id}" style="--tin:${p.ground};--accent:${p.accent}">
      <div class="tin__window">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <footer class="tin__foot">
        <p class="label">${p.family}</p>
        <h3>${p.name}</h3>
        <small>75 ml · London</small>
      </footer>
    </article>`
  ).join("");

  grid.querySelectorAll(".tin").forEach((card) => {
    card.addEventListener("click", () => openProduct(card.dataset.id, card));
  });
}

function openProduct(id, card) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  stopPlay();
  overlay.hidden = false;
  overlay.style.background = `${product.ground}f2`;
  document.body.style.overflow = "hidden";
  const img = document.getElementById("overlay-img");
  img.src = product.full;
  img.alt = product.name;
  document.getElementById("overlay-family").textContent = product.family;
  document.getElementById("overlay-name").textContent = product.name;
  document.getElementById("overlay-line").textContent = product.line;
  document.getElementById("overlay-note").textContent = product.note;
  document.getElementById("overlay-ings").innerHTML = product.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");
  document.getElementById("overlay-meta").textContent =
    "75 ml · Est. 1910 · London · Manufactured for Ashcroft, a part of DAMU Ltd.";

  if (card) {
    requestAnimationFrame(() => {
      const from = card.getBoundingClientRect();
      const visual = overlay.querySelector(".overlay__visual");
      const to = visual.getBoundingClientRect();
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      const sx = from.width / Math.max(to.width, 1);
      const sy = from.height / Math.max(to.height, 1);
      visual.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
            opacity: 0.65,
          },
          { transform: "translate(0, 0) scale(1, 1)", opacity: 1 },
        ],
        { duration: 820, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" }
      );
    });
  }
}

function closeOverlay() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("overlay-close").addEventListener("click", closeOverlay);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

renderProducts();
render(0);
hydratePhotos("born");
hydratePhotos("shirley");

const gate = document.getElementById("gate");
const enter = document.getElementById("enter");
let houseOpen = false;
document.documentElement.style.overflow = "hidden";
enter.addEventListener("click", () => {
  houseOpen = true;
  gate.classList.add("is-open");
  document.documentElement.style.overflow = "";
  hydratePhotos("born");
  hydratePhotos("title");
  render(getProgress());
});

requestAnimationFrame(() => render(getProgress()));
