$(function(){
    
    //header menu btn click event
    $(".menu_btn").click(function(){

      if( $(this).hasClass("open") ){
        $(".menu_bg").animate({"left":"-100%"},500);
        $(".menu_btn").removeClass("open");
      }else{
        $(".menu_bg").animate({"left":"0"},500);
        $(".menu_btn").addClass("open");

      }
    })
    
    
    //header menu(open) gnb li hover eventer
    $(".gnb	li").hover(function(){
        $(".gnb	li").addClass("no_active")
        $(this).addClass("active")
    }, function(){
        $(".gnb	li").removeClass("no_active")
        $(this).removeClass("active")
    })
    
    //header menu(open) gnb li click eventer
    $('.gnb li').click(function(){
        swiper.slideTo($(this).index());
        $(".menu_bg").animate({"left":"-100%"},500);
        $(".menu_btn").removeClass("open");
    })

    
    
    
    //main swiper slide
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        parallax: true,
        mousewheel: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.next_btn',
            prevEl: '.prev_btn',
        },
        on: {
            init: function(){
                reset()
                eff01();
            },
            transitionStart: function(){
                reset()
                eff01();
            },
        },

    });
    
    //main swiper slide txt02 strong i 
    function reset() {
        TweenMax.killAll();
    }

    function eff01(){
        var tweenStagger = new TweenMax.staggerFromTo('.section01 .txt02 strong i', 0.4,{y:20,opacity:0,},{y: 0,opacity:1},0.2);
        var tweenStagger = new TweenMax.staggerFromTo('.section02 .txt02 strong i', 0.4,{y:20,opacity:0,},{y: 0,opacity:1},0.2);
        var tweenStagger = new TweenMax.staggerFromTo('.section03 .txt02 strong i', 0.4,{y:20,opacity:0,},{y: 0,opacity:1},0.2);
        var tweenStagger = new TweenMax.staggerFromTo('.section04 .txt02 strong i', 0.4,{y:20,opacity:0,},{y: 0,opacity:1},0.2);
    }


})