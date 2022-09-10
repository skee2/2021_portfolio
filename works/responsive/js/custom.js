$(function(){

//시작
gsap.from(".title_area", {
  //트리거:시점
  scrollTrigger:{
    trigger: '.title_area',
    //현재스크롤 지점
    // 첫번째 탑은 엘리먼트 시점, 두번째 탑은 윈도우 시작점에 도달했을 때
    start:'top 50%',
    end: 'center 80%',
    scrub: 1,
  },
  duration: 2, 
  opacity: 0,
  y: '10%',
});

gsap.from(".manage_content", {
  scrollTrigger:{
    trigger: '.management .bg_img',
    start:'top 50%',
    end: 'center 50%',
    //markers: 'true',
    scrub:1,
  },
  duration: 1, 
  opacity: 0,
  y: '20%',
  stagger: 0.2,
});

gsap.from(".main_product .main_title", {
  scrollTrigger:{
    trigger: '.news',
    start:'bottom 50%',
    end: 'bottom 100%',
    //markers: 'true',
    scrub:1,
  },
  duration: 1,
  opacity: 0,
  y: '20%',
});

gsap.from(".brand_content", {
  scrollTrigger:{
    trigger: '.brand_container',
    start:'top 80%',
    end: '60% 80%',
    //markers: 'true',
    scrub:1,
  },
  duration: 1,
  opacity: 0,
  y: '20%',
  stagger: 0.2,
});
/*
scroll
event
*/

// 스크롤 위치가 window 0보다 큰 경우
$(window).scroll(function(){
  curr = $(window).scrollTop();
  if(curr > 0) {
    $('header .header_wrap').addClass('scroll');
  }else{
    $('header .header_wrap').removeClass('scroll');
  }
})

$(window).on('mousewheel',function(e){
  var wheel = e.originalEvent.wheelDelta;
  //스크롤값 가져오기

  if (wheel > 0){
  //스크롤 올릴때
    $('header .header_wrap').removeClass('hide');
  } else {
    //스크롤 내릴때
    $('header .header_wrap').addClass('hide');
  }
  });
/*
@gnb
-sub
*/

//이벤트 하나씩 따로 구분
  $('.gnb_area > li').mouseenter(function(){
      $(this).find('.sub_container').addClass('active');
      })
      
    $('.gnb_area > li').mouseleave(function(){
      $('.sub_container').removeClass('active');
    })

/*
@util
-sub
*/

  $('.util_area .drop').mouseenter(function(){
    $(this).children('ul').addClass('active');
  })

  $('.util_area .drop').mouseleave(function(){
    $(this).children('ul').removeClass('active');
  })

/*
@util
-side_menu
*/

  $('.util_area .side_btn').click(function(e){
    e.preventDefault();
    $('body').addClass('hidden')
    $('.side_container').addClass('active');
  })
  
  $('.side_menu .close_btn').click(function(e){
    e.preventDefault();
    $('body').removeClass('hidden')
    $('.side_container').removeClass('active');
  })

/*
@main_visual
-text fade
*/
setTimeout(function() {
  $('.main_visual .txt_wrap').fadeOut(3000);
}, 3000);

/*
@main_product
-swiper
*/
  var main_product = new Swiper(".main_product_swiper", {
    loop: true,
    //effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  $('.main_product .btn').click(function(e){
    e.preventDefault();

    if($(this).hasClass('play')){
      main_product.autoplay.start();
      $(this).removeClass('play');
    }else{
      $(this).addClass('play');
      main_product.autoplay.stop();
    }
  })

  // 스탑누르면 자동 슬라이드 정지

/*
@story
-swiper
*/
  var swiper = new Swiper(".story_swiper", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'true',
    on:{
      // 초기세팅값
      init:function(){
        idx = this.realIndex;
      },slideChange:function(){
        idx = this.realIndex;

        $('.txt_box .txt_wrap').removeClass('on').eq(idx).addClass('on')
      }
    }
  });



$('.world_tab li').click(function(e){
  e.preventDefault();
  // index가 0부터 시작하므로 1번부터 순서대로 index를 가져오려면 index()+1;
  var idx = $(this).index()+1;
  $('.icon_mark').removeClass('m01 m02 m03 m04 m05 m06').addClass('m0'+idx)
  $('.world_tab li').removeClass('active')
  $(this).addClass('active')
  
  var target = $(this).find('a').attr('href')
  
  $('.map_wrap .map_text').removeClass('active')
  $(target).addClass('active');
  
  // 인덱스를 받을 때 eq
  $('.info_wrap > div').removeClass('active').eq($(this).index()).addClass('active')
})
/*
@footer
-family modal
*/
    $('.family_site > a').click(function(e){
      e.preventDefault();
      $('.site_modal, .bg_modal').addClass('active')
      //$('.site_modal, .bg_modal').stop().animate({})
    })
      $('.btn_close, .bg_modal').click(function(e){
        e.preventDefault();
        $('.site_modal, .bg_modal').removeClass('active')
        //alert('aa');
      })

/*
@top_btn
*/
$('footer .top_btn').click(function(e){
  e.preventDefault();
  $('html,body').stop().animate({scrollTop:0},500)
})

var news = new Swiper(".news_swiper", {
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
});

}); // end