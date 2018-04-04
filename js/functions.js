// Create slider that show alls book from the detail slider
// registerSliderForBooksSection() will call this function
// DO NOT call this function manually
function createController(id) {
  var slides = $(id).find('.book-picture')
  slides.each((i, e) => {
    var img = e.cloneNode(false)
    img.className = 'swiper-slide hover-preview'
    $(id + '-controller').children('.swiper-wrapper').append(img)
  })
}
// Pass a swiper container id to this function to make it work
// Controller's id must have this pattern: "id-controller"
// Where "id" is the passed parameter
function registerSliderForBooksSection(id) {
  createController(id)
  var slider = new Swiper(id)
  var sliderController = new Swiper(id + '-controller', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    slidesOffsetBefore: 25,
    slidesOffsetAfter: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    controller: {
      control: slider
    }
  })
  slider.controller.control = sliderController
}

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

// Hover to preview books
$(window).ready(() => {
  preview = $('<img id="book-picture-preview">')
  $('body').append(preview)
  $('.hover-preview').on('mousemove', function (e) {
    // preview = $('#book-picture-preview')
    preview.css('opacity', '1')
    preview.css('left', e.clientX + 40)
    preview.css('top', e.clientY + 20)
    preview.attr('src', $(this).attr('src'))
  })
  $('.hover-preview').on('mouseout', function () {
    $('#book-picture-preview').css('opacity', '0')
  })
})