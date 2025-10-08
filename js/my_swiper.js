document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // 鼠标滚轮可选
    mousewheel: false
  });

  // 悬停停止播放
  swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
  swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
});
