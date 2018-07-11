$(document).ready(function(){
	// Set Options
	var speed = 500;				// Fade speed
	var autoswitch = true;			// Auto slider options
	var autoswitch_speed = 7500;	// Auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');
	$('.dot').first().addClass('current');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// Next Handler
	$('#next').on('click', nextSlide);

	// Prev Handler
	$('#prev').on('click', prevSlide);

	// Manual manage
	$('.1').on('click', showPic1);
	$('.2').on('click', showPic2);
	$('.3').on('click', showPic3);

	// Auto Slider Handler
	if (autoswitch == true) {
		setInterval (nextSlide, autoswitch_speed)
	};

	// Choose 1st picture
	function showPic1() {
		$('.pic1').show();
		$('.pic2').hide();
		$('.pic3').hide();
		$('.current').removeClass('current');
		$('.1').addClass('current');
	};

	// Choose 2nd picture
	function showPic2() {
		$('.pic1').hide();
		$('.pic2').show();
		$('.pic3').hide();
		$('.current').removeClass('current');
		$('.2').addClass('current');
	};

	// Choose 3d picture
	function showPic3() {
		$('.pic1').hide();
		$('.pic2').hide();
		$('.pic3').show();
		$('.current').removeClass('current');
		$('.3').addClass('current');
	};

	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		$('.current').removeClass('current').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
			$('.dot').first().addClass('current');
		} else{
			$('.oldActive').next().addClass('active');
			$('.oldActive').next().addClass('current');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').hide();
		$('.active').show();
	}

	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		$('.current').removeClass('current').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
			$('.dot').last().addClass('current');
		} else{
			$('.oldActive').prev().addClass('active');
			$('.oldActive').prev().addClass('current');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').hide();
		$('.active').show();
	};

})