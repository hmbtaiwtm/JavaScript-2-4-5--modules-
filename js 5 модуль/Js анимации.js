// js анимации спомощью простого скрипта с setInterval очень требовательни для компьютера и идет нагрузка
// обновление кадров в секунду фпс который делает браузер при запуске анимации могул лагать
// для этого был придуман requestAnimationFrame - запускает функции в качестве анимации
// frame - эта функция запускает анимацию и подстраивает ее под чистоту бразуера таким образом
// анимации будет менее требовательная

function myAnimation() {     
    pos ++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation); // 1 аргумент это наша функция с анимацией
    }
} 

btn.addEventListner('click', () => requestAnimationFrame(myAnimation));

//мы запускаем при клике нашу анимацию только внутри кол бэк функции потому что без нее
// наша анимация сработает сразу идля исправление этого лучше запустить функцию в другой функции
// эту анимацию как и сет интервал можно останавливать 

let id = requestAnimationFrame(myAnimation)
cancelAnimationFrame(id) // cancelAnimationFrame - отменяет
