const courseRub = document.querySelector('#rub');
const courseUsd = document.querySelector('#usd');

courseRub.addEventListener('input', () => {
    const req = new XMLHttpRequest()

    req.open('Get', 'js/current.json');
    req.setRequestHeader('Content-type', 'application/json');
    req.send()

    req.addEventListener('load', () => {
        if (req.status === 200) {
            const data = JSON.parse(req.response)
            courseUsd.value = (+courseRub.value / data.current.usd).toFixed(2)
        } else {
            courseUsd.value = 'Что то пошло не так'
        }
    })
})