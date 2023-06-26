$( document ).ready(function() {
  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({
      scrollTop: top - 90
    }, 500);
  });


  $('.slider').slick();


  $('.grid').masonry({
    itemSelector: '.grid-item',
    // columnWidth: 300,
    gutter: 20
  });

  //-------API------------------
  const unsplashAccessKey = 'cyo37Mv7aerj7DiT_IaFWHpvrPQn7lWWyJX1DVX3xw8';
  const numberOfPhotos = 7;
  const gridItems = document.querySelectorAll('.grid-item');

  async function getRandomPhoto(searchTerm) {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashAccessKey}&query=${encodeURIComponent(searchTerm)}`);
      const photo = await response.json();
      return photo;
    } catch (error) {
      console.error('Помилка при отриманні фотографії з Unsplash:', error);
      return null;
    }
  }

  async function assignRandomPhotos() {
    for (let i = 0; i < gridItems.length; i++) {
      const gridItem = gridItems[i];
      const photo = await getRandomPhoto('');
      if (photo) {
        const imgItemElement = gridItem.querySelector('.img-item');
        if (imgItemElement) {
          imgItemElement.textContent = photo.user.name;
        }
        gridItem.style.backgroundImage = `url(${photo.urls.small})`;
      }
    }
  }

  async function searchPhotos() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value;
    for (let i = 0; i < gridItems.length; i++) {
      const gridItem = gridItems[i];
      const photo = await getRandomPhoto(searchTerm);
      if (photo) {
        const imgItemElement = gridItem.querySelector('.img-item');
        if (imgItemElement) {
          imgItemElement.textContent = photo.user.name;
        }
        gridItem.style.backgroundImage = `url(${photo.urls.small})`;
      }
    }
  }

  const searchButton = document.getElementById('search-btn');
  searchButton.addEventListener('click', searchPhotos);

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      searchPhotos();
    }
  });

  assignRandomPhotos();
  //-------------------------------------


  /* $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  }); */


}) 