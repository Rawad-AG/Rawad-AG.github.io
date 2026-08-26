/* ============================================
   PORTFOLIO — Application Script
   ============================================ */

// ==========================================
// CONFIG
// ==========================================

const CONFIG = {
  accentColors: [
    { name: 'blue', color: '#2563eb' },
    { name: 'purple', color: '#7c3aed' },
    { name: 'green', color: '#059669' },
    { name: 'orange', color: '#d97706' },
    { name: 'pink', color: '#db2777' },
    { name: 'teal', color: '#0d9488' },
    { name: 'indigo', color: '#4f46e5' },
    { name: 'red', color: '#dc2626' },
  ],
};

// ==========================================
// DATA — All editable content lives here.
//
// To add a new project: push to DATA.projects
// To add a new skill:   push to DATA.skills
// To add experience:    push to DATA.experience
// To edit section text: update the matching key in DATA.sections
// ==========================================

const DATA = {

  // ---- Personal Info ----------------------------------------
  personal: {
    name: 'Rawad Abou Ghanem',
    initials: 'Rawad-AG',
    role: 'Backend & AI Engineer',
    headline: 'Software Engineer with over 2 years of hands-on experience designing scalable backend architectures, high-performance microservices, and AI integrations. Specialized in Java (Spring Boot) and Python ecosystems.',
    bio: [
      'I design and build scalable backend systems using Java and Spring Boot, with a focus on microservices architecture, clean APIs, and enterprise-grade security. I also work extensively with Python for AI integrations and intelligent system design.',
    ],
    email: 'rawadaboughanem0@gmail.com',
    location: 'Damascus, Syria',
    avatar: 'assets/avatar.png',
    cv: 'assets/CV.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/rawad-abou-ghanem-757100368',
      github: 'https://github.com/Rawad-AG',
    },
  },

  // ---- Navigation -------------------------------------------
  //  Each entry must have a label and an id matching a <section id="..."> in index.html.
  nav: [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ],

  // ---- Section Headings ------------------------------------
  //  Edit title / subtitle for each section from here.
  sections: {
    about:    { title: 'About',         subtitle: 'A brief overview of my background' },
    skills:   { title: 'Technical Skills', subtitle: 'Technologies and tools I work with regularly' },
    projects: { title: 'Projects',      subtitle: 'A selection of my work in software engineering and AI' },
    experience: { title: 'Experience',  subtitle: 'My professional journey' },
    contact:  { title: 'Contact',       subtitle: 'Open to opportunities and professional connections.' },
  },

  // ---- Stats (About section) -------------------------------
  //  value: displayed number/text, label: description below it.
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: 'ITE - AI', label: 'Education' },
    { value: '4',  label: 'Projects' },
    { value: 'Damascus', label: 'Location' },
  ],

  // ---- Skills ----------------------------------------------
  //  To add a new category, push an object with: category, icon, items[].
  //  icon: any FontAwesome class (e.g. 'fa-solid fa-code').
  skills: [
    {
      category: 'Languages',
      icon: 'fa-solid fa-code',
      items: ['Java (Spring Ecosystem)', 'Python', 'TypeScript'],
    },
    {
      category: 'Databases & Caching',
      icon: 'fa-solid fa-database',
      items: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'AI Frameworks & Tools',
      icon: 'fa-solid fa-brain',
      items: ['Spring AI', 'LangChain'],
    },
    {
      category: 'Protocols & Specs',
      icon: 'fa-solid fa-plug',
      items: ['REST', 'GraphQL', 'gRPC', 'WebSockets', 'OpenAPI/Swagger'],
    },
    {
      category: 'Infrastructure & Testing',
      icon: 'fa-solid fa-gear',
      items: ['Docker', 'Unit & Integration Tests', 'Linux', 'Git', 'RabbitMQ'],
    },
    {
      category: 'AI Orchestration',
      icon: 'fa-solid fa-robot',
      items: ['LLM API Orchestration', 'RAG Pipelines', 'Vector Search Integration'],
    },
  ],

  // ---- Projects --------------------------------------------
  //  To add a new project, push an object with the fields below.
  //  tag:        short role/label shown above the title
  //  tagline:    optional italic line below the title (pass null to skip)
  //  description: one or two sentences
  //  stack:      array of tech tags
  //  features:   array of bullet-point strings (pass [] to skip)
  //  link:       URL to source code or null
  //  type:       'open-source' | 'private'
  //  note:       optional note shown in a locked banner (pass null to skip)
  projects: [
    {
      title: 'Smart News Credibility & Verification System',
      tag: 'Creator',
      tagline: null,
      description: 'An intelligent news verification system designed to autonomously evaluate source credibility through multi-step search, contextual analysis, and cross-referencing rather than static whitelisting.',
      stack: ['Java', 'Spring Boot', 'Spring AI', 'Vector Search', 'Docker'],
      features: [
        'Integrated vector search pipelines to extract, rank, and track factual truth across dynamic media sources',
        'Architected containerized microservice deployments using Docker for modular scalability',
      ],
      link: 'https://github.com/Rawad-AG/fact-checker',
      type: 'open-source',
    },
    {
      title: 'Distributed Media Processing Pipeline',
      tag: 'Creator & Backend Engineer',
      tagline: 'fflib',
      description: 'An asynchronous, job-based media execution engine wrapping FFmpeg primitives to enable non-blocking execution for long-running media workflows.',
      stack: ['Python', 'FastAPI', 'FFmpeg', 'Docker'],
      features: [
        'Decoupled process execution from API request lifecycles, dropping endpoint response times from minutes to milliseconds',
        'Abstracted complex FFmpeg CLI flags into clean REST API status and control endpoints',
      ],
      link: null,
      type: 'private',
    },
    {
      title: 'Enterprise Core CRUD Automation Layer',
      tag: 'Core Developer',
      tagline: 'Internal Tooling',
      description: 'An enterprise generic abstraction layer built to eliminate boilerplate code across CRUD operations, entity relationships, and exception handling.',
      stack: ['Java', 'Spring Boot', 'Enterprise Design Patterns'],
      features: [
        'Reduced boilerplate code and accelerated team development velocity by ~40% across company projects',
        'Built generic responders, exception handlers, and repository inheritance models without sacrificing performance',
      ],
      link: null,
      type: 'private',
      note: 'Internal tooling — owned by the company.',
    },
    {
      title: 'Forge CLI Engine & Ecosystem',
      tag: 'Creator & Developer',
      tagline: null,
      description: 'A modular, plugin-based CLI platform for Java developers',
      stack: ['Java', 'Custom Plugin Engine', 'YAML Parsing'],
      features: [
        'Designed a dynamic class-loader engine to isolate and execute third-party plugins at runtime',
        'Built YAML-to-code generation drivers and a developer SDK for consistent plugin creation',
        'Http client, that integrates seamlessly with git so you can manage API documentation as part of the codebase'
      ],
      link: 'https://github.com/Rawad-AG/forge',
      type: 'open-source',
    },
  ],

  // ---- Experience ------------------------------------------
  //  To add a new role, push an object with: role, company, location, period, description.
  experience: [
    {
      role: 'Backend Developer',
      company: 'Smart Software Solutions',
      location: 'Qatar',
      period: 'Oct 2024 - Present',
      description: 'Architected high-performance backend infrastructure for critical government projects. Designed a reusable framework to speed up developement time and add strong infrastructure layer.',
    },
    {
      role: 'Backend Developer',
      company: 'Early-Stage Startup',
      location: 'Syria',
      period: 'Mar 2024 – Oct 2024',
      description: 'Led the foundational backend design for multi-tenant e-commerce and ed-tech platforms using Node.js, Express, and MongoDB. Built the core architecture from scratch—including scalable routing, custom middleware, security layers (OAuth2/JWT).',
    },
  ],

  // ---- Contact Links (Contact section) ---------------------
  //  Each card needs: icon (FontAwesome class), label, value (display text), href (link or null for plain text).
  contactLinks: [
    { icon: 'fas fa-envelope',       label: 'Email',   value: 'rawadaboughanem0@gmail.com', href: 'mailto:rawadaboughanem0@gmail.com' },
    { icon: 'fab fa-linkedin-in',    label: 'LinkedIn', value: 'linkedin.com/in/rawad-abou-ghanem', href: 'https://www.linkedin.com/in/rawad-abou-ghanem-757100368' },
    { icon: 'fab fa-github',         label: 'GitHub',  value: 'github.com/Rawad-AG', href: 'https://github.com/Rawad-AG' },
  ],

  // ---- Footer ----------------------------------------------
  footer: {
    copyright: `\u00A9 ${new Date().getFullYear()} Rawad Abou Ghanem. All rights reserved.`,
  },
};


// ==========================================
// TEMPLATES — Generic HTML generators.
//   Each function takes a data object and
//   returns an HTML string.
// ==========================================

const TEMPLATES = {

  skillCard(skill) {
    return `
      <div class="skill-card">
        <div class="card-head">
          <div class="card-icon"><i class="${skill.icon}"></i></div>
          <h3>${skill.category}</h3>
        </div>
        <div class="skill-tags">
          ${skill.items.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>`;
  },

  projectCard(p) {
    const features = p.features.length > 0
      ? `<ul class="project-features">${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
      : '';
    const tagline = p.tagline ? `<p class="project-tagline">${p.tagline}</p>` : '';
    const note = p.note ? `<div class="project-note"><i class="fas fa-lock"></i> ${p.note}</div>` : '';
    const link = p.link
      ? `<a href="${p.link}" target="_blank" class="btn-text">Source <i class="fas fa-arrow-right"></i></a>`
      : '<span></span>';
    const statusIcon = p.type === 'private' ? 'fas fa-lock' : 'fas fa-code-branch';
    const statusText = p.type === 'private' ? 'Private' : 'Open Source';

    return `
      <article class="project-card">
        <div class="project-card-top">
          <span class="project-tag">${p.tag}</span>
          <h3>${p.title}</h3>
          ${tagline}
          <p class="project-desc">${p.description}</p>
          ${features}
          <div class="project-stack">
            ${p.stack.map((t) => `<span class="stack-tag">${t}</span>`).join('')}
          </div>
          ${note}
        </div>
        <div class="project-card-bottom">
          ${link}
          <span class="project-status">
            <i class="${statusIcon}"></i> ${statusText}
          </span>
        </div>
      </article>`;
  },

  timelineItem(exp) {
    return `
      <div class="timeline-item reveal">
        <span class="timeline-date">${exp.period}</span>
        <h3>${exp.role}</h3>
        <div class="timeline-company">
          <i class="fas fa-building"></i> ${exp.company}${exp.location ? ` \u2014 ${exp.location}` : ''}
        </div>
        <p>${exp.description}</p>
      </div>`;
  },

  contactCard(link) {
    const tag = link.href
      ? `<a href="${link.href}" target="_blank">${link.value}</a>`
      : `<span>${link.value}</span>`;

    return `
      <div class="contact-card">
        <div class="contact-icon"><i class="${link.icon}"></i></div>
        <h4>${link.label}</h4>
        ${tag}
      </div>`;
  },

  statItem(s) {
    return `
      <div class="stat-item">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`;
  },
};


// ==========================================
// SECTION RENDERERS
//   Each reads from DATA and uses TEMPLATES.
//   To add/remove/reorder sections, edit the
//   matching DATA key — no template changes
//   needed.
// ==========================================

function renderNav() {
  const ul = document.getElementById('navLinks');
  ul.innerHTML = DATA.nav
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('');

  const logo = document.getElementById('navLogo');
  const initials = DATA.personal.initials;
  logo.innerHTML =
    initials.slice(0, 1) +
    `<span class="logo-accent">${initials.slice(1, 2)}</span>` +
    initials.slice(2);
}

function renderMobileNav() {
  const existing = document.querySelector('.mobile-nav');
  if (existing) existing.remove();

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.id = 'mobileNav';
  nav.innerHTML = DATA.nav
    .map((item) => `<a href="#${item.id}">${item.label}</a>`)
    .join('');
  document.body.appendChild(nav);
}

function renderHero() {
  const section = document.getElementById('hero');
  const p = DATA.personal;
  const [first, ...rest] = p.name.split(' ');
  const lastName = rest.join(' ');

  section.innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content">
        <h1 class="reveal">
          Hi, I'm ${first}<br>
          <span class="accent-text">${lastName}</span>
        </h1>
        <p class="hero-subtitle reveal">${p.role}</p>
        <p class="hero-description reveal">${p.headline}</p>
        <div class="hero-actions reveal">
          <a href="${p.cv}" class="btn btn-primary" download>
            <i class="fas fa-download"></i> Download CV
          </a>
          <a href="#contact" class="btn btn-outline">
            <i class="fas fa-envelope"></i> Contact
          </a>
        </div>
        <div class="hero-social reveal">
          <a href="${p.social.linkedin}" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="${p.social.github}" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:${p.email}" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div class="hero-image-wrapper reveal-right">
        <div class="img-frame">
          <img src="${p.avatar}" alt="${p.name}" loading="lazy" />
        </div>
      </div>
    </div>`;
}

function renderAbout() {
  const section = document.getElementById('about');
  const { title, subtitle } = DATA.sections.about;
  const p = DATA.personal;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      <div class="about-wrapper">
        <div class="about-text reveal">
          ${p.bio.map((para) => `<p>${para}</p>`).join('')}
          <p style="margin-top:20px">
            <a href="${p.cv}" class="btn btn-ghost" download>
              <i class="fas fa-file-pdf"></i> View Resume
            </a>
          </p>
        </div>
        <div class="stats-grid reveal">
          ${DATA.stats.map(TEMPLATES.statItem).join('')}
        </div>
      </div>
    </div>`;
}

function renderSkills() {
  const section = document.getElementById('skills');
  const { title, subtitle } = DATA.sections.skills;

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      <div class="skills-grid stagger-children">
        ${DATA.skills.map(TEMPLATES.skillCard).join('')}
      </div>
    </div>`;
}

function renderProjects() {
  const section = document.getElementById('projects');
  const { title, subtitle } = DATA.sections.projects;

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      <div class="projects-grid stagger-children">
        ${DATA.projects.map(TEMPLATES.projectCard).join('')}
      </div>
    </div>`;
}

function renderExperience() {
  const section = document.getElementById('experience');
  const { title, subtitle } = DATA.sections.experience;

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      <div class="timeline">
        ${DATA.experience.map(TEMPLATES.timelineItem).join('')}
      </div>
    </div>`;
}

function renderContact() {
  const section = document.getElementById('contact');
  const { title, subtitle } = DATA.sections.contact;

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      <div class="contact-grid reveal">
        ${DATA.contactLinks.map(TEMPLATES.contactCard).join('')}
      </div>
    </div>`;
}

function renderFooter() {
  const footer = document.getElementById('footer');
  const p = DATA.personal;

  footer.innerHTML = `
    <div class="container footer-content">
      <p>${DATA.footer.copyright}</p>
      <div class="footer-links">
        <a href="${p.social.linkedin}" target="_blank">LinkedIn</a>
        <a href="${p.social.github}" target="_blank">GitHub</a>
        <a href="mailto:${p.email}">Email</a>
      </div>
    </div>`;
}

function renderAll() {
  renderNav();
  renderMobileNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
  renderFooter();
}


// ==========================================
// THEME
// ==========================================

const theme = {
  init() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    const savedAccent = localStorage.getItem('portfolio-accent') || 'blue';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-accent', savedAccent);
    this.renderAccentPicker();
    this.bindControls();
  },

  renderAccentPicker() {
    const container = document.getElementById('accentPicker');
    const current = this.getCurrentAccent();
    const color = this.getAccentColor(current);
    container.innerHTML = `<button class="accent-btn" id="accentCycleBtn" style="background:${color}" aria-label="Cycle accent color"></button>`;
  },

  getCurrentAccent() {
    return document.documentElement.getAttribute('data-accent') || 'blue';
  },

  getAccentColor(name) {
    const c = CONFIG.accentColors.find((c) => c.name === name);
    return c ? c.color : '#2563eb';
  },

  getNextAccent() {
    const current = this.getCurrentAccent();
    const idx = CONFIG.accentColors.findIndex((c) => c.name === current);
    const next = CONFIG.accentColors[(idx + 1) % CONFIG.accentColors.length];
    return next.name;
  },

  bindControls() {
    document.getElementById('themeToggle').addEventListener('click', () => {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });

    document.getElementById('accentPicker').addEventListener('click', (e) => {
      const btn = e.target.closest('.accent-btn');
      if (!btn) return;
      const next = this.getNextAccent();
      const color = this.getAccentColor(next);
      document.documentElement.setAttribute('data-accent', next);
      localStorage.setItem('portfolio-accent', next);
      btn.style.background = color;
    });
  },
};

// ==========================================
// ANIMATIONS
// ==========================================

const animation = {
  observer: null,

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach((el) => {
      this.observer.observe(el);
    });
  },

  refresh() {
    if (this.observer) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach((el) => {
        this.observer.observe(el);
      });
    }
  },
};

// ==========================================
// CURSOR LIGHT
// ==========================================

const cursor = {
  el: null,
  init() {
    this.el = document.getElementById('cursorLight');
    if (!this.el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ax = x, ay = y;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };

    document.addEventListener('mousemove', onMove);

    const animate = () => {
      ax += (x - ax) * 0.08;
      ay += (y - ay) * 0.08;
      this.el.style.left = ax + 'px';
      this.el.style.top = ay + 'px';
      requestAnimationFrame(animate);
    };

    animate();
  },
};

// ==========================================
// NAVIGATION
// ==========================================

const navigation = {
  init() {
    this.hamburger = document.getElementById('hamburger');
    this.mobileNav = document.getElementById('mobileNav');
    this.navbar = document.getElementById('navbar');
    this.scrollTop = document.getElementById('scrollTop');
    this.navCvBtn = document.getElementById('navCvBtn');
    this.hero = document.getElementById('hero');

    this.bindHamburger();
    this.bindNavLinks();
    this.bindScroll();
    this.bindScrollTop();
  },

  bindHamburger() {
    this.hamburger.addEventListener('click', () => {
      this.hamburger.classList.toggle('active');
      this.mobileNav.classList.toggle('open');
      document.body.style.overflow = this.mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    this.mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        this.hamburger.classList.remove('active');
        this.mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  },

  bindNavLinks() {
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  },

  bindScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          this.navbar.classList.toggle('scrolled', y > 20);
          this.scrollTop.classList.toggle('visible', y > 400);
          this.updateActiveLink();
          this.toggleNavCvBtn(y);
          ticking = false;
        });
        ticking = true;
      }
    });
  },

  toggleNavCvBtn(scrollY) {
    if (!this.navCvBtn || !this.hero) return;
    const heroBottom = this.hero.offsetTop + this.hero.offsetHeight - 200;
    this.navCvBtn.classList.toggle('visible', scrollY > heroBottom);
  },

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 150;
    let currentId = 'hero';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.id;
      }
    });

    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  },

  bindScrollTop() {
    this.scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
};

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  theme.init();
  animation.init();
  navigation.init();
  cursor.init();
  animation.refresh();
});
