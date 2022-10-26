const button = document.getElementById("button");
const body = document.body;
let appendExist = false;

function pesos2Dolar(pesos, dolar){
    let result = pesos / dolar;
    result = Math.round(result*100)/100;
    
    return result;
}

function appendNew(body, pesos, dolar){
    if (appendExist === false){

        const createP = document.createElement("p");
        body.appendChild(createP);

        const text = document.createTextNode("Hoy $" + pesos + " pesos, valen $" + pesos2Dolar(pesos, dolar) + " dólares.");
        createP.appendChild(text);
        createP.setAttribute("id", "createdP")

        appendExist = true;
    }
    else {
        const createdP = document.getElementById("createdP");
        createdP.innerHTML = "Hoy $" + pesos + " pesos, valen $" + pesos2Dolar(pesos, dolar) + " dólares.";
    }
}

button.onclick = function(){
    let pesos = document.getElementById("pesos").value;
    let dolar = Number(document.getElementById("dolar").innerHTML);

    appendNew(body, pesos, dolar);
}
