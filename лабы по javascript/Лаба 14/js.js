const arrImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
const arrDivId = ["#s1", "#s2", "#s3", "#s4"]
let carNames = ["Jaguar E-Type 1961", "MG MGB 1962", "Lotus Esprit 1976", "Rolls - Royce Silver shadow 1965"]

let valueMeanClick = 0

let showImg1Info = (event) => {
    if (valueMeanClick === 0){
        if(event.type == 'mouseover') {
            document.getElementById("input").placeholder = carNames[0]
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = ""
        }
    }
    else{
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
    }
}
let showImg2Info = (event) => {
    if (valueMeanClick === 0) {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = carNames[1]
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = ""
        }
    }
    else {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
    }
}
let showImg3Info = (event) => {
    if (valueMeanClick === 0) {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = carNames[2]
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = ""
        }
    }
    else {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
    }
}
let showImg4Info = (event) => {
    if (valueMeanClick === 0) {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = carNames[3]
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = ""
        }
    }
    else {
        if (event.type == 'mouseover') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
        if (event.type == 'mouseout') {
            document.getElementById("input").placeholder = "Карусель крутится!"
        }
    }
}

s1.onmouseover = s1.onmouseout = showImg1Info;
s2.onmouseover = s2.onmouseout = showImg2Info;
s3.onmouseover = s3.onmouseout = showImg3Info;
s4.onmouseover = s4.onmouseout = showImg4Info;


console.log(valueMeanClick)

$('#btn1').click(function (e){
    e.preventDefault();

    valueMeanClick = 1;

    console.log(valueMeanClick)


    document.getElementById("btn2").disabled = "false"

    document.getElementById("input").placeholder = "Карусель крутится!"

    const changePictures = () => {

        // let changePictures = () => {
        //     i = 0
        //     while (i < 60){
        //         //$(arrDivId[i]).prop("src", arrImages[(i)%4])

        //         imgP1 = document.getElementById("s1").src
        //         imgP2 = document.getElementById("s2").src
        //         imgP3 = document.getElementById("s3").src
        //         imgP4 = document.getElementById("s4").src

        //         document.getElementById("s1").src = imgP4
        //         document.getElementById("s2").src = imgP1
        //         document.getElementById("s3").src = imgP2
        //         document.getElementById("s4").src = imgP3

        //         // $("#s1").prop("src", arrImages[(i+1) % 4])
        //         // $("#s2").prop("src", arrImages[(i+2) % 4])
        //         // $("#s3").prop("src", arrImages[(i+3) % 4])
        //         // $("#s4").prop("src", arrImages[(i+4) % 4])
        //         i++
        //     }
        //         // $("#s1").prop("src", arrImages[Math.round(Math.random() * 4)])
        //         // $("#s2").prop("src", arrImages[Math.round(Math.random() * 4)])
        //         // $("#s3").prop("src", arrImages[Math.round(Math.random() * 4)])
        //         // $("#s4").prop("src", arrImages[Math.round(Math.random() * 4)])
        // }

        // changePictures()

        imgP1 = document.getElementById("s1").src
        car1 = carNames[0];

        imgP2 = document.getElementById("s2").src
        car2 = carNames[1]

        imgP3 = document.getElementById("s3").src
        car3 = carNames[2]

        imgP4 = document.getElementById("s4").src
        car4 = carNames[3]

        document.getElementById("s1").src = imgP4
        carNames[0] = car4

        document.getElementById("s2").src = imgP1
        carNames[1] = car1

        document.getElementById("s3").src = imgP2
        carNames[2] = car2

        document.getElementById("s4").src = imgP3
        carNames[3] = car3
    }


    let setInt = setInterval(() => changePictures(), 200);

    if (valueMeanClick === 1){
        //document.getElementById("btn1").setAttribute('disabled', 'disabled')
        document.getElementById("btn1").disabled = "disabled"
    }


    $('#btn2').click(function (e) {
        e.preventDefault();
        //alert("Карусель остановлена")
        clearInterval(setInt)
        //setTimeout(() => clearInterval(setInt), 5000);
        //clearTimeout(timeout.handle);

        document.getElementById("input").placeholder = ""

        valueMeanClick = 0
    })
})

