document.querySelector("#submit").onclick = function (e) {
    e.preventDefault();
    //регулярное выражение 1
    let re = /(\d{1,2})([./-])(\d{1,2})\2(\d{2,4})/m

    //считать даты с полей input
    let startDate = document.getElementById("startDate").value;//регулярное
    let endDate = document.getElementById("endDate").value;//input date

    //преобразование данных
    let cntD1 = startDate.split(/[.,-\/]/)
    let cntD2 = endDate.split(/[.,-\/]/)
    cntD1.reverse()

    var Date1 = new Date(cntD1[0], cntD1[1], cntD1[2]);//стартовая дата
    var Date2 = new Date(cntD2[0], cntD2[1], cntD2[2]);//финальная дата



    //посчитать дни
    let countDays = () => {
        return Math.floor((Date2.getTime() - Date1.getTime()) / (1000 * 60 * 60 * 24))
        // document.getElementById("result").value = res;
    }

    //посчитать рабочие дни
    let countWorkDays = () => {
        let Date1W = Date1;
        var numWorkDays = 0;
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        while (Date1W <= Date2) {
            if (Date1W.getDay() !== 0 && Date1W.getDay() !== 6) {
                numWorkDays++;
            }
            Date1W = Date1W.addDays(1);
        }
        return numWorkDays - 1
        // let res = numWorkDays - 1
        // document.getElementById("result").value = res;
    }

    //посчитать выходные дни
    let countHolDays = () => {
        let workDays = countWorkDays()
        let days = countDays()
        return days - workDays
        // document.getElementById("result").value = res;
    }

    //посчитать недели
    let countFullWeeks = () => {
        var oneWeek = 1000 * 60 * 60 * 24 * 7;
        var date1_ms = Date1.getTime();
        var date2_ms = Date2.getTime();
        var difference_ms = Math.abs(date1_ms - date2_ms);
        return Math.floor(difference_ms / oneWeek);
        // document.getElementById("result").value = res;
    }

    //посчитать месяцы
    let countFullMonth = (Date2, Date1) => {
        return Date1 >= Date2 ? (Date1.getFullYear() * 12 + Date1.getMonth()) - (Date2.getFullYear() * 12 + Date2.getMonth()) - (Date1.getDate() < Date2.getDate()) : -countFullMonth(Date2, Date1);
        //document.getElementById("result").value = res;
    }


    //если выбрана 1 функция
    if(document.getElementById('deter1').checked === true){
        document.getElementById("result").value = countDays();
    }
    //если выбрана 2 функция
    if (document.getElementById('deter2').checked === true) {
        document.getElementById("result").value = countHolDays();
    }
    //если выбрана 3 функция
    if (document.getElementById('deter3').checked === true) {
        document.getElementById("result").value = countWorkDays();
    }
    //если выбрана 4 функция
    if (document.getElementById('deter4').checked === true) {
        document.getElementById("result").value = countFullWeeks();
    }
    //если выбрана 5 функция
    if (document.getElementById('deter5').checked === true) {
        document.getElementById("result").value = countFullMonth(Date1, Date2);
    }


    if (!document.getElementById('deter1').checked
        && !document.getElementById('deter2').checked
        && !document.getElementById('deter3').checked
        && !document.getElementById('deter4').checked
        && !document.getElementById('deter5').checked){
            alert("Функция не выбрана")
            document.getElementById("result").value = 'выберите функцию'
        }


    if (cntD1 > cntD2){
        alert("Начальная дата периода больше чем конечная дата")
    }


    if (startDate.match(re) != null) {
        console.log(startDate);
        console.log(endDate);
    }
    else {
        alert("Начало периода введено не корректно")
    }

}