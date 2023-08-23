
/*
//eksempelheader oppbyggning på webflow
function makecsvheader(){
  //make header first raw for csv
  var headerarray = ["Dato","Navn","Prosjekt","Timer","Kommentar","Aldersgruppe"];
  return headerarray;
}

//start generate file på webflow
function makecsvfile(){
    //lageheader
    var headerarray = makecsvheader();
    //lage innhold
    //hovencalssname for merking (minus tallnr.)
    var ccname = "column"
  //filarray
  var filarray=makecsvarraylist(headerarray,ccname)
//filnavnet
const d = new Date();
downloadcsvfile(filarray,"Firmaliste"+d);  
}
*/
function makecsvarraylist(headerarray,ccname){
  //antall kolonner
  var cant = headerarray.length;

  var contentlistarray = [];
   contentlistarray.push(headerarray);
	//finne alle row
	var rows = document.getElementsByClassName("raw");
		for (var i=0;i<rows.length;i++){
  	contentlistarray.push(inforawarray(rows[i],cant,ccname));
  	}

return contentlistarray;
}

function inforawarray(rowelement,cant,ccname){
  var rawarray = [];
  //finne verdiene i kollonnen
    for (var i=0;i<cant;i++){
        let classname = ccname+i;
        var valuearray = rowelement.getElementsByClassName(classname);
	   let value = ""; 
	    for (var a = 0;a<valuearray.length;a++){
		value = value+valuearray[a].innerHTML;
		    if (valuearray.length>1){
			//da er det en array
			    if(!a==valuearray.length-1)
			    //ikke den siste
			    value = value+" : ";
		    }
	    	} 
        rawarray.push(value);
    }
  return rawarray;
}

function downloadcsvfile(array,filename){
	let csvContent = "data:text/csv;charset=ANSI," 
    + array.map(e => e.join(",")).join("\n");
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", filename+".csv");
document.body.appendChild(link); // Required for FF
link.click(); 
}









