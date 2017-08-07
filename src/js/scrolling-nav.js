//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar-fixed").offset().top > 50) {
        $("#nav").addClass("top-nav-collapse");
    } else {
        $("#nav").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
