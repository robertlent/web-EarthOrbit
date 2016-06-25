$(document).ready(function () {
	
    $('html').click(function () {
        $('#earth-orbit').toggleClass('earth-orbit-slow').toggleClass('earth-orbit-fast');
        $('#moon-orbit').toggleClass('moon-orbit-slow').toggleClass('moon-orbit-fast');
    });
	
});
