$(document).ready(() => {
  // Don't touch
  objectFitImages();
  svg4everybody();
  // End don't touch

  require('./target-blank.js');
  require('./menu.js');
});

// remove preloader
$(window).on('load', () => {
  $('.preloader').fadeOut();
});
