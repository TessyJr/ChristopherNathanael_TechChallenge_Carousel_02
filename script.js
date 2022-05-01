let slidePosition = 0;
let slides = document.querySelectorAll(".carouselItem");
let dots = document.querySelectorAll(".dot");
let totalSlides = slides.length;

document.querySelector("#carouselNext").addEventListener("click", function () {
  nextSlide();
});

document.querySelector("#carouselPrev").addEventListener("click", function () {
  prevSlide();
});

function updateCarousel() {
  for (let slide of slides) {
    slide.classList.remove("active");
    slide.classList.add("inactive");
  }

  for (let dot of dots) {
    dot.classList.remove("activeDot");
    dot.classList.add("inactiveDot");
  }

  slides[slidePosition].classList.add("active");
  dots[slidePosition].classList.add("activeDot");
}

function nextSlide() {
  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateCarousel();
}

function prevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateCarousel();
}
