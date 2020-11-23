
window.onload = function() {

  document.getElementById("btn").addEventListener("click", function() {
    let myElement = document.getElementById('doppio');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);
  
  document.getElementById("btn2").addEventListener("click", function() {
    let myElement = document.getElementById('americano');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);
  
  document.getElementById("btn3").addEventListener("click", function() {
    let myElement = document.getElementById('macchiato');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);
  
  document.getElementById("btn4").addEventListener("click", function() {
    let myElement = document.getElementById('flatwhite');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);
  
  document.getElementById("btn5").addEventListener("click", function() {
    let myElement = document.getElementById('cappuccino');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);
  
  document.getElementById("btn6").addEventListener("click", function() {
    let myElement = document.getElementById('caffelatte');
    let topPos = myElement.offsetTop;
  
    window.scroll(0, topPos);
  }, false);

}