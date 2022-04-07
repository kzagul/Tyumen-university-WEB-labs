document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {

    event.preventDefault();

    el = document.getElementById("main-form");

    // let checkPassword = () => {
    //     if (password == repassword) console.log("Все верно");
    //     else console.log("Пароли не совпадают");
    // }

    var data = el.data.value;
    var press = el.press.value;


    //Error
    var fail = "";

    if (data == "" || press == "")
        fail = "Заполните все поля";

    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
    }
    else {
        alert("Все данные корректно заполнены");
        window.location = "http://127.0.0.1:5500/%D0%9B%D0%B0%D0%B1%D0%B0%206_2/html.html"
    }

    //console.log(name + " - " + state + " - " + password + " - " + " - " + repassword)
    //checkPassword();
}