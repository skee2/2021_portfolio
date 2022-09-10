$(function(){

  /* 
  @header
  -header_wrap */
  $(window).scroll(function(){
    curr = $(window).scrollTop();

    if (curr > 0){
    $('.header_wrap').addClass('on')
  } else {
    $('.header_wrap').removeClass('on')
  }

  })
  /*

  @header
  -swiper

  */
  var swiper = new Swiper(".nav_swiper", {
    slidesPerView: 'auto',
  });

  /*
  @main_visual
  -swiper
  */
  var swiper = new Swiper(".main_visual_swiper", {
    pagination: {
      el: '.main_visual .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.main_visual_swiper .prev',
      nextEl: '.main_visual_swiper .next'
    },
    autoplay: {
      delay: 3000
    },
    loop: true,
  });
  /*
  @sale
  -timesale
  */
   //오늘부터 특정일 후
        //var myDate = new Date();
        //myDate.setDate(myDate.getDate() + 4);

        //특정 일자 까지 카운트
        var myDate = new Date('2021/12/23 23:59:59');
        myDate.setDate(myDate.getDate());

        $(".time_counter").countdown(myDate, function (event) {
            $(this).html(
                event.strftime(
                '%H : %M : %S')
            );
        });

  /*

  @curation
  -tab_swiper

  */
  var swiper = new Swiper(".curation_tab_swiper", {
    slidesPerView: 'auto',
  });

  /*

  @curation
  -content_swiper

  */
  var swiper01 = new Swiper("#curation_goods_01 .curation_content_swiper", {
    slidesPerView: 'auto',
    // 컨텐츠 중앙으로 포커스 바꿔주기
    centeredSlides: true,
    spaceBetween: 10,
    //loop: true,
    
  });

  var swiper01_1 = new Swiper("#curation_goods_01 .txt_slide", {
    simulateTouch :false,
  });


  var swiper02 = new Swiper("#curation_goods_02 .curation_content_swiper", {
    slidesPerView: 'auto',
    // 컨텐츠 중앙으로 포커스 바꿔주기
    centeredSlides: true,
    spaceBetween: 10,
    //loop: true,
    
  });

  var swiper02_1 = new Swiper("#curation_goods_02 .txt_slide", {
    simulateTouch :false,
  });

  var swiper03 = new Swiper("#curation_goods_03 .curation_content_swiper", {
    slidesPerView: 'auto',
    // 컨텐츠 중앙으로 포커스 바꿔주기
    centeredSlides: true,
    spaceBetween: 10,
    //loop: true,
    
  });

  var swiper03_1 = new Swiper("#curation_goods_03 .txt_slide", {
    simulateTouch :false,
  });

  var swiper04 = new Swiper("#curation_goods_04 .curation_content_swiper", {
    slidesPerView: 'auto',
    // 컨텐츠 중앙으로 포커스 바꿔주기
    centeredSlides: true,
    spaceBetween: 10,
    //loop: true,
    
  });

  var swiper04_1 = new Swiper("#curation_goods_04 .txt_slide", {
    simulateTouch :false,
  });

  var swiper05 = new Swiper("#curation_goods_05 .curation_content_swiper", {
    slidesPerView: 'auto',
    // 컨텐츠 중앙으로 포커스 바꿔주기
    centeredSlides: true,
    spaceBetween: 10,
    //loop: true,
    
  });

  var swiper05_1 = new Swiper("#curation_goods_05 .txt_slide", {
    simulateTouch :false,
  });
  swiper01.controller.control = swiper01_1;
  swiper02.controller.control = swiper02_1;
  swiper03.controller.control = swiper03_1;
  swiper04.controller.control = swiper04_1;
  swiper05.controller.control = swiper05_1;



  $('.curation_tab_swiper li a').click(function(e){
    e.preventDefault();

    $('.curation_tab_swiper li a').removeClass('active')
    $(this).addClass('active')

    var target = $(this).attr('href')

    $('.curation_content').removeClass('active');
    $(target).addClass('active');
  })



  /*

  @curation
  -content_swiper

  */
  var swiper = new Swiper(".banner_swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 2000
    },
    loop: true
  });

  /*

  @best, new, media
  -goods swiper

  */
  var swiper = new Swiper(".goods_list_swiper", {
    slidesPerView: 'auto',
  });

  /*

  @media
  -swiper

  */
  var swiper = new Swiper(".media_swiper", {
    loop: true,
    pagination: {
      el: '.media_swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.media_swiper .prev',
      nextEl: '.media_swiper .next'
    },
  });

   /*

  @media_goods
  -swiper

   */

  /*
  @set_goods
  -swiper
  */
 
 var swiper = new Swiper(".set_goods_swiper", {
   slidesPerView: 'auto',
  });
  
  /*
  @footer
  -company
  */
  $('.company a').click(function(e){
    e.preventDefault();

    var h = $('.company_sub').height();

    if(h < 130){
      $('.company_sub').animate({height:130},500)
    }else {
      $('.company_sub').animate({height:0},500)
    }
  })

  /*
  @footer
  -site_group
  */
  $('.global_btn').click(function(e){
    e.preventDefault();

    var h = $('.global_sub').height();

    if(h < 130){
      $('.global_sub').animate({height:130},500)
    }else {
      $('.global_sub').animate({height:0},500)
    }
  })
  /*
  @float_top_btn
  */
  $('.float_top_btn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500)
  })

}) //end