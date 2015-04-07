$(document).ready(function() {

    // Add spin.js to lazy load container

    $('.lazy-container').spin({
        color: '#000'
    });

    // Lazy loading.
    $("img.lazy").lazyload({
        // The image starts loading 200 px before it is in viewport
        threshold: 200,
        // Remove the line if you don`t need fade effect.
        effect: "fadeIn",
        // Change this for fade in speed
        effectspeed: 600,
        //  Hide spinner when loaded
        load: function(elements_left, settings) {
            $(".lazy-container").has(this).addClass('loaded');
            $(".loaded .spinner").remove();
            // refresh bootstrap scrollspy, when image is loaded
            $('[data-spy="scroll"]').each(function() {
                var $spy = $(this).scrollspy('refresh')
            });
        }
    });

    // Lightbox

    $('.lightbox').magnificPopup({
        type: 'image',
        disableOn: function() {
            // Detect here whether you want to show the popup
            // return true if you want
            if ($(window).width() < 500) {
                return false;
            }
            return true;
        },
        preloader: true,
        tLoading: 'Loading',

        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            open: function() {
                $('.navbar').fadeOut('slow');
            },
            close: function() {
                $('.navbar').fadeIn('slow');
            }
        }
    });

    // Lightbox video/maps

    $(' .iframe').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fad',
        disableOn: function() {
            if ($(window).width() < 500) {
                return false;
            }
            return true;
        },
        preloader: true,

        callbacks: {
            open: function() {
                $('.navbar').fadeOut('slow');
            },
            close: function() {
                $('.navbar').fadeIn('slow');
            }
        }
    });

    var setTopMenuStyle = function() {
        if($(document).scrollTop() < 300) {
            $(".navbar").removeClass("dark").addClass("home");
            $(".nav li:first").removeClass('active');
        } else{
            $(".navbar").removeClass("home").addClass("dark");
        }
    }

    // set scroll on page load
    setTopMenuStyle();

    //change menu on scroll
    $(document).on("scroll",function(){
        setTopMenuStyle();
    });

    // .scroll class for link scrolling.
    $('.scroll[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });

    });


    // Change icons on accardion

    $('.collapse').on('show.bs.collapse', function() {
        $(this).parent().find(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-up");
        $(this).parent().find(".panel-heading").addClass("active");
    }).on('hide.bs.collapse', function() {
        $(this).parent().find(".icon-chevron-up").removeClass("icon-chevron-up").addClass("icon-chevron-down");
        $(this).parent().find(".panel-heading").removeClass("active");
    });

    // Close menu when in mobile view clicked
    $('.nav .scroll').click(function(e) {
        if ($('.navbar-toggle').is(":visible"))
        $("#nav-collapse").removeClass("in").addClass("collapse");
    });
});
