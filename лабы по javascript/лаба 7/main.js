//Количество рулонов = (Периметр комнаты * Высота комнаты)* /Площадь рулона.
document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();

    //связь с main-form
    el = document.getElementById("main-form");



    var p = el.roomLength.value;

    var alertFunc = () => {
        if (checkValue === false) {
            alert("Не все поля содержат числа");
        }
    }

    //замыкание - вычисление периметра
    var perimetrCount = () => {
        return ((el.roomLength.value * 2) + (el.roomWidth.value * 2));
    }
    var perimetrRoom = perimetrCount();

    //замыкание - вычисление площади рулона
    var squareCount = () => {
        return el.rulonWidth.value * el.rulonLength.value;
    }
    var squareRulon = squareCount();

    //замыкание - вычисление кол-ва рулонов
    var kolvoCount = () => {
        return (perimetrRoom * el.roomHeight.value) / squareRulon;
    }
    var kolvo = kolvoCount();


    if (el.roomLength.value.length === 0 ||
        el.roomWidth.value.length === 0 ||
        el.roomHeight.value.length === 0 ||
        el.rulonWidth.value.length === 0 ||
        el.rulonLength.value.length === 0)
    {
        alert("Введите данные во всех полях");
        console.log(el.roomWidth.value);
    }
    else{
        
    }
    document.getElementById("rulonNumid").placeholder = kolvo;
    console.log(kolvo);
}