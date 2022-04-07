document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {

    event.preventDefault();

    var el2 = document.getElementsByName("dzen");
	
    if(el2[0].checked){
        document.getElementById("mainform").style.background = "url('W2ObGC-6vok.jpg')"
    }
    else if (el2[1].checked) {
        document.getElementById("mainform").style.background = "url('dBCIU0zWFZE.jpg')"
    }
    else if (el2[2].checked) {
        document.getElementById("mainform").style.background = "url('X9hdjFTldTc.jpg')"
    }
}
//el = document.getElementById("main-form");
   // el2 = document.GetElementsByName("dzen")
   // if(el2[0].checked) {
//document.body.style.background = "url('W2ObGC-6vok.jpg')";
	//	document.GetElementById("mainform").background-color = "url('W2ObGC-6vok.jpg')";
   // }
   // else if (el.pass.checked) {
//document.body.style.background = "url('dBCIU0zWFZE.jpg')";
   // }
   // else if (el.pass.value === 3) {
   //     document.body.style.background = "url('X9hdjFTldTc.jpg')";
   // }
//}
//http://127.0.0.1:5500/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80ITproger%C2%A06/html.html