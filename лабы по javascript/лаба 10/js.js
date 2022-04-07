let el = document.getElementById("main-form");

function checkInputs() {
    var kurs = $('#text-first').val();
    var summ = $('#text-second').val();

    if (kurs.length != 0 && summ.length != 0) {
        $('#submit1').removeAttr('disabled');
    } else {
        $('#submit1').attr('disabled', 'disabled');
    }
};

function checkResult() {
    var res = $('#result').val();

    if (res.length != 0) {
        $('#submit2').removeAttr('disabled');
    } else {
        $('#submit2').attr('disabled', 'disabled');
    }
};


document.querySelector("#submit1").onclick = function (e) {
    e.preventDefault();
    let countResult = () => {
        var from = $('#selectFirst').val();
        var to = $('#selectSecond').val();
        var kurs = $('#text-first').val();
        var summ = $('#text-second').val();

        let countSumm = () => {
            return Math.round(summ/kurs);
        }
        return `Перевод: ${from} - ${to} по курсу ${kurs}\nК выдаче: ${countSumm()}`
    }

    document.getElementById("result").value = countResult();
};

document.querySelector("#submit2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("result").value = "";
};