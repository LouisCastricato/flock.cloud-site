$(document).ready(function(){

    $('.nav-bar').hide();
    $('.flock-logo-lg').hide();
    $('.nameplate-subtitle').hide();
    $('.btn-controls-header').hide();

    var initAnimation = function(){
        $('.nav-bar').fadeIn(1500);
        $('.flock-logo-lg').delay(1500).fadeIn(800);

        setTimeout(function(){
            $('.flock-logo-lg-cloud').addClass('activate-animation');
        }, 1800);

        $('.nameplate-subtitle').delay(4500).fadeIn(800);
        $('.btn-controls-header').delay(5500).fadeIn(800);
    }

    initAnimation();

    $('.landing-btn, .nav-button a').click(function(e){
        var clicked = $(e.target);
        var linkID = $.attr(this, 'href');

        e.preventDefault();
        $('html, body').animate({ scrollTop: $(linkID).offset().top }, 500);
    });

    $(window).scroll(function(){
        var windowScrollTop = $(window).scrollTop();
        var aboutScrollTop = $('#about-us').offset().top;
        var windowBreakpoint = $(window).height()/2;
        var scrollBreakpoint = aboutScrollTop - windowBreakpoint;

        if ( windowScrollTop >= scrollBreakpoint){
            $('.nav-logo-wrapper').addClass('active');
            $('.nav-bar').addClass('visible');
            $('.nav-bar li a').addClass('color-change');
        } else{
            $('.nav-logo-wrapper').removeClass('active');
            $('.nav-bar').removeClass('visible');
            $('.nav-bar li a').removeClass('color-change');
        }
    });
});
