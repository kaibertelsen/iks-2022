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
