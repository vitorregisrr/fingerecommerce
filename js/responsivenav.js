(function () {
    'use strict';

    const mobileMenuToggler = $('#mobile-menu-toggler'),
        mobileSearchToggler = $('#mobile-search-toggler');

    const mobileSearch = $('#mobile-search'),
        mobileMenu = $('#mobile-menu'),
        mobileHeader = $('#mobile-header');

    const toggleHeader = function () {
        if ( mobileMenu.hasClass('active') || mobileSearch.hasClass('active') ){
            mobileHeader.addClass('active');

        }else{
            mobileHeader.removeClass('active');
        }
    };

    const toggleMobileMenu = function () {
        mobileMenu.toggleClass('active');
        mobileSearch.removeClass('active');
        mobileMenuToggler.attr('aria-expanded', !mobileMenuToggler.attr('aria-expanded'));
        toggleHeader();
    }

    const toggleMobileSearch = function () {
        mobileSearch.toggleClass('active');
        mobileMenu.removeClass('active');
        mobileSearchToggler.attr('aria-expanded', !mobileSearchToggler.attr('aria-expanded'));
        toggleHeader();
    };

    mobileMenuToggler.click(toggleMobileMenu);
    mobileSearchToggler.click(toggleMobileSearch);
})();