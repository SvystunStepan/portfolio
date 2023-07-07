/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

 !function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  if ($(window).width() > 1006) {
    /* $('.title span').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
      offset: "10%"
    }); */
    $('.head .container').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated slideInUp', 
      offset: 0
    });
  }
    $('.right').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInRight', 
      offset: '0%'
    });
    $('.left').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInLeft', 
      offset: '0%'
    });
    $('.up').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInUp', 
      offset: '30%'
    });
    $('.down').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInDown', 
      offset: '30%'
    });
    $('.in').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeIn', 
      offset: '30%'
    });
    $('.bounce-in').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceIn', 
      offset: '30%'
    });
    $('.bounce-left').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', 
      offset: '30%'
    });
    $('.bounce-right').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInRight', 
      offset: '30%'
    });
    $('.bounce-up').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInUp', 
      offset: '30%'
    });
    $('.bounce-down').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInDown', 
      offset: '30%'
    });
    $('.speaker-img').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated zoomIn', 
      offset: '0%'
    });
    $('.bottom-info').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated rotateIn', 
      offset: '30%'
    });
  // }

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({
      scrollTop: top - -20
    }, 1500);
  });


  //головний слайдер фото
  $('#slider1').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
    // adaptiveHeight: true
  });

  //слайдер телеканали
  $('#slider2').slick({
    dots: false,
    arrows: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
  });

  //слайдер відгуків
  $('#slider3').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // adaptiveHeight: true
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    //сдайдер модулів
    $('#slider4').slick({
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });

    //сдайдер бонусів
    $('#slider5').slick({
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });

    //фіксована кнопка мобіла 
    window.addEventListener('scroll', function() {
      var a = document.querySelector('.floating-button');
      var priceBlock = document.getElementById('price');
      var scrollY = window.scrollY;
      var priceBlockTop = priceBlock.offsetTop;
      var priceBlockHeight = priceBlock.offsetHeight;
      var priceBlockBottom = priceBlockTop + priceBlockHeight;
      
      if (scrollY > 0) {
        a.style.top = 'auto';
        a.style.bottom = '20px';
      } else {
        a.style.top = '450px';
        a.style.bottom = 'auto';
      }
      //зникає при знаходженні на блоці "price"
      if (scrollY > priceBlockTop && scrollY < priceBlockBottom) {
        a.style.display = 'none';
      } else {
        a.style.display = 'block';
      }

    });

  }
  

  /* if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Код, який виконується на мобільних пристроях
  } else {
    // Код, який виконується на інших пристроях
  } */
}) 


