// https://developer.mozilla.org/ru/docs/Web/API/Animation

//способ создания

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelector('img');
      
// const phoneAnimation = image[0].animate([
//    {transform: 'translateY(0)'},
//    {transform: 'translateY(100px)'},
//    {transform: 'translateY(-100px)'},
//    {transform: 'translateY(0)'}
// ], {
//     duraction: 3000,
//     iterations: Infinity
// });

// 2 аргемента: 1 - массив объектов с ключевыми кадрами (начало середина и конец анимауции)
// 2 - объект с настройками к примеру сколько будет длится анимациия и как будет длится
// преймущестов над css анимациями в том что у нас больше возможностей запустить дальше анимацию
// поставить на паузу или отменить
// к примеру сделаем что при клике анимация запустится а если работает то ставить на паузу

let phoneAnimation;
btnPhone.addEventListener('ckick', () => {
    if (!phoneAnimation) {
    phoneAnimation = image[0].animate([
        {transform: 'translateY(0) rotate(0deg)',
        filter: 'opacity100%'
        },
        {transform: 'translateY(100px) rotate(190deg)',
        filter: 'opacity50%'
        },
        {transform: 'translateY(-100px) rotate(270deg)',
        filter: 'opacity75%'
        },
        {transform: 'translateY(0) rotate(360deg)',
        filter: 'opacity100%'
        }
    ], {
        duraction: 3000,
        iterations: Infinity
    });
    } else if (phoneAnimation.playstate === 'paused') { 
        phoneAnimation.play()
    } else  {
        phoneAnimation.pause()
    }
})

// метод playstate который определяет состояние нашей анимации 