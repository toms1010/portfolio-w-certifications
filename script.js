// Current Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navigation Buttons
const backToTopButton = document.getElementById('backToTop');
const homeButton = document.getElementById('homeButton');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
    homeButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
    homeButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Particle Background Effect
const particleContainer = document.getElementById('particle-container');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = `${Math.random() * 5 + 2}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
  particleContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 10000);
}

setInterval(createParticle, 200);

// Interactive Button Modal
const infoButton = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
const closeModal = document.querySelector('.close-modal');
const modalTexts = document.querySelectorAll('.modal-text');

infoButton.addEventListener('click', () => {
  infoModal.style.display = 'flex';
  modalTexts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.add('visible');
    }, 500 + index * 200);
  });
});

closeModal.addEventListener('click', () => {
  infoModal.style.display = 'none';
  modalTexts.forEach(text => text.classList.remove('visible'));
});

window.addEventListener('click', (e) => {
  if (e.target === infoModal) {
    infoModal.style.display = 'none';
    modalTexts.forEach(text => text.classList.remove('visible'));
  }
});