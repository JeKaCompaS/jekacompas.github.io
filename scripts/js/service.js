$(document).ready(function(){
	$('.block_3_slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: "<button type='button' class='slick-prev'><</button>",
		nextArrow: "<button type='button' class='slick-next'>></button>",
		responsive: [
			{
				breakpoint: 1130,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false
			  }
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
		  });
});