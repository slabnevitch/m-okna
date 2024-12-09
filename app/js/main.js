// Import vendor jQuery plugin example (not module)
// import $ from '~/app/libs/jquery/jquery.min.js';
// import $ from 'jquery'
// window.jQuery = $;
// window.$ = $;
// console.log($)

// Swiper----------------------------
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax, Grid} from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay, Parallax, Grid]);

// Lazysizes--------------------------
// import 'lazysizes'; //основной скрипт

// import a plugin
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
// require ('~/app/libs-vanilla/service-functions/ibg-class.js');

//- remove-class--------------------------
// import {removeClass} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- siblings--------------------------
// import {siblings} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeIn--------------------------
// import {fadeIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeToggle--------------------------
// import {fadeToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideIn--------------------------
// import {slideIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideOut--------------------------
// import {slideOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideToggle--------------------------
// import {slideToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- theme-switcher --------------------------
// Для переключения цвет. схемы нужны 2 кнопки, с классами .switcher и .reset
// Для .reset нужно изначально задать display: none, а при добавлении класса .active установить для него display: block
// сама тема меняется добавлением к <html> тегу классов dark & light.
// в соответствии с этими классами нужно менять иконки Луны и Солнца
// Работающий пример: all layout/FarmDev
// require('~/app/libs-vanilla/service-functions/theme-switcher.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- multilevel-panel--------------------------
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- isMobile--------------------------
// import {isMobile} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- scrollDisable(надежное отключение скролла на ios--------------------------
// import scrollDisabler from '~/app/libs-vanilla/service-functions/scrollDisable.js'

//- scrollWidth(фикс прыгания стр-цы. при открытии модалки--------------------------
// require ('~/app/libs-vanilla/service-functions/scrollWidth.js');

//- scroll-to-sects--------------------------
import {ScrollToSects} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- ScrollTabs (прокрутка длинных табов на моббильных экранах)-------------------------- 
// import {ScrollTabs} from '~/app/libs-vanilla/service-functions/all-functions.js';
// new ScrollTabs();

// import {multiDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';//
// if(document.querySelectorAll('[data-dropdowned]') != null){
// 	multiDropdown();
// }

//- singleDropdown--------------------------
// import {singleDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';
// if(document.querySelectorAll('[data-single-dropdown]') != null){
// 	singleDropdown();
// }


//- WITH JQUERY===================================

//- jquery-UI--------------------------Не проверено!
// require('~/app/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// const dlmenu = require('~/app/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// const magnificPopup = require('~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('~/app/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('~/app/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('~/app/libs/superfish/dist/js/hoverIntent.js')
// require('~/app/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
import {Quiz} from '~/app/libs-vanilla/quiz/quiz.js';

//- dynamic-adaptive--------------------------
// require('~/app/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('~/app/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('~/app/libs-vanilla/multilevel-dropdown/multidropdown.js')

//- accordion--------------------------
// require('~/app/libs-vanilla/accordion/vanilla-accordion.js')

//- spoilers-------------------------
require('~/app/libs-vanilla/spoilers/spoilers.js')
	
//- tabs--------------------------
// require('~/app/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('~/app/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// При подключении скрипта ScrollTrigger.js micromodal выдает ошибку при инициализации!!
// var MicroModal = require('~/app/libs-vanilla/micromodal/micromodal.js')

//- GraphModal--------------------------
// не требует подключения scrollWidth(фикс прыгания стр-цы. при открытии модалки)
require('/app/libs-vanilla/graph-modal/dist/graph-modal.min.js')

//- VenoBox--------------------------
// модалка для всех видов содержимого - inline, iframe, photo
// Внимание! Копирует, исходное содержимоев  модалку в режиме inline, поэтому не подходит для отправки форм через onsubmit!
// Лучше вообще не использовать для форм.
var VenoBox = require('~/app/libs-vanilla/VenoBox/dist/venobox.js')
	
//- swiper--------------------------
// const Swiper = require('~/app/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------
// import {tns} from '~/app/libs-vanilla/tiny-slider/dist/tiny-slider.js';

//- wNumb--------------------------
// var wNumb = require('~/app/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('~/app/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('~/app/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('~/app/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('~/app/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/scroll-to-sects/scrolltosect.js';

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE: new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('~/app/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('~/app/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('~/app/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')
	
//- end VANILLA JS===================================

// jQuery(document).ready(function() {
// 	console.log('jQuery document ready');

// });

// console.log(magnificPopup)

document.addEventListener('DOMContentLoaded', () => {

	//использовать вместе с гистами "header HTML for _scroll" и "styles for _scroll.header"
		var headerElem = document.querySelector('#hero'),
		observerCallback = function(entries, observer) {
			console.log(entries);
			if(entries[0].isIntersecting){
				 document.querySelector('header').classList.remove('shadow-md');
			}else{
				 document.querySelector('header').classList.add('shadow-md');
			}
		};

		var headerObserver = new IntersectionObserver(observerCallback);
		headerObserver.observe(headerElem);

	document.querySelector('#burger').onclick = function(e) {
		document.querySelector('#burger').classList.toggle('on');
		document.documentElement.classList.toggle('menu-opened');
		document.documentElement.classList.toggle('lock');
	}

	function mobMenuClose(){
		document.querySelector('#burger').classList.remove('on');
		document.documentElement.classList.remove('menu-opened');
		document.documentElement.classList.remove('lock');
	}

	new ScrollToSects({
	  linksContainer: 'header, footer',//контейнер, в котором лежат кнопки навигации
	  offset: -50,//отступ от верха экрана при прокрутке (если нужен)
	  sectsSelector: '[data-anchor-target]',//селектор секций, если не section
	   delay: 300,//задержка перед прокруткой. Может понадобится, елсли перед прокруткой нужно время на анимацию закрытия моб. меню, например
	   anchorSpy: false, //добавление активного класса ссылке при скролле, если соответствующая ей секция попадает в экран
	   activeClassAdding: false, //добавление классов активным ссылкам
		afterNavClick: function(){
			console.log('after nav!');
			mobMenuClose();
		}
	});

	//---------------Swiper
	if(document.querySelector('.hero-swiper') !== null){
		var swiper = new Swiper('.hero-swiper', {

		parallax: {
			enabled: true
		},
		observer: true,
		observeParents: true,
		autoHeight: true,
		speed: 1600,
		loop: true,
	  	watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда


		pagination: {
	 		el: '.swiper-pagination',
	 		type: 'fraction',
	 		formatFractionCurrent: function (number) {
	            return ('0' + number).slice(-2);
	        },
	        formatFractionTotal: function (number) {
	            return ('0' + number).slice(-2);
	        },
	        renderFraction: function (currentClass, totalClass) {
	            return '<span class="text-white ' + currentClass + '"></span>' +
	                   '<span class="text-[#BBBBBB]"> / </span>' +
	                   '<span class="text-[#BBBBBB] ' + totalClass + '"></span>';
	        }
	 		// renderCustom: (swiper, current, total) => {
	 		// 	console.log(current + ' ' + total)
	 		// 	return `<span class="text-white">${current}</span><span class="text-[#BBBBBB]"> / </span><span class="text-[#BBBBBB]">${total}</span>`;
	 		// }
	 	},

		// Navigation arrows
	  	navigation: {
	  		nextEl: '.hero-slider-next',
	  		prevEl: '.hero-slider-prev',
	  	},


	  });
	}

	//---------------Swiper
if(document.querySelector('#examples-slider .my-swiper') !== null){
  var swiper = new Swiper('#examples-slider .my-swiper', {
	observer: true,
	observeParents: true,

	slidesPerView: 4,
	spaceBetween: 24,
	grid: {
		fill: 'row',
	    rows: 2,
	  },
	  // loop: true,
	  watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда
	  breakpoints: {
	    // when window width is >= 320px
	    320: {
	    	slidesPerView: 2,
	    	spaceBetween: 16,
	    	grid: {
			    fill: 'row',
			    rows: 3,
			},
	    },
	    // when window width is >= 480px
	    767.98: {
	    	slidesPerView: 3,
	    	spaceBetween: 24,
	    	grid: {
	    		fill: 'row',
			    rows: 2,
			},
	    },
	    // when window width is >= 640px
	    1199.98: {
	    	slidesPerView: 4
	    }
	},


	  // Navigation arrows
	  navigation: {
	  	nextEl: '.examples-next',
	  	prevEl: '.examples-prev',
	  },


		});
	}


//---------------END Swiper
	// quiz slider
	if(document.querySelector('[data-quiz]')){
		var quiz = new Quiz('[data-quiz]', Swiper, {}, {
			sendSuccess: function(data){
				alert("succes " + data)
			},
			sendError: function(err){
				alert(err);
			}
		});		
	}
	// END quiz slider

	// quiz textarea charcount
	document.getElementById('quiz-textarea').addEventListener('input', function() {
	    const maxLength = Number(document.getElementById('quiz-area-overal').textContent);
	    console.log(this.value.length)
	    document.getElementById('quiz-area-count').textContent = this.value.length;
	  });
	// End quiz textarea charcount

	if(document.querySelector('.graph-modal') !== null){
		var myGallery = new VenoBox({
			selector: '.venobox-item',
			spinner: 'rotating-plane',
			// fitView: true, // отключение прокрутки вниз больших изображений 
			// maxWidth: '44.53%', // max размер фото в % от viewport
			// customClass: 'myClass' // свой класс для стилизации отдельных модалок
			onPreOpen: function(obj){
				// document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
			},
			onPostOpen: function(obj, gallIndex, thenext, theprev){

			},
			onPreClose: function(obj, gallIndex, thenext, theprev){
				// document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
			}
		});

		var inModalSwiper;
		var examplesModal = new GraphModal({
			isOpen: (modal) => {
				inModalSwiper = new Swiper(modal.modalContainer.querySelector('.in-modal-swiper'), {
					observer: true,
					observeParents: true,
					slidesPerView: 2,
					spaceBetween: 24,
					  // loop: true,
					  watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда
					  breakpoints: {
					    // when window width is >= 320px
	
					    // when window width is >= 480px
					    767.98: {
					    	slidesPerView: 3
					    }
					},
					  // Navigation arrows
					  navigation: {
					  	nextEl: '.in-modal-next',
					  	prevEl: '.in-modal-prev',
					  }
				});
			},
			isClose: () => {
				inModalSwiper.destroy();
			}
		});
	}

	if(document.querySelector('.reviews-swiper') !== null){
  var swiperReviews = new Swiper('.reviews-swiper', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 24,

	loop: true,
	watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда
	  breakpoints: {
	    // when window width is >= 320px
	    320: {
	    	slidesPerView: 1
	    },
	    // when window width is >= 480px
	    767.98: {
	    	slidesPerView: 2
	    },
	    // when window width is >= 640px
	    1199.98: {
	    	slidesPerView: 3
	    }
	},


	  // Navigation arrows
	  navigation: {
	  	nextEl: '.reviews-next',
	  	prevEl: '.reviews-prev',
	  },


		})
	}

}); //DOMContentLoaded