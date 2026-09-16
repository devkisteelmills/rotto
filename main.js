// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu when clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Product tabs
const tabs = document.querySelectorAll('.tab');
const grids = document.querySelectorAll('.product-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs and grids
    tabs.forEach(t => t.classList.remove('active'));
    grids.forEach(g => g.classList.remove('active'));

    // Activate clicked tab and corresponding grid
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.tab);
    if (target) {
      target.classList.add('active');
    }
  });
});
