// Home slider
var homeSlider = new Swiper('#home-slider', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    types: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

// Category field
$('#category-name').on('click', function () {
  $('#category-box').toggleClass('collapsed')
  if (!$('#category-box').hasClass('collapsed')) {
    $('#category-input').focus().val('').trigger('input')
  }
})
$('#category-input').on('input', function () {
  searchtext = trimspecials($(this).val());
  categories.each(function () {
    var thistext = trimspecials($(this).text());
    if (thistext.indexOf(searchtext) > -1) {
      $(this).removeClass('hidden')
    } else {
      $(this).addClass('hidden')
    }
  })
})
categories = $('#categories').children();
categories.each(function () {
  $(this).on('click', function () {
    categories.each(function () {
      $(this).removeClass('chosen')
    })
    $(this).addClass('chosen')
    $('#category-name').text($(this).text())
    $('#category-box').toggleClass('collapsed')
  })
})

$('#thuvien-main-dropdown-button').on('mouseover', function () {
  $('#thuvien-main-dropdown-menu').addClass('show')
})
$(window).on('click', function (e) {
  if (e.target.id != 'thuvien-main-dropdown-button') {
    $('#thuvien-main-dropdown-menu').removeClass('show')
  }
})
