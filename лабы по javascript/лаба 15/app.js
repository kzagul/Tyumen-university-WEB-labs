var app = new Vue({
    el: "#site",
    data: {
        pageLabel: "Экология и климат Тюмени",
        photo: {
            img1: "images/01.jpg",
            img2: "images/02.jpg",
            img3: "images/03.jpg",
            img4: "images/04.jpg",
            img5: "images/05.jpg"
        }
    }, 
    methods: {
        changeBackgroundColor: function () {
            $('#color1').on('click', function () {
                $('body').css('background-image', 'none');
                $('body').css('background-color', 'rgb(222, 135, 218)');
            });
            $('#color2').on('click', function () {
                $('body').css('background-image', 'none');
                $('body').css('background-color', 'rgb(222, 221, 135)');
            });
            $('#color3').on('click', function () {
                $('body').css('background-image', 'none');
                $('body').css('background-color', 'rgb(135, 222, 222)');
            });
        },

        changeBackgroundGif: function () {
            $('#gif1').on('click', function () {
                $('body').css('background-image', 'url(images/FON_01.GIF)');
            });
            $('#gif2').on('click', function () {
                $('body').css('background-image', 'url(images/FON_02.GIF)');
            });
            $('#gif3').on('click', function () {
                $('body').css('background-image', 'url(images/FON_03.GIF)');
            });
        },

        changeLabelColor: function() {
            $('#letColor1').on('click', function () {
                $('#labelLabel').css('color', 'rgb(29, 165, 35)');
            });
            $('#letColor2').on('click', function () {
                $('#labelLabel').css('color', 'rgb(52, 16, 216)');
            });
            $('#letColor3').on('click', function () {
                $('#labelLabel').css('color', 'rgb(182, 13, 13)');
            });
        },

        changeLabelFont: function() {
            if (document.getElementsByClassName("options")[0].selected){
                $('#labelLabel').css('font-size', '14px');
            }
            else if (document.getElementsByClassName("options")[1].selected) {
                $('#labelLabel').css('font-size', '18px');
            }
            else if (document.getElementsByClassName("options")[2].selected) {
                $('#labelLabel').css('font-size', '22px');
            }
            else if (document.getElementsByClassName("options")[3].selected) {
                $('#labelLabel').css('font-size', '28px');
            }
            else if (document.getElementsByClassName("options")[4].selected) {
                $('#labelLabel').css('font-size', '36px');
            }
        },

        changeParagraphOrientation: function() {
            $('#style1R').on('click', function () {
                $('#pars').css('text-align', 'right');
            });
            $('#style2R').on('click', function () {
                $('#pars').css('text-align', 'center');
            });
            $('#style3R').on('click', function () {
                $('#pars').css('text-align', 'justify');
            });
            $('#style4R').on('click', function () {
                $('#pars').css('text-align', 'left');
            });
        },

        changeParagraphWeight: function () {
            $('#style1Red').on('click', function () {
                $('#pars').css('text-decoration', 'none');
                $('#pars').css('font-style', 'normal');
                $('#pars').css('font-weight', '500');
            });
            $('#style2Red').on('click', function () {
                $('#pars').css('font-style', 'normal');
                $('#pars').css('text-decoration', 'underline');
            });
            $('#style3Red').on('click', function () {
                $('#pars').css('text-decoration', 'none');
                $('#pars').css('font-style', 'normal');
                $('#pars').css('font-style', 'italic');
            });
        },

        changePictureHeight: function () {
            $('#pic').css('height', `${document.getElementById("inputHeight").value}`);
        }
    },
})