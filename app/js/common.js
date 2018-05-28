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
	extensions: [ "widescreen", "theme-white", "effect-menu-slide", "pagedim-black", "position-right"],
	navbar: {
		title: '<img src="img/icon/logo.svg" alt="Гродненский областной центр гигиены, эпидемилогии и общественного здоровья"><b>"Гродненский областной ЦГЭОЗ"</b>'
	}	
});

	var api = $("#my-menu").data("mmenu");
	api.bind("open:start", function() {
		$(".hamburger").addClass("is-active");
	}).bind("close:finish", function() {
		$(".hamburger").removeClass("is-active");
	})

		$(".mobile-mnu").click(function() {
			var mmAPI = $("#my-menu").data( "mmenu" );
			mmAPI.open();
		});

		
	



	


	// Custom JS
	



