$(function() {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        infinite: true,
        cssEase: 'linear',

        responsive: [


            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
})