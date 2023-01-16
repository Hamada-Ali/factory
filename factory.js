// factory pattern


// you can factory pattern  with regular functions and methods

class Button {
    constructor(color, backgroundColor, name) {
        this.name = name;
        this.color = color;
        this.backgroundColor = backgroundColor;
    }

    factory() {
        return {
            name: this.name,
            color: this.color,
            backgroundColor: this.backgroundColor,
            createButton() {
                const BtnHTML = `<button style="color:${this.color};background-color:${this.backgroundColor}; display:block;">
                ${this.name}</button> </br>`;
                const btnContainer = document.querySelector('.buttonField');
                btnContainer.insertAdjacentHTML('beforeend', BtnHTML)
            }
        }
    }
}

const button1 = new Button('#fff', '#777', 'login');
const button2 = new Button('#f2f', '#82f', 'random');
const button3 = new Button('#a2f', '#ff2', 'make me smile');
const button4 = new Button('#ffa', '#f8f', 'i dont care');
const button5 = new Button('#f1a', '#faf', 'let me alone');
const button6 = new Button('#aff', '#342', 'see you later');

button1.factory().createButton();
button2.factory().createButton();
button3.factory().createButton();
button4.factory().createButton();
button5.factory().createButton();
button6.factory().createButton();


