const val = document.getElementsByClassName('.val');

console.log(val)

/*
const buttonBuy = document.getElementById("button-buy");
const buttonSell = document.getElementById("button-sell");

const body = document.body;
let appendExist = false;

function buying(body, dollarValue, input){
    let unit1 = "USD";
    let unit2 = "ARS";
    let unit3 = "compra";
    let result = input * dollarValue;
    result = Math.round(result*100)/100;
    
    appendNew(body, result, input, unit1, unit2, unit3);
}

function selling(body, dollarValue, input){
    let unit1 = "ARS";
    let unit2 = "USD";
    let unit3 = "venta";
    let result = input / dollarValue;
    result = Math.round(result*100)/100;
    
    appendNew(body, result, input, unit1, unit2, unit3);
}

function appendNew(body, result, input, unit1, unit2, unit3){

    text = "Hoy " + input + " " + unit1 + " valen " + result + " " + unit2 + " para la " + unit3;

    if (appendExist === false){

        const createP = document.createElement("p");
        body.appendChild(createP);

        const textNode = document.createTextNode(text);
        createP.appendChild(textNode);
        createP.setAttribute("id", "createdP")

        appendExist = true;
    }
    else {
        const createdP = document.getElementById("createdP");
        createdP.innerHTML = text;
    }
}

buttonBuy.onclick = function(){
    const dollarValue = Number(document.getElementById("compra").innerHTML);
    let input = document.getElementById("input-dollars").value;

    if (input != "") {
        buying(body, dollarValue, input);
    }
}

buttonSell.onclick = function(){
    const dollarValue = Number(document.getElementById("venta").innerHTML);
    let input = document.getElementById("input-pesos").value;
    
    if (input != "") {
        selling(body, dollarValue, input);
    }
}

*/