$('.page-header').mousemove(function(event) {
	const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	$('.bubble').css('left', 0);
	if (screenWidth <= 1025) {
	  $('.bubble').css('top', event.clientY - 125);
	} else {
	  $('.bubble').css('top', event.clientY - 160);
	}
});
$('.page-header').mouseout(function() {
	$('.bubble').css('left', '-50px');
});
$('.mobile-nav--js').click(function() {
	$(this).toggleClass('active');
	$('.page-header').toggleClass('active');
});
