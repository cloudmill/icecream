// import {showMore} from './showMore';
import AOS from 'aos';

function filterLogic(value, elem) {
	const list = $('.filter__item--js');
	const button = $('.btn--js');
	button.hide();
	let filterList;
	list.velocity({
		opacity: 0,
		translateY: '-20px',
	},
	{
		display: 'none'
	}, {duration: 500});

	if (value === '*') {
		// showMore();
		list.velocity({
			opacity: 1,
			translateY: '0px',
		},
		{
			display: 'block'
		}, {duration: 500});
	} else {
		filterList = $(list).filter(function(index, item) {
			const getTitle = $(item)[0].dataset.text;
			const regex = getTitle.startsWith(value);
			return regex;
		});
		filterList.velocity({
			opacity: 1,
			translateY: '0px',
		},
		{
			display: 'block'
		}, {delay: 300, duration: 500});
		setTimeout(() => {
			AOS.refresh({
				offset: 50,
			});
		}, 500);
	}
	$('.filter--js li').removeClass('active');
	elem.addClass('active');

}

$('.filter--js').on('click', 'li:not(.last)', function() {
	if ($(this).hasClass('active')) {
		return;
	}
	const getCharacter = $(this).data('text');
	filterLogic(getCharacter, $(this));
});
$('.filter--js').on('click', 'li.last', function() {
	const getFirstEl = $('.filter--js li:first-child');
	if (getFirstEl.hasClass('active')) {
		return;
	}
	const getCharacter = getFirstEl.data('text');
	filterLogic(getCharacter, getFirstEl);
});
