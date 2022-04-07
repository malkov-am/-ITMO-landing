const swiper = new Swiper(".projects__slider", {
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    700: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1000: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },

  loop: false,
  pagination: {
    el: ".projects__pagination",
    // type: "fraction",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".projects__next",
  //   prevEl: ".projects__prev",
  // },
});
