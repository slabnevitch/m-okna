function Quiz(selector, tns, sliderOptions, options){
  var _self = this,
      quiz = document.querySelector(selector),
      $el = quiz.querySelector('[data-quiz-form]'),// form квиза
      prev = quiz.querySelector('[data-quiz-prev]'),//кнопки управления слайдером
      next = quiz.querySelector('[data-quiz-next]'),//кнопки управления слайдером
      send = $el.querySelector('[data-quiz-send]'),
      currentIndicator = quiz.querySelector('[data-quiz-current]'),//индикаторы текущего влвопроса/общего кол-ва.
      overallIndicator = quiz.querySelector('[data-quiz-overall]'),//индикаторы текущего влвопроса/общего кол-ва.
      progressValueDigits = quiz.querySelector('[data-quiz-progress-value]'),
      progressBar = quiz.querySelector('[data-quiz-progress]'),
      resultArray = [],//массив с результатами выбора в каждом вопросе квиза
		  tmp = {},//временный объект для хранения результатов выбора ответов в текущем вопросе
      sliderInitOpts = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        autoHeight: false,
       // allowTouchMove: false,

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
            '<span class="text-blue"> / </span>' +
            '<span class="text-blue ' + totalClass + '"></span>';
      }
      // renderCustom: (swiper, current, total) => {
      //  console.log(current + ' ' + total)
      //  return `<span class="text-white">${current}</span><span class="text-[#BBBBBB]"> / </span><span class="text-[#BBBBBB]">${total}</span>`;
      // }
    },

    // Navigation arrows
      // navigation: {
      //   nextEl: '[data-quiz-next]'
      // }
    },
      slider,//tiny-slider
      qiuzLength,//кол-во. слайдов-вопросов в слайдере
      current = 0;//текущий вопрос

  this.init =  function() {
    if (prev){ prev.setAttribute('disabled', true);}
    console.log($el)
    this.initSlider();
     this.renderIdicators();
     this.events();
    
  },
  this.initSlider = function() {
    for(var prop in sliderOptions){
      if(sliderOptions.hasOwnProperty(prop)){
        sliderInitOpts[prop] = sliderOptions[prop];
      }
    }
    
    slider = new tns(document.querySelector('.quiz-slider'), sliderInitOpts);
    qiuzLength = slider.slides.length;
  },
  this.events = function() {
    if(next){ next.addEventListener('click', this.nextClick);}
    if(prev){ prev.addEventListener('click', this.prevQuestion);}
    if(send){ send.addEventListener('click', this.send);}
    $el.addEventListener('change', this.quizFormChange);
	},
  this.quizFormChange =  function(e){
    var currentBlock = $el.querySelector('.swiper-slide-active');
    console.log(currentBlock )
    if (e.target.tagName == 'INPUT' || e.target.tagName == 'TEXTAREA') {
				if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {//если изменяемый инпут - текстовый, снимаем галочки
					var elements = currentBlock.querySelectorAll('input');

					elements.forEach(function(el) { el.checked = false});
				}else{//если изменяемый инпут - чекбокс или радио, очищаем инпут.
          var elements = currentBlock.querySelectorAll('input[type="text"], textarea');
          elements.forEach(function(el) { el.value = ''});
        }
        tmp = _self.serialize($el);//создаем временный объект с выбранными ответами
         if(_self.valid()) {_self.removeErrorClass();}//если хотя бы 1 вариант выбран - убираем error-класс у всех ответов в текущем вопросе    				
			}
    console.log(tmp)
  },
  this.nextClick = function(){
    if (_self.valid()) {
      tmp = _self.serialize($el);
       _self.removeErrorClass();// убираем error-класс у всех ответов в текущем вопросе
      _self.addToSend();
			_self.nextQuestion();
      
      if(prev){ prev.removeAttribute('disabled');}
		}
  },
  this.nextQuestion = function(){
    current++;
    if(current > qiuzLength - 2){
      // next.setAttribute('disabled', true);
      next.classList.add('hidden');
      document.getElementById('quiz-send-block').classList.remove('hidden');
    }
    if(current > qiuzLength - 1){
      current = qiuzLength - 1; 
    }
    _self.renderIdicators();
    slider.slideTo(current);//прокручиваем к следующему слайду
    _self.progressRender();
  },
    
  this.prevQuestion = function(){
    current--;
    if(current < 1){
      prev.setAttribute('disabled', true);
    }
    if(current < 0){
      current = 0;
    }
    _self.renderIdicators();//индикаторы соотношения
    next.removeAttribute('disabled');
    slider.slideTo(current);//прокручиваем к предыдущему слайду
     _self.progressRender();
  },
  this.renderIdicators = function(){
    //ставим номер текущего вопроса 
    if(currentIndicator){currentIndicator.innerText = current + 1;}
    if(overallIndicator){overallIndicator.innerText = qiuzLength;}

  }
  this.removeErrorClass = function(){
    $el.querySelector('.swiper-slide-active').querySelectorAll('label')
    .forEach(function(el){
			el.closest('label').classList.remove('error');
		});
  },
  _self.progressRender = function(){
    var progressValue = Math.floor(current / (qiuzLength - 1) * 100);
    console.log('progressValue ' + progressValue);
    
    if(progressBar){progressBar.style.width = progressValue + '%';}
    if(progressValueDigits){progressValueDigits.textContent= progressValue + '%';}
  },
  this.valid = function(){
		var isValid = false,
        currenBlock = $el.querySelector('.swiper-slide-active');
		var elements = currenBlock.querySelectorAll('input, textarea');
    if(!currenBlock.hasAttribute('data-quiz-norequired')){
        console.log("pizda!!")
      //проверяем, есть ли в текущем вопросе выбранные ответы
      elements.forEach(function(el){
        console.log(el.type + "  " + el.value)
        switch(el.type) {
          case 'textarea':
            (el.value) ? isValid = true : el.closest('label').classList.add('error');
          case 'text':
            (el.value !== '') ? isValid = true : el.closest('label').classList.add('error');
          case 'checkbox':
            (el.checked) ? isValid = true : el.closest('label').classList.add('error');
          case 'radio':
            (el.checked) ? isValid = true : el.closest('label').classList.add('error');
        }
		});
      
    }else{
      isValid = true;
    }
    console.log('isValid ' + isValid)
		return isValid;
	},
    
  this.addToSend = function() {//кладем объект с текущими ответами в общий массив
    resultArray[current] = tmp;
	},
  
  this.send = async function(e) {
    //готовим данные к отправке
    e.preventDefault();
		if(_self.valid()) {
			console.log('send!');
      //кладем во временный объект значение введенного на последнем слайде e-mail'a
       tmp = _self.serialize($el);
      _self.addToSend();
      
      //убираем везде error-классы
			var elements = $el.querySelectorAll('input');
			elements.forEach(function(el){ el.closest('label').classList.remove('error')});

      //формируем объект для отправки
			var formData = new FormData();
      resultArray.forEach((item)=>{
         for (var obj in item) {
					formData.append(obj, item[obj].substring(0, item[obj].length - 1))
				}
      });
			// for(var item in resultArray) {
			// }
      for (let [key, value] of formData) {
			  console.log(`${key} - ${value}`)
			}
      //отправка на сервер
			// const response = fetch('mail.php', {
			// 	method: 'POST',
			// 	body: formData
			// });
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
				// method: 'POST',
				// body: formData
			});
      console.log(typeof options.sendSuccess)
      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        if(options.sendSuccess && typeof options.sendSuccess === 'function'){
          options.sendSuccess(json)
        }
      } else {
        // alert("Ошибка HTTP: " + response.status);
        if(options.sendError && typeof options.sendError === 'function'){
          options.sendError("Ошибка HTTP: " + response.status)
        }
      }
		}
	}  
    
  this.serialize = function(form) {
		var field, s = {};
		var valueString = '';
		if (typeof form == 'object' && form.nodeName == "FORM") {
      //вместо form.elements(как в оригинале) берем из текущего вопроса только ипуты
			var len = form.querySelector('.swiper-slide-active').querySelectorAll('input, textarea').length;
			for (let i = 0; i < len; i++) {
				field = form.querySelector('.swiper-slide-active').querySelectorAll('input, textarea')[i];
				// console.log(field)
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (j = form.elements[i].options.length - 1; j >= 0; j--) {
							if (field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
						valueString += field.value + ',';
						
						s[field.name] = valueString;
					}
				}
			}
		}
    // console.log(s)
		return s
	}
  this.init();
}
module.exports.Quiz = Quiz;
// (selector, tns, sliderOptions)
// tns - ф-ция. tiny-slider
// sliderOptions - опции tiny-slider, которые нужно добавить к исходным
// var quiz = new Quiz('[data-quiz]', Swiper, {autoHeight: true}, {
//   sendSuccess: function(data){
//     alert("succes " + data)
//   },
//   sendError: function(err){
//     alert(err);
//   }
// });