const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

document.documentElement.classList.add("js");

const ambientShell = document.createElement("div");
ambientShell.className = "ambient-shell";
document.body.appendChild(ambientShell);

const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
document.body.appendChild(scrollProgress);

const cursorFollower = document.createElement("div");
cursorFollower.className = "cursor-follower";
document.body.appendChild(cursorFollower);

const transitionLayer = document.createElement("div");
transitionLayer.className = "page-transition";
document.body.appendChild(transitionLayer);

const lightbox = document.createElement("figure");
lightbox.className = "image-lightbox";
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Close image">×</button>
  <img src="" alt="" />
  <figcaption></figcaption>
`;
document.body.appendChild(lightbox);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const categoryLabels = {
  hospitality: "Hospitality",
  residential: "Residential",
  commercial: "Commercial",
  "public-space": "Public Space",
  "ai-workflow": "AI Workflow"
};

const fallbackConfig = {
  brand_en: "MUMING SPACE DESIGN",
  brand_cn: "睦铭空间设计事务所",
  tagline_en: "Interior Design Studio focusing on hospitality, residential, commercial, public space and AI-assisted design workflow.",
  tagline_cn: "专注酒店、住宅、商业、公共空间与 AI 辅助设计工作流的室内设计事务所。",
  email: "sa82sa@163.com",
  phone: "+86 15989503394",
  city: "Shenzhen, China",
  wechat: "MUMINGDESIGN",
  xiaohongshu: "MUMING SPACE DESIGN",
  douyin: "MUMING SPACE DESIGN"
};

const fallbackProjects = [
  {
    id: "yuyao-yaofuyan-hotel",
    name_cn: "浙江余姚姚府宴酒店",
    name_en: "Yuyao Yaofuyan Hotel",
    type: "Hospitality",
    category: "hospitality",
    location: "Yuyao, Zhejiang",
    year: "2025",
    status: "Concept Design",
    cover: "assets/images/projects/hotel/yuyao_yaofuyan_hotel_01.jpg.jpg",
    images: [
      "assets/images/projects/hotel/yuyao_yaofuyan_hotel_01.jpg.jpg",
      "assets/images/projects/hotel/yuyao_yaofuyan_hotel_02.jpg.jpg",
      "assets/images/projects/hotel/yuyao_yaofuyan_hotel_03.jpg.jpg",
      "assets/images/projects/hotel/yuyao_yaofuyan_hotel_04.jpg.jpg"
    ],
    description: "以地域文化、宴会体验与酒店公共空间秩序为基础，建立具有场所记忆与当代表达的酒店空间。",
    strategy: ["以抵达动线和公共界面建立清晰的酒店序列。", "控制材质与光线层次，形成克制而有识别度的接待氛围。", "在宴会、休憩与运营效率之间保持平衡。"]
  },
  {
    id: "western-sichuan-mountain-retreat",
    name_cn: "川西山宿",
    name_en: "A Mountain Retreat in Western Sichuan",
    type: "Mountain Retreat / Boutique Lodge / High-end Travel Residence",
    category: "hospitality",
    location: "Western Sichuan, China",
    year: "2025",
    status: "Concept Design",
    cover: "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_01.jpeg",
    images: [
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_01.jpeg",
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_02.jpeg",
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_03.jpeg",
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_04.jpeg",
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_05.jpeg",
      "assets/images/projects/hospitality/western-sichuan-mountain-retreat/western_sichuan_mountain_retreat_06.jpeg"
    ],
    description: "川西山宿以川西山地建筑为灵感来源，通过裸露木梁、深檐坡屋顶、暖土色墙面、手工织物与自然石材，构建出一个安静、温暖且具有在地记忆的山地度假空间。设计避免直接复制传统民俗符号，而是以当代室内语言转译川西建筑中的结构、光影与材料关系，使空间在粗粝与精致、自然与舒适之间形成平衡。项目通过山景餐厅、壁炉休息区、客房、半户外泡池和接待空间，将自然景观、季节变化与室内生活紧密连接，呈现出一种更克制、更高级的川西山地旅居体验。",
    strategy: [
      "提取川西山地建筑中的木构、坡屋顶、深檐、格栅和院落关系，转化为更克制、现代的度假空间语言。",
      "以旧木、肌理涂料、粗陶、亚麻、藤编、石材和手工织物构建空间肌理，强化自然、温暖、粗粝而高级的触感。",
      "利用山地自然光、木格栅投影、壁炉火光和低照度灯光，让空间在不同时间段呈现出不同的情绪层次。",
      "通过大窗、露台、泡池、山景餐厅和半户外空间，将森林、雪山、晨雾和季节变化纳入空间体验之中。",
      "项目不停留在表层民族符号，而是以更国际化、更克制的方式重构川西山宿的精神气质。"
    ]
  },
  {
    id: "taiwan-chiayi-villa",
    name_cn: "台湾嘉义别墅",
    name_en: "Chiayi Private Villa",
    type: "Residential",
    category: "residential",
    location: "Chiayi, Taiwan",
    year: "2025",
    status: "Concept Design",
    cover: "assets/images/projects/residential/taiwan_villa_living_01.jpg.jpg",
    images: [
      "assets/images/projects/residential/taiwan_villa_living_01.jpg.jpg",
      "assets/images/projects/residential/taiwan_villa_Entrance_01.jpg.jpeg",
      "assets/images/projects/residential/taiwan_villa_bedroom_01.jpg.jpg",
      "assets/images/projects/residential/taiwan_villa_basement_01.jpg.jpeg",
      "assets/images/projects/residential/taiwan_villa_outdoor_01.jpg.jpg"
    ],
    description: "以当代自然主义为基调，通过光影、材质与庭院关系建立低调而克制的居住体验。",
    strategy: ["强化室内外关系，让自然光成为空间秩序的一部分。", "以温润材料和低饱和色彩回应私宅的长期居住感。", "在公共会客与私密起居之间建立安静的层次。"]
  },
  {
    id: "liaigre-residence",
    name_cn: "LIAIGRE 主题住宅",
    name_en: "LIAIGRE-inspired Residence",
    type: "Residential",
    category: "residential",
    location: "China",
    year: "2026",
    status: "Concept Design",
    cover: "assets/images/projects/residential/liaigre_residence_living_01.jpg.png",
    images: [
      "assets/images/projects/residential/liaigre_residence_living_01.jpg.png",
      "assets/images/projects/residential/liaigre_residence_Dining room_01.jpg.png",
      "assets/images/projects/residential/liaigre_residence_bedroom_01.jpg.png",
      "assets/images/projects/residential/liaigre_residence_bathroom_01.jpg.png"
    ],
    description: "以克制的法式现代气质、深色木作、天然织物与安静的比例关系，建立具有 quiet luxury 气质的住宅空间。",
    strategy: ["以比例、材质和家具尺度控制整体气质。", "减少装饰性语言，强调触感、光线与秩序。", "通过统一色温和材质关系形成完整生活场景。"]
  },
  {
    id: "sanya-lingshui-villa",
    name_cn: "三亚陵水别墅",
    name_en: "Sanya Lingshui Villa",
    type: "Residential",
    category: "residential",
    location: "Lingshui, Sanya",
    year: "2023",
    status: "Concept Design",
    cover: "assets/images/projects/residential/sanya_lingshui_villa_01.jpg.png",
    images: [
      "assets/images/projects/residential/sanya_lingshui_villa_01.jpg.png",
      "assets/images/projects/residential/sanya_lingshui_villa_02.jpg.png",
      "assets/images/projects/residential/sanya_lingshui_villa_03.jpg.png",
      "assets/images/projects/residential/sanya_lingshui_villa_04.jpg.png"
    ],
    description: "围绕海岛居住、自然光线、度假氛围与高端私宅体验，建立具有松弛感和空间秩序的别墅设计。",
    strategy: ["以度假尺度处理起居、休息与景观的关系。", "使用轻盈材质与自然色系控制空间温度。", "让视觉重心回到光、风、植物和人的停留。"]
  },
  {
    id: "xilin-fashion-experience-store",
    name_cn: "希琳服装品牌线下体验店",
    name_en: "Xilin Fashion Brand Experience Store",
    type: "Commercial",
    category: "commercial",
    location: "China",
    year: "2025",
    status: "Concept Design",
    cover: "assets/images/projects/commercial/xilin_fashion_store_01.jpg.jpg",
    images: [
      "assets/images/projects/commercial/xilin_fashion_store_01.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_02.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_03.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_04.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_05.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_06.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_07.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_08.jpg.jpg",
      "assets/images/projects/commercial/xilin_fashion_store_09.jpg.jpg"
    ],
    description: "以品牌体验、展示动线、空间记忆点与消费场景为核心，建立兼具展示、接待与传播属性的线下体验空间。",
    strategy: ["以品牌调性决定空间色彩、陈列节奏与顾客路径。", "让展示、试衣、接待与社交传播自然衔接。", "通过克制材质让服装与人的活动成为空间焦点。"]
  },
  {
    id: "forest-lodge-pbsa",
    name_cn: "Forest Lodge PBSA",
    name_en: "Forest Lodge PBSA",
    type: "Public Space",
    category: "public-space",
    location: "Sydney, Australia",
    year: "2026",
    status: "Concept Design",
    cover: "assets/images/projects/public-space/forest_lodge_pbsa_01.jpg.png",
    images: [
      "assets/images/projects/public-space/forest_lodge_pbsa_01.jpg.png",
      "assets/images/projects/public-space/forest_lodge_pbsa_02.jpg.png",
      "assets/images/projects/public-space/forest_lodge_pbsa_03.jpg.jpg",
      "assets/images/projects/public-space/forest_lodge_pbsa_04.jpg.jpeg"
    ],
    description: "围绕学生公寓公共空间的社交、学习、共享与动线体验，建立具有社区感和运营逻辑的公共空间系统。",
    strategy: ["以公共活动强度组织空间层级。", "让学习、社交与停留区域具有清晰边界和弹性。", "通过耐用材料与柔和照明兼顾运营和氛围。"]
  },
  {
    id: "ai-assisted-design-workflow",
    name_cn: "AI 辅助设计工作流",
    name_en: "AI-assisted Design Workflow",
    type: "AI Workflow",
    category: "ai-workflow",
    location: "Workflow",
    year: "2026",
    status: "Workflow System",
    cover: "assets/images/projects/ai-workflow/ai_workflow_concept_01.png",
    images: [
      "assets/images/projects/ai-workflow/ai_workflow_site_photo_01.jpg.png",
      "assets/images/projects/ai-workflow/ai_workflow_white_model_01.png",
      "assets/images/projects/ai-workflow/ai_workflow_concept_01.png",
      "assets/images/projects/ai-workflow/ai_workflow_local_edit_01.png",
      "assets/images/projects/ai-workflow/ai_workflow_perspective_01.jpg.png"
    ],
    description: "从现场照片、视觉矫正、白模处理、空间意向、局部修改到图像强化，建立系统化 AI 辅助室内设计表达流程。",
    strategy: ["用 AI 提升概念探索与视觉沟通速度。", "将生成结果纳入专业设计判断，而不是替代设计决策。", "形成可复用的提案图像、汇报图像与空间推演流程。"]
  }
];

async function readJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Cannot load ${path}`);
  }
  return response.json();
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.textContent = value;
}

function applyConfig(config) {
  document.querySelectorAll("[data-config]").forEach((node) => {
    const key = node.dataset.config;
    if (!config[key]) return;
    node.textContent = config[key];
    if (node.tagName === "A" && key === "email") node.href = `mailto:${config[key]}`;
    if (node.tagName === "A" && key === "phone") node.href = `tel:${config[key].replace(/\\s/g, "")}`;
  });
}

function projectHref(project) {
  return `project-detail.html?id=${encodeURIComponent(project.id)}`;
}

function renderProjectCard(project, heading = "h2") {
  const title = project.name_en || project.name_cn;
  return `
    <a class="project-card" href="${projectHref(project)}" data-category="${project.category}">
      <img src="${project.cover}" alt="${title}" loading="lazy" />
      <span class="project-meta">${categoryLabels[project.category] || project.type} / ${project.year}</span>
      <${heading}>${title}</${heading}>
    </a>
  `;
}

function bindProjectFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      projectCards.forEach((card) => {
        const shouldShow = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

function initReveals() {
  const revealItems = document.querySelectorAll(".section, .page-hero, .project-card, .service-list article, .values-grid article, .process-list div");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
    observer.observe(item);
  });
}

function initPageTransitions() {
  document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      transitionLayer.classList.add("is-active");
      window.setTimeout(() => {
        window.location.href = href;
      }, 360);
    });
  });
}

function openLightbox(src, alt) {
  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  image.src = src;
  image.alt = alt || "Project image";
  caption.textContent = alt || "Project image";
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.closest(".lightbox-close")) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

function bindLightboxImages() {
  document.querySelectorAll("[data-lightbox-src]").forEach((item) => {
    item.addEventListener("click", () => {
      openLightbox(item.dataset.lightboxSrc, item.dataset.lightboxAlt);
    });
  });
}

function initMotionSystem() {
  let ticking = false;

  const updateScrollState = () => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = window.scrollY / maxScroll;
    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    document.documentElement.style.setProperty("--grid-y", `${window.scrollY * -0.08}px`);
    document.documentElement.style.setProperty("--scan-y", `${(progress * 130) - 30}%`);

    const heroImage = document.querySelector(".motion-hero img");
    if (heroImage) {
      heroImage.style.setProperty("--hero-parallax", `${window.scrollY * 0.08}px`);
      heroImage.style.transform = `scale(1.045) translate3d(0, ${window.scrollY * 0.08}px, 0)`;
    }

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  updateScrollState();

  window.addEventListener("pointermove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    document.documentElement.style.setProperty("--cursor-x", `${x}px`);
    document.documentElement.style.setProperty("--cursor-y", `${y}px`);
    document.documentElement.style.setProperty("--mouse-x", (x / window.innerWidth).toFixed(4));
    document.documentElement.style.setProperty("--mouse-y", (y / window.innerHeight).toFixed(4));
    document.documentElement.style.setProperty("--grid-x", `${(x - window.innerWidth / 2) * -0.015}px`);
  }, { passive: true });
}

function initCardTilt() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${x * 7}deg`);
      card.style.setProperty("--tilt-y", `${y * -7}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function initHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("img"));
  if (slides.length < 2) return;

  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;
  slides[activeIndex].classList.add("is-active");

  window.setInterval(() => {
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 4200);
}

function renderProjectsPage(projects) {
  const grid = document.querySelector("[data-projects-grid]");
  if (!grid) return;
  grid.innerHTML = projects.map((project) => renderProjectCard(project)).join("");
  bindProjectFilters();
  initCardTilt();
}

function renderProjectDetail(projects) {
  const detailRoot = document.querySelector("[data-project-detail]");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");
  const project = projects.find((item) => item.id === requestedId) || projects[0];
  if (!project) return;

  document.title = `${project.name_en} | MUMING SPACE DESIGN`;
  const title = project.name_en || project.name_cn;
  const images = project.images && project.images.length ? project.images : [project.cover];

  const cover = document.querySelector("[data-detail-cover]");
  if (cover) {
    cover.src = project.cover;
    cover.alt = title;
    cover.dataset.lightboxSrc = project.cover;
    cover.dataset.lightboxAlt = title;
  }

  setText("[data-detail-meta]", `${categoryLabels[project.category] || project.type} / ${project.year}`);
  setText("[data-detail-title]", title);
  setText("[data-detail-location]", project.location);
  setText("[data-detail-type]", project.type);
  setText("[data-detail-year]", project.year);
  setText("[data-detail-status]", project.status);
  setText("[data-detail-description]", project.description);

  const strategy = document.querySelector("[data-detail-strategy]");
  if (strategy) {
    strategy.innerHTML = (project.strategy || []).map((item, index) => `
      <div>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${index === 0 ? "Spatial Logic" : index === 1 ? "Material Atmosphere" : "Project Value"}</h3>
        <p>${item}</p>
      </div>
    `).join("");
  }

  const gallery = document.querySelector("[data-detail-gallery]");
  if (gallery) {
    gallery.innerHTML = images.map((image, index) => `
      <img class="${index === 0 || index === images.length - 1 ? "wide" : ""}" src="${image}" alt="${title} image ${index + 1}" loading="lazy" data-lightbox-src="${image}" data-lightbox-alt="${title} image ${index + 1}" />
    `).join("");
    bindLightboxImages();
  }
}

async function init() {
  try {
    const config = await readJson("data/site-config.json");
    applyConfig(config);
  } catch (error) {
    console.warn(error);
    applyConfig(fallbackConfig);
  }

  try {
    const projects = await readJson("data/projects.json");
    renderProjectsPage(projects);
    renderProjectDetail(projects);
  } catch (error) {
    console.warn(error);
    renderProjectsPage(fallbackProjects);
    renderProjectDetail(fallbackProjects);
  }

  if (!document.querySelector("[data-projects-grid]")) {
    bindProjectFilters();
  }

  initReveals();
  initPageTransitions();
  initMotionSystem();
  initCardTilt();
  bindLightboxImages();
  initHeroCarousel();
}

init();
