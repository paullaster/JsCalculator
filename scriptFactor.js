var button = document.getElementById('rainbow');
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
function change() {
document.body.style.background = rainbow[Math.floor(7*Math.random())];
} button.addEventListener('click', change);
var form = document.forms[0];
form.addEventListener("submit", factorize, false);
function factorize(event) {
event.preventDefault(); // prevent the form from being submitted
var number = Number(form.number.value);
if(Worker){
    worker = new Worker("./factor.js");
    worker = postMessage(number);
    worker.addEventListener("message", function(e){
        document.getElementById("output").textValue = e.data;
    },false);
}
var factors = String(factorsOf(number));
document.getElementById("output").innerHTML = factors;
}
