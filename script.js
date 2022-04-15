let slidePosition = 0;
const slides = document.getElementsByClassName("carouselItem");
const dots = document.getElementsByClassName("dot");
const totalSlides = slides.length;

document.getElementById("carouselNext").addEventListener("click", function () {
  console.log("next");
  nextSlide();
});

document.getElementById("carouselPrev").addEventListener("click", function () {
  console.log("prev");
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
