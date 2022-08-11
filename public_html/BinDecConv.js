var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("btnConvert").onclick = convert;
     $("btnClear").onclick = btnclr;
    $("txtIn").focus();
   
};

function btnclr() {
    $("txtIn").value = "";
    $("txtCalc").value = "";
    $("txtOut").value = "";
    $("txtIn").focus();
}


function convert() {
    //code for converions goes here...
    var val = $("txtIn").value;
    if (val === "") {
        alert("no value entered for conversion.");
        return;
    }
    var cT = document.getElementsByName("tType");
    if (cT[0].checked) {
        //to Binary
        var dval = parseInt(val);
        if (isNaN(dval)) {
            alert("Input value is not a number");
        } else if ((val % 1) !== 0 ) {
            alert("Number is not an integer.");
            
        } else if (dval <= 0) {
            alert("Input value must be a positive integer");
        } else {
            convertByArray(dval);
        }
        
    } else if (cT[1].checked) {
        //to decimal
        if (isNaBinary(val)) {
            alert("Input value is not a binary number.");
        } else {
            convertToDecimal(val);
        }
    } else {
        alert("Please select a conversion type.");
   
}//end of convert
function isNaBinary(val) {
    for(var i=0; i < val.length; i++) {
        if(val.charAt(i) != '1' && val.charAt(i) !== '0') {
            return true;
        }
    }
    return false;
}

function convertToDecimal(val) {
    //ex; 1101
    //val:8421
    var v = 0;
    var p = 0;
    for(var i=val.length -1; i>=0; i--) {
        if(val.charAt(i) === '1') {
            v = v + Math.pow(2,p);
            $("txtCalc").value = $("txtCalc").value + "There is a (n) " +
                    Math.pow(2,p) + " in the value (2^" + p + ") \n";
            
        }
        p++;
    }
    $("txtOut").value = v;
}
function convertByArray(dval) {
    var rA = new Array();
    var r,i,j;
   
    i=0;
    while (dval > 0) {
        r = dval % 2; //remainder
        rA[i] = r;
        var nV = (dval - r) / 2;
        $("txtCalc").value = $("txtCalc").value + 
                " Decimal " + dval + " divided by 2 = " + nV + 
                " w/Remainder of : " + r + "\n";
       i += 1;
       dval = nV;
    }
   
   for (j=rA.length-1; j>= 0; j--) {
       $("txtOut").value = $("txtOut").value + rA[j];
   }
}

}





