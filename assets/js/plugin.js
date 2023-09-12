var swiper = new Swiper(".banner_swip", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".testimonial_swip", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".collagen_swip", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      240: {
        slidesPerView: 2,
      },
    },
  });
  
  
  var swiper = new Swiper(".four_card_swip", {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
  
  var swiper = new Swiper(".three_card_swip", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".ex_banner_swip", {
    slidesPerView: 2,
    spaceBetween: 25,
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      865: {
        slidesPerView: 2,
      },
    },
  });
  
  var swiper = new Swiper(".brand_bar_swip", {
    slidesPerView: 5,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      240: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
  
  
  var swiper = new Swiper(".triple_antioxidants_swip", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      240: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  