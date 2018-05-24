$(function() {
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: "no-class",
		delay: 200
	});
});

	var mmAPI = $("#my-menu").data( "mmenu" );
		$("#my-menu").mmenu();

		$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	


	// Custom JS
	



