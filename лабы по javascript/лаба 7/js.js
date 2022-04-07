document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {

    event.preventDefault();

    el = document.getElementById("main-form");

    let checkPassword = () => {
        if (atmPressure == repassword) console.log("Все верно");
        else console.log("Пароли не совпадают");
    }

    var data = "Сегодня ";
    var atmPressure = "Показания барометра ";

    //
    var fail = "";

    if (data == "" || atmPressure == "")
        fail = "Заполните поле с датой";
    else
        fail = "hui";
    //

    var res = "";

    if (el.pass.value <= 745) {
        res = "Ненастье";
    }
    else if (el.pass.value > 745) {
        res = "Ясно";
    }

    data += el.name.value;
    atmPressure += el.pass.value;

    if (fail == "Заполните поле с датой") {
        //document.getElementById("error").innerHTML = fail;
    }
    else {
        //alert("Все данные корректно заполнены");
        // window.location = "";
        document.getElementById("newForm1").innerHTML = data;
        document.getElementById("newForm2").innerHTML = atmPressure;
        document.getElementById("newForm3").innerHTML = res;
        document.getElementById('name').disabled = true;

        button_first.style.visibility = "hidden";
        button_again.style.visibility = "visible";
    }
    //console.log(name + " - " + state + " - " + password + " - " + " - " + repassword)
    //checkPassword();
}
//http://127.0.0.1:5500/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80ITproger%C2%A06/html.html