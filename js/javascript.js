$(document).ready(function(){
	$('.slider').slider({
		full_width: false,
		indicators: true,
        height: 550,
		transition: 400,
		interval: 4000
	});
	
	$('.modal-trigger').leanModal({
		dismissible: true,
		opacity: 0.2,
		in_duration: 350,
		out_duration: 250,
    });
	
	$('.carousel').carousel();
});

function loggedIn() {
	if(username.value === '' || password.value === '') {
		if(password.value === '')
			Materialize.toast('Missing Password', 4000)
		if(username.value === '')
			Materialize.toast('Missing Username', 4000)
	} else {
		$('#login-dialog').closeModal();
		Materialize.toast('Logged in as ' + username.value, 5000)
	}
}

function register() {
	if(email.value === '')
		Materialize.toast('Missing Email', 4000)
	else if(rpassword.value === '')
		Materialize.toast('Missing Password', 4000)
	else if(rusername.value === '')
		Materialize.toast('Missing Username', 4000)
	else {
		Materialize.toast('Registered in as ' + rusername.value, 4000)
		setTimeout(function(){window.location.href="http://mobilephones.github.io/";}, 4000)
	}
}