// remove preloader
$(window).on('load', () => {
  $('.preloader').fadeOut('slow');
})

$(document).ready(() => {
  objectFitImages();
  svg4everybody();

  require('./target-blank.js');
});