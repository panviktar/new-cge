$(function() {
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: "no-class",
		delay: 200
	});
	// Custom JS

});

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});
