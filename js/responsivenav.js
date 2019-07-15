(function () {
    'use strict';

    $('#mobile-menu-toggler').click(function () {
        $('#mobile-menu').toggleClass('active');
        $('#header-mobile').toggleClass('active');
        $('#mobile-search').removeClass('active');
    });

    $('#mobile-search-toggler').click(function () {
        $('#header-mobile').toggleClass('active')
        $('#mobile-search').toggleClass('active');
        $('#mobile-menu').removeClass('active');
    });
})();