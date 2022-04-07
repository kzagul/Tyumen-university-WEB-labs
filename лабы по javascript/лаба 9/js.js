const foodPrices = [369, 349, 189, 179, 299, 149, 199]

const images = ['images/default.jpg',
                'images/food1.jpg',
                'images/food2.jpg',
                'images/food3.jpg',
                'images/food4.jpg',
                'images/food5.jpg',
                'images/food6.jpg', 
                'images/food7.jpg']

var el = document.getElementById("main-form");

var foodDishes = document.getElementsByName('foodDish');

let checkForm = () => {

    let res = 0;
    let linkToImage = 0;

    //посчитать стоимость 
    let countPrice = () => {
        for (var i = 0; i < foodDishes.length; i++) {
            if (foodDishes[i].checked === true){
                res += foodPrices[i];
                linkToImage = i + 1;
            }
        }
        return `${res/2} руб`;
    }

    //посчитать кол-во
    let countAmount = () => {
        for (var i = 0; i < foodDishes.length; i++) {
            if (foodDishes[i].checked === true) {
                amount++;
            }
        }
        return amount;
    }

    console.log(countPrice())

    document.getElementById("image").src = images[linkToImage];
    document.getElementById("resRub").placeholder = countPrice();
}

let getOrder = () => {

    let res = 0;

    //посчитать стоимость 
    let countPrice = () => {
        for (var i = 0; i < foodDishes.length; i++) {
            if (foodDishes[i].checked === true) {
                res += foodPrices[i];
            }
        }
        return `${res} руб`;
    }


    let amount = 0;
    var arr = [];
    let countAmount = () => {
        for (var i = 0; i < foodDishes.length; i++) {
            if (foodDishes[i].checked === true) {
                amount++;
            }
        }
        return amount;
    }

    let createArr = () => {
        for (var i = 0; i < foodDishes.length; i++) {
            if (foodDishes[i].checked === true) {
                arr.push(foodDishes[i]);
            }
        }
        return arr;
    }

    let array = createArr();
    let newArr = array.join(', ');


    console.log(newArr);
    
    let printArray = () => {
        for (let i = 0; i < arr.length; i++) {
            return String(arr[i]);
        }
    }

    let arrToStr = "";
    let showOrderCheck = () => {
        for (let i = 0; i < arr.length; i++){
            arrToStr = arrToStr + String(arr[i]);
            arrToStr += ", "
        }
        return arrToStr;
    }




    ///создание нового поля

    let createResult = () => {
        return ('<div id="showResAccount">' 
                    + newArr +
                '/div')
    }

    ///





    if (countAmount() === 0){
        alert("Заказ не сформирован, позиции не выбраны.");
    }
    else{
        //document.getElementById("showRes").innerHTML = createResult();
        alert(`Заказ успешно сформирован!\nКол-во выбранных блюд:\n${amount}\nОбщая стоимость заказа:${countPrice()}`);
    }
}