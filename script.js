// Initialize AOS
AOS.init({
  duration: 1200,
  once: true
});

// Toggle Menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load saved theme on load
window.onload = function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
};
