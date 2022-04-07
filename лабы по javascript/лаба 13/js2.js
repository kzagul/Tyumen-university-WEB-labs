function checkInnShort(value) {
    if (typeof value !== 'string' ||
        (value.length !== 10 && value.length !== 12) ||
        value.split('').some((symbol) => isNaN(Number(symbol)))
    ) return false;

    if (value.length === 10) {
        return Number(value[9]) === (value.split('').slice(0, -1)
            .reduce(
                (summ, symbol, index) =>
                    [2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
                0)
            % 11) % 10;

    } else if (value.length === 12) {
        let checkSumOne = (value.split('').slice(0, -2)
            .reduce(
                (summ, symbol, index) =>
                    [7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
                0)
            % 11) % 10;

        let checkSumTwo = (value.split('').slice(0, -1)
            .reduce(
                (summ, symbol, index) =>
                    [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
                0)
            % 11) % 10;

        return (checkSumOne === Number(value[10]) && checkSumTwo === Number(value[11]));
    }
}

let arrForTrueFalse = []

//
//Регулярки
//
let nameUreg = /^([А-Я]{1}[а-яё]{2,19}|[A-Z]{1}[a-z]{2,19})$/gm
let loginUreg = /^([0-9A-Za-z]{3,10})$/gm
let passUreg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
let dateUreg = /(\d{1,2})([./-])(\d{1,2})\2(\d{2,4})/m
let telNumber = /^(\+[7]{1}|[8]{1})([(])[0-9]{3}([)])([0-9]{3})([-])(([0-9]{2})([-])([0-9]{2})|([0-9]{4}))/gm

//
//Значения
//
let writeName = "Kirill"
let loginName = "User12123"
let pass1 = "Kopa12Nopa!!"
let pass2 = "Kopa12Nopa!!"
let dd = "18.12.89"
let phoneTel = "+7(963)452-60-07"
let valueINN = "229861835392"

//1
console.log("Проверка Имени")
if (writeName.match(nameUreg) != null){
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else{
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}
//2
console.log("")
console.log("Проверка логина")
if (loginName.match(loginUreg) != null) {
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}
//3
console.log("")
console.log("Проверка пароля")
if (pass1.match(passUreg) != null) {
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}
//4
console.log("")
console.log("Проверка пароля 2")
if (pass2.match(passUreg) != null) {
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}

//5
console.log("")
console.log("Проверка даты рождения")
if (dd.match(dateUreg) != null) {
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}

//6
console.log("")
console.log("Проверка номера телефона")
if (phoneTel.match(telNumber) != null) {
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}

//7
console.log("")
console.log("Проверка ИНН")
if(checkInnShort(valueINN) === true){
    console.log("Все верно");
    arrForTrueFalse.push(true);
}
else {
    console.log("что-то не то");
    arrForTrueFalse.push(false);
}



//вывод итоговой инфы
console.log("")
let checkEr = 0

let checkErrors = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === false){
            checkEr++;
        }
    }
    if (checkEr != 0){
        console.log("В заполнении данных найдена ошибка")
        return 0
    }
    else {
        console.log("В заполнении данных все корректно")
        return 1
    }
}
checkErrors(arrForTrueFalse)



let printArray = (array) => {
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

printArray(arrForTrueFalse)


//сделать активацию кнопки
console.log("")
let activateButton1 = () => {
    if(checkErrors(arrForTrueFalse) === 1)
        console.log("можно активировать кнопку")
    else
        console.log("нельзя активировать кнопку")
}
activateButton1()