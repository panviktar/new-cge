
// Plagin superfish START подключение и стилизация
// Подключение equalHeights выравнивание контейнера по высоте
$(function () {
$(".info-material__title").equalHeights();
$(".card__title").equalHeights();

$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$(".top").addClass("active");
		} else {
		$(".top").removeClass("active");
		}
	});
	$(".top").click(function(){
		$("html, body").stop().animate({scrollTop: 0}, "slow", "swing")
	});


function onResize() {
	$('.card__title').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

	function onResize() {
		$('.info-material__title').equalHeights();
		}onResize();
		window.onresize = function() {onResize()};
	



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

// Карусель .s-services-------------

$(".carousel-services").on('initialized.owl.carousel', function() {
setTimeout(function() {
carouselService()
}, 1000);
});

$(".carousel-services").owlCarousel({
dots: false, 	
nav: true,
smartSpeed: 700,
navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
responsiveClass: true,
responsive: {
0: {
	items: 1
},
576: {
	items: 2
},
768: {
	items: 2
},
1100: {
	items: 3
}
}
});

$('.carousel-services__content').equalHeights();

// Выравнивание высоты плитки в .s-services--------------
function carouselService() {
$('.carousel-services__item').each(function() {
var ths = $(this),
		thsh = ths.find('.carousel-services__content').outerHeight();
		ths.find('.carousel-services__image').css('min-height', thsh);
});
} carouselService();



// Вставляем span для оформления заголовков в .s-services--------------
$(".carousel-services__wraper .carousel-services__title").each(function() {
var ths = $(this);
ths.html(ths.html().replace(/(\S+)\s*$/, "<span>$1</span>"));
});

// Карусель .s-services-------------END

// Карусель .s-partners-------------

$(".partners").owlCarousel({
loop: true,
smartSpeed: 700,
dots: false, 	
nav: true,
navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

responsiveClass: true,
responsive: {
	0: {
		items: 1
	},
	576: {
		items: 2
	},

768: {
	items: 2
},

990: {
	items: 3
},

1200: {
	items: 4
}
}
});

// Карусель .s-info-materials---------

$(".info-materials").owlCarousel({
loop: true,
smartSpeed: 700,
dots: false, 	
nav: true,
navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
responsiveClass: true,
responsive: {
0: {
	items: 1
},
576: {
	items: 2
},

768: {
	items: 3
},

900: {
	items: 4
},
1200: {
	items: 4
}
}
});




// Карусель .s-info-materials---------END

// Resize window
function onResize() {
$('.carousel-services__content').equalHeights();
}onResize();
window.onresize = function() {onResize()};



// Custom JS

// BigSlider-------------------------
// Params
var mainSliderSelector = '.main-slider',
navSliderSelector = '.nav-slider',
interleaveOffset = 0.8;

// Main Slider
var mainSliderOptions = {
	loop: true,
	speed:1000,
	autoplay:{
		delay:6000
	},
	loopAdditionalSlides: 10,
	grabCursor: true,
	watchSlidesProgress: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		init: function(){
			this.autoplay.stop();
		},
		imagesReady: function(){
			this.el.classList.remove('loading');
			this.autoplay.start();
		},
		slideChangeTransitionEnd: function(){
			var swiper = this,
					captions = swiper.el.querySelectorAll('.caption');
			for (var i = 0; i < captions.length; ++i) {
				captions[i].classList.remove('show');
			}
			swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
		},
		
		 progress: function(){
			var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				var slideProgress = swiper.slides[i].progress,
						innerOffset = swiper.width * interleaveOffset,
						innerTranslate = slideProgress * innerOffset;
				swiper.slides[i].querySelector(".slide-bgimg").style.transform =
					"translate3d(" + innerTranslate + "px, 0, 0)";
			}
		},
		touchStart: function() {
			var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = "";
			}
		},
		setTransition: function(speed) {
			var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = speed + "ms";
				swiper.slides[i].querySelector(".slide-bgimg").style.transition =
					speed + "ms";
			}
		}
	}
};
var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
var navSliderOptions = {
	loop: true,
	loopAdditionalSlides: 10,
	speed:1000,
	spaceBetween: 5,
	slidesPerView: 5,
	centeredSlides : true,
	touchRatio: 0.2,
	slideToClickedSlide: true,
	direction: 'vertical',
	on: {
		imagesReady: function(){
			this.el.classList.remove('loading');
		},
		click: function(){
			mainSlider.autoplay.stop();
		}
	}
};
var navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

// BigSlider END--------------------
foo.onclick = function(){
this.classList.toggle('rotate')
};

// s-news карточки



