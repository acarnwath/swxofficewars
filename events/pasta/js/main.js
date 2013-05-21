$(document).ready(function() {
	init();
	$(window).on('resize', init);
});

function init() {
	var h = window.innerHeight;
	if(!h) { h = document.documentElement.clientHeight; }
	var $body = $('body');
	var bh = $body.outerHeight();
	// footer is position:fixed when .short, and doesn't contribute to height
	if($body.hasClass('short')) {
		bh = bh + $('footer').outerHeight();
	}
	if(bh < h) {
		$body.addClass('short');
	} else {
		$body.removeClass('short');
	}
}