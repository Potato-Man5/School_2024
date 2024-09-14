var x = 5;
var y = 6;
var z = x + y;
function myFunction() {
document.getElementById("demo").innerHTML="The value of z is:" + z ;
// document.getElementById("animate-image").classList.add("move");
var img = document.getElementById("animate-image");
      img.style.visibility = "visible";
      img.classList.add("move");
      setTimeout(function() {
        img.style.visibility = "hidden";
      }, 2000);
}
