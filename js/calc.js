const button = document.getElementById("button");
const body = document.body

function appendNew(body, pesos, dolar){
    let result = pesos / dolar;
    result = Math.round(result*100)/100;

    const createP = document.createElement("p");
    body.appendChild(createP);

    const text = document.createTextNode("Hoy $" + pesos + " pesos, valen $" + result + " dólares.");
    createP.appendChild(text);
}

button.onclick = function(){
    let  pesos = document.getElementById("pesos").value;
    let dolar = Number(document.getElementById("dolar").innerHTML);

    appendNew(body, pesos, dolar);
}
