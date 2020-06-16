(function ($) {
    var heroSection = $('section.hero');
    //heroSection.removeClass('hero--secondary').addClass('hero--tertiary');
    $('.search-box, .hero__logo', heroSection).remove();
    $('.hero__overlay', heroSection).removeClass('hero__overlay').addClass('hero__overlay--darker');
})(jQuery);