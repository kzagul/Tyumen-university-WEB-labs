let checkForm = () => {
    let testRes = 0;
    let countTextRes = () => {
    
        //1 вопрос
        let task1 = document.getElementsByName("quest1");
        if (task1[0].checked) {
            testRes += 1;
            document.getElementById("radioBtn1").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn2").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn3").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn4").setAttribute('disabled', 'disabled')
        }
        else if (task1[1].checked || task1[2].checked || task1[3].checked){
            document.getElementById("radioBtn1").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn2").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn3").setAttribute('disabled', 'disabled')
            document.getElementById("radioBtn4").setAttribute('disabled', 'disabled')
        }
        
        //2 вопрос
        let task2 = document.getElementsByName("quest2");
        if (task2[0].checked) {
            testRes -= 1;
            document.getElementById("checkBox1").setAttribute('disabled', 'disabled')
        }
        if (task2[1].checked) {
            testRes += 2;
            document.getElementById("checkBox2").setAttribute('disabled', 'disabled')
        }
        if (task2[2].checked) {
            testRes += 2;
            document.getElementById("checkBox3").setAttribute('disabled', 'disabled')
        }
        if (task2[3].checked) {
            testRes -= 3;
            document.getElementById("checkBox4").setAttribute('disabled', 'disabled')
        }

        //3 вопрос
        let task3 = document.getElementById("textInput");
        if (task3.value === "80") {
            testRes += 1;
            document.getElementById("textInput").setAttribute('disabled', 'disabled')
        }
        else if (task3.checked === true){
            document.getElementById("textInput").setAttribute('disabled', 'disabled')
        }
        return `${testRes}`;
    }
    document.getElementById("resRes").value = countTextRes();
}

//4 вопрос
let func4Question = () => {

    let thisRes = document.getElementById("resRes").value;

   //if (document.getElementsByName("question4")[0].checked === true) thisRes += 1;
    if (document.getElementById("task4").value === "Разработка уникального алгоритма для каждой ситуации") {
        thisRes = thisRes*1 + 1;

    }
    //if (document.getElementsByName("question4")[0].checked === false)
    else {
        thisRes /= 2;
    }

    document.getElementById("resRes").value = thisRes;
    document.getElementById("task4").setAttribute('disabled', 'disabled')
    console.log(thisRes)
}


document.querySelector("#submit").onclick = function (e) {
    e.preventDefault();

    
    
    let countTextRes = () => {
        let testRes = 0;
        let task1 = document.getElementsByName("quest1");
        if (task1[0].checked) testRes += 1;

        let task2 = document.getElementsByName("quest2");
        if (task2[0].checked) testRes -= 1;
        if (task2[1].checked) testRes += 2;
        if (task2[2].checked) testRes += 2;
        if (task2[3].checked) testRes -= 3;

        let task3 = document.getElementById("textInput");
        if (task3.value === "80") testRes += 1;

        let task4 = document.getElementById("task4");
        if (task4.value === "Разработка уникального алгоритма для каждой ситуации") testRes += 1;
        else if (task4.value != "Разработка уникального алгоритма для каждой ситуации") testRes /= 2;

        return testRes;
    }

    let forResText = ''

    if (countTextRes() <= 3){
        //«Неудовлетворительно»
        //document.getElementById("textRes").value = "Неудовлетворительно";
        forResText = "Неудовлетворительно"
    }
    else if (countTextRes() > 3 && countTextRes() <= 5){
        //«Хорошо»
        //document.getElementById("textRes").value = "Хорошо";
        forResText = "Хорошо"
    }
    else if (countTextRes() > 6 && countTextRes() <= 7){
        //«Отлично» 
        //document.getElementById("textRes").value = "Отлично";
        forResText = "Отлично"
    }

    let checkThisForm = () => {
        let cntThis = 0
        //quest 1
        if (document.getElementsByName("quest1")[0].checked != ""
            || document.getElementsByName("quest1")[1].checked != ""
            || document.getElementsByName("quest1")[2].checked != ""
            || document.getElementsByName("quest1")[3].checked != "") {
            cntThis += 1
        }

        //quest 2
        if (document.getElementsByName("quest2")[0].checked != ""
            || document.getElementsByName("quest2")[1].checked != ""
            || document.getElementsByName("quest2")[2].checked != ""
            || document.getElementsByName("quest2")[3].checked != ""){
            cntThis += 1
        }

        //OK quest 3
        if (document.getElementById("textInput").value != "") {
            cntThis += 1
        }

        //quest 4
        if (document.getElementById("task4").value === "Разработка уникального алгоритма для каждой ситуации"
            || document.getElementById("task4").value === "Привлечение большого числа специалистов проблемной области"
            || document.getElementById("task4").value === "Оценка вычислительной мощности алгоритмов"
            || document.getElementById("task4").value === "Описание проблемной области на формальном языке") {
            cntThis += 1
        }
        

        return cntThis
    }

    console.log(checkThisForm())

    if (checkThisForm() === 4){
        alert(`Результат теста: ${forResText}`)
    }
    else{
        alert('Не все поля заполнены')
    }
    console.log(document.getElementsByName("question4")[0].value)

    console.log(countTextRes())
}

