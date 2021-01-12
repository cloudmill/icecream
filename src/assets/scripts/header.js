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
	$('body').toggleClass('activated');
	$('.page-header').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('.page-header, .catalogFilter').removeClass('active');
	}
	$(this).toggleClass('active');
});

$('.catalogFilter--js').click(function() {
	$('body').toggleClass('activated');
	$('.mobile-nav--js').toggleClass('active');
	$('.catalogFilter').toggleClass('active');
});


$(document).click(function(e) {
	const container = $('.page-header.active');
	const menuJs = $('.mobile-nav--js');
	const filterJs = $('.catalogFilter--js');
	if (
		menuJs.has(e.target).length === 0 && container.has(e.target).length === 0 &&
    filterJs.has(e.target).length === 0 && $('.catalogFilter').has(e.target).length === 0
	) {
		$('body').removeClass('activated');
		container.removeClass('active');
		menuJs.removeClass('active');
		$('.catalogFilter').removeClass('active');
	}
});
