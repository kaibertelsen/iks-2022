
  input.oninput = function() {
  document.getElementById("omsetning").value = input.value;
  document.getElementById("valuedisplay").innerHTML = input.value;
	  

    var omsetning= input.value;
    //Omsetning
	  
   document.getElementById("prosentvarekostnad").innerHTML = "30%";
   document.getElementById("prosentvarekostnad-2").value = "30%";
	  
   let varekostnad = omsetning*prosentvarekostnad;
       varekostnad = round(varekostnad, 0);
       varekostnad = varekostnad.toLocaleString('en-US');
       varekostnad=varekostnad.replace(",", " ");
   document.getElementById("varekostnad").innerHTML = varekostnad;
   document.getElementById("varekostnad-2").value = varekostnad;
   
    //Besparelse
      let besparelse = varekostnad*snittbasparelse;
       besparelse = besparelse.toLocaleString('en-US');
       besparelse=besparelse.replace(",", " ");
   document.getElementById("besparelse").innerHTML = besparelse+",-";
   document.getElementById("besparelse-2").value = besparelse+",-";
	  
   
  
 
  };


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function rabattvolum(paneler){

	if(paneler<=segment1antstopp){
  //segment 1
  var rpanel = paneler-segment1antstart;
  console.log("seg1",rpanel);
  var sumprpanel = segment1prisstart-(segment1prisstart*(segment1rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
	}else if(paneler> segment1antstopp && paneler < segment3antstart){
   //segment 2
  var rpanel = paneler-segment2antstart;
  console.log("seg2",rpanel);
  var sumprpanel = segment2prisstart-(segment2prisstart*(segment2rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
   
	}else if(paneler> segment2antstopp){
   //segment 3
  var rpanel = paneler-segment3antstart;
  console.log("seg3",rpanel);
  var sumprpanel = segment3prisstart-(segment3prisstart*(segment3rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
   
	}



}


function enovastotte(paneler,kw) {
if (paneler ==1){
return (3795);
}else if (paneler ==2){
return (7590);
}else{

    var multiplier = (kw*stotteprkw)+stottepranlegg;
    
    if(multiplier>maxstotte){
    multiplier=maxstotte;
    }
    
    return (multiplier);
    }
}
