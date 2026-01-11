//Brands cards swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});

//Services cards swiper

const swiperTechnicsCards = new Swiper('.technics-cards-swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".technics-cards-swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});

//Price cards swiper

const swiperPriceCards = new Swiper('.price-cards-swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".price-cards-swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});