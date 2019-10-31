(function() {
  const $header = $('.page-header');

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  function stickyHeader() {
    const headerOffset = 0;

    const stickyPoint = headerOffset + $('.page-header').height();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // downscroll code
      $header.removeClass('scrolled--visible');
    } else {
      // upscroll code
      $header.addClass('scrolled--visible');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    $header.toggleClass('scrolled', window.pageYOffset > stickyPoint);

    if (window.pageYOffset <= stickyPoint) {
      $header.removeClass('scrolled--visible scrolled');
    }
  }

  $(window).on('scroll load', stickyHeader);
})();
