const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll("[data-reveal]");
const tiltItems = document.querySelectorAll(".mission-card, .lab-card, .focus-card, .hud-panel");
const yearNode = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang-button]");
const metaDescription = document.querySelector("#meta-description");
const sceneCanvases = document.querySelectorAll(".section-side-art");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  tr: {
    metaTitle: "Can Bilal Sipahi | Game Dev Portfolio",
    metaDescription:
      "Can Bilal Sipahi'nin oyun geliştirme, AI prototipleme ve Unity odaklı pixel-HUD estetiğindeki portfolyo sitesi.",
    brandRole: "Unity Developer / AI Builder",
    navProjects: "Projeler",
    navTimeline: "Timeline",
    navFocus: "Odak",
    navContact: "İletişim",
    heroLabel: "Player One / Portfolio",
    heroTitle: "Portfolyom",
    heroCopy:
      "Ben <strong>Can Bilal Sipahi</strong>. Unity ile oynanış prototipleri, Python ile AI araçları ve gerçek problemi çözen yazılım sistemleri geliştiriyorum. Bu sayfada itch.io oyunlarımı, CV'mdeki projeleri ve GitHub üretim çizgimi daha oyun hissi taşıyan bir arayüzle topladım.",
    heroPrimaryCta: "Projeleri aç",
    heroSecondaryCta: "CV indir",
    heroTagOne: "Unity prototipleri",
    heroTagTwo: "itch.io yayınları",
    heroTagThree: "AI ve veri odaklı projeler",
    playerInfo: "Oyuncu Bilgisi",
    activeBuild: "Aktif Build",
    energyLabel: "Enerji seviyesi",
    unityGameplay: "Unity Gameplay",
    generativeAi: "Generative AI",
    problemSolving: "Problem Çözme",
    chipLocation: "İstanbul / Avcılar",
    chipLanguage: "İngilizce B1",
    chipTarget: "Staj / Junior",
    chipStack: "Unity + Python",
    projectsLabel: "Mission Select",
    projectsTitle: "Projeler",
    gamesLabel: "Game Track",
    gamesTitle: "Oyun Projeleri",
    gamesIntro: "itch.io ve jam tarafındaki yayınlanmış ya da oynanabilir oyun projelerim.",
    g1MetaOne: "Android",
    g1MetaTwo: "Action Prototype",
    g1Desc:
      "Tek elle oynanabilen, hızlı tempolu bir bullet-heaven denemesi. Hayatta kalma döngüsü ve sci-fi yetenek hissine odaklanıyor.",
    g2MetaOne: "Windows",
    g2MetaTwo: "Team Build",
    g2Desc:
      "Takım halinde geliştirilen macera oyunu. Kısa sürede oynanabilir bir build çıkarma ve ekip içi karar alma pratiği kazandırdı.",
    g3MetaOne: "Windows",
    g3MetaTwo: "Level Design",
    g3Desc:
      "Yayınlanmış ekip projesi. 3D level design akışı ve oynanabilir hissi güçlendirme tarafında çalıştım.",
    g4MetaOne: "Puzzle",
    g4MetaTwo: "School Project",
    g4Title: "Kriptografi Oyunu",
    g4Desc:
      "Kriptoloji temasını oynanabilir ve didaktik olmayan bir puzzle deneyimine dönüştüren okul projesi.",
    viewOnItchio: "itch.io sayfası",
    openGamePage: "Oyun sayfası",
    openProject: "Projeyi aç",
    gamesArchiveMetaOne: "Game Library",
    gamesArchiveMetaTwo: "itch.io",
    gamesArchiveTitle: "itch.io Arşivi",
    gamesArchiveDesc:
      "Tüm oyun prototiplerini ve yayınları tek akışta görmek için ana oyun sayfama geçebilirsin.",
    openArchive: "Starter's Pack sayfası",
    otherLabel: "Other Track",
    otherTitle: "Diğer Projeler",
    otherIntro: "Oyun dışında çalıştığım AI, veri ve yazılım odaklı üretimler burada.",
    o1MetaOne: "Applied AI",
    o1MetaTwo: "Product System",
    o1Title: "TraktorGPS",
    o1Desc:
      "Toprak görseli analizi, veri birleştirme ve GPS tabanlı saha takibini aynı sistemde buluşturan gerçek dünya çözümü.",
    o1PointOne: "Toprak tipini görüntüden yorumlayan modül geliştirildi.",
    o1PointTwo: "Kullanıcı verisi ile eksiklik tespiti birleştirildi.",
    o1PointThree: "GPS ile traktör ve alan tarama takibi kuruldu.",
    openGithubProfile: "GitHub profilini aç",
    o2MetaOne: "AI Tooling",
    o2MetaTwo: "Unity Research",
    o2Desc:
      "Unity için 2D level üretmeye odaklanan GAN deneyi. Procedural content ile level design düşüncesini bir araya getiriyor.",
    o3MetaOne: "Image Generation",
    o3MetaTwo: "Experiment",
    o3Desc: "Anime tarzı görseller üreten, deneysel image-generation uygulaması.",
    o4MetaOne: "Market Data",
    o4MetaTwo: "Python Tool",
    o4Desc: "Veri odaklı düşünme ve otomasyon yaklaşımını denediğim Python aracı.",
    openRepo: "Repo linki",
    reviewOnGithub: "GitHub'da incele",
    timelineLabel: "Timeline",
    timelineTitle: "Kısa zaman çizgisi",
    timelineIntro:
      "Bu bölüm korunarak daha oyun arayüzü havasına taşındı. Jam temposu, AI deneyleri ve üniversite süreci aynı çizgide akıyor.",
    t1Title: "Kriptografi Oyunu ve yeni itch.io yayınları",
    t1Desc:
      "Puzzle eksenli bir kriptoloji oyunu çıkardım; aynı dönemde itch.io prototip kütüphanemi daha görünür hale getirdim.",
    t2Title: "AI deneyleri ve ürün odaklı yazılım",
    t2Desc:
      "Generative AI, anime image generation, veri analizi ve saha takibi gibi alanlarda deneysel projeler geliştirdim.",
    t3Title: "Takım oyunları ve jam ritmi",
    t3Desc:
      "Soul Knott ve Illusion Maze ile yayınlanmış ekip işleri üretme ve hızlı iterasyon içinde çalışma pratiği kazandım.",
    t4Title: "Trakya University",
    t4Desc:
      "Bilişim Sistemleri ve Teknolojileri öğrencisiyim. Üniversite sürecinde oyun geliştirme, AI ve yazılım projelerini birlikte büyütüyorum.",
    focusLabel: "Build Log",
    focusTitle: "Üretim odaklarım",
    focusIntro: "Sadece araç değil, çalışma tarzımı da görünür kılan ana odak alanları.",
    f1Desc:
      "Önce hissi kuruyorum: akış, tempo, input tepkisi ve prototipin oynanabilir olması benim için ilk eşik.",
    f2Desc:
      "Modelden çok çıktının ne işe yaradığıyla ilgileniyorum. AI tarafında kullanıcının dokunabildiği araçlar kurmayı seviyorum.",
    f3Desc:
      "Teknik çözümün ürün değerine dönüşmesini önemsiyorum: anlaşılır akış, net çıktı ve gerçek kullanım hissi.",
    softSkillsLabel: "Soft Beceriler",
    softOne: "Analitik düşünme",
    softTwo: "Problem çözme",
    softThree: "Öğrenmeye açıklık",
    softFour: "Takım çalışması",
    softFive: "İletişim becerileri",
    contactLabel: "Co-op Invite",
    contactTitle: "İletişim",
    contactIntro:
      "Oyun geliştirme, AI prototipleri veya staj/junior fırsatları için bana doğrudan ulaşabilirsin.",
    contactEmailLabel: "E-posta",
    footerPrefix: "©",
    footerSuffix: "Can Bilal Sipahi / Devam? Evet",
  },
  en: {
    metaTitle: "Can Bilal Sipahi | Game Dev Portfolio",
    metaDescription:
      "A pixel-HUD style portfolio for Can Bilal Sipahi, focused on game development, AI prototyping, and Unity work.",
    brandRole: "Unity Developer / AI Builder",
    navProjects: "Projects",
    navTimeline: "Timeline",
    navFocus: "Focus",
    navContact: "Contact",
    heroLabel: "Player One / Portfolio",
    heroTitle: "My Portfolio",
    heroCopy:
      "I'm <strong>Can Bilal Sipahi</strong>. I build gameplay prototypes with Unity, AI tools with Python, and software systems that solve real problems. This page brings together my itch.io games, CV projects, and GitHub work in an interface that feels closer to a game screen.",
    heroPrimaryCta: "Open projects",
    heroSecondaryCta: "Download CV",
    heroTagOne: "Unity prototypes",
    heroTagTwo: "itch.io releases",
    heroTagThree: "AI and data-driven work",
    playerInfo: "Player Info",
    activeBuild: "Active Build",
    energyLabel: "Energy level",
    unityGameplay: "Unity Gameplay",
    generativeAi: "Generative AI",
    problemSolving: "Problem Solving",
    chipLocation: "Istanbul / Avcilar",
    chipLanguage: "English B1",
    chipTarget: "Intern / Junior",
    chipStack: "Unity + Python",
    projectsLabel: "Mission Select",
    projectsTitle: "Projects",
    gamesLabel: "Game Track",
    gamesTitle: "Game Projects",
    gamesIntro: "My published or playable game work from itch.io and jam projects.",
    g1MetaOne: "Android",
    g1MetaTwo: "Action Prototype",
    g1Desc:
      "A one-handed, fast-paced bullet-heaven prototype focused on survival rhythm and sci-fi ability feel.",
    g2MetaOne: "Windows",
    g2MetaTwo: "Team Build",
    g2Desc:
      "A team-built adventure game that improved my ability to deliver a playable build quickly and make decisions with others.",
    g3MetaOne: "Windows",
    g3MetaTwo: "Level Design",
    g3Desc:
      "A published team project where I worked on strengthening the 3D level design flow and play feel.",
    g4MetaOne: "Puzzle",
    g4MetaTwo: "School Project",
    g4Title: "Cryptography Game",
    g4Desc:
      "A school project that turns cryptography into a playable puzzle experience without feeling overly didactic.",
    viewOnItchio: "View on itch.io",
    openGamePage: "Open game page",
    openProject: "Open project",
    gamesArchiveMetaOne: "Game Library",
    gamesArchiveMetaTwo: "itch.io",
    gamesArchiveTitle: "itch.io Archive",
    gamesArchiveDesc:
      "If you want to see all of my playable prototypes and releases in one place, jump to my main game page.",
    openArchive: "Open Starter's Pack page",
    otherLabel: "Other Track",
    otherTitle: "Other Projects",
    otherIntro: "My AI, data, and software-focused work outside of game development lives here.",
    o1MetaOne: "Applied AI",
    o1MetaTwo: "Product System",
    o1Title: "TraktorGPS",
    o1Desc:
      "A real-world solution that combines soil-image analysis, data fusion, and GPS-based field tracking in one system.",
    o1PointOne: "Built a module that interprets soil type from image input.",
    o1PointTwo: "Combined user data with deficiency detection logic.",
    o1PointThree: "Implemented GPS-based tractor and scanned-area tracking.",
    openGithubProfile: "Open GitHub profile",
    o2MetaOne: "AI Tooling",
    o2MetaTwo: "Unity Research",
    o2Desc:
      "A GAN experiment for generating 2D levels in Unity, bringing procedural content and level design thinking together.",
    o3MetaOne: "Image Generation",
    o3MetaTwo: "Experiment",
    o3Desc: "An experimental image-generation app that produces anime-style visuals.",
    o4MetaOne: "Market Data",
    o4MetaTwo: "Python Tool",
    o4Desc: "A Python tool where I explored automation and data-driven thinking for market data.",
    openRepo: "Open repository",
    reviewOnGithub: "Review on GitHub",
    timelineLabel: "Timeline",
    timelineTitle: "Short timeline",
    timelineIntro:
      "I kept this section and carried it into a more game-interface mood. Jam rhythm, AI experiments, and university life all move along the same line.",
    t1Title: "Cryptography Game and new itch.io releases",
    t1Desc:
      "I shipped a puzzle-based cryptography game and made my itch.io prototype library more visible during the same period.",
    t2Title: "AI experiments and product-focused software",
    t2Desc:
      "I built experimental projects in generative AI, anime image generation, data analysis, and field tracking.",
    t3Title: "Team games and jam rhythm",
    t3Desc:
      "With Soul Knott and Illusion Maze, I built practice in shipping team projects and iterating fast.",
    t4Title: "Trakya University",
    t4Desc:
      "I'm an Information Systems and Technologies student, growing game development, AI, and software work together during university.",
    focusLabel: "Build Log",
    focusTitle: "My production focus",
    focusIntro: "These are the main areas that make not just my tools, but my working style, visible.",
    f1Desc:
      "I care about feel first: flow, pace, input response, and whether a prototype becomes genuinely playable.",
    f2Desc:
      "I'm more interested in what the output does than the model alone. I like building AI tools people can actually use.",
    f3Desc:
      "I care about turning technical solutions into product value through clear flow, useful output, and real usability.",
    softSkillsLabel: "Soft Skills",
    softOne: "Analytical thinking",
    softTwo: "Problem solving",
    softThree: "Willingness to learn",
    softFour: "Teamwork",
    softFive: "Communication skills",
    contactLabel: "Co-op Invite",
    contactTitle: "Contact",
    contactIntro:
      "You can reach me directly for game development, AI prototypes, or intern/junior opportunities.",
    contactEmailLabel: "Email",
    footerPrefix: "©",
    footerSuffix: "Can Bilal Sipahi / Continue? Yes",
  },
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const applyLanguage = (language) => {
  const selected = translations[language] ? language : "tr";
  const dictionary = translations[selected];

  document.documentElement.lang = selected;
  document.title = dictionary.metaTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langButton === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("portfolio-language", selected);
  } catch (error) {
    // Ignore storage issues and keep language in-memory only.
  }
};

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});

let initialLanguage = "tr";

try {
  initialLanguage = localStorage.getItem("portfolio-language") || initialLanguage;
} catch (error) {
  initialLanguage = "tr";
}

applyLanguage(initialLanguage);

const pixel = (ctx, x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

const drawPixelShape = (ctx, originX, originY, scale, parts) => {
  parts.forEach(([x, y, w, h, color]) => {
    pixel(ctx, originX + x * scale, originY + y * scale, w * scale, h * scale, color);
  });
};

const drawBlockCell = (ctx, x, y, size, color) => {
  pixel(ctx, x, y, size, size, color);
  pixel(ctx, x + 2, y + 2, size - 4, 3, "rgba(255, 255, 255, 0.22)");
  pixel(ctx, x + 2, y + 2, 3, size - 4, "rgba(255, 255, 255, 0.18)");
  pixel(ctx, x + size - 4, y + 2, 2, size - 4, "rgba(13, 11, 22, 0.24)");
  pixel(ctx, x + 2, y + size - 4, size - 4, 2, "rgba(13, 11, 22, 0.24)");
};

const drawBlockCluster = (ctx, originX, originY, size, cells, color) => {
  cells.forEach(([gridX, gridY]) => {
    drawBlockCell(ctx, originX + gridX * size, originY + gridY * size, size, color);
  });
};

const drawSpark = (ctx, x, y, color) => {
  pixel(ctx, x + 4, y, 4, 12, color);
  pixel(ctx, x, y + 4, 12, 4, color);
  pixel(ctx, x + 2, y + 2, 8, 8, "rgba(255, 255, 255, 0.2)");
};

const drawBeam = (ctx, startX, startY, steps, color) => {
  for (let step = 0; step < steps; step += 1) {
    pixel(ctx, startX + step * 5, startY + step * 9, 8, 20, color);
  }
};

const drawPlayerShip = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [5, 0, 4, 1, "#58566d"],
    [4, 1, 6, 1, "#9a9cb0"],
    [3, 2, 2, 1, "#7a7d90"],
    [5, 2, 4, 1, "#3f4458"],
    [9, 2, 2, 1, "#7a7d90"],
    [2, 3, 2, 2, "#62657a"],
    [4, 3, 2, 2, "#2d3142"],
    [6, 3, 2, 3, "#171b28"],
    [8, 3, 2, 2, "#2d3142"],
    [10, 3, 2, 2, "#62657a"],
    [3, 5, 2, 2, "#4d5166"],
    [5, 5, 1, 2, "#7a7d90"],
    [6, 5, 2, 2, "#5fd7ff"],
    [8, 5, 1, 2, "#7a7d90"],
    [9, 5, 2, 2, "#4d5166"],
    [1, 6, 2, 3, "#3e4359"],
    [3, 7, 2, 2, "#262b3c"],
    [5, 7, 1, 2, "#50556a"],
    [6, 7, 2, 3, "#1a1f2e"],
    [8, 7, 1, 2, "#50556a"],
    [9, 7, 2, 2, "#262b3c"],
    [11, 6, 2, 3, "#3e4359"],
    [2, 9, 2, 2, "#2b3040"],
    [4, 9, 2, 2, "#50556a"],
    [6, 9, 2, 3, "#171b28"],
    [8, 9, 2, 2, "#50556a"],
    [10, 9, 2, 2, "#2b3040"],
    [0, 10, 2, 3, "#50556a"],
    [2, 11, 2, 2, "#252a39"],
    [4, 11, 2, 2, "#717489"],
    [6, 12, 2, 3, "#3a4054"],
    [8, 11, 2, 2, "#717489"],
    [10, 11, 2, 2, "#252a39"],
    [12, 10, 2, 3, "#50556a"],
    [1, 13, 2, 2, "#2c3141"],
    [3, 13, 2, 2, "#5e6378"],
    [5, 15, 1, 2, "#f58d54"],
    [6, 15, 2, 2, "#2a2f40"],
    [8, 15, 1, 2, "#f58d54"],
    [9, 13, 2, 2, "#5e6378"],
    [11, 13, 2, 2, "#2c3141"],
    [0, 13, 1, 3, "#202533"],
    [13, 13, 1, 3, "#202533"],
    [2, 15, 2, 2, "#f05f4f"],
    [10, 15, 2, 2, "#f05f4f"],
    [4, 5, 1, 4, "#f28d32"],
    [9, 5, 1, 4, "#f28d32"],
  ]);
};

const drawEnemyShip = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [4, 0, 3, 1, "#9a9fb4"],
    [3, 1, 5, 1, "#6d7287"],
    [1, 2, 2, 1, "#81869a"],
    [3, 2, 5, 1, "#2b3040"],
    [8, 2, 2, 1, "#81869a"],
    [0, 3, 2, 1, "#9a9fb4"],
    [2, 3, 2, 2, "#62677c"],
    [4, 3, 2, 2, "#232838"],
    [6, 3, 2, 2, "#62677c"],
    [8, 3, 2, 1, "#9a9fb4"],
    [1, 5, 2, 2, "#4d5267"],
    [3, 5, 1, 2, "#2b3040"],
    [4, 5, 2, 2, "#f05f4f"],
    [6, 5, 1, 2, "#2b3040"],
    [7, 5, 2, 2, "#4d5267"],
    [0, 6, 2, 2, "#c2c5d2"],
    [2, 7, 2, 2, "#7a7f93"],
    [4, 7, 2, 2, "#272c3b"],
    [6, 7, 2, 2, "#7a7f93"],
    [8, 6, 2, 2, "#c2c5d2"],
  ]);
};

const drawMiniCruiser = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [3, 0, 3, 1, "#d7dae4"],
    [2, 1, 5, 1, "#7d8297"],
    [1, 2, 2, 1, "#5d6277"],
    [3, 2, 3, 1, "#262b3c"],
    [6, 2, 2, 1, "#5d6277"],
    [0, 3, 2, 2, "#babfce"],
    [2, 3, 1, 2, "#53586c"],
    [3, 3, 2, 3, "#1d2230"],
    [5, 3, 1, 2, "#53586c"],
    [6, 3, 2, 2, "#babfce"],
    [2, 5, 1, 1, "#f05f4f"],
    [5, 5, 1, 1, "#f05f4f"],
  ]);
};

const drawWingShip = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [4, 0, 2, 1, "#d8dce7"],
    [3, 1, 4, 1, "#7f859a"],
    [2, 2, 2, 1, "#5b6075"],
    [4, 2, 2, 1, "#1f2432"],
    [6, 2, 2, 1, "#5b6075"],
    [1, 3, 2, 2, "#bcc1d0"],
    [3, 3, 2, 2, "#4f556a"],
    [5, 3, 2, 2, "#4f556a"],
    [7, 3, 2, 2, "#bcc1d0"],
    [3, 5, 1, 2, "#f05f4f"],
    [4, 5, 2, 2, "#5fd7ff"],
    [6, 5, 1, 2, "#f05f4f"],
    [2, 7, 2, 2, "#6a6f84"],
    [4, 7, 2, 2, "#232838"],
    [6, 7, 2, 2, "#6a6f84"],
  ]);
};

const drawBomberShip = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [4, 0, 4, 1, "#9ea3b7"],
    [3, 1, 6, 1, "#72778c"],
    [1, 2, 2, 2, "#5a6074"],
    [3, 2, 6, 2, "#2b3040"],
    [9, 2, 2, 2, "#5a6074"],
    [0, 4, 3, 2, "#4d5267"],
    [3, 4, 2, 3, "#676d82"],
    [5, 4, 2, 4, "#171b28"],
    [7, 4, 2, 3, "#676d82"],
    [9, 4, 3, 2, "#4d5267"],
    [2, 7, 2, 2, "#2c3141"],
    [4, 8, 1, 2, "#f28d32"],
    [5, 8, 2, 2, "#f05f4f"],
    [7, 8, 1, 2, "#f28d32"],
    [8, 7, 2, 2, "#2c3141"],
  ]);
};

const drawGamepad = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [2, 0, 8, 1, "#7e84a0"],
    [1, 1, 10, 1, "#959bb4"],
    [0, 2, 12, 3, "#30364a"],
    [1, 5, 10, 2, "#252a3a"],
    [2, 7, 2, 2, "#515873"],
    [8, 7, 2, 2, "#515873"],
    [3, 3, 1, 3, "#5fd7ff"],
    [2, 4, 3, 1, "#5fd7ff"],
    [8, 3, 1, 1, "#ff667c"],
    [10, 3, 1, 1, "#ffd45e"],
    [9, 2, 1, 3, "#8eff82"],
    [6, 3, 1, 1, "#bcc1d0"],
    [7, 4, 1, 1, "#bcc1d0"],
  ]);
};

const drawJoystick = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [4, 0, 2, 2, "#ff667c"],
    [4, 2, 2, 4, "#babfce"],
    [2, 6, 6, 2, "#4a5066"],
    [1, 8, 8, 2, "#262b3c"],
    [0, 10, 10, 2, "#181d2b"],
    [2, 11, 6, 1, "#5fd7ff"],
  ]);
};

const drawCartridge = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [1, 0, 8, 1, "#8f95af"],
    [0, 1, 10, 7, "#2b3040"],
    [1, 2, 8, 3, "#5fd7ff"],
    [2, 3, 6, 1, "#1f7f9e"],
    [2, 5, 6, 2, "#161b28"],
    [3, 6, 1, 1, "#ff667c"],
    [6, 6, 1, 1, "#ffd45e"],
  ]);
};

const drawSword = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [5, 0, 2, 5, "#d7dae4"],
    [4, 1, 4, 1, "#9ca2b9"],
    [4, 5, 4, 1, "#ffd45e"],
    [5, 6, 2, 2, "#7b5232"],
    [4, 8, 4, 2, "#5d3d28"],
    [5, 10, 2, 3, "#2b3040"],
  ]);
};

const drawPotion = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [4, 0, 2, 2, "#8f6746"],
    [3, 2, 4, 1, "#c89d74"],
    [2, 3, 6, 1, "#d7dae4"],
    [1, 4, 8, 4, "#5fd7ff"],
    [2, 8, 6, 2, "#2f93b8"],
    [3, 10, 4, 1, "#d7dae4"],
  ]);
};

const drawCoin = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [2, 0, 4, 1, "#ffe081"],
    [1, 1, 6, 1, "#ffd45e"],
    [0, 2, 8, 4, "#f0b92e"],
    [1, 6, 6, 1, "#d89c1f"],
    [2, 7, 4, 1, "#ffe081"],
    [3, 2, 1, 4, "#ffd45e"],
    [5, 2, 1, 4, "#a87817"],
  ]);
};

const drawOrb = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [2, 0, 4, 1, "#baf3ff"],
    [1, 1, 6, 1, "#5fd7ff"],
    [0, 2, 8, 4, "#289bc4"],
    [1, 6, 6, 1, "#1d6e8b"],
    [2, 7, 4, 1, "#baf3ff"],
    [2, 2, 2, 2, "rgba(255, 255, 255, 0.25)"],
  ]);
};

const drawTileStack = (ctx, originX, originY, scale) => {
  drawPixelShape(ctx, originX, originY, scale, [
    [0, 2, 4, 2, "#31c9d8"],
    [4, 2, 4, 2, "#21c1b8"],
    [8, 2, 4, 2, "#9bcc2f"],
    [2, 0, 4, 2, "#ffb51f"],
    [6, 0, 4, 2, "#ff667c"],
    [4, 4, 4, 2, "#9b5cff"],
  ]);
};

const drawSparkle = (ctx, x, y, color) => {
  pixel(ctx, x + 4, y, 4, 12, color);
  pixel(ctx, x, y + 4, 12, 4, color);
  pixel(ctx, x + 3, y + 3, 6, 6, "rgba(255, 255, 255, 0.18)");
};

const drawBlockBackdrop = (ctx, offsetY) => {
  drawBeam(ctx, 4, offsetY - 12, 5, "rgba(176, 227, 255, 0.12)");
  drawBeam(ctx, 40, offsetY - 24, 5, "rgba(176, 227, 255, 0.14)");
  drawBeam(ctx, 82, offsetY - 16, 5, "rgba(176, 227, 255, 0.1)");
};

const drawScene = (canvas) => {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const scene = canvas.dataset.scene;

  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, width, height);

  const stars = [
    [18, 24], [64, 34], [114, 18], [38, 142], [100, 118], [24, 250], [118, 226], [72, 320],
    [16, 410], [110, 396], [46, 512], [124, 520],
  ];

  if (scene === "galactic-left" || scene === "galactic-right") {
    stars.forEach(([x, y], index) => {
      pixel(ctx, x, y, index % 3 === 0 ? 4 : 3, index % 2 === 0 ? 4 : 3, index % 2 === 0 ? "#5fd7ff" : "#ffd45e");
    });
  }

  switch (scene) {
    case "galactic-left":
      pixel(ctx, 20, 82, 108, 8, "#4f3f78");
      drawGamepad(ctx, 34, 32, 5);
      drawSparkle(ctx, 92, 52, "#5fd7ff");
      pixel(ctx, 18, 238, 108, 8, "#4f3f78");
      drawSword(ctx, 50, 154, 5);
      drawPotion(ctx, 90, 174, 4);
      pixel(ctx, 18, 428, 108, 8, "#4f3f78");
      drawCartridge(ctx, 38, 458, 5);
      drawOrb(ctx, 92, 480, 4);
      break;
    case "blocks-right":
      pixel(ctx, 18, 86, 108, 8, "#4f3f78");
      drawPlayerShip(ctx, 36, 32, 4);
      drawEnemyShip(ctx, 92, 62, 3);
      pixel(ctx, 18, 266, 108, 8, "#4f3f78");
      drawJoystick(ctx, 50, 190, 5);
      drawCoin(ctx, 92, 212, 4);
      pixel(ctx, 18, 458, 108, 8, "#4f3f78");
      drawBomberShip(ctx, 30, 398, 4);
      drawMiniCruiser(ctx, 98, 480, 3);
      break;
    case "blocks-left":
      pixel(ctx, 18, 94, 108, 8, "#4f3f78");
      drawTileStack(ctx, 26, 40, 5);
      drawSparkle(ctx, 92, 62, "#ffd45e");
      pixel(ctx, 18, 286, 108, 8, "#4f3f78");
      drawBlockCluster(ctx, 24, 218, 18, [[0, 0], [1, 0], [0, 1], [1, 1]], "#9ac526");
      drawBlockCluster(ctx, 58, 218, 18, [[0, 1], [1, 1], [2, 1], [2, 0]], "#1ab3a7");
      drawBlockCluster(ctx, 78, 182, 18, [[1, 0], [0, 1], [1, 1], [1, 2]], "#f7a30a");
      drawBlockCluster(ctx, 110, 216, 14, [[0, 1], [1, 1], [2, 1], [2, 0]], "#eb445b");
      pixel(ctx, 18, 474, 108, 8, "#4f3f78");
      drawPotion(ctx, 32, 398, 5);
      drawOrb(ctx, 92, 432, 5);
      break;
    case "galactic-right":
      pixel(ctx, 20, 92, 108, 8, "#4f3f78");
      drawWingShip(ctx, 30, 40, 4);
      drawCoin(ctx, 94, 72, 5);
      pixel(ctx, 20, 266, 108, 8, "#4f3f78");
      drawBomberShip(ctx, 28, 198, 4);
      drawSparkle(ctx, 98, 220, "#ff667c");
      pixel(ctx, 20, 462, 108, 8, "#4f3f78");
      drawJoystick(ctx, 34, 384, 5);
      drawMiniCruiser(ctx, 94, 432, 4);
      break;
    default:
      break;
  }
};

sceneCanvases.forEach(drawScene);

if (!reduceMotion && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -48px 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (!reduceMotion) {
  tiltItems.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (x - 0.5) * 5;
      const rotateX = (0.5 - y) * 5;

      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
    });

    const resetTilt = () => {
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    card.addEventListener("pointerleave", resetTilt);
    card.addEventListener("pointercancel", resetTilt);
  });
}
