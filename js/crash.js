$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		if($('#mySidenav').css('width') === '400px')
			$('#mySidenav').css('width', '0px');
		else
			$('#mySidenav').css('width', '400px');
	});
});
