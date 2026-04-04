// Animate On Scroll Init
AOS.init({
  duration: 1200,
  once: true
});

// Toggle hamburger menu (mobile)
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Set Theme (light, dark, hacker)
function setTheme(theme) {
  document.body.className = ''; // Reset all theme classes

  if (theme === 'light') {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    updateToggleIcon('🌙');
  } else if (theme === 'hacker') {
    document.body.classList.add('hacker');
    localStorage.setItem('theme', 'hacker');
    updateToggleIcon('💻');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateToggleIcon('☀️');
  }
}

// Manual toggle from the current icon
function toggleDarkMode() {
  const current = localStorage.getItem('theme');
  if (current === 'light') setTheme('dark');
  else setTheme('light');
}

// Change icon based on theme
function updateToggleIcon(icon) {
  const toggleIcon = document.querySelector(".toggle-dark");
  if (toggleIcon) toggleIcon.textContent = icon;
}

// Load saved theme and icon on page load
window.onload = function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  startTypingAnimation();
};

// Typing Text Effect
function startTypingAnimation() {
  const phrases = [
    "Turning Ideas into Impact 🚀",
    "Building for the future with AI 💻",
    "Exploring Innovation ✨"
  ];
  const el = document.getElementById("typed-text");
  let i = 0, j = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[i];
    if (!isDeleting) {
      el.textContent = current.substring(0, j++);
    } else {
      el.textContent = current.substring(0, j--);
    }

    if (j === current.length + 1) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  if (el) type();
}

// Show/hide back-to-top button
window.onscroll = () => {
  if (window.scrollY > 200) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
};

// === Particles JS Initialization ===
function initParticles() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00d9ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00d9ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
  }
}

// === Custom Cursor ===
function initCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Use requestAnimationFrame for smoother trailing effect
    function animateCursor() {
      // Ease out towards target
      outlineX += (mouseX - outlineX) * 0.2;
      outlineY += (mouseY - outlineY) * 0.2;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effects for interactive elements
    const interactives = document.querySelectorAll('a, button, .project-card, .cert-card, .btn');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(0, 217, 255, 0.2)';
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'rgba(0, 217, 255, 0.05)';
      });
    });
  }
}

// === Scroll Progress Bar ===
function initScrollProgress() {
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }
}

// === Skill Bar Animation Observer ===
function initSkillAnimation() {
  const skillFills = document.querySelectorAll('.skill-bar .fill');

  if (skillFills.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const targetWidth = fill.getAttribute('data-width') || fill.textContent.replace('%', '').trim() + '%';
          if (targetWidth) {
            fill.style.width = targetWidth;
          }
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.1 });

    skillFills.forEach(fill => {
      // Store original width in data attribute if it exists in inline style
      const match = fill.getAttribute('style')?.match(/width:\s*(\d+)%/);
      if (match) {
         fill.setAttribute('data-width', match[1] + '%');
      }
      fill.style.width = '0%'; // Reset to 0 initially for animation
      observer.observe(fill);
    });
  }
}

// Append our new initializations to window.onload or DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCursor();
  initScrollProgress();
  initSkillAnimation();
});
