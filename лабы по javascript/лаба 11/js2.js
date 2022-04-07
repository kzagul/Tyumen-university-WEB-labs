let func1 = () => {
    let link = document.getElementById("main-form");
    let unsortedStr = document.getElementById("array").value;
    let array = unsortedStr.split(", ");

    let minElem = () => {
        var minValue = Math.min.apply(null, array);
        return minValue;
    }
    
    if (document.getElementById('deter1').checked === true){
        document.getElementById("deter1Val").value = minElem();
    }
    else if (document.getElementById('deter1').checked === false){
        document.getElementById("deter1Val").value = "";
    }
}
let func2 = () => {
    let link = document.getElementById("main-form");
    let unsortedStr = document.getElementById("array").value;
    let array = unsortedStr.split(", ");

    let maxElem = () => {
        var maxValue = Math.max.apply(null, array);
        return maxValue;
    }

    if (document.getElementById('deter2').checked === true) {
        document.getElementById("deter2Val").value = maxElem();
    }
    else if (document.getElementById('deter2').checked === false) {
        document.getElementById("deter2Val").value = "";
    }
}

let func3 = () => {
    let link = document.getElementById("main-form");
    let unsortedStr = document.getElementById("array").value;
    let array = unsortedStr.split(", ");
    
    let sumElems = () => {
        var res = 0;
        for (let i = 0; i < array.length; i++) {
            res += Number(array[i]);
        }
        return res;
    }

    if (document.getElementById('deter3').checked === true) {
        document.getElementById("deter3Val").value = sumElems();
        //console.log(sumElems)
    }
    else if (document.getElementById('deter3').checked === false) {
        document.getElementById("deter3Val").value = "";
        console.log(0)
    }
}

let func4 = () => {
    let link = document.getElementById("main-form");
    let unsortedStr = document.getElementById("array").value;
    let array = unsortedStr.split(", ");

    let amountLessZ = () => {
        let amountLess = 0;
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) < 0){
                amountLess++;
            }
        }
        return amountLess;
    }
    if (document.getElementById('deter4').checked === true) {
        document.getElementById("deter4Val").value = amountLessZ();
        //console.log(sumElems)
    }
    else if (document.getElementById('deter4').checked === false) {
        document.getElementById("deter4Val").value = "";
        console.log(0)
    }
}

let func5 = () => {
    let link = document.getElementById("main-form");
    let unsortedStr = document.getElementById("array").value;
    let array = unsortedStr.split(", ");

    let amountMoreZ = () => {
        let amountMore = 0;
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) > 0) {
                amountMore++;
            }
        }
        return amountMore;
    }
    if (document.getElementById('deter5').checked === true) {
        document.getElementById("deter5Val").value = amountMoreZ();
        //console.log(sumElems)
    }
    else if (document.getElementById('deter5').checked === false) {
        document.getElementById("deter5Val").value = "";
        console.log(0)
    }
}