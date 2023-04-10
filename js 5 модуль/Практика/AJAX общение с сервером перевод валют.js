const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('Get', 'js/current.json', async, login, password);
    request.setRequestHeader('Content-type', 'application/json;  charset=uft-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const date = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / date.current.usd).toFixed(2) // - округляет;
        } else { // сервера могут ломаться по этому обязательно нужно else чтоб предпредить пользователя
             inputUsd.value = "Что-то пошло не так"
        }
    })
}) 