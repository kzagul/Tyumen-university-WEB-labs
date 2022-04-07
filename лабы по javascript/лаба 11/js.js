let el = document.getElementById("main-form");

function checkInputs() {
    var writeNum = $('#writeNum').val();

    if (writeNum.length != 0 && writeNum > 0) {
        $('#submit1').removeAttr('disabled');
        $('#submit2').removeAttr('disabled');
    } else {
        $('#submit1').attr('disabled', 'disabled');
        $('#submit2').attr('disabled', 'disabled');
    }
};

document.querySelector("#submit1").onclick = function(e){
    e.preventDefault();

    let array = [];
    let str = "";

    let createArray = () => {
        for (let i = 0; i < el.writeNum.value; i++) {
            array.push(Math.round(-100 + Math.random() * ((100 - (-100)) + 1)));
            //str += (Math.round(-100 + Math.random() * ((100 - (-100)) + 1)));
        }
    }
    document.getElementById('deter1').checked = false;
    document.getElementById("deter1Val").value = "";

    document.getElementById('deter2').checked = false;
    document.getElementById("deter2Val").value = "";

    document.getElementById('deter3').checked = false;
    document.getElementById("deter3Val").value = "";

    document.getElementById('deter4').checked = false;
    document.getElementById("deter4Val").value = "";

    document.getElementById('deter5').checked = false;
    document.getElementById("deter5Val").value = "";

    createArray();
    str = array.join(", ");

    document.getElementById("array").value = str;
    document.getElementById("resArray").value = "";
    ///
    ///
}


document.querySelector("#submit2").onclick = function (e) {
    e.preventDefault();

    let unsortedStr = document.getElementById("array").value;

    let array = unsortedStr.split(", ");

    let arrayIncline;
    let arrayDecline;

    let strIncline;
    let strDecline;

    let sortIncline = () => {
        arrayIncline = array.sort(function (a, b) {
            return a - b;
        });
        strIncline = arrayIncline.join(", ");
        return strIncline;
    }

    let sortDecline = () => {
        arrayDecline = array.sort(function (a, b) {
            return b - a;
        });
        strDecline = arrayDecline.join(", ");
        return strDecline;
    }

    let withoutSort = () => {
        return unsortedStr;
    }
    // document.getElementById("resArray").value = sortIncline();

    var sortTypes = document.getElementsByName('sort');

    if (sortTypes[0].checked === true){
        document.getElementById("resArray").value = sortIncline();
    }
    else if (sortTypes[1].checked === true){
        document.getElementById("resArray").value = sortDecline();
    }
    else if (sortTypes[2].checked === true) {
        document.getElementById("resArray").value = withoutSort();
    }
}