import Inputmask from 'inputmask';
import AOS from 'aos';

Inputmask({ 'mask': '+7 (999) 999-99-99' }).mask('input[name=phone]');

// валидация

export function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
export function validatePhone(phone) {
	const re = /^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	return re.test(phone);
}
export function validateField(element, event) {
	const isRequired = element.attr('required');
	const errorBlock = '.control-error';
	const checkbox = element.attr('type') === 'checkbox';
	const value = event;
	const tmpval = element.val();

	let result;

	if (tmpval === '') {
		element.closest('.input').removeClass('input--filled');
		result = false;
	} else {
		element.closest('.input').addClass('input--filled');
		result = true;
	}

	// email & phone
	if (value) {
		if (element.prop('type') === 'email') {
			if (validateEmail(value)) {
				element.closest('.input').removeClass('error');
				element.closest('.input').find(errorBlock).text('');
				result = true;
			} else {
				element.closest('.input').addClass('error');
				element.closest('.input').find(errorBlock).text('Поле заполнено некорректно');
				result = false;
			}
		} else if (element.prop('name') === 'phone') {
			if (validatePhone(value)) {
				element.closest('.input').removeClass('error');
				element.closest('.input').find(errorBlock).text('');
				result = true;
			} else {
				element.closest('.input').addClass('error');
				element.closest('.input').find(errorBlock).text('Поле заполнено некорректно');
				result = false;
			}
		} else {
			element.closest('.input').removeClass('error');
			element.closest('.input').find(errorBlock).text('');
			result = true;
		}
	}

	// checkbox
	if (checkbox && isRequired) {
		if (element.prop('checked')) {
			// element.closest('.checkbox').removeClass('error'); т.к checkbox не стилизуется при ошибке - выводится только сообщение об ошибке
			element.closest('.checkbox').find(errorBlock).text('');
			result = true;
		} else {
			// element.closest('.checkbox').addClass('error'); т.к checkbox не стилизуется при ошибке - выводится только сообщение об ошибке
			element.closest('.checkbox').find(errorBlock).text('Для отправки сообщения необходимо согласие');
			result = false;
		}
	}

	// required input
	if (!value && isRequired) {
		element.closest('.input').addClass('error');
		element.closest('.input').find(errorBlock).text('Пожалуйста, заполните поле');
		result = false;
	}

	// file
	if (element.prop('type') === 'file') {
		result = true;
	}

	return result;
}

$('.form--js').on('click', function (e) {
	e.preventDefault();

	let path = window.location.pathname.split('/');

	// валидация каждого поля формы
	const result = [];
	$(this).closest('form').find('input, textarea').each(function () {
		const input = $(this)[0];
		result.push(validateField($(this), input.value));
	});

	// результат валидации формы
	const isNONValid = result.includes(false);
	if (isNONValid) {
		return false;
	}

	// сбор данных формы
	const form = $(this).closest('form');
	const name = form.find('input[name=name]');
	const email = form.find('input[name=email]');
	const phone = form.find('input[name=phone]');
	const birthdate = form.find('input[name=birth]');
	const message = form.find('textarea[name=content]');
	const type = form.attr('data-type-title');
	const curForm = $(this);
	let url = null,
		data = null;

	if (window.location.pathname === '/contacts/') {
		url = '/local/templates/main/include/ajax/contact/contact.php';
		data = {
			name: name.val(),
			email: email.val(),
			text: message.val(),
			phone: phone.val(),
			type: type,
		};
	}

	if (window.location.pathname === '/press-center/news/' || window.location.pathname === '/press-center/press/' || (path[1] == 'for-buyer' && path[2] == 'interesting') || window.location.pathname === '/recipes/' || path[1] == 'recipes' || path[2] == 'news') {
		url = '/local/templates/main/include/ajax/side/subscribe.php';
		data = {
			email: email.val(),
		};
	}

	if (window.location.pathname === '/for-buyer/faq/') {
		url = '/local/templates/main/include/ajax/side/faq.php';
		data = {
			email: email.val(),
			text: message.val(),
		};
	}

	if (window.location.pathname === '/for-buyer/reviews/') {
		url = '/local/templates/main/include/ajax/side/review.php';
		data = {
			name: name.val(),
			email: email.val(),
			text: message.val(),
			phone: phone.val(),
			type: type,
		};
	}

	if (path[1] == 'ref') {
		url = '/local/templates/main/include/ajax/contact/application.php';
		data = {
			name: name.val(),
			birthdate: birthdate.val(),
			email: email.val(),
			phone: phone.val(),
			type: type,
		};
	}

	// AJAX
	$.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: data,
		success: function (a) {
			if (a.success === true) {
				// открытие формы ответа
				// контакты
				const mediaQuery = matchMedia('(min-width: 1024px)');
				if (mediaQuery.matches) {
					curForm.closest('.form-inner').css('visibility', 'hidden').css('opacity', 0).next().slideDown(500).css('display', 'flex');
				} else {
					curForm.closest('.form-inner').css('display', 'none').next().css('display', 'flex');
				}
				AOS.refresh();
				$('.form-back--js').one('click', function() {
					const form = $(this).closest('form');
					form.trigger('reset');
					form.find('input').parent().removeClass('input--filled');
					if (mediaQuery.matches) {
						$(this).closest('.form-send').hide().prev().css('visibility', '').css('opacity', 1);
					} else {
						$(this).closest('.form-send').hide().prev().css('display', '');
					}
					AOS.refresh();
					return false;
				});
				// подписка, формы боковой панели
				$('.form-response').addClass('shown activated');
				$('.reset--js').one('click', function() {
					$('.form-response').removeClass('shown');
					setTimeout(() => {
						$('.form-response').removeClass('activated');
					}, 500);
					return false;
				});
			}
		}
	});
});
