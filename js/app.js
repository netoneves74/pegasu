$('.nav a').click(function(e) {
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
    e.preventDefault();
});


// Menu Sanduiche

$('.sdw-menu').on('click touchstart', function(e) {
    $(this).toggleClass('sdw-menu-active');
    $('.nav').toggleClass('nav-active');
    $('.menu').toggleClass('menu-active');
    e.preventDefault();
});