window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabcontent() {
    tabsContent.forEach(item => {
      item.classList.add('hide')
      item.classList.remove('show')
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active')
    });
  };

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active')
  };

  hideTabcontent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabcontent();
          showTabContent(i);
        } 
      });
    };
  });


  //modal wondow

  const btnOpenModal = document.querySelectorAll('[data-modal]'),
        btnClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    function OpenModal () {
      modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId)
    }

    btnOpenModal.forEach( btn => {
      btn.addEventListener('click', () => {
        // modal.classList.add('show');
        // modal.classList.remove('hide');
        OpenModal()
      });
    });

    function CloseModal () { // если код повторяеться лучше помещать его в функцию
      // modal.classList.add('hide');
      // modal.classList.remove('show');
      modal.classList.toggle('show');
      document.body.style.overflow = ''
    }

    btnClose.addEventListener('click', CloseModal)

    modal.addEventListener('click', (e) => {
       if (e.target == modal) {
          CloseModal()
       }
    });

    document.addEventListener('keydown', (e) => {  //keydown отслеживает нажатие клавиши на клавеатуре
      if (e.code == "Escape") { // e.code code- код клавиши
        CloseModal()
      }
    });

    const modalTimerId = setTimeout(OpenModal, 5000);

    function showModalByScroll () {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
        OpenModal()
        window.removeEventListener('scroll', showModalByScroll)
       }
    }

    window.addEventListener('scroll', showModalByScroll,)

    // Классы для карточек

    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price; 
        this.parent = document.querySelector(parentSelector)
        this.transfer = 27;
        this.changeToUah();
      }

      changeToUah() {
        this.price = this.price * this.transfer;
      };

      render() {
        const element = document.createElement('div');
        element.innerHTML = `
          <div class="menu__item">
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
          </div>
        `;
        this.parent.append(element); 
      }
    }

    new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт     активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container'
    ).render()
    new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      'Меню "Премиум"',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      11,
      '.menu .container'
    ).render()
    new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      10,
      '.menu .container'
    ).render()

    //backend работа с сервером

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.pphp',{
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              }, 
              body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000); 
            }).catch(() => {
              statusMessage.textContent = message.failure
            }).finally(() => {
              form.reset();
            })
        });
    }
});





