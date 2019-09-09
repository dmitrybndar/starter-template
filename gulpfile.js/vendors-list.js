module.exports = {
  js: [
    // REQUIRED
    // Babel polyfill
    'node_modules/@babel/polyfill/dist/polyfill.min.js',
    // object-fill for images popyfill
    'node_modules/object-fit-images/dist/ofi.min.js',
    // Make SVG Sprite work in all browsers
    'node_modules/svg4everybody/dist/svg4everybody.min.js',
    // END OF REQUIRED

    // FullPage
    // 'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
    // 'node_modules/fullpage.js/vendors/scrolloverflow.js',
    // 'node_modules/fullpage.js/vendors/jquery.easings.min.js',

    // ScrollMagic
    // 'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    // 'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',

    // Select2
    // 'node_modules/select2/dist/js/select2.full.min.js',

    // Google Map Clustering
    // 'node_modules/@google/markerclusterer/src/markerclusterer.js',

    // Slick Slider
    // 'node_modules/slick-carousel/slick/slick.min.js',

    // Magnific Popup
    // 'node_modules/magnific-popup/dist/jquery.magnific-popup.js'

    // Lock Body Scroll
    // 'node_modules/body-scroll-lock/lib/bodyScrollLock.js',

    // noUIslider for range controls
    // 'node_modules/nouislider/distribute/nouislider.min.js',
  ],
  css: [
    // REQUIRED
    // Normalize CSS
    'node_modules/normalize.css/normalize.css',
    // END OF REQUIRED

    // FullPage
    // 'node_modules/fullpage.js/dist/jquery.fullpage.min.css',

    // Select2
    // 'node_modules/select2/dist/css/select2.min.css',

    // Slick Slider
    // 'node_modules/slick-carousel/slick/slick.css',

    // Magnific Popup
    // 'node_modules/magnific-popup/dist/magnific-popup.css'

    // noUIslider for range controls
    // 'node_modules/nouislider/distribute/nouislider.min.css',
  ]
};
