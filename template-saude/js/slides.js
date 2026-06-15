$(function() {

    $('.mosaico .container .mosaico-wraper').on('init', function(event, slick) {
        $('.slick-prev').html('&#10094;');
        $('.slick-next').html('&#10095;');
    })

    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
                    nextArrow: '<button type="button" class="slick-next">&#10095;</button>', 
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
                    nextArrow: '<button type="button" class="slick-next">&#10095;</button>', 
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
                    nextArrow: '<button type="button" class="slick-next">&#10095;</button>', 
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
                    nextArrow: '<button type="button" class="slick-next">&#10095;</button>', 
                    centerMode: true,
                    slidesToShow: 1 
                }
            }
        ]
    });

    
    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    });
});