Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".roller"), function(index, item) {
      const wrapper = $("<div />", {
        class: "roller-wrapper"
      });
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);

      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while (max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }

      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 4000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery)

 $( document ).ready(function() {

  // $('.head').addClass("hidden_animation").viewportChecker({
  //   classToAdd: 'visible animated slideInUp',
  //   offset: '0%'
  // });
  $('.header-img, .anime').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: '0%'
  });
  $('.up-head').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: '0%'
  });
  $('.up-head-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInUp',
    offset: '0%'
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: '20%'
  });
  $('.up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInUp',
    offset: '10%'
  });
  $('.up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInUp',
    offset: '10%'
  });
  $('.up-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeInUp',
    offset: '10%'
  });
  $('.up-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-4 fadeInUp',
    offset: '10%'
  });
  $('.up-5').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-5 fadeInUp',
    offset: '10%'
  });
  $('.right-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInRight',
    offset: '10%'
  });
  $('.right-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInRight',
    offset: '10%'
  });
  $('.right-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeInRight',
    offset: '10%'
  });
  $('.right-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-4 fadeInRight',
    offset: '10%'
  });
  $('.right-5').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-5 fadeInRight',
    offset: '10%'
  });
  $('.left-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInLeft',
    offset: '10%'
  });
  $('.left-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInLeft',
    offset: '10%'
  });
  $('.left-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeInLeft',
    offset: '10%'
  });
  $('.left-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-4 fadeInLeft',
    offset: '10%'
  });
  $('.left-5').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-5 fadeInLeft',
    offset: '10%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: '0%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: '20%'
  });
  $('.left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: '20%'
  });
  $('.flip').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated flipInY',
    offset: '20%'
  });
  $('.in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: '30%'
  });
  // $('.bounce-in').addClass("hidden_animation").viewportChecker({
  //   classToAdd: 'visible animated bounceIn',
  //   offset: '20%'
  // });
  $('.bounce-left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 bounceInLeft',
    offset: '20%'
  });
  $('.bounce-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 bounceInRight',
    offset: '20%'
  });
  $('.bounce-up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 bounceInUp',
    offset: '20%'
  });
  // $('.bounce-down').addClass("hidden_animation").viewportChecker({
  //   classToAdd: 'visible animated bounceInDown',
  //   offset: '20%'
  // });
  $('.results').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: '30%'
  });


  // Burger-main
  $('.drop-btn').click(function() {
    let dropdown = document.getElementById("dropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  });

  window.addEventListener("click", function(event) {
    let dropdowns = document.getElementsByClassName("nav-main-box");
    let containers = document.getElementsByClassName("blok");

    if (!event.target.matches('.drop-btn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3') && !event.target.matches('.blok')) {
      for (let i = 0; i <dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        let container = containers[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          container.classList.remove('change');
        }
      }
    }
  });


  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 50
    }, 1500);
  });


  //головний слайдер фото
  $('#slider1').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
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
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  //слайдер ЯК ВПЛИВАЮТЬ ЖОРСТКІ ПОКАРАННЯ
  $(document).ready(function () {
    if ($('#slider4').css('display') === 'block') {
      $('#slider4').slick({
        // Налаштування Slick Slider для мобільних пристроїв
        responsive: [{
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          dots: true,
          arrows: true,
          speed: 1000,
          adaptiveHeight: true
          }
        }]
      });
    }
  });

  //accardion
  const accordions = document.querySelectorAll(".accordion");
  const contents = document.querySelectorAll(".accordion-content");
  const arrows = document.querySelectorAll(".arrow");
  const bgArrows = document.querySelectorAll(".bg-arrow");

  // Функція для зміни стилів активного елемента
  const setActiveStyle = (index) => {
    // Спочатку змінимо стилі всіх елементів .bg-arrow
    bgArrows.forEach((bgArrow, i) => {
      if (i === index) {
        bgArrow.style.backgroundColor = "#FF4E7C";
      } else {
        bgArrow.style.backgroundColor = "#4343FF";
      }
    });

    // Змінимо стилі всіх елементів .arrow
    arrows.forEach((arrow, i) => {
      if (i === index) {
        arrow.style.transform = "rotate(-135deg)";
        arrow.style.marginTop = "6px";
      } else {
        arrow.style.transform = "rotate(45deg)";
        arrow.style.marginTop = "-6px";
      }
    });
  };

  // Функція для обробки кліку на акордеон
  const active = (item, index) => {
    contents.forEach((content, i) => {
      if (i !== index) {
        content.style.height = 0;
      }
    });
    item.style.height = `${item.scrollHeight}px`;
    setActiveStyle(index);
  };

  // Додали обробник кліку на всі кнопки акордеону
  accordions.forEach((accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i));
  });


  //PRICE-TIMER/* ss */
  const hoursDisplay = document.querySelector('.hours');
  const minutesDisplay = document.querySelector('.minutes');
  const secondsDisplay = document.querySelector('.seconds');

  function getTimeUntilMidnight() {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0); // Set to next midnight

      const timeDifference = midnight - now;
      return Math.floor(timeDifference / 1000); // Convert to seconds
  }

  let remainingTime = getTimeUntilMidnight();

  function updateTimerDisplay() {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      hoursDisplay.textContent = hours.toString().padStart(2, '0');
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
  }

  function updateTimer() {
      if (remainingTime > 0) {
          remainingTime--;
          updateTimerDisplay();
      }
  }

  // Update the timer every second
  setInterval(updateTimer, 1000);

})