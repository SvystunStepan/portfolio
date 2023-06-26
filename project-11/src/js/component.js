$( document ).ready(function() {
  
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });


  $('.open-menu').click(function(){
    $('#menu').slideToggle(200)
  })

  $('.faq-item .title').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.content').slideToggle(200);
  })



  // Language
  const selectedLanguage = document.querySelector('.selected-language');
  const languageList = document.querySelector('.language-list');
  const currentFlag = document.getElementById('current-flag');
  const currentLanguage = document.getElementById('current-language');
  const arrowIcon = document.querySelector('.selected-language i');

  selectedLanguage.addEventListener('click', function() {
    languageList.classList.toggle('show');
    arrowIcon.classList.toggle('fa-chevron-up');
  });

  languageList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const selectedFlag = event.target.querySelector('img').getAttribute('src');
      const selectedLang = event.target.getAttribute('data-lang');

      currentFlag.setAttribute('src', selectedFlag);
      currentLanguage.textContent = '';

      languageList.classList.remove('show');
      arrowIcon.classList.remove('fa-chevron-up');
    }
  });

  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!targetElement.closest('.selected-language')) {
      languageList.classList.remove('show');
      arrowIcon.classList.remove('fa-chevron-up');
    }
  });


  // Burger menu

  $('.dropbtn').click(function() {
    let dropdown = document.getElementById("myDropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  })

  window.addEventListener("click", function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var containers = document.getElementsByClassName("blok");
    
    if (!event.target.matches('.dropbtn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3') && !event.target.matches('.blok')) {
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var container = containers[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          container.classList.remove('change');
        }
      }
    }
  });

  // Slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: true,
      dots: false,
      swipe: true,
      autoplay: true,
      autoplaySpeed: 5000,
      focusOnSelect: true
    });

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 90
    }, 500);

  });
}); 
