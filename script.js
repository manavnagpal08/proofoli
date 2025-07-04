// Initialize AOS animations
AOS.init({
  duration: 1200,
  once: true
});

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}
