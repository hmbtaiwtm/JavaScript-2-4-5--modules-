const now = new Date(); //храниться текущая дата

console.log(now)

//можно в Date() ставить аргументы к примеру в '' дату Date('2023:03:13')
// любая дата которая храниться в дж она в милисекундах

//метод
getFullYear() // - получаем текущий год
getMonth() // - месяц
getDate() // - день
getDay() // номер день недели 
getHours() // местное время (1. аргумент - час; 2. аргумент - минуты; 3. аргмумент - секунды) 
getUTCHours() // время по UTC
getTimezoneOffset() // разница между часовым поясом и UTC выдает в минутах

Set // используються теже самые методы выше кроме getTimezoneOffset(), только заместья get используеться set, но в консоли здесь нам будет показываться на 3 часа меньше поскольку джс не может иметь доступ к нашему пк и оринтируеться на время по UTC но в браузере у нас будет то число которое указали мы