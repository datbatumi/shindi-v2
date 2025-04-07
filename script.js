
// Auto-scroll Portfolio Slider
const slider = document.querySelector('.slider');
let scrollAmount = 0;
let slideTimer = setInterval(() => {
  if (slider.scrollWidth - slider.clientWidth === scrollAmount) {
    scrollAmount = 0;
  } else {
    scrollAmount += 310;
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}, 3000);

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Button Press Animation
const leadFormBtn = document.querySelector('.lead-form button');
leadFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  leadFormBtn.classList.add('clicked');
  setTimeout(() => leadFormBtn.classList.remove('clicked'), 200);
});
