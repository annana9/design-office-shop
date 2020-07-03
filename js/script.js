    $(".about").on('click', function () {
        $('body, html').animate({
            scrollTop: $('section.company').offset().top
        }, 1000)
        topMenu()
    });

    $(".offer").on('click', function () {
        $('body, html').animate({
            scrollTop: $('section.offer').offset().top
        }, 1000)
        topMenu()
    });

    $(".contact").on('click', function () {
        $('body, html').animate({
            scrollTop: $('section.contact').offset().top
        }, 1000)
        topMenu()
    });

    $(document).on('scroll', function () {
        const windowHeight = $(window).height();
        const scrollValue = $(this).scrollTop();
        const $home = $('.menu');
        const $arrow = $('.arrow');
        const homeHeight = $home.outerHeight();
        if (scrollValue > homeHeight) {
            $arrow.addClass('active');
        }
        if (scrollValue < 100) {
            $arrow.removeClass("active");
        }
    });

   $(".arrow").on('click', function () {
        $('body, html').animate({
            scrollTop: $('section.menu').offset().top
        }, 1000)
        topMenu()
    });
