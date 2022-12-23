function companyrights (array,cid){
	//tester innkommende bruker om den har rett å se dette selskapet
var index = array.indexOf(cid);
if(index > -1){  
  var value = array[index];
  if (value.lenght == cid.lenght ){
  return (true);
  }else{
return (false);
  }
}else{  
    return (false);       
}  
}


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

function setselector(elementid,val){
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

function copydummyelement(node,wrapper,array1,array2,array3){
var arrayLength = array1.length;
	for (var i = 0; i < arrayLength; i++) {
  const clone = node.cloneNode(true);
	wrapper.appendChild(clone);
	$(clone).show();
  // sette ny id og click på switsj
  const switsj = clone.querySelector("[dummysvitsj]");
  switsj.setAttribute("id",array1[i]);
  switsj.setAttribute("data-levid",array3[i]);
  var onclick = "leverandorunselect('"+array1[i]+"')"
  switsj.setAttribute("onclick",onclick);
  switsj.setAttribute("name", array2[i]);
  switsj.setAttribute("value", "webflowid");
  switsj.setAttribute("title", "airtableid");
  const leverandornavn = clone.querySelector("[dummylevarandornavn]");
  leverandornavn.innerHTML = array2[i];
}
}
async function callapi(collectionId,itemId,fieldnames,fieldvalues,type,db,fid){
     	let token = MemberStack.getToken();
			let bodystring="{";
			for (let i = 0; i < fieldnames.length; i++) {
        if(Array.isArray(fieldvalues[i])){
          //om det er et arrayfelt
          let subitem = "";
          var subitemarray = fieldvalues[i];
          for (let i = 0; i < subitemarray.length; i++) {
              //loope gjennom alle subitem
              subitem = subitem+'"'+subitemarray[i]+'"'+',';
          }
          subitem = subitem.slice(0, -1)

        bodystring = bodystring+'"'+fieldnames[i]+'"'+":"+"["+subitem+"]"+",";
        }else{
       //om det er et vanlig felt
			 bodystring = bodystring+'"'+fieldnames[i]+'"'+":"+'"'+fieldvalues[i]+'"'+",";
        }
			}
			bodystring = bodystring.slice(0, -1)
			bodystring = bodystring+"}";
			console.log(bodystring);
 
//PATCH
if(type == "PATCH"){
     let response2 = await fetch(`https://webflow-woad.vercel.app/api/item?collectionId=${collectionId}&itemId=${itemId}&token=${token}`, {
        method: "PATCH",
        body: bodystring,
        headers: {
        	'Content-Type': 'application/json'
        }
      });
  
      let data2 = await response2.json();
      apireturn (data2,fid);
		}else if (type=="POST"){

		}

}
