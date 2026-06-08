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
