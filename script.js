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
// DATA — Edit these to update your portfolio
// ==========================================

const DATA = {
  personal: {
    name: 'Rawad Abou Ghanem',
    initials: 'RAG',
    role: 'Mid-Level Backend Java Developer & AI Engineer',
    headline: 'Engineering Scalable Systems & Artificial Intelligence Solutions',
    bio: [
      'I specialize in building robust microservices with Spring & Spring Boot, and integrating Large Language Models (LLMs) into enterprise architecture. My focus is on creating high-performance systems that scale effortlessly.',
      'With a strong foundation in both backend engineering and AI, I bridge the gap between traditional enterprise development and modern intelligent systems.',
    ],
    email: 'rawadaboughanem0@gmail.com',
    phone: '+963 951 334 761',
    location: 'Qatar',
    avatar: 'assets/avatar.png',
    cv: 'assets/CV.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/rawad-abou-ghanem-757100368',
      github: 'https://github.com/Rawad-AG',
    },
  },

  nav: [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ],

  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '8+', label: 'Technologies' },
    { value: '5+', label: 'Projects' },
    { value: 'B.Eng.', label: 'Education' },
  ],

  skills: [
    {
      category: 'Backend Engineering',
      icon: 'fa-solid fa-server',
      items: ['Java', 'Spring & Spring Boot', 'Microservices', 'REST/GraphQL/gRPC', 'MySQL/PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ'],
    },
    {
      category: 'AI & Machine Learning',
      icon: 'fa-solid fa-brain',
      items: ['Python', 'TensorFlow', 'LLM Integration'],
    },
    {
      category: 'DevOps & Cloud',
      icon: 'fa-solid fa-cloud',
      items: ['Git', 'CI/CD', 'Docker', 'Linux'],
    },
  ],

  projects: [
    {
      title: 'Forge',
      tag: 'Software Engineer / Java',
      tagline: 'Built by a Java Developer, for Java Developers',
      description: 'Forge is a modular, plugin-based CLI system for Java development. It provides a single execution engine that delegates all functionality to plugins, allowing developers to automate repetitive tasks and extend behavior without bloating the core.',
      stack: ['Java 21'],
      features: [
        'Offline Postman replacement for API testing',
        'Code generators from boilerplate to full project scaffolding',
        'Plugin manager to update, install, and remove plugins',
      ],
      link: 'https://github.com/Rawad-AG/forge',
      type: 'open-source',
    },
    {
      title: 'Base Layer',
      tag: 'Software Engineer',
      tagline: null,
      description: 'A CRUD Base Layer for CRUD-heavy projects that abstracts boilerplate code and automates CRUD operations. Supports dynamic database querying, soft deletion, error handling, and a centralized response system.',
      stack: ['Java 21', 'Spring & Spring Boot'],
      features: [],
      link: null,
      type: 'private',
      note: 'This project is private — owned by the company.',
    },
  ],

  experience: [
    {
      role: 'Backend Java Developer',
      company: 'Smart Software Solutions',
      location: 'Qatar',
      period: '2025 - Present',
      description: 'Developing and maintaining high-performance enterprise and government-level systems using Java and the Spring ecosystem.',
    },
    {
      role: 'Backend Team Leader',
      company: 'Points Inc.',
      location: null,
      period: '2024 - 2025',
      description: 'Led a team of 4 developers to build and maintain multiple company projects, ensuring code quality, architecture decisions, and timely delivery.',
    },
  ],

  contact: {
    heading: "Let's Connect",
    subtitle: 'Have a project in mind or just want to say hi? Reach out.',
  },

  footer: {
    copyright: `\u00A9 ${new Date().getFullYear()} Rawad Abou Ghanem. All rights reserved.`,
  },
};

// ==========================================
// RENDERERS
// ==========================================

function renderNav() {
  const ul = document.getElementById('navLinks');
  ul.innerHTML = DATA.nav
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('');
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

  section.innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content">
        <h1 class="reveal">
          Hi, I'm ${p.name.split(' ')[0]}<br>
          <span class="accent-text">${p.name.split(' ').slice(1).join(' ')}</span>
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
    </div>
  `;
}

function renderAbout() {
  const section = document.getElementById('about');
  const p = DATA.personal;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">About</h2>
        <p class="section-subtitle">A brief overview of my background</p>
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
          ${DATA.stats
            .map(
              (s) => `
            <div class="stat-item">
              <div class="stat-value">${s.value}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSkills() {
  const section = document.getElementById('skills');

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Technologies and tools I work with regularly</p>
      </div>
      <div class="skills-grid stagger-children">
        ${DATA.skills
          .map(
            (skill) => `
          <div class="skill-card">
            <div class="card-head">
              <div class="card-icon"><i class="${skill.icon}"></i></div>
              <h3>${skill.category}</h3>
            </div>
            <div class="skill-tags">
              ${skill.items.map((item) => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderProjects() {
  const section = document.getElementById('projects');

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">A selection of my work in software engineering and AI</p>
      </div>
      <div class="projects-grid stagger-children">
        ${DATA.projects
          .map(
            (p) => `
          <article class="project-card">
            <div class="project-card-top">
              <span class="project-tag">${p.tag}</span>
              <h3>${p.title}</h3>
              ${p.tagline ? `<p class="project-tagline">${p.tagline}</p>` : ''}
              <p class="project-desc">${p.description}</p>
              ${
                p.features.length > 0
                  ? `<ul class="project-features">
                  ${p.features.map((f) => `<li>${f}</li>`).join('')}
                </ul>`
                  : ''
              }
              <div class="project-stack">
                ${p.stack.map((tech) => `<span class="stack-tag">${tech}</span>`).join('')}
              </div>
              ${p.note ? `<div class="project-note"><i class="fas fa-lock"></i> ${p.note}</div>` : ''}
            </div>
            <div class="project-card-bottom">
              ${
                p.link
                  ? `<a href="${p.link}" target="_blank" class="btn-text">
                  Source <i class="fas fa-arrow-right"></i>
                </a>`
                  : '<span></span>'
              }
              <span class="project-status">
                <i class="${p.type === 'private' ? 'fas fa-lock' : 'fas fa-code-branch'}"></i>
                ${p.type === 'private' ? 'Private' : 'Open Source'}
              </span>
            </div>
          </article>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderExperience() {
  const section = document.getElementById('experience');

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">Experience</h2>
        <p class="section-subtitle">My professional journey</p>
      </div>
      <div class="timeline">
        ${DATA.experience
          .map(
            (exp) => `
          <div class="timeline-item reveal">
            <span class="timeline-date">${exp.period}</span>
            <h3>${exp.role}</h3>
            <div class="timeline-company">
              <i class="fas fa-building"></i> ${exp.company}${exp.location ? ` \u2014 ${exp.location}` : ''}
            </div>
            <p>${exp.description}</p>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderContact() {
  const section = document.getElementById('contact');
  const p = DATA.personal;
  const c = DATA.contact;

  section.innerHTML = `
    <div class="container">
      <div class="section-header top reveal">
        <h2 class="section-title">${c.heading}</h2>
        <p class="section-subtitle">${c.subtitle}</p>
      </div>
      <div class="contact-grid reveal">
        <div class="contact-card">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <h4>Email</h4>
          <a href="mailto:${p.email}">${p.email}</a>
        </div>
        <div class="contact-card">
          <div class="contact-icon"><i class="fas fa-phone"></i></div>
          <h4>Phone</h4>
          <a href="tel:${p.phone.replace(/\s/g, '')}">${p.phone}</a>
        </div>
        <div class="contact-card">
          <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
          <h4>Location</h4>
          <span>${p.location}</span>
        </div>
      </div>
    </div>
  `;
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
    </div>
  `;
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
    const current = document.documentElement.getAttribute('data-accent');
    container.innerHTML = CONFIG.accentColors
      .map(
        (c) =>
          `<button class="accent-dot ${c.name === current ? 'active' : ''}" data-accent="${c.name}" style="background:${c.color}" aria-label="${c.name}"></button>`
      )
      .join('');
  },

  bindControls() {
    document.getElementById('themeToggle').addEventListener('click', () => {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });

    document.getElementById('accentPicker').addEventListener('click', (e) => {
      const dot = e.target.closest('.accent-dot');
      if (!dot) return;
      const accent = dot.dataset.accent;
      document.documentElement.setAttribute('data-accent', accent);
      localStorage.setItem('portfolio-accent', accent);
      document.querySelectorAll('.accent-dot').forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
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
