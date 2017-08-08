function checkNumberCreditCard(){
	//Fuction to test credit card number

	number = $('input').val().trim();
	var regexStartNumber = /^[456]\d{3,3}/;
	var regexNumberConsective = /(\d)\1{3,}/;
	var regexTestOnlyNumber = 	/^[0-9]*$/;
	var regexTestMask = /(\d{4}?[-]){3}\d{4}/;

	if (number.indexOf('-') > 1){
		if (!regexTestMask.test(number)){
			$('span').removeClass('label-success').
	 		addClass('label-danger').text('Invalid Card').show()
			return
		}	
	}

	number = number.replace(/-(?!>)/g, '');

	if ((number.length == 16) && (regexStartNumber.test(number)) && (!regexNumberConsective.test(number)) && (regexTestOnlyNumber.test(number))) {
		$('span').removeClass('label-danger').
		addClass('label-success').text('Valid Card').show()

	}else{
		$('span').removeClass('label-success').
	 	addClass('label-danger').text('Invalid Card').show()

	}

}
