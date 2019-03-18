// remove preloader
$(window).on('load', () => {
  $('#preloader').fadeOut('slow');
})

$(document).ready(() => {
  objectFitImages();
  // svg4everybody();

  // add target blank to external links
  const siteUrl = window.location.hostname;
  $('a[href*="//"]:not([href*="' + siteUrl + '"])').attr({
    target: '_blank',
    rel: 'noopener noreferrer'
  });

  let windowWidth = $(window).width();

  $(window).on('resize', () => {
    windowWidth = $(window).width();
  });

  // Menu

  // const resetMobileMenu = () => {
  //   $menuList.removeClass('mobile').css('display', 'flex');
  //   $mobileBtn.removeClass('active');
  // };

  // const applyMobileMenu = () => {
  //   $menuList.addClass('mobile').css('display', 'none');
  // };

  // $(window).on(
  //   'resize',
  //   debounce(() => {
  //     if (windowWidth >= 992 && $menuList.hasClass('mobile')) {
  //       resetMobileMenu();
  //     } else if (windowWidth < 992 && !$menuList.hasClass('mobile')) {
  //       applyMobileMenu();
  //     }
  //   }, 200)
  // );

  // End Menu
});

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}