window.onload = function () {
  var time = null
  $('.dropdown-product').hide()
  $('#product').mouseover(function () {
    clearTimeout(time)
    $('.dropdown-product').show()
  })
  $('#product').mouseout(function () {
    time = setTimeout(function () {
      $('.dropdown-product').hide()
    }, 500)
  })
  $('.dropdown-product').mouseover(function () {
    clearTimeout(time)
    $('.dropdown-product').show()
  })
  $('.dropdown-product').mouseout(function () {
    time = setTimeout(function () {
      $('.dropdown-product').hide()
    }, 500)
  })
}
