document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {

    event.preventDefault();

    el = document.getElementById("main-form");

    let checkPassword = () => {
        if (password == repassword) console.log("Все верно");
        else console.log("Пароли не совпадают");
    }

    var name = el.name.value;
    var password = el.pass.value;
    var repassword = el.repass.value;
    var state = el.state.value;
    

    var fail = "";

    if(name == "" || password == "" || repassword == "" || state == "")
        fail = "Заполните все поля";
    else if (name.length <= 1 || name.length >= 50)
        fail = "Введите корректное имя";
    else if (password != repassword)
        fail = "Пароли не совпадают";
    else if (password.split("&").length > 1)
        fail = "Некоректный пароль";


    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
    }
    else{
        alert("Все данные корректно заполнены");
        window.location ="http://127.0.0.1:5500/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80ITproger/html.html"
    }

    //console.log(name + " - " + state + " - " + password + " - " + " - " + repassword)
    //checkPassword();
}