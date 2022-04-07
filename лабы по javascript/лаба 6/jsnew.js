document.getElementById("main-form").addEventListener("submit", view);

function view(event) {

    event.preventDefault();

    var elem = document.getElementById("main-form");

    var data = elem.input-form.value;
    var atmPress = elem.select-form.value;

    var resValue = "";

    let countRes = () => {
        if (atmPress <= 745) {
            resValue = "Ненастье";
        }
        else if (atmPress > 745) {
            resValue = "Ясно";
        }
    }
    alert("Все данные корректно заполнены");
    console.log(data + "" + atmPress);

    window.location = "http://127.0.0.1:5500/%D0%BB%D0%B0%D0%B1%D0%B0%206/html.html?input-form=2021-06-01&select-form=750&submit=%D0%92%D1%8B%D0%B2%D0%B5%D1%81%D1%82%D0%B8+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E";
}

