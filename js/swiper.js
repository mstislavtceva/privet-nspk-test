const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  resistance: false,
  allowTouchMove: true,
  centeredSlides: false,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
