/* ============================================================
   PURIVA WATER — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== LOADING SCREEN ===== */
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2000);
  }

  /* ===== SCROLL PROGRESS ===== */
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop      = document.getElementById('back-to-top');
  const navbar         = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgress) scrollProgress.style.width = (scrolled / total * 100) + '%';

    if (navbar) {
      scrolled > 60 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
    }

    if (backToTop) {
      scrolled > 600 ? backToTop.classList.add('visible') : backToTop.classList.remove('visible');
    }
  }, { passive: true });

  /* ===== BACK TO TOP ===== */
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ===== MOBILE MENU ===== */
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !open);
        icon.classList.toggle('fa-times', open);
      }
    });
  }

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = (navbar ? navbar.offsetHeight : 80) + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  });

  /* ===== BUBBLE ANIMATION ===== */
  createBubbles();

  /* ===== AOS INIT ===== */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic', offset: 60 });
  }

  /* ===== COUNTER ANIMATION ===== */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObserver.observe(el));

  /* ===== FORM: CONTACT ===== */
  setupForm('contact-form', 'Message sent! We\'ll get back to you soon.');

  /* ===== FORM: DISTRIBUTOR ===== */
  setupForm('distributor-form', 'Application received! Our team will contact you shortly.');

  /* ===== FORM: NEWSLETTER ===== */
  setupForm('newsletter-form', 'Subscribed successfully!');

  /* ===== TYPED TEXT HERO ===== */
  typedText();

  /* ===== ACTIVE NAV LINK ON SCROLL ===== */
  activeNavOnScroll();

});

/* ============================================================
   HELPERS
   ============================================================ */

function createBubbles() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const sizes    = [12, 16, 20, 24, 30, 40, 50, 60];
  const count    = 22;

  for (let i = 0; i < count; i++) {
    const b    = document.createElement('div');
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    b.className = 'bubble';
    b.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    hero.appendChild(b);
  }
}

function animateCount(el) {
  const target   = parseInt(el.getAttribute('data-count'), 10);
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step     = target / (duration / 16);
  let current    = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

function setupForm(id, successMsg) {
  const form = document.getElementById(id);
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-check mr-2"></i>${successMsg}`;
    btn.disabled  = true;
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled  = false;
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

function typedText() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const words = ['Pure.', 'Safe.', 'Refreshing.', 'Trusted.'];
  let wi = 0, ci = 0, deleting = false;

  const type = () => {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ++ci);

    if (!deleting && ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
    if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; }

    setTimeout(type, deleting ? 60 : 100);
  };
  type();
}

function activeNavOnScroll() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('nav-active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('nav-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ===== GALLERY LIGHTBOX (simple) ===== */
document.addEventListener('click', e => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  const img = item.querySelector('img');
  if (!img) return;

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.92);
    display:flex;align-items:center;justify-content:center;
    z-index:10000;cursor:zoom-out;padding:1rem;
  `;
  const image = document.createElement('img');
  image.src = img.src;
  image.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;object-fit:contain;';
  overlay.appendChild(image);
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
});
