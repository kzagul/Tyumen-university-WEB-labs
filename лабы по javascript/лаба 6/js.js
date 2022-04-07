function btnClick(){
    let div = document.createElement('div');

    div.className = "newDiv";

    document.body.append(div);

    // let pressValue = document.select.sel.value;

    let resValue = '';

    const data = form.querySelector('[name="inp"]')
    let pressValue = form.querySelector('[name="toSel"]')



    if (pressValue <= 745) {
        resValue = "[eq]";
    }
    else if (pressValue > 745) {
        resValue = "Ясно";
    }



    const result = {
        data: data.value,
        pressValue: pressValue.value
    };

    div.innerHTML = pressValue;
}