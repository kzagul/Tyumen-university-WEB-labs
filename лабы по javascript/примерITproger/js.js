let text = document.getElementById("text");
text.title = "New text";

text.style.color = "red";
text.style.background = "black";

text.innerHTML = "new<br>string";

//document.getElementById("text").style.color = "white";

//var spans = document.getElementsByTagName("span");

var spans = document.getElementsByClassName("simple-text")

for(let i = 0; i<spans.length; i++){
    console.log(spans[i].innerHTML);
}