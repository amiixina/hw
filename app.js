const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const markers = document.querySelectorAll('.markers span');

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialItems.forEach((item, i) => {
    item.classList.remove('active');
    markers[i].classList.remove('active');
  });

  testimonialItems[index].classList.add('active');
  markers[index].classList.add('active');

  currentTestimonial = index;
}

showTestimonial(currentTestimonial);

nextButton.addEventListener('click', () => {
  currentTestimonial++;

  if (currentTestimonial >= testimonialItems.length) {
    currentTestimonial = 0;
  }

  showTestimonial(currentTestimonial);
});

prevButton.addEventListener('click', () => {
  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonialItems.length - 1;
  }

  showTestimonial(currentTestimonial);
});

markers.forEach((marker, index) => {
  marker.addEventListener('click', () => {
    showTestimonial(index);
  });
});