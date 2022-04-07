let arrForTrueFalse =[]

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

let checkInput = () => {

    const nameUreg = /^([А-Я]{1}[а-яё]{2,19}|[A-Z]{1}[a-z]{2,19})$/gm
    const loginUreg = /^([0-9A-Za-z]{3,10})$/gm
    const passUreg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
    const dateUreg = /(\d{1,2})([./-])(\d{1,2})\2(\d{2,4})/m
    const telNumber = /^(\+[7]{1}|[8]{1})([(])[0-9]{3}([)])([0-9]{3})([-])(([0-9]{2})([-])([0-9]{2})|([0-9]{4}))/gm

    //1
    var checkName = () => {
        let writedName = document.getElementById("nameInput").value
        console.log("Проверка Имени")
        if (writedName.match(nameUreg) != null) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            document.getElementById("img1a").hidden = true;
            document.getElementById("img1b").hidden = false;
        }
        else {
            console.log("что какая-то");
            document.getElementById("img1a").hidden = false;
            document.getElementById("img1b").hidden = true;
            //arrForTrueFalse.push(false);
        }
    }
    //2
    let checkLogin = () => {
        loginName = document.getElementById("loginInput").value
        console.log("")
        console.log("Проверка логина")
        if (loginName.match(loginUreg) != null) {
            console.log("Все верно");
            document.getElementById("img2a").hidden = true;
            document.getElementById("img2b").hidden = false;
            arrForTrueFalse.push(true);
        }
        else {
            console.log(" какая-то");
            document.getElementById("img2a").hidden = false;
            document.getElementById("img2b").hidden = true;
            //arrForTrueFalse.push(false);
        }
    }
    //3
    let checkPassword = () => {
        pass1 = document.getElementById("pass1").value
        console.log("")
        console.log("Проверка пароля")
        if (pass1.match(passUreg) != null) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            document.getElementById("img3a").hidden = true;
            document.getElementById("img3b").hidden = false;
        }
        else {
            console.log(" какая-то");
            //arrForTrueFalse.push(false);
            document.getElementById("img3a").hidden = false;
            document.getElementById("img3b").hidden = true;
        }

        if (pass1 != pass2 && pass2.value != "") {
            document.getElementById("wrongPass").hidden = false;
        }
        else if (pass1 === pass2 && pass2.value != "") {
            document.getElementById("wrongPass").hidden = true;
        }

    }
    //4
    let checkBothPasswords = () => {
        pass1 = document.getElementById("pass1").value
        pass2 = document.getElementById("pass2").value
        console.log("")
        console.log("Проверка второго пароля")
        if (pass2.match(passUreg) != null) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            //document.getElementById("img4a").hidden = true;
            //document.getElementById("img4b").hidden = false;
        }
        else {
            console.log(" какая-то");
            //arrForTrueFalse.push(false);
            //document.getElementById("img4a").hidden = false;
            //document.getElementById("img4b").hidden = true;
        }

        //Здесь доработал
        if (pass1 != pass2) {
            if (pass1.value != ''){
                document.getElementById("wrongPass").hidden = false;
            }
            else if (pass1.value === ''){
                document.getElementById("wrongPass").hidden = true;
            }
            document.getElementById("img4b").hidden = true;
            document.getElementById("img4a").hidden = false;
        }
        
        else if (pass1 === pass2) {
            document.getElementById("wrongPass").hidden = true;
            document.getElementById("img4b").hidden = false;
            document.getElementById("img4a").hidden = true;
        }
    }
    //5
    let checkBirthDate = () => {
        dd = document.getElementById("dateDD").value
        console.log("")
        console.log("Проверка даты рождения")
        if (dd.match(dateUreg) != null) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            document.getElementById("img5a").hidden = true;
            document.getElementById("img5b").hidden = false;
        }
        else {
            console.log(" какая-то");
            //arrForTrueFalse.push(false);
            document.getElementById("img5a").hidden = false;
            document.getElementById("img5b").hidden = true;
        }
    }
    //6
    let checkTelefon = () => {
        phoneTel = document.getElementById("phone").value
        console.log("")
        console.log("Проверка номера телефона")
        if (phoneTel.match(telNumber) != null) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            document.getElementById("img6a").hidden = true;
            document.getElementById("img6b").hidden = false;
        }
        else {
            console.log(" какая-то");
            //arrForTrueFalse.push(false);
            document.getElementById("img6a").hidden = false;
            document.getElementById("img6b").hidden = true;
        }
    }
    //7
    let checkINN = () => {
        valueINN = document.getElementById("INN").value
        console.log("")
        console.log("Проверка ИНН")
        if (checkInnShort(valueINN) === true) {
            console.log("Все верно");
            arrForTrueFalse.push(true);
            document.getElementById("img7a").hidden = true;
            document.getElementById("img7b").hidden = false;
        }
        else {
            console.log(" какая-то");
            //arrForTrueFalse.push(false);
            document.getElementById("img7a").hidden = false;
            document.getElementById("img7b").hidden = true;
        }
    }

    let checkRadio = () => {
        let arr = document.getElementsByName("gender")
        if (arr[0].checked) {
            return true;
        }
        else if (arr[1].checked) {
            console.log("Something wrong")
            return true;
        }
    }


    //проверить заполняемость формы
    let checkThisForm = () => {
        if (document.getElementById("nameInput").value != ""){
            checkName()
        }
        if (document.getElementById("loginInput").value != "") {
            checkLogin()
        }
        if (document.getElementById("pass1").value != "") {
            checkPassword()
        }
        if (document.getElementById("pass2").value != "") {
            checkBothPasswords()
        }
        if (document.getElementById("dateDD").value != "") {
            checkBirthDate()
        }
        if (document.getElementById("phone").value != "") {
            checkTelefon()
        }
        if (document.getElementById("INN").value != "") {
            checkINN()
        }
    }
    checkThisForm()
    
    if (document.getElementById("nameInput").value.match(nameUreg) != null
        && document.getElementById("loginInput").value.match(loginUreg) != null
        && document.getElementById("pass1").value.match(passUreg) != null
        && document.getElementById("pass2").value.match(passUreg) != null
        && document.getElementById("dateDD").value.match(dateUreg) != null
        && document.getElementById("phone").value.match(telNumber) != null
        && checkInnShort(document.getElementById("INN").value) === true
        //&& (document.getElementById("gender1").checked || document.getElementById("gender2").checked)
        //&& checkRadio() === true
        ) {
        //&& ((document.getElementsByName("gender")[0].checked === true) || (document.getElementsByName("gender")[1].checked === true))

        document.getElementById("button1").disabled = false
    }

}
//&& (document.getElementById("gender1").checked || document.getElementById("gender2").checked)
document.querySelector("#button1").onclick = function (e) {
    e.preventDefault();

    console.log(arrForTrueFalse)
    alert(`${document.getElementById("nameInput").value}, ваша форма отправлена`)
    document.getElementById("button2").disabled = false
}
document.querySelector("#button2").onclick = function (e) {
    e.preventDefault();

    location.reload();
}
//Kirill20001!