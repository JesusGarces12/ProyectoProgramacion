const swiper = new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:4
        }
    }
  });

  document.querySelectorAll('.card-item').forEach(item => {
    let gradient = item.getAttribute('data-gradient'); // Obtiene el gradiente del atributo
    item.querySelector('.card-link').style.setProperty('--card-bg', gradient);
});
  