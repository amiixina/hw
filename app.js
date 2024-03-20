const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const pagination = document.querySelector('.pagination');

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');

    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove('active');

    if (index === slideIndex) {
      dot.classList.add('active');
    }
  });

  updatePagination(slideIndex);
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      currentSlide = index;
    });
  });
}

function updatePagination(slideIndex) {
  const paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach((item, index) => {
    if (index === slideIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);
