// каждая задача которая попадает в Callback Queue это макрозадача
// есть и второй термин - микрозадача

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'))

queueMicrotasks(() => console.log('wow')) 

Promise.resolve()
    .then(() => console.log('promise_2'))

console.log('code')

// выведится code promise timeout, казалось мы запустили setimeout первее но выполнелься он последним хотя может показатся что в setimeout мы не установили таймер и по умолчанию там стоит 4 но дело не в этом дело в том что хоть Promise и then ансихронные потмоу что м ыне знаем кда ждать ответ но then считается микрозадачей, после каждой макрозадачи будь это ансихронный или синхронный, движок выполянет все задачи из очереди микрозадач перед тем как выполнить макрозадачу, тоесть у нас очередб не только с макрозадач но и микрозадач

//Вывод у нас есть очередь из макрозадач как и в раньше мы это смотрели, но и существует очерь также из микрозадач - это те которые формируютмсся внутри then catch finnaly либо при помощи оператора await и вот эти микрозадачи скапливаются и как только у нас завершается макрозадача выполняются все микрозадачи которые скопились в очереди

// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}

// возможность самому запускать микрозадачи код который выполнится после макрозадач но до рендера страницы

// команда queueMicrotasks(() => console.log('wow))
// если вдруг нужно будет запустить код вместе с микрозадачами то эта команда понадобится