function isdateoff(inndato,daysoff){
// innkommende dato cms
var splitdato = inndato.split('/');
var inday = splitdato[0];
var indmnd = splitdato[1];
var inyear = splitdato[2];

//dagens dato
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


var valuetoday = ((Number (yyyy))*365)+((Number (mm))*30)+(Number (dd));
var valuecreatday = ((Number (inyear))*365)+((Number (indmnd))*30)+(Number (inday));
var sumdiff = (Number (valuetoday))-(Number (valuecreatday));

if (sumdiff>daysoff){
  //eldre enn 30 dager
return false;
}else{
  //merkes med ny
return true;
}
}

function setselector(val,elementid){
//brukes for å sette standard verdier
// val = value to be set in the selector
const sel = document.getElementById(elementid);
for (var i = 0; i < sel.options.length; ++i) {
    if (sel.options[i].text === val) sel.options[i].selected = true;
}
}

//animasjoner
function fade(element) {
console.log("fade");
if (element.style.display=="block"){
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
    }
}
function unfade(element) {
//er elementet synlig ikke gjør noe
console.log("unfade");

if (element.style.display=="none"){
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
    }
}
function deleteChild(element) {
        //e.firstElementChild can be used.
        var child = element.lastElementChild; 
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }
//klargjøre fade elementer
function startinghidden(element){
element.opacity = 0;
element.style.display = 'none';
}
