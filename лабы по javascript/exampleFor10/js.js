document.querySelector("#submitdata").onclick = function (e) {
    e.preventDefault();
    let flag = true;
    (e.target).find('input').each((i, item) => {
        if (item.type == 'checkbox' && !item.checked) {
            flag = false;
        } else if (['text', 'tel', 'email'].includes(item.type) && !item.value) {
            flag = false;
        }
        return flag;
    })
    if (flag) {
        console.log('все поля заполнены')
    } else {
        console.log('есть не заполненые поля')
    }
}