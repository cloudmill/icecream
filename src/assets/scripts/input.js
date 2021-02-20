import Inputmask from 'inputmask';

Inputmask({'mask': '+7 (999) 999-99-99'}).mask('input[name=phone]');

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

	if (checkbox && isRequired) {
	  console.log('form validation: ', element.prop('checked'));
		if (element.prop('checked')) {
			// element.closest('.checkbox').removeClass('error');
			element.closest('.checkbox').find(errorBlock).text('');
			result = true;
		} else {
			// element.closest('.checkbox').addClass('error');
			element.closest('.checkbox').find(errorBlock).text('Для отправки сообщения необходимо согласие');
			result = false;
		}
	}
	if (!value && isRequired) {
		element.closest('.input').addClass('error');
		element.closest('.input').find(errorBlock).text('Пожалуйста, заполните поле');
		result = false;
	}
	if (element.prop('type') === 'file') {
		result = true;
	}
	return result;
}
/*
$(document).on('blur', '.input input, .input textarea', function(event) {
	validateField($(this), event.target.value);
});
$(document).on('change', '.checkbox input', function(event) {
	validateField($(this), event.target.value);
});
*/


// form

// eslint-disable-next-line consistent-return
$('.form--js').click(function(e) {
	e.preventDefault();
	const result = [];
	$(this).closest('form').find('input, textarea').each(function() {
		const input = $(this)[0];
		result.push(validateField($(this), input.value));
	});
	const isNONValid = result.includes(false);
	if (isNONValid) {
		return false;
	}
	const form = $(this).closest('form');
	const name = form.find('input[name=name]');
	const email = form.find('input[name=email]');
	const phone = form.find('input[name=phone]');
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

	$.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: data,
		success: function(a) {
			if (a.success === true) {
				curForm.closest('.form-inner').css('opacity', 0).next().slideDown(500).css('display', 'flex');
				$('.form-back--js').one('click', function() {
					const form = $(this).closest('form');
					form.trigger('reset');
					form.find('input').parent().removeClass('input--filled');
					$(this).closest('.form-send').hide().prev().css('opacity', 1);
					return false;
				});
			}
		}
	});

	$('.form-response').addClass('shown activated');
	$('.reset--js').one('click', function() {
		$('.form-response').removeClass('shown');
		setTimeout(() => {
			$('.form-response').removeClass('activated');
		}, 500);
		return false;
	});
});
