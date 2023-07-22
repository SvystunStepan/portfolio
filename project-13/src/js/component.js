!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  $('.foto, .about-me-foto, .maket').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn', 
    offset: '0%'
  });
  $('.up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 fadeInUp', 
    offset: '0%'
  });
  $('.up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 fadeInUp',  
    offset: '0%'
  });
  $('.up-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 fadeInUp', 
    offset: '0%'
  });
  $('.up-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-4 fadeInUp', 
    offset: '0%'
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '0%'
  });
  $('.bounce-right-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 bounceInRight', 
    offset: '0%'
  });
  $('.bounce-right-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 bounceInRight', 
    offset: '0%'
  });
  $('.bounce-right-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 bounceInRight', 
    offset: '0%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown', 
    offset: '0%'
  });
  $('.hover-btn-1').addClass("hidden_animation").viewportChecker({ 
    classToAdd: 'visible animated bounceIn', 
    offset: '0%'
  });
  $('.bounce-down-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 bounceInDown', 
    offset: '0%'
  });
  $('.bounce-down-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 bounceInDown', 
    offset: '0%'
  });
  $('.bounce-down-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 bounceInDown', 
    offset: '0%'
  });
  $('.in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn', 
    offset: '0%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '0%'
  });
  $('.left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', 
    offset: '0%'
  });
  $('.right-page').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '-100%'
  });
  $('.left-page').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', 
    offset: '-100%'
  });


  // Burger-main
  $('.drop-btn').click(function() {
    let dropdown = document.getElementById("dropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  });
  
  window.addEventListener("click", function(event) {
    let dropdowns = document.getElementsByClassName("nav-box-right");
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


  // Language
  const mainFlagDesktop = document.querySelector('.language-switch.desktop .main-flag');
  const languageMenuDesktop = document.querySelector('.language-switch.desktop .language-menu');

  mainFlagDesktop.addEventListener('click', () => {
    languageMenuDesktop.style.display = languageMenuDesktop.style.display === 'none' ? 'block' : 'none';
  });

  const mainFlagMobile = document.querySelector('.language-switch.mobile .main-flag');
  const languageMenuMobile = document.querySelector('.language-switch.mobile .language-menu');

  mainFlagMobile.addEventListener('click', () => {
    languageMenuMobile.style.display = languageMenuMobile.style.display === 'none' ? 'block' : 'none';
  });

  const flagsDesktop = document.querySelectorAll('.language-switch.desktop .language-flag:not(.main-flag)');

  flagsDesktop.forEach(flag => {
    flag.addEventListener('click', () => {
      mainFlagDesktop.src = flag.src;
      mainFlagDesktop.alt = flag.alt;
      languageMenuDesktop.style.display = 'none';
    });
  });

  const flagsMobile = document.querySelectorAll('.language-switch.mobile .language-flag:not(.main-flag)');

  flagsMobile.forEach(flag => {
    flag.addEventListener('click', () => {
      mainFlagMobile.src = flag.src;
      mainFlagMobile.alt = flag.alt;
      languageMenuMobile.style.display = 'none';
    });
  });

  // КНОПКА "ПОКАЗАТИ БІЛЬШЕ" - "ПРИХОВАТИ"
  let showMoreBtn = document.getElementById('showMoreBtn');
  if (showMoreBtn) {
    let projectCards = document.querySelectorAll('.project-card');

    // Приховуємо всі блоки, крім перших 4
    for (let i = 4; i < projectCards.length; i++) {
      projectCards[i].classList.add('project-hidden');
    }

    showMoreBtn.addEventListener('click', function() {
    // Перевіряємо, чи є хоча б один прихований блок
    let hiddenBlocks = document.querySelectorAll('.project-hidden');
    if (hiddenBlocks.length > 0) {
      // Показуємо всі приховані блоки
      for (let i = 0; i < hiddenBlocks.length; i++) {
          hiddenBlocks[i].classList.remove('project-hidden');
      }
      showMoreBtn.textContent = 'Приховати';
    } else {
      // Приховуємо всі блоки, крім перших двох
      for (let i = 4; i < projectCards.length; i++) {
          projectCards[i].classList.add('project-hidden');
      }
      showMoreBtn.textContent = 'Показати більше';
    }
   });
  }

  // TABS НА СТОРІНЦІ - "project"
  $('#tabs-nav li:first-child').addClass('tab-active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

}) 
