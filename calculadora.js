var calc = {"numb1": "",
            "numb2": "",
            "operator":"",
            "total": 0};
var equal = false;

function clearAll(){
   calc["numb1"] ="";
   calc["numb2"] = "";
   calc["operator"] = "";
   calc["total"] = "";
   document.getElementById("display-result-small").innerHTML = "";
   document.getElementById("display-result").innerHTML = "0";
   return;
}
function clearPart(){
   if(calc["operator"] == ""){
      calc["numb1"] = "";
      document.getElementById("display-result").innerHTML = "0";
      document.getElementById("display-result-small").innerHTML = "";
   }else {
      calc["numb2"] = "";
      document.getElementById("display-result").innerHTML = "0";
   }
   return;
}

function addNumber(intValue) {
   if(calc["operator"] == ""){
      calc["numb1"] = calc["numb1"] + intValue;
      document.getElementById("display-result-small").innerHTML = calc["numb1"];
      document.getElementById("display-result").innerHTML = calc["numb1"];
      console.log('numb1 = ' + calc["numb1"]);
   }else{
      calc["numb2"] = calc["numb2"] + intValue;
      document.getElementById("display-result").innerHTML = calc["numb2"];
      console.log('numb2 = ' +calc["numb2"]);
   }
   return;
}

function addPoint(){
   if(calc["operator"] == ""){
      calc["numb1"] = calc["numb1"] + ".";
      document.getElementById("display-result-small").innerHTML = calc["numb1"];
      document.getElementById("display-result").innerHTML = calc["numb1"];
      console.log('numb1 = ' + calc["numb1"]);
   }else{
      calc["numb2"] = calc["numb2"] + ".";
      document.getElementById("display-result").innerHTML = calc["numb2"];
      console.log('numb2 = ' +calc["numb2"]);
   }
}

function operator(op) {
   if(calc["numb1"] != ""){
      calc["operator"] = op;
      document.getElementById("display-result-small").innerHTML = calc["numb1"] +" "+ calc["operator"];
      document.getElementById("display-result").innerHTML = "0";
      console.log(calc["operator"])
   }
   return;
}

function result() {
   switch(calc["operator"]) {
      case "+": 
      calc["total"] = +calc["numb1"] + +calc["numb2"];
      break;
      case "-": 
      calc["total"] = +calc["numb1"] - +calc["numb2"];
      break;
      case "*": 
      calc["total"] = +calc["numb1"] * +calc["numb2"];
      break;
      case "/": 
      calc["total"] = +calc["numb1"] / +calc["numb2"];
      break;
   }
   document.getElementById("display-result-small").innerHTML = calc["numb1"] +" "+ calc["operator"] +" "+ calc["numb2"];
   calc["operator"] = "";
   calc["numb2"] = "";
   calc["numb1"] = calc["total"].toString(10);
   document.getElementById("display-result").innerHTML = calc["total"];
   console.log('total = ' + calc["total"]);
   return;
}