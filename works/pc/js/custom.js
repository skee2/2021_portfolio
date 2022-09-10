$(function(){

  //gsap.from(".main_visual .title", {
  //  duration: 1,
  //  opacity: 0,
  //  y: '-30%',
  //});


  gsap.from(".intro_title", {
    //트리거:시점
    scrollTrigger:{ 
      trigger: '.intro_inner',
      start:'top 50%',
      end: '20% 10%',
      //markers: 'true',
      scrub:1,
    },
    duration: 1,
    opacity: 0,
    y: '-50%',
    stagger: 0.3,
  });

  gsap.from(".artist_list .img_wrap", {
    scrollTrigger:{ 
      trigger: '.artist_list .content',
      start:'top 50%',
      end: '10% 10%',
      //markers: 'true',
      scrub:1,
    },
    duration: 1,
    opacity: 0,
    y: '-2%',
    stagger: 0.2,
  });

  /*
@header
-famliy
*/
  $('header .family').mouseover(function(){
    $('.family_list').stop().animate({height:140}, 500)
  })

  $('.gnb > .family').mouseleave(function(){
    $('.family_list').stop().animate({height:0}, 500)
  })

  $('header .search').click(function(e){
    e.preventDefault();
    $(this).toggleClass('close');
    $('header .search_wrap form').toggleClass('on');
    
  })

  /*
  @main_visual
  -swiper
  */
  var swiper = new Swiper(".main_visual_swiper", {
    disableOnInteraction: false,
    effect: 'fade',
    speed: 1500,

    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".main_visual_swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });

  /*
    @company
    -swiper
  */
  var swiper = new Swiper(".company_swiper", {
    centeredSlides: true,
    // width를 설정하는대로 맞춰서 나옴
    slidesPerView: 'auto',
    loop:true,
    pagination: {
      el: ".company_view .swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".company_view .prev",
      nextEl: ".company_view .next",
    },
  });

  /*
  @album
  -swiper
  */
  var swiper = new Swiper(".album_swiper", {
  pagination: {
    el: ".album .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".album .next",
    prevEl: ".album .prev",
  },
  autoplay: { 
    delay: 3000
  },
  effect:'fade',
  // loop 반복 시 nth-child 사용 x
  loop: true,
  });

  /*
  @video
  -swiper
  */
  var swiper2 = new Swiper(".video_thumb_swiper", {
  slidesPerView: 5,
  simulateTouch: false,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".video .next",
    prevEl: ".video .prev",
  },
  });
  $('.video_thumb_swiper .swiper-slide').click(function(e){
    e.preventDefault();
    var srcName = $(this).find('img').attr('src');
    $('.utube_area img').attr('src', srcName)
    
    var title = $(this).find('.title').text();
    var desc = $(this).find('.desc').text()
    $('.utube_area .title').text(title);
    $('.utube_area .desc').text(desc);
    
    var srciframe = $(this).data('src');
    //alert(srciframe);
    $('.video_pop iframe').attr('src', srciframe)


    $('.video_thumb_swiper .swiper-slide').removeClass('on');
    $(this).addClass('on');
  })
  $('.video .utube_area > a').click(function(e){
    e.preventDefault();
    $('.video_pop').addClass('on');
  })
  $('.video_pop .close').click(function(e){
    e.preventDefault();
    $('.video_pop').removeClass('on');
  })
  //! 처음에 첫번째 컨텐츠가 먼저 나오게

  /*
  @board
  -swiper
  */
  var swiper = new Swiper(".notice_board_swiper", {
    pagination: {
      el: ".notice_board .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".notice_board .btn_next",
      prevEl: ".notice_board .btn_prev",
    }
    });

  var swiper = new Swiper(".fans_board_swiper", {
    pagination: {
      el: ".fans_board .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".fans_board .btn_next",
      prevEl: ".fans_board .btn_prev",
    }
    });


  /*
  @footer
  -family_site
  */
  $('.family_site').click(function(e){
    e.preventDefault();

    var h = $(this).find('.family_sub').height();

    if(h < 220) {
      $(this).find('.family_sub').stop().animate({height:230},500);
    }else {
      $(this).find('.family_sub').stop().animate({height:0},500);
    }
  })


  /*
  @footer
  -탑버튼
  */

  $('footer .top_btn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500)
  })

  }) // end