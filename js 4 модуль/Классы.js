// стандарт ES6 - облегчает работу с js
// класс - обертка конструкции

class Rectangle { // концепция(шаблон по которому мы что то создаем)
    constructor(height, width) {
        this.height = height;
        this.width = width
    }

    calcArea() {
        return this.height * this.width;
    }
} // абстрацкия когда мы отделяем концепцию от её экземпляра

class ColoredRectangleWithText extends Rectangle { // extend унаследует от другого класса
    constructor(height, width, text, bgColor) {
        super(height, width); // - всегда на первом месте конструктора
        this.text = text;
        this.bgColor = bgColor;
    }

    showMYProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMYProps();
console.log(div.calcArea())

// const square = new Rectangle(10, 10); // экземпляры которые уже были созданы на основе концепции
// const long = new Rectangle(20, 100);

// console.log(long.calcArea())
// console.log(square.calcArea())