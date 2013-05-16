$(document).ready(function() {
	init();
	$(window).on('resize', init);
});

function init() {
	h = window.innerHeight;
	if(!h) { h = document.documentElement.clientHeight; }
	if($('body').outerHeight() < h) { 
		$('body').addClass('short');
	}

	w = window.innerWidth;
	if(!w) { w = document.documentElement.clientWidth; }
	if(w > 700) {

		var headerHeight = $('header').outerHeight();
		var contentHeight = $('header').outerHeight() + $('.details').outerHeight();
		var dateHeight = $('.date').outerHeight();

		$('.date').css('margin-top', (-1*headerHeight + ((contentHeight - dateHeight)/2)));
		if(contentHeight < dateHeight) {
			$('.details').css('min-height', (dateHeight - headerHeight));
		}

		$('.body').addClass('js-ready')
	}
}