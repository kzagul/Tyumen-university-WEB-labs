//декоратор
class ButtonD {
    width = 100;
    height = 100;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    demolish = () => {
        return 0;
    }
}
class FancyButtonD {
    button = null;
    color = "green"
    static construct(button, color){
        this.button = button;
        this.color = color;
        return this.button;
    }
    getColor = () => {
        return this.color;
    }
}

let fancyFB = FancyButtonD.construct(new ButtonD(100, 100), "green")



//наследование
class Button {
    width = 100;
    height = 100;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    demolish = () => {
        return 0;
    }
}

class FancyButton extends Button{
    color = "green";
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }
    getColor = () => {
        return this.color;
    }
}