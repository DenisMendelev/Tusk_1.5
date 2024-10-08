const swiper = new Swiper('.mySwiper', {
	speed: 600,
  breakpoints: {
    768: {
      enabled: false
    }
  },
  
  enabled: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});

