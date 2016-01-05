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
});

function loggedIn() {
	$('#login-dialog').closeModal();
	if(username.value === '' || password.value === '')
		Materialize.toast('Missing Username or Password', 4000)
	else
		Materialize.toast('Logged in as ' + username.value, 5000)
}