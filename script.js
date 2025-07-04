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

// Dark Mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load saved theme on page load
window.onload = function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Start typing animation after load
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
