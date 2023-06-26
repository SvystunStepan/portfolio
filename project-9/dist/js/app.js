$( document ).ready(function() {
  
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.testimonials-nav-item').click(function(){
    $('.testimonials-nav-item').removeClass('active');
    $(this).addClass('active');

    $('.testimonials-item').removeClass('active');
    $($(this).data('tab')).addClass('active');
  })

  $('.open-menu').click(function(){
    $('#menu').slideToggle(200)
  })

  $('.faq-item .title').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.content').slideToggle(200);
  })


  /* form valid*/
  let alertImage = '<svg class="absolute right-6 bottom-5 w-5 h-5 text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="currentColor"/></svg>';
  let error;
  $('.submit').click(function (e) {
    e.preventDefault();
    let ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      let thisFiled = $(this);

      if ($(this).val().trim() === '') {
          thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
      } else {
        if (thisFiled.attr("type") === 'email') {
          let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!pattern.test(thisFiled.val())) {
            $("input[name=email]").val('');
            thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parent('.label').find('.allert').remove();
          }
        } else if (thisFiled.attr("type") === 'tel') {
          let patterntel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          if (!patterntel.test(thisFiled.val())) {
            $("input[name=phone]").val('');
            thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parent('.label').find('.allert').remove();
          }

        }  else {
          error = 0;
          thisFiled.removeClass('error').parent('.label').find('.allert').remove();
        }
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);


    setTimeout(function () {
      alert('Success');
      
      $form.find('.submit').removeClass('inactive');
      $form.find('.submit').prop('disabled', false);
      $form[0].reset();

      $('#check-success').prop('disabled', true)
      
    }, 1000);

  });


  $('input[name="phone"]').inputmask("+9{1,15}");
  $('#card_numbe').inputmask("9999 9999 9999 9999");
  $('#exp_date').inputmask("99/99");
  $('#cvv').inputmask("999");
  $('#referral').inputmask("9999999");
  

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-update-form-img').attr('src', e.target.result).addClass('change');
        }

        reader.readAsDataURL(input.files[0]);
    }
}

  $('#avatar').change(function(){
     readURL(this);
  })

  $('.password-icon').click(function(){
    $(this).toggleClass('show-password');
    if($(this).parent().find('input').attr('type') === "password") {
      $(this).parent().find('input').attr('type', 'text');
    }else{
      $(this).parent().find('input').attr('type', 'password');
    }
  })

  $('#check').change(function(){
    if($(this).is(':checked')) {
      $(this).parents('form').find('#check-success').removeAttr('disabled')
    }else{
      $(this).parents('form').find('#check-success').attr('disabled', 'disabled')
    }
  })

  $(window).scroll(function () {
    var $sections = $('.roadmap-list .large-title');


    $sections.each(function (i, el) {
      const top = $(el).offset().top - 500;
      const bottom = top + $(el).height() + $(window).height()*3;
      const scroll = $(window).scrollTop();
      let heightBefore = $('.item'+i).height() - 10;

      const topMenu = $(el).offset().top - 70;
      const bottomMunu = topMenu + $(el).height() + $(window).height()/3;
      //    var id = $(el).attr('id');
      if (scroll > top && scroll < bottom && $(el).hasClass('large-title')) {
        $(el).addClass('active');
        $(el).find('.before').height(heightBefore);

        // $(el).find('.before').animate({
        //   opacity: 1,
        //   height: heightBefore
        // });

      } else {
        $(el).removeClass('active');
      }

      if (scroll > topMenu && scroll < bottomMunu) {
        // $('.nav-btn').addClass('dark-mode');
        // $('.logo').addClass('dark-mode');

      } else {}
    })


  });


  $('[data-modal]').click(function (e) {
    e.preventDefault();

    var $this = $(this),
      modal = $(this).data('modal');

      $('body').addClass('overflow-hidden')

    $(modal).addClass('show');
  })

    $('.modal .close').click(function () {
    var $this = $(this);
    $this.parents('.modal').removeClass('show');
    $('body').removeClass('overflow-hidden')
    if ($this.parents('.modal').attr('id') === 'media') {
      $this.parents('.modal').find('.modal-content').text('')
    }
  })

  $(document).mouseup(function (e) {
    var container = $(".modal-dialog");
    if (container.has(e.target).length === 0) {
      container.parents('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');

      $('#media').find('.modal-content').text('')
    }
  });


  $(document).keydown(function (e) {
    // ESCAPE key pressed 
    if (e.keyCode == 27) {
      if ($('.modal.show').attr('id') === 'media') {
        $('#media').find('.modal-content').text('')
      }
      $('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');
    }
  })
})

// ANIMATION
// AOS.init(); // скорочена версія
if (window.innerWidth <= 720) {
  AOS.init({
    disable: true
  });
} else {
  AOS.init({
    // Global settings:
    disable: false, // приймає такі значення: "телефон", "планшет", "мобільний", логічний, вираз або функція
    startEvent: 'DOMContentLoaded', // назва події, надісланої в документі, яку AOS має ініціалізувати
    initClassName: 'aos-init', // клас, застосований після ініціалізації
    animatedClassName: 'aos-animate', // клас, застосований до анімації
    useClassNames: false, // якщо істина, додаватиме вміст `data-aos` як класи під час прокручування
    disableMutationObserver: false, // вимикає автоматичне виявлення мутацій (додатково)
    debounceDelay: 50, // затримка на усунення дребезгу, яка використовується під час зміни розміру вікна (додатково)
    throttleDelay: 99, // затримка на газі під час прокручування сторінки (додатково)
    

    // Параметри, які можна перевизначати для кожного елемента за допомогою атрибутів data-aos-*:
    offset: 300,//120, // зсув (у пікселях) від початкової точки запуску
    delay: 200, //0, // значення від 0 до 3000 з кроком 50 мс
    duration: 700,//400, // значення від 0 до 3000 з кроком 50 мс
    easing: 'ease', // ослаблення за замовчуванням для анімацій AOS
    once: false, // чи має відбуватися анімація тільки один раз - під час прокручування вниз
    mirror: false, // чи повинні елементи анімуватися під час прокручування повз них
    anchorPlacement: 'top-bottom', // визначає, яка позиція елемента щодо вікна має запускати анімацію
  });
}

//=====   dropdown menu   ======
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var container = document.querySelector(".blok");
  dropdown.classList.toggle("show");
  container.classList.toggle("change");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var containers = document.getElementsByClassName("blok");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var container = containers[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        container.classList.remove('change');
      }
    }
  }
}

// калькулятор кредиту
document.addEventListener('DOMContentLoaded', function() {
  var amountSlider = document.getElementById('amountSlider');
  var amountValue = document.getElementById('amountValue');
  var daysSlider = document.getElementById('daysSlider');
  var daysValue = document.getElementById('daysValue');
  var confirmButton = document.getElementById('confirmButton');

  amountSlider.addEventListener('input', function() {
    amountValue.textContent = amountSlider.value;
  });

  daysSlider.addEventListener('input', function() {
    daysValue.textContent = daysSlider.value;
  });

  confirmButton.addEventListener('click', function() {
    var amount = amountSlider.value;
    var days = daysSlider.value;
    alert('Ви вибрали суму: ' + amount + ' грн, та кількість днів: ' + days + ' день(днів).');
  });
});


// Slider Баннер акции 
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
let i;
let slides = document.getElementsByClassName("slides1");
let dots = document.getElementsByClassName("dot1");
if (n > slides.length) {slideIndex1 = 1}
if (n < 1) {slideIndex1 = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex1-1].style.display = "block";
dots[slideIndex1-1].className += " active";
};

//================================================
// btn get-loan mobile
const getBtnMob = document.querySelector('#getBtnMob');
const getBlockInfo = document.querySelector('#getBlockInfo');
const getArrowDown = document.querySelector('#getArrowDown');

let isButton1Clicked = false;

getBtnMob.addEventListener('click', function() {
  if (!isButton1Clicked) {
    getBlockInfo.style.display = 'block';
    getBtnMob.style.color = '#5461E1';
    getBtnMob.style.background = '#FFFFFF';
    getBtnMob.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.15)';
    getArrowDown.style.transform = 'rotate(180deg)';
    isButton1Clicked = true;
  } else {
    getBlockInfo.style.display = 'none';
    getBtnMob.style.color = '#FFFFFF';
    getBtnMob.style.background = '#4F57AA';
    getBtnMob.style.boxShadow = 'none';
    getArrowDown.style.transform = 'rotate(0deg)';
    isButton1Clicked = false;
  }
});

// slider get-loan mobile
let slideIndex2 = 1;

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slides2");
  let activeDot = document.querySelector(".active-dot2");
  let totalDots = document.querySelector(".total-dot2");
  
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  activeDot.innerHTML = `0${slideIndex2}`;
  totalDots.innerHTML = `0${slides.length}`;
  
  slides[slideIndex2-1].style.display = "block";
}

function checkWindowSize() {
  if (window.innerWidth < 571) {
    showSlides2(slideIndex2);
  } else {
    // код для ширших екранів
  }
}

checkWindowSize();
window.addEventListener('resize', checkWindowSize);
//================================================


//================================================
// btn repay-loan mobile
const repayBtnMob = document.querySelector('#repayBtnMob');
const repayBlockInfo = document.querySelector('#repayBlockInfo');
const repayArrowDown = document.querySelector('#repayArrowDown');

let isButton2Clicked = false;

repayBtnMob.addEventListener('click', function() {
  if (!isButton2Clicked) {
    repayBlockInfo.style.display = 'block';
    repayBtnMob.style.color = '#5461E1';
    repayBtnMob.style.background = '#FFFFFF';
    repayBtnMob.style.boxShadow = '0px 1px 8px rgba(0, 0, 0, 0.15)';
    repayArrowDown.style.transform = 'rotate(180deg)';
    isButton2Clicked = true;
  } else {
    repayBlockInfo.style.display = 'none';
    repayBtnMob.style.color = '#FFFFFF';
    repayBtnMob.style.background = '#4F57AA';
    repayBtnMob.style.boxShadow = 'none';
    repayArrowDown.style.transform = 'rotate(0deg)';
    isButton2Clicked = false;
  }
});

// slider repay-loan mobile
if (window.innerWidth < 571) {
  let slideIndex3 = 1;
  showSlides3(slideIndex3);
  
  function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
  }
  
  function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
  }
  
  function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("slides3");
  let activeDot = document.querySelector(".active-dot3");
  let totalDots = document.querySelector(".total-dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  activeDot.innerHTML = `0${slideIndex3}`;
  totalDots.innerHTML = `0${slides.length}`;
  
  slides[slideIndex3-1].style.display = "block";
};
} else {
// код для ширших екранів
}
//================================================


//================================================
// Slider reviews (Отзывы)
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4((slideIndex4 += n));
}

function currentSlide4(n) {
  showSlides4((slideIndex4 = n));
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("slides4");
  let activeDot = document.querySelector(".active-dot4");
  let totalDots = document.querySelector(".total-dot4");

  if (n > slides.length) {
    slideIndex4 = 1;
  }

  if (n < 1) {
    slideIndex4 = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade");
    slides[i].style.display = "none";
  }

  activeDot.innerHTML = `0${slideIndex4}`;
  totalDots.innerHTML = `0${slides.length}`;

  let startIndex, endIndex;

  if (window.innerWidth <= 1) {
    startIndex = 0; 
    endIndex = startIndex + 1;
  } else {
    startIndex = slideIndex4 - 1;
    endIndex = startIndex + 3;
    if (endIndex > slides.length) {
      endIndex = slides.length;
      startIndex = endIndex - 3;
    }
  }

  for (i = startIndex; i < endIndex; i++) {
    slides[i].classList.add("fade");
    slides[i].style.display = "inline-block";
  }
};


// ACCORDION and arrows DOWN - UP
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const panel = accordion.nextElementSibling;
  panel.classList.remove("show");
  
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    const icon = accordion.querySelector(".icon");
    panel.classList.toggle("show");

    icon.classList.toggle("down");
    icon.classList.toggle("up");
  });
});



// tell number mobile
function togglePhone() {
  var phone = document.getElementById("phone-number");
  if (phone.style.display === "none") {
    phone.style.display = "block";
  } else {
    phone.style.display = "none";
  }
}

