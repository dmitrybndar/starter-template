(function() {
  const $menu = $('.main-nav');
  const $hamburger = $('.hamburger-btn');
  let isMenuOpened = false;

  $hamburger.on('click', function() {
    $(this).toggleClass('opened');
    $menu.toggleClass('opened');
    isMenuOpened = !isMenuOpened;

    if (isMenuOpened) {
      bodyScrollLock.disableBodyScroll($menu[0]);
    } else {
      bodyScrollLock.clearAllBodyScrollLocks();
    }
  });
})();
