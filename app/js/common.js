// Plagin superfish START подключение и стилизация

$(function () {
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: "no-class",
		delay: 200
	});
});

// Plagin superfish END---------------

// Plagin mmenu START подключение и стилизация


$(".sf-menu").after("<div id='my-menu'>");
$(".sf-menu").clone().appendTo("#my-menu");
$("#my-menu").find("*").attr("style", "");
$("#my-menu").find("ul").removeClass("sf-menu", "");
$("#my-menu").mmenu({
	searchfield: {
		add: true,
		placeholder: "Поиск по сайту",
		noResults: "Нет результата"
	},
	extensions: ["widescreen", "theme-white", "effect-menu-slide", "pagedim-black", "position-right"],
	navbar: {
		title: '<img src="img/icon/logo.svg" alt="Гродненский областной центр гигиены, эпидемилогии и общественного здоровья"><b>"Гродненский областной ЦГЭОЗ"</b>'
	}
});

// Измение состояния Hamburger

var api = $("#my-menu").data("mmenu");
api.bind("open:finish", function () {
	$(".hamburger").addClass("is-active");
});
api.bind("close:finish", function () {
	$(".hamburger").removeClass("is-active");
})


$(".hamburger").click(function () {
	var mmAPI = $("#my-menu").data("mmenu");
	mmAPI.open();
});

// Plagin mmenu END 

$(".carousel-services").on('initialized.owl.carousel', function() {
	setTimeout(function() {
		carouselService()
	}, 200);
});

$(".carousel-services").owlCarousel({
	nav: true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		800: {
			items: 2
		},
		1100: {
			items: 3
		}
	}
});

function carouselService() {
	$('.carousel-services__item').each(function() {
		var ths = $(this),
				thsh = ths.find('.carousel-services__content').outerHeight();
				ths.find('.carousel-services__image').css('min-height', thsh);
	});
} carouselService();



// Custom JS