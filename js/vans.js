$(function(){
  // 모바일 - nav
  $('#btn-menu').click(function(){
    $('body').toggleClass('open');
  })
  
  // header - 검색창
  $('.sp-search').click(function(){
    $('.search').show();
    $('.search input').animate({
      width:600
    })
  });
  $('html').click(function(e){
    if(!$(e.target).is('.search *, nav .sp-search')){
        $('.search').hide();   
        $('.search input').css('width',0);     
    }
  })

  // header - 스크롤
  $(window).scroll(function(){
    var scrollTop=$(window).scrollTop();
    
    if(scrollTop > 0){
        $('body').addClass('scroll');
    }else{
        $('body').removeClass('scroll');
    }
  });


  //introduce - 더보기 버튼================
  $('.introduce .btn-int').click(function () { 
    var btn=$(this);
    if (btn.text()=='더보기') {
      $('.button-open:hidden').slideDown();
    if($('button-open:hidden').length==0){
        btn.text('접기');
    }
    }else{
        $('.button-open').slideUp();
        btn.text('더보기');    
    }   
  });
  
  // product - tap-menu==============
  var productImg=[
    'img/pc_product_01.gif',
    'img/pc_product_02.png',
    'img/pc_product_03.gif',
    'img/pc_product_04.gif',
    'img/pc_product_05.png'
  ]
  $('.tab-nav a').click(function(){
    var id = $(this).attr('href')
    $('.tab-nav a').removeClass();
    $(this).addClass('active');
    $('.tab-contents div').stop(true).fadeOut(100);
    $(id).stop(true).delay(100).fadeIn();
    var index=$(this).index('.tab-nav a');
    $('.shose').attr('src',productImg[index]);
  })

  $(window).resize(function () { 
    var speed;
    var windowWidth=$(this).width();
    if(windowWidth>1200){
      speed=3000;
    }else if(windowWidth>768){
      speed=4000;
    }else{
      speed=5000;
    }
    $('.banner img').on('load',function(){
      var bannerWidth=$('.banner img').eq(0).innerWidth(); 
      $('.banner .row').width(bannerWidth*3);         
      textMove(bannerWidth, speed)
    })
  }).resize();

  // 문구이동 
  function textMove(move, speed){
    $('.banner .row').stop(true, true).animate({
      left:-move
    },speed,'linear',function(){
      $(this).css('left',0);
      textMove(move, speed);
    })
  }

  // slide - main
  var mainSwiper = new Swiper('.main-slide .swiper-container',{
    navigation: {
      nextEl: '.main-slide .swiper-button-next',
      prevEl: '.main-slide .swiper-button-prev',
    },
    loop:true,
    pagination: {
      el: '.main-slide .swiper-pagination',
      clickable: true,
      type: 'progressbar',
    }, autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  })
  mainSwiper.on('slideChange', function () {
    var realIndex=mainSwiper.realIndex + 1;
    $('span.page').text('0'+realIndex);
  });

  // slide - new arrival
  var arrivalSwiper = new Swiper('.new-arrival', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.new-arrival .swiper-button-next',
      prevEl: '.new-arrival .swiper-button-prev',
    },
    pagination: {
      el: '.new-arrival .swiper-pagination',
      clickable: true,
    },
    loop:true,
    centeredSlides: true,
    breakpoints: {
      1340: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

  $('.new-arrival a').click(function (e) { 
    e.preventDefault();
    
  });



  // slide - news     
  var newsSwiperOption={
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.news.sp-swiper-btn-next',
      prevEl: '.news .sp-swiper-btn-prev',
    },
    pagination: {
      el: '.news .swiper-pagination',
      clickable: true,
      type: 'progressbar'      
    },
    loop:true,
    centeredSlides: true,
    breakpoints: {
      1200: {
        spaceBetween: 80
      },
      768: {
        spaceBetween: 40
      }
    }
  }
  var newsSwiper = new Swiper('.news', newsSwiperOption );
 
  //event
  var eventSwiperOption = {   slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.event.sp-swiper-btn-next',
      prevEl: '.event .sp-swiper-btn-prev',
    },
    pagination: {
      el: '.event .swiper-pagination',
      clickable: true,
      type: 'progressbar',
    },
    loop:true,
    centeredSlides: true,
    breakpoints: {
      1200: {
        spaceBetween: 80
      },
      768: {
        spaceBetween: 40
      }
    }}

  var eventSwiper = new Swiper('.event',eventSwiperOption);

    // online shoop - mouseover
    var shopImg=[
      'img/pc_online_shop_bg_w.png',
      'img/pc_online_shop_bg_m.png',
      'img/pc_online_shop_bg_k.png'
    ]

    $(window).resize(function () { 
      var windowWidth=$(this).width();
      if(windowWidth>1340)
    $('.shop-link li a').on({
      mouseenter:function(){
        var index=$(this).index('.shop-link li a');
      $(this).parents('.img-box').css('background','url('+shopImg[index]+')')
      },
      mouseleave:function(){
        $(this).parents('.img-box').css('background','url(img/pc_online_shop_bg_b.png)')
      }
    })
  })

    // news & event click
    $('.news .sp-right').click(function(){
      $('.news').hide()
      if(eventSwiper !== undefined){
        eventSwiper.destroy();
      }
      
      $('.event').show();
      eventSwiper = new Swiper('.event',eventSwiperOption);
    })
    $('.event .sp-left').click(function(){
      $('.event').hide()
      if(newsSwiper !== undefined){
        newsSwiper.destroy();
      }
      $('.news').show()
      newsSwiper = new Swiper('.news',newsSwiperOption);
    })
    
    // footer - language
    $('.language>a').click(function (e) {
      e.preventDefault(); 
      $(this).toggleClass('active');
      $(this).next().slideToggle();
  });

  // 팝업
  $('.new-arrival .circle').click(function(e){
    $('.arrival-popup').show();
    $('body').append('<div class="popup-bg"></div>');
  })
  $('.sp-popup-close').click(function(){
    $('.arrival-popup').hide();
    $('.popup-bg').remove();
  })
});   


