$(document).ready(function(){
    $('.carousel').carousel({
			padding: 1000
	});
	autoplay();
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 3500);
	}
  });