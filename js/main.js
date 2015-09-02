var redButton = document.querySelector(".one")
var whiteButton = document.querySelector(".two")
var blueButton = document.querySelector(".three")
var yellowButton = document.querySelector(".four")

var buttons = document.getElementById("switcher")
buttons.addEventListener("click", function (event){
  console.log(event.target)
  if(event.target.tagname == "LI")
  console.log(event.target)
  document.body.classNme = event.target.className
})

redButton.addEventListener("click", function( event ) {
  document.body.className = event.target.className
});
whiteButton.addEventListener("click", function( event ) {
  document.body.className = event.target.className
});
blueButton.addEventListener("click", function( event ) {
  document.body.className = event.target.className
});
yellowButton.addEventListener("click", function( event ) {
  document.body.className = event.target.className
});
