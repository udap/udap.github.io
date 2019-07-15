window.onload = function () {
  var time = null
  $('.dropdown-product').hide()
  $('#product').mouseover(function () {
    clearTimeout(time)
    $('.dropdown-product').show()
  })
  $('#product').mouseout(function () {
    time = setTimeout(function () {
      $('.dropdown-product').hide()
    }, 500)
  })
  $('.dropdown-product').mouseover(function () {
    clearTimeout(time)
    $('.dropdown-product').show()
  })
  $('.dropdown-product').mouseout(function () {
    time = setTimeout(function () {
      $('.dropdown-product').hide()
    }, 500)
  })
  const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    mousewheel: true,
    on: {
      slideChangeTransitionStart: res => {
        console.log(swiper.activeIndex);
        if(swiper.activeIndex === 0 || swiper.activeIndex === 1 || swiper.activeIndex === 2){
          $('.application-btn').eq(0).children(".application-btn__box").eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
          $('.application-btn').eq(0).addClass('show').siblings().removeClass('show');
          $('.pagination-list').eq(0).addClass('pagination-list-active').siblings().removeClass('pagination-list-active');
        } else if(swiper.activeIndex === 3 || swiper.activeIndex === 4 || swiper.activeIndex === 5){
          $('.application-btn').eq(1).children(".application-btn__box").eq(swiper.activeIndex - 3).addClass('active').siblings().removeClass('active');
          $('.application-btn').eq(1).addClass('show').siblings().removeClass('show');
          $('.pagination-list').eq(1).addClass('pagination-list-active').siblings().removeClass('pagination-list-active');
        } else if(swiper.activeIndex === 6 || swiper.activeIndex === 7 || swiper.activeIndex === 8){
          $('.application-btn').eq(2).children(".application-btn__box").eq(swiper.activeIndex - 6).addClass('active').siblings().removeClass('active');
          $('.application-btn').eq(2).addClass('show').siblings().removeClass('show');
          $('.pagination-list').eq(2).addClass('pagination-list-active').siblings().removeClass('pagination-list-active');
        } else if(swiper.activeIndex === 9){
          $('.application-btn').eq(3).children(".application-btn__box").eq(swiper.activeIndex - 9).addClass('active').siblings().removeClass('active');
          $('.application-btn').eq(3).addClass('show').siblings().removeClass('show');
          $('.pagination-list').eq(3).addClass('pagination-list-active').siblings().removeClass('pagination-list-active');
        } else if(swiper.activeIndex === 10 ||swiper.activeIndex === 11){
          $('.application-btn').eq(4).children(".application-btn__box").eq(swiper.activeIndex - 10).addClass('active').siblings().removeClass('active');
          $('.application-btn').eq(4).addClass('show').siblings().removeClass('show');
          $('.pagination-list').eq(4).addClass('pagination-list-active').siblings().removeClass('pagination-list-active');
        }
      },
    },
  });
}
