$('section.clientes-slider .slider-container').slick({
		dots: true,
		arrows:false,
	    infinite: true,
	    speed:1000,
	    slidesToShow: 1,
	    autoplay: true,
	    centerMode:false,
	    autoplaySpeed: 3000,
	    pauseOnHover:false,
	    responsive: 
	    [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    ]
	});

	$('section.depoimentos .depoimentos-box').slick({
		dots: true,
		arrows:false,
	    infinite: true,
	    speed:1000,
	    slidesToShow: 1,
	    centerMode:false
	});

$('section.depoimentos .depoimentos-box').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	centerMode: false
});