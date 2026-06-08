// ===============================
// AOS Animation
// ===============================
AOS.init({
  duration: 1200,
  once: true
});

// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}

// ===============================
// Theme Management
// ===============================
function setTheme(theme) {
  document.body.classList.remove("dark-mode", "hacker");

  if (theme === "hacker") {
    document.body.classList.add("hacker");
    localStorage.setItem("theme", "hacker");
    updateToggleIcon("💻");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    updateToggleIcon("🌙");
  }
}

// ===============================
// Dark/Hacker Toggle
// ===============================
function toggleDarkMode() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "hacker") {
    setTheme("dark");
  } else {
    setTheme("hacker");
  }
}

// ===============================
// Update Theme Icon
// ===============================
function updateToggleIcon(icon) {
  const toggleIcon = document.querySelector(".toggle-dark");

  if (toggleIcon) {
    toggleIcon.textContent = icon;
  }
}

// ===============================
// Load Theme On Startup
// ===============================
window.onload = function () {
  const savedTheme = localStorage.getItem("theme") || "dark";

  setTheme(savedTheme);
  startTypingAnimation();
};

// ===============================
// Typing Animation
// ===============================
function startTypingAnimation() {
  const phrases = [
    "Turning Ideas into Impact 🚀",
    "Building for the Future with AI 💻",
    "Exploring Innovation ✨"
  ];

  const el = document.getElementById("typed-text");

  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = currentPhrase.substring(0, charIndex++);
    } else {
      el.textContent = currentPhrase.substring(0, charIndex--);
    }

    if (charIndex === currentPhrase.length + 1) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }

    if (charIndex === 0 && deleting) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, deleting ? 50 : 100);
  }

  type();
}

// ===============================
// Back To Top Visibility
// ===============================
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
