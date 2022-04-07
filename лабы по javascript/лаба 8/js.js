document.getElementById("main-form").addEventListener("submit", checkForm);
el = document.getElementById("main-form");

function checkForm(event) {
    event.preventDefault();

    let M_mas = [8.5, 10.0, 15.5];
    let Gl_mas = [10.0, 11.5, 17.0];

    

    var formats = document.getElementsByName('format');

    let formatRes = el.format.value;
    let paperRes = el.paper.value;
    let amount = el.contact.value;
        
    let countPrice = () => {
        for (let i = 0; i < formats.length; i++)
        {
            if (paperRes === "Матовая" && formats[i].checked ){
                //var resfor = formats[i].value;
                var price = M_mas[i]
                return price;
            }
            else if (paperRes === "Глянцевая" && formats[i].checked ){
                //var resfor = formats[i].value;
                var price = Gl_mas[i];
                return price;
            }
        }
    }

    // console.log(amount);
    // console.log(countPrice());

    let sum = countPrice() * amount;//price * amount;

    let res = "";
    let countRes = () => {
        return `Цена фотографии: ${countPrice()}р.\nКоличество: ${amount}шт.\nСумма заказа: ${sum}р.`;
    }


    document.getElementById("infoWrite").innerHTML = countRes();





    // console.log(formatRes);
    // console.log(paperRes);
    // console.log(amount);


    document.getElementById('input-kolvo').onkeypress = function(){ 
        console.log = ("ugbesjkrgejhgflwavjfgsjglkh;fdhfaiugfwe");
    };


    // const log = document.getElementById('input-kolvo');

    // log.onkeypress = logIssue;

    // function logIssue(e) {
    //     log.textContent += "if ((event.keyCode < 48) || (event.keyCode > 57)) event.returnValue = false";
    // }

    // onKeyPress = "if ((event.keyCode < 48) || (event.keyCode > 57)) event.returnValue = false";

}


var check_it = () => {
    if ((el.contact.value < 48) || (el.contact.value > 57)) {
        //document.getElementById('input-kolvo').returnValue = false;
        console.log("Ошибка");
        el.contact.value = "";
    }
    else {
        console.log("Все хорошо");
    }
}

