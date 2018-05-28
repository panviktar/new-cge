$(function() {
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: "no-class",
		delay: 200
	});
});


$(".sf-menu").after ("<div id='my-menu'>");
$(".sf-menu").clone().appendTo("#my-menu");
$("#my-menu").find("*").attr("style", "");
$("#my-menu").find("ul").removeClass("sf-menu", "");
$("#my-menu").mmenu({
	searchfield: {
		add: true,
		placeholder: "Поиск по сайту",
		noResults: "Нет результата"
	},
	extensions : [ "widescreen", "theme-white", "effect-menu-slide", "pagedim-black"],
	navbar: {
		title: "Меню"
	}
});

	var api = $("#my-menu").data("mmenu");
	api.bind("opened", function() {
		$(".toggle-mnu").addClass("off");
	});

		$(".mobile-mnu").click(function() {
			var mmAPI = $("#my-menu").data( "mmenu" );
			mmAPI.open();
			var thiss = $(this).find(".toggle-mnu");
			thiss.toggleClass("on");
			$(".main-mnu").slideToggle();
			return false;
	});

		
	



	


	// Custom JS
	



