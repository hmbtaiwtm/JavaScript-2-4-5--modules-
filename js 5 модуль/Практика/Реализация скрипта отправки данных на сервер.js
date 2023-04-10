window.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');
    //обэект для вывода текста возле формы
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    // перебор каждой формы что бы функция работала на все формы
    forms.forEach(item => {
        postData(item);
    });
    // функция для каждой формы
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // создания того самого елемента для вывода текста возле формы, текст берем из обэекта выше
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);
        
            // код для настройки общение с сервером отправки или получени данных сервера
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            
            const json = JSON.stringify(object);

            request.send(json);
            
            // дальше работаем с сервером если он успешно все сделал
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure
                }
            });
        });
    }
});