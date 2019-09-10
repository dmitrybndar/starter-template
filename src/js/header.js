(function() {
  const $header = $('.page-header');

  const sticky = $header.offset().top + $header.height();

  function stickyHeader() {
    $header.toggleClass('sticky', window.pageYOffset > sticky);
  }

  $(window).on('scroll', stickyHeader);
})();
