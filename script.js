/* =========================================================
   陈楠 AI 数据评测实验室 - 内容配置区
   后续修改个人信息、案例文案、联系方式，优先改这里。
   ========================================================= */
const profileData = {
  name: "陈楠",
  title: "AI 数据训练师 / AI 模型评测 / 多模态评测 / 数据标注质检方向",
  email: "15757865023@163.com",
  wechat: "15757865023",
  phone: "15757865023",
  resume: "assets/resume.pdf",
  avatar: "assets/avatar.jpg",
  roleImage: "assets/chen-3d.png",
  demoUrl: "demos/annotation_quality_rules_offline.html",
  summary: "有得物 AI 数据训练师经历，参与电商图片理解、AI 搜索导购评测、商品短视频机审评测和标注质检看板等项目。更关注把业务目标拆成可执行规则，再通过试标、抽检、反馈、返修和复检形成稳定闭环。",
  stageTags: [
    "AI 模型评测",
    "多模态评测",
    "Badcase 归因",
    "质检闭环"
  ],
  orbitLabels: [
    "标签体系",
    "抽检 / 返修 / 复检",
    "Badcase 归因",
    "Dataset QA",
    "多模态证据链",
    "看板提效"
  ],
  aboutPoints: [
    {
      title: "规则拆解",
      text: "把模糊业务需求拆成标签体系、评分维度、可见性原则和边界案例。"
    },
    {
      title: "质检闭环",
      text: "通过试标、抽检、反馈、返修、复检和 QA 文档沉淀稳定标注口径。"
    },
    {
      title: "数据产品感",
      text: "能用看板和离线工具表达风险排行、人员跟进、缺陷分布和批次趋势。"
    }
  ],
  projects: [
    {
      id: "fashion",
      number: "案例 01",
      title: "女装图片理解",
      subtitle: "Fashion Image QA Lab",
      cnTitle: "北极星电商女装图片理解评测与标注质量管理",
      type: "女装图片理解",
      accent: "#f27aa1",
      scale: "100万级图片",
      cardKeywords: ["100万级图片", "标签体系", "供应商质检"],
      tags: ["标签体系", "供应商质检", "Badcase 归因"],
      cardAction: "进入案例",
      role: "规则拆解 / 批次抽检 / badcase 反馈 / 返修复检",
      value: "提升大规模女装图片标注数据的一致性、可用性和返修定位效率。",
      background: "围绕电商女装商品图，评测模型与供应商标注是否能稳定识别主商品、类目、属性和图片质量问题。",
      difficulty: "女装图片存在多商品、局部图、材质不可见、类目边界相近等问题，单靠主观经验很容易出现口径漂移。",
      method: [
        "先把业务问题拆成主商品判断、类目识别、属性识别、图片质量四类任务。",
        "对每类任务定义可见性原则和易混边界，避免标注人员凭经验脑补。",
        "用抽检和返修复检沉淀 badcase，把问题回写到 QA 文档和供应商反馈里。"
      ],
      metrics: [
        ["数据规模", "100 万级电商女装图片"],
        ["评测对象", "主商品、类目、颜色、材质、版型、领型、袖长、图片质量"],
        ["我的角色", "规则拆解 / 批次抽检 / badcase 反馈 / 返修复检"],
        ["核心价值", "提升大规模标注数据一致性和可用性"]
      ],
      matrix: [
        ["主商品判断", ["画面占比", "中心位置", "展示完整度", "主次关系"]],
        ["类目识别", ["上装", "裙装", "裤装", "外套", "易混类目"]],
        ["属性识别", ["颜色", "材质", "版型", "领型", "袖长", "图案"]],
        ["图片质量", ["多商品", "遮挡", "水印", "低质图", "局部图"]]
      ],
      sample: {
        title: "白色长袖翻领衬衫模特图",
        result: ["主商品：衬衫", "一级类目：上装", "二级类目：衬衫", "颜色：白色", "领型：翻领", "袖长：长袖", "图案：纯色", "图片类型：模特图"],
        principle: "只标可见信息，材质不清晰时不强行脑补；多商品场景优先判断主商品是否明确。"
      },
      badcases: [
        ["主商品定位错误", "把配饰、模特穿搭中的次要商品误判为主商品。", "处理方式：增加画面占比、中心位置、展示完整度三项判断顺序。"],
        ["类目边界混淆", "衬衫、外套、针织开衫等边界接近时评分波动。", "处理方式：补充易混类目的对照样例，试标后统一口径。"],
        ["材质不可见却强行判断", "图片分辨率低或纹理不明显时仍标出雪纺、棉麻等材质。", "处理方式：明确不可见不标，避免用商品常识替代图像证据。"],
        ["多商品主次不清", "套装、叠穿、模特搭配图中多个商品同时出现。", "处理方式：先判断商品主体是否清晰，再决定是否进入属性标注。"],
        ["局部图处理不一致", "只展示衣领、袖口、局部纹理时有人继续标完整属性。", "处理方式：把局部图纳入图片质量标签，降低错误属性扩散。"]
      ],
      outputs: ["标签体系矩阵", "供应商抽检反馈表", "QA 判断口径文档", "返修复检问题标签", "典型 badcase 库"]
    },
    {
      id: "search",
      number: "案例 02",
      title: "AI 搜索导购评测",
      subtitle: "Search Guide Evaluation",
      cnTitle: "北极星电商 AI 搜索意图识别与导购质量评测",
      type: "AI 搜索导购评测",
      accent: "#46d9d1",
      scale: "200条 Query",
      cardKeywords: ["200条 Query", "GSB 横评", "三层评分"],
      tags: ["GSB 横评", "三层评分", "Query 分类"],
      cardAction: "进入案例",
      role: "Query 分类 / 评分标准拆解 / 横评口径拉齐 / badcase 归因",
      value: "将主观导购体验拆成意图识别、回答质量和商品承接三层，让横评判断更可解释。",
      background: "对北极星与其他 AI 搜索导购产品进行横向评测，判断模型是否真正理解用户购买需求并给出可承接的商品建议。",
      difficulty: "导购回答看似主观，但背后涉及预算、场景、人群、对比维度和商品承接，必须把感受拆成可评分结构。",
      method: [
        "先按 Query 意图类型分组，再确定每类问题最关键的评测重点。",
        "把单条回答拆成意图识别、导购回答质量、商品承接质量三层。",
        "用 G / S / B 横评判断相对优劣，并记录差异原因。"
      ],
      queries: [
        ["精确需求型", "300 元以内空气炸锅推荐", "预算、品类、核心约束是否识别"],
        ["模糊需求型", "送妈妈实用一点的生日礼物", "人群、场景、决策因素是否补全"],
        ["产品对比型", "扫地机器人和洗地机哪个适合小户型", "差异分析是否清晰"],
        ["场景化需求型", "露营需要买哪些装备", "推荐是否成体系"],
        ["问题驱动型", "临期进口零食会不会有安全隐患", "是否还原背后的购买决策需求"]
      ],
      scoreLayers: [
        ["第一层：意图识别", "是否识别预算、品类、人群、场景、禁忌条件和隐含诉求。"],
        ["第二层：导购回答质量", "是否给出清晰理由、决策辅助、对比结论和可执行建议。"],
        ["第三层：商品承接质量", "推荐商品是否与回答逻辑一致，是否覆盖价格、类型和使用场景。"]
      ],
      gsb: [
        ["G", "北极星更好", "意图理解更完整，回答和商品承接更贴合需求。"],
        ["S", "双方差不多", "关键判断接近，差异不影响最终导购体验。"],
        ["B", "北极星更差", "漏识别核心约束，或回答与商品承接明显脱节。"]
      ],
      badcases: [
        ["意图识别不完整", "只识别品类，漏掉预算、人群、场景或使用限制。"],
        ["推荐理由不充分", "给出商品列表但缺少为什么适合的解释。"],
        ["决策辅助性弱", "没有比较维度，用户仍不知道怎么选。"],
        ["商品丰富性不足", "只覆盖单一价位或单一类型，无法满足探索型需求。"],
        ["导购和商品承接不一致", "回答说适合小户型，商品却承接到大体积设备。"]
      ],
      outputs: ["Query 类型库", "三层评分表", "GSB 横评记录", "高频问题标签", "导购质量复盘结论"]
    },
    {
      id: "video",
      number: "案例 03",
      title: "商品短视频机审评测",
      subtitle: "Multimodal Video Audit",
      cnTitle: "商品短视频专项机审模型多模态评测",
      type: "商品短视频机审评测",
      accent: "#7ea7ff",
      scale: "OCR / ASR / SKU",
      cardKeywords: ["OCR", "ASR", "SKU", "误伤漏放"],
      tags: ["多模态证据链", "误伤漏放", "专项风险"],
      cardAction: "进入案例",
      role: "证据链整理 / 专项维度标注 / 误伤漏放归因 / 标注方式优化",
      value: "综合关键帧、OCR、ASR、商品标题和 SKU 信息进行多模态判定，提升风险识别可解释性。",
      background: "针对商品短视频中的二维码引流、虚假宣传、低质画面、商品不一致等专项风险，评测机审模型是否能准确拦截。",
      difficulty: "风险往往不只出现在画面，也可能藏在字幕、口播、标题或挂载商品里，需要把多模态证据串起来判断。",
      method: [
        "先抽取关键帧、OCR 字幕、ASR 口播、商品标题和 SKU 信息。",
        "再按专项风险维度判断是否命中，并记录时间点和截图证据。",
        "区分误伤和漏放，分别评估模型风险和商家正常发布影响。"
      ],
      evidenceFlow: ["商品短视频", "关键帧", "OCR 字幕", "ASR 口播", "商品标题", "挂载 SKU", "专项模型评测", "风险标签 / 时间点 / 截图证据"],
      risks: ["商品一致性", "二维码 / 联系方式", "低质画面", "虚假宣传", "水印遮挡", "主体展示不清"],
      missHit: [
        ["漏放", "应该拦截但模型没有识别，重点关注二维码引流、虚假宣传等高风险问题。"],
        ["误伤", "正常视频被模型判为风险内容，重点控制误伤，避免影响正常商家发布。"]
      ],
      compare: [
        ["原方式", "一人横向判断多个维度", "问题：学习成本高、容易漏看、评分尺度不稳定。"],
        ["优化后", "一人纵向负责一至两个专项维度", "价值：降低学习成本，提高单一维度判断稳定性，也更贴合专项模型训练逻辑。"]
      ],
      badcases: [
        ["二维码只在末尾闪现", "需要结合时间点和截图证据，避免只看首帧漏判。"],
        ["口播夸大但画面正常", "ASR 证据权重需要提高，不能只看画面质量。"],
        ["商品标题与视频主体不一致", "结合 SKU 与画面主体判断商品承接是否可信。"],
        ["水印遮挡主体", "同时影响质量风险和商品识别，应分开记录问题类型。"]
      ],
      outputs: ["多模态证据链", "专项风险标签", "误伤漏放复盘", "纵向标注分工建议", "截图证据规则"]
    },
    {
      id: "dashboard",
      number: "案例 04",
      title: "标注质检看板 Demo",
      subtitle: "Annotation QA Dashboard",
      cnTitle: "标注评测一体化可视化看板与工具化提效",
      type: "标注质检看板 Demo",
      accent: "#f4c86a",
      scale: "离线看板",
      cardKeywords: ["离线看板", "风险排行", "跟进状态"],
      tags: ["风险排行", "跟进状态", "工具提效"],
      cardAction: "打开 Demo",
      role: "指标设计 / 看板结构 / 异常定位 / 本地 Demo 工具化",
      value: "把质检问题从表格记录转成风险可视化，让项目、人员、缺陷和批次趋势更容易被定位。",
      background: "标注项目中需要快速发现异常项目、异常人员和低一致性批次，并把跟进状态沉淀到一个可复盘的看板里。",
      difficulty: "质检数据分散在批次表、抽检表、返修记录和人员统计里，单靠人工筛表很难快速判断优先级。",
      method: [
        "先定义今日标注量、抽检准确率、高风险项目、待返修批次等顶部指标。",
        "再用项目风险排行、缺陷分布、人员准确率和批次质量趋势定位问题。",
        "最后加入跟进状态，让风险从发现走到处理闭环。"
      ],
      metrics: [
        ["今日标注量", "12,480"],
        ["抽检准确率", "94.6%"],
        ["高风险项目", "3"],
        ["待返修批次", "7"]
      ],
      riskRank: [
        ["女装图片理解", 88],
        ["搜索导购评测", 72],
        ["商品短视频机审", 64],
        ["PPT 版式评测", 39]
      ],
      defects: [
        ["主商品定位", 22],
        ["类目边界", 18],
        ["材质不可见", 15],
        ["多商品主次", 14],
        ["低质画面", 12],
        ["导购承接不一致", 19]
      ],
      people: [
        ["A01", "91.2%", "主商品定位", "待跟进"],
        ["A02", "93.1%", "类目边界", "待跟进"],
        ["A03", "89.8%", "材质不可见", "待跟进"],
        ["A04", "95.4%", "多商品主次", "已跟进"],
        ["A05", "92.7%", "低质画面", "待跟进"],
        ["A06", "94.1%", "导购承接不一致", "待跟进"]
      ],
      outputs: ["质检指标体系", "风险排行组件", "人员跟进状态", "批次趋势视图", "离线 HTML Demo"]
    }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let lastGalleryScrollY = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderStage();
  renderGallery();
  renderAbout();
  renderContact();
  bindNavigation();
  bindTheme();
  bindProjectRouting();
  bindScrollTools();
  bindReveal();
  bindStageTilt();
  bindMotionLighting();
  startOrbitCards();
});

function renderStage() {
  const wall = $("#stageWall");
  const tagHost = $("#stageTags");
  const orbitLayer = $("#orbitCardLayer");

  if (wall) {
    wall.innerHTML = profileData.projects.concat(profileData.projects).map((project) => `
      <div class="stage-wall-card" style="--accent:${project.accent}">
        <span class="mini-tag">${project.title}</span>
      </div>
    `).join("");
  }

  if (tagHost) {
    tagHost.innerHTML = profileData.stageTags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }

  if (orbitLayer) {
    orbitLayer.innerHTML = profileData.orbitLabels.map((label, index) => `
      <span class="orbit-card" data-orbit-card data-index="${index}">
        <span class="orbit-card-inner">${label}</span>
      </span>
    `).join("");
  }

  setupRoleImage();
}

function setupRoleImage() {
  const image = $("#stageRoleImage");
  const visual = $("#stageVisual");
  if (!image || !visual) return;

  image.alt = "";
  image.hidden = true;
  image.classList.remove("is-loaded");
  visual.classList.remove("has-role-image");

  const showLoaded = () => {
    image.hidden = false;
    image.classList.add("is-loaded");
    visual.classList.add("has-role-image");
  };

  const hideBroken = () => {
    image.hidden = true;
    image.classList.remove("is-loaded");
    visual.classList.remove("has-role-image");
  };

  image.addEventListener("load", showLoaded);
  image.addEventListener("error", hideBroken);

  // 只有真正放入 assets/chen-3d.png 时才显示角色；缺失时隐藏，避免首页出现破图或模糊残影。
  image.setAttribute("src", profileData.roleImage);
  if (image.complete && image.naturalWidth > 0) showLoaded();
}

function startOrbitCards() {
  const layer = $("#orbitCardLayer");
  const stage = $(".ai-orbit");
  const cards = $$("[data-orbit-card]");
  if (!layer || !cards.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmall = () => window.matchMedia("(max-width: 760px)").matches;
  let paused = false;
  let start = performance.now();
  let frozenElapsed = 0;

  const getRadii = () => isSmall() ? [128, 168] : [308, 382];
  const getSpeed = (ring) => ring === 0 ? 0.00034 : -0.00024;

  // 鼠标悬停时暂停，让轨道标签保持可读。
  stage?.addEventListener("mouseenter", () => {
    paused = true;
  });
  stage?.addEventListener("mouseleave", () => {
    paused = false;
    start = performance.now() - frozenElapsed;
  });

  const place = (elapsed) => {
    frozenElapsed = elapsed;
    const radii = getRadii();
    cards.forEach((card, index) => {
      const ring = index % 2;
      const base = (Math.PI * 2 / cards.length) * index + ring * 0.48;
      const angle = base + elapsed * getSpeed(ring);
      const radius = radii[ring];
      const x = Math.cos(angle) * radius;
      const yScale = ring === 0 ? 0.82 : 0.58;
      const y = Math.sin(angle) * radius * yScale;
      const depth = Math.sin(angle);
      const scale = 0.92 + (depth + 1) * 0.07;
      const opacity = 0.72 + (depth + 1) * 0.14;

      card.style.left = `calc(50% + ${x.toFixed(2)}px)`;
      card.style.top = `calc(50% + ${y.toFixed(2)}px)`;
      card.style.zIndex = String(20 + Math.round(depth * 10) + ring);
      card.style.opacity = opacity.toFixed(2);
      card.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
    });
  };

  place(0);
  if (reduced) return;

  const tick = (now) => {
    if (!paused) place(now - start);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderGallery() {
  const host = $("#projectWall");
  if (!host) return;

  host.innerHTML = profileData.projects.map((project) => `
    <article class="project-card reveal" tabindex="0" data-project="${project.id}" style="--accent:${project.accent}; --accent-soft:${hexToRgba(project.accent, 0.2)}">
      <div>
        <span class="project-number">${project.number}</span>
        <h3>${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <div class="project-meta">
          ${project.cardKeywords.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}
        </div>
        <div class="case-preview" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
      </div>
      <div class="project-open-hint">
        <span>${project.cardAction}</span>
        <span>↗</span>
      </div>
    </article>
  `).join("");

  $$(".project-card", host).forEach((card) => {
    const open = () => openProjectFromCard(card.dataset.project, card);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    card.addEventListener("mousemove", (event) => tiltCard(event, card));
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--card-rx", "0deg");
      card.style.setProperty("--card-ry", "0deg");
    });
  });
}

function renderAbout() {
  const summary = $("#aboutSummary");
  const points = $("#aboutPoints");
  if (summary) summary.textContent = profileData.summary;
  if (points) {
    points.innerHTML = profileData.aboutPoints.map((point) => `
      <div class="point-card">
        <strong>${point.title}</strong>
        <span>${point.text}</span>
      </div>
    `).join("");
  }
}

function renderContact() {
  const host = $("#contactGrid");
  const attitudeText = $("#attitudeText");
  if (!host) return;

  const attitude = "从理想主义走向职场现实的过程中，我逐渐学会在坚持与取舍之间找到平衡，也更加理解结果呈现的重要性。相比单纯讨论“是否可行”，我更关注如何拆解问题、给出解决方案，并评估其中的时间成本与执行路径。一路走来走过弯路，也遇到过不少贵人；经历过认可，也承受过否定，但这些都让我更加笃定：选择一行，就认真做、长期做，并努力做到最好。";
  if (attitudeText) attitudeText.textContent = attitude;
  const items = [
    ["邮箱", profileData.email, "复制邮箱", "email"],
    ["微信", profileData.wechat, "复制微信", "wechat"],
    ["手机号", profileData.phone, "复制手机", "phone"]
  ];

  host.innerHTML = items.map(([label, value, action, key]) => `
    <div class="contact-item contact-entry">
      <strong>${label}</strong>
      <span>${value}</span>
      ${action ? `<button type="button" data-copy="${key}">${action}</button>` : ""}
    </div>
  `).join("") + `
    <a class="contact-item resume-entry" href="${profileData.resume}" download>
      <strong>下载简历</strong>
      <span>保留 PDF 正式版，方便 HR 或面试官离线查看。</span>
    </a>
  `;

  $$("[data-copy]", host).forEach((button) => {
    button.addEventListener("click", () => copyText(profileData[button.dataset.copy]));
  });
}

function bindNavigation() {
  const menu = $("#menuToggle");
  const nav = $("#siteNav");
  if (!menu || !nav) return;

  menu.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

function bindTheme() {
  const button = $("#themeToggle");
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "light") document.body.classList.add("light-theme");
  updateThemeButton();

  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      localStorage.setItem("portfolio-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
      updateThemeButton();
    });
  }
}

function updateThemeButton() {
  const button = $("#themeToggle");
  if (!button) return;
  button.textContent = document.body.classList.contains("light-theme") ? "深色" : "浅色";
}

function bindProjectRouting() {
  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("popstate", handleRoute);
  $("#projectClose")?.addEventListener("click", closeProjectPage);
  $("#projectPage")?.addEventListener("click", (event) => {
    if (event.target.id === "projectPage") closeProjectPage();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("project-open")) closeProjectPage();
  });

  handleRoute();
}

function openProjectFromCard(projectId, card) {
  lastGalleryScrollY = window.scrollY;
  card.classList.add("is-launching");
  resetProjectScroll();

  setTimeout(() => {
    history.pushState("", document.title, `#/project/${projectId}`);
    card.classList.remove("is-launching");
    handleRoute();
  }, 160);
}

function handleRoute() {
  const match = new URL(document.URL).hash.match(/^#\/project\/(.+)$/);
  if (!match) {
    hideProjectPage(false);
    return;
  }

  const project = profileData.projects.find((item) => item.id === match[1]);
  if (!project) return;
  renderProjectPage(project);
}

function renderProjectPage(project) {
  const page = $("#projectPage");
  const inner = $("#projectPageInner");
  if (!page || !inner) return;

  inner.innerHTML = `
    <div class="detail-hero">
      <section class="detail-title">
        <p class="eyebrow">案例拆解 / ${project.subtitle}</p>
        <h2>${project.cnTitle}</h2>
        <p>${compactText(project.background, 82)}</p>
        <div class="detail-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </section>
      <aside class="detail-aside">
        ${summaryCell("我的角色", project.role)}
        ${summaryCell("核心难点", compactText(project.difficulty, 68))}
        ${summaryCell("项目价值", compactText(project.value, 58))}
        ${summaryCell("可沉淀能力", project.outputs.slice(0, 3).join(" / "))}
      </aside>
    </div>
    ${renderMethod(project)}
    ${renderProjectSpecific(project)}
    ${renderOutputs(project)}
  `;

  page.classList.remove("is-closing");
  page.classList.add("is-open");
  page.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-open");
  resetProjectScroll();
  requestAnimationFrame(resetProjectScroll);
  setTimeout(resetProjectScroll, 0);
  setTimeout(resetProjectScroll, 80);
  bindDetailInteractions(project);
}

function summaryCell(label, text) {
  return `
    <div class="summary-cell">
      <span>${label}</span>
      <strong>${text}</strong>
    </div>
  `;
}

function compactText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

function renderMethod(project) {
  return `
    <section class="case-section">
      <h3>方法拆解</h3>
      <div class="pipeline">
        ${project.method.map((text, index) => `
          <div class="pipeline-node">
            <b>${index + 1}</b>
            <p>${text}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProjectSpecific(project) {
  if (project.id === "fashion") return renderFashion(project);
  if (project.id === "search") return renderSearch(project);
  if (project.id === "video") return renderVideo(project);
  return renderDashboard(project);
}

function renderFashion(project) {
  return `
    <section class="case-section">
      <h3>项目概览指标</h3>
      <div class="case-grid">
        ${project.metrics.map(([label, value]) => detailCard(label, value)).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>标签体系矩阵</h3>
      <div class="matrix-grid">
        ${project.matrix.map(([title, items]) => `
          <div class="matrix-col">
            <strong>${title}</strong>
            ${items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        `).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>模拟标注样本卡</h3>
      <div class="sample-card">
        <div class="sample-visual">
          <div class="sample-shirt" aria-hidden="true"></div>
        </div>
        <div class="sample-result">
          <strong>样本描述：${project.sample.title}</strong>
          <ul>${project.sample.result.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p><strong>判断原则：</strong>${project.sample.principle}</p>
        </div>
      </div>
    </section>
    <section class="case-section">
      <h3>质量闭环流程</h3>
      <div class="pipeline">
        ${["试标", "抽检", "badcase 反馈", "返修", "复检", "QA 文档沉淀"].map((node, index) => `
          <div class="pipeline-node"><b>${index + 1}</b><p>${node}</p></div>
        `).join("")}
      </div>
    </section>
    ${renderBadcases(project.badcases, true)}
  `;
}

function renderSearch(project) {
  return `
    <section class="case-section">
      <h3>Query 分类案例墙</h3>
      <div class="query-wall">
        ${project.queries.map(([type, query, focus], index) => `
          <button class="query-card ${index === 0 ? "is-active" : ""}" type="button">
            <strong>${type}</strong>
            <p>${query}</p>
            <span class="mini-tag">${focus}</span>
          </button>
        `).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>三层评分体系</h3>
      <div class="score-stack">
        ${project.scoreLayers.map(([layer, text]) => `
          <div class="score-layer">
            <b>${layer}</b>
            <p>${text}</p>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>GSB 横评说明</h3>
      <div class="gsb-grid">
        ${project.gsb.map(([letter, title, text]) => detailCard(`${letter}：${title}`, text)).join("")}
      </div>
    </section>
    ${renderBadcases(project.badcases, false)}
  `;
}

function renderVideo(project) {
  return `
    <section class="case-section">
      <h3>多模态证据流</h3>
      <div class="evidence-flow">
        ${project.evidenceFlow.map((step) => `<div class="evidence-step"><strong>${step}</strong></div>`).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>专项风险标签</h3>
      <div class="risk-grid">
        ${project.risks.map((risk) => detailCard(risk, "结合画面、文字、口播和商品信息进行证据判断。")).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>误伤 / 漏放对比</h3>
      <div class="compare-grid">
        ${project.missHit.map(([title, text]) => detailCard(title, text)).join("")}
      </div>
    </section>
    <section class="case-section">
      <h3>标注方式优化对比</h3>
      <div class="compare-grid">
        ${project.compare.map(([title, method, value]) => detailCard(`${title}：${method}`, value)).join("")}
      </div>
    </section>
    ${renderBadcases(project.badcases, false)}
  `;
}

function renderDashboard(project) {
  const totalDefects = project.defects.reduce((sum, item) => sum + item[1], 0);
  return `
    <section class="case-section">
      <h3>模拟 Dashboard</h3>
      <div class="dashboard-preview">
        <span class="demo-note">示意数据，仅用于展示项目思路</span>
        <div class="metric-grid">
          ${project.metrics.map(([label, value]) => `
            <div class="metric-card">
              <span>${label}</span>
              <strong class="count-up" data-target="${parseMetric(value)}" data-suffix="${value.includes("%") ? "%" : ""}">${value.includes("%") ? "0%" : "0"}</strong>
            </div>
          `).join("")}
        </div>
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <h4>项目风险排行</h4>
            ${project.riskRank.map(([name, value]) => `
              <div class="bar-row" data-risk-project="${name}">
                <span>${name}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
                <b>${value}</b>
              </div>
            `).join("")}
          </div>
          <div class="dashboard-card">
            <h4>缺陷类型分布</h4>
            <div class="distribution">
              ${project.defects.map(([name, value], index) => `
                <div class="dist-row">
                  <span>${name}</span>
                  <div class="dist-strip"><span style="width:${Math.round(value / totalDefects * 100)}%; background:${index % 2 ? "var(--rose)" : "var(--cyan)"}"></span></div>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="dashboard-card">
            <h4>异常人员跟进卡</h4>
            <div class="people-grid">
              ${project.people.map(([name, acc, error, status]) => `
                <div class="person-card">
                  <strong>${name}</strong>
                  <p>准确率：${acc}</p>
                  <p>高频错误：${error}</p>
                  <button class="follow-btn ${status === "已跟进" ? "is-done" : ""}" type="button">${status}</button>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="dashboard-card">
            <h4>批次质量趋势</h4>
            ${renderTrendSvg()}
          </div>
        </div>
        <div class="stage-actions">
          <a class="btn primary" href="${profileData.demoUrl}" target="_blank" rel="noopener">打开质检看板 Demo</a>
          <button class="btn ghost" type="button" data-fake-filter>项目筛选 / 日期筛选</button>
        </div>
      </div>
    </section>
  `;
}

function detailCard(title, text) {
  return `
    <div class="detail-card">
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `;
}

function renderBadcases(badcases, hasHandling) {
  return `
    <section class="case-section">
      <h3>Badcase / 风险归因</h3>
      <div class="badcase-grid">
        ${badcases.map((item, index) => `
          <button class="badcase-card ${index === 0 ? "is-active" : ""}" type="button">
            <strong>${item[0]}</strong>
            <span>${item[1]}</span>
            ${hasHandling ? `<span>${item[2]}</span>` : ""}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderOutputs(project) {
  return `
    <section class="case-section">
      <h3>产出沉淀</h3>
      <ul class="output-list">
        ${project.outputs.map((output) => `<li>${output}</li>`).join("")}
      </ul>
      <div class="detail-footer-actions">
        <button class="btn primary" type="button" data-close-project>返回案例展厅</button>
      </div>
    </section>
  `;
}

function renderTrendSvg() {
  return `
    <svg class="trend-svg" viewBox="0 0 420 180" role="img" aria-label="批次质量趋势示意图">
      <defs>
        <linearGradient id="trendLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#f27aa1"></stop>
          <stop offset="100%" stop-color="#46d9d1"></stop>
        </linearGradient>
      </defs>
      <path d="M24 142 L24 24 M24 142 L396 142" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2"></path>
      <polyline points="30,126 82,112 134,118 186,84 238,92 290,62 342,70 392,44" fill="none" stroke="url(#trendLine)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <polyline points="30,126 82,112 134,118 186,84 238,92 290,62 342,70 392,44 392,142 30,142" fill="rgba(70,217,209,.12)" stroke="none"></polyline>
      ${[["30","126"],["82","112"],["134","118"],["186","84"],["238","92"],["290","62"],["342","70"],["392","44"]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#46d9d1"></circle>`).join("")}
    </svg>
  `;
}

function bindDetailInteractions(project) {
  $$(".query-card").forEach((card) => {
    card.addEventListener("click", () => setActive(card, ".query-card"));
  });

  $$(".badcase-card").forEach((card) => {
    card.addEventListener("click", () => setActive(card, ".badcase-card"));
  });

  $$(".follow-btn").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "已跟进";
      button.classList.add("is-done");
      showToast("已标记跟进");
    });
  });

  $$("[data-risk-project]").forEach((row) => {
    row.addEventListener("click", () => showToast(`已切换到：${row.dataset.riskProject}`));
  });

  $("[data-fake-filter]")?.addEventListener("click", () => showToast("筛选已切换为示意状态"));
  $("[data-close-project]")?.addEventListener("click", closeProjectPage);

  if (project.id === "dashboard") animateCounters();
}

function setActive(target, selector) {
  $$(selector, target.parentElement).forEach((item) => item.classList.remove("is-active"));
  target.classList.add("is-active");
}

function closeProjectPage() {
  if (new URL(document.URL).hash.startsWith("#/project/")) {
    history.pushState("", document.title, "#project-gallery");
  }
  hideProjectPage(true);
}

function resetProjectScroll() {
  const scrollers = [
    $("#projectPage"),
    $("#projectPageInner"),
    $(".project-page-content"),
    $(".case-detail-scroll"),
    $(".project-detail-body")
  ].filter(Boolean);

  scrollers.forEach((scroller) => {
    scroller.scrollTop = 0;
    if (typeof scroller.scrollTo === "function") scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function hideProjectPage(animated) {
  const page = $("#projectPage");
  if (!page || !page.classList.contains("is-open")) return;

  const finish = () => {
    page.classList.remove("is-open", "is-closing");
    page.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-open");
    window.scrollTo({ top: lastGalleryScrollY || $("#project-gallery")?.offsetTop || 0, behavior: "auto" });
  };

  if (!animated) {
    finish();
    return;
  }

  page.classList.add("is-closing");
  setTimeout(finish, 260);
}

function bindScrollTools() {
  const backTop = $("#backTop");
  window.addEventListener("scroll", () => {
    backTop?.classList.toggle("is-visible", window.scrollY > 640);
  });
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function bindReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function bindStageTilt() {
  const visual = $("#stageVisual");
  const image = $("#stageRoleImage");
  if (!visual || !image) return;

  visual.addEventListener("mousemove", (event) => {
    if (image.hidden) return;
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    image.style.setProperty("--tilt-x", `${x * 14}px`);
    image.style.setProperty("--tilt-y", `${y * 10}px`);
    image.style.setProperty("--rotate-y", `${x * 6}deg`);
    image.style.setProperty("--rotate-x", `${y * -6}deg`);
  });

  visual.addEventListener("mouseleave", () => {
    image.style.setProperty("--tilt-x", "0px");
    image.style.setProperty("--tilt-y", "0px");
    image.style.setProperty("--rotate-y", "0deg");
    image.style.setProperty("--rotate-x", "0deg");
  });
}

function bindMotionLighting() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  let frame = 0;
  window.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      document.body.style.setProperty("--spotlight-x", `${(event.clientX / window.innerWidth * 100).toFixed(2)}%`);
      document.body.style.setProperty("--spotlight-y", `${(event.clientY / window.innerHeight * 100).toFixed(2)}%`);
    });
  }, { passive: true });
}

function tiltCard(event, card) {
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--card-ry", `${x * 5}deg`);
  card.style.setProperty("--card-rx", `${y * -5}deg`);
  card.style.setProperty("--card-glow-x", `${((x + 0.5) * 100).toFixed(2)}%`);
  card.style.setProperty("--card-glow-y", `${((y + 0.5) * 100).toFixed(2)}%`);
}

function animateCounters() {
  $$(".count-up").forEach((counter) => {
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";
    const duration = 800;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      counter.textContent = suffix ? `${value.toFixed(1)}${suffix}` : Math.round(value).toLocaleString("zh-CN");
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function parseMetric(value) {
  return Number(String(value).replace(/,/g, "").replace("%", ""));
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast("已复制"));
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  showToast("已复制");
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-show"), 1600);
}
