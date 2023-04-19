let currentSlideID = 1;
const sliderElement = document.querySelector("#slider");
const totalSlides = sliderElement.childElementCount;

function next() {
  if (currentSlideID < totalSlides) {
    currentSlideID++;
    showSlide();
  }
};

function prev() {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlide();
  }
};

function showSlide() {
  const slides = document.querySelector("#slider").getElementsByTagName("li");
  for (let i = 0; i < totalSlides; i++) {
    const element = slides[i];
    if (currentSlideID === i + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}

/* function autoPlay() {
  prev();
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlide();
  }
  setTimeout(() => {
    autoPlay();
  }, 200);
};

setTimeout(() => {
  autoPlay();
}, 1000);
*/
