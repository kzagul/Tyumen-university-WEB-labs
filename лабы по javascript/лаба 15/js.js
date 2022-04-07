//
//ФУНКЦИОНАЛ КАСАТЕЛЬНО ПОЯВЛЕНИЯ МЕНЮ НАСТРОЕК
//                  JQuery
//
$(function () {
    $("#fleeBanner").draggable();
});

let hideSettings = () => $('#settings').attr('hidden', 'true')

let hideBanner = () => $('#fleeBanner').attr('hidden', 'true')

//для кнопки внизу
let showSettingBars = () => {
    $('#settings').removeAttr('hidden')
}

//для кнопки на Settings
let showFleeBanner = () => {
    $('#fleeBanner').removeAttr('hidden')
}


let hui = () => {
    console.log(134124123);
}