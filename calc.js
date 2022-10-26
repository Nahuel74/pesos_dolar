const button = document.getElementById("button");
const container = document.getElementById("container")
let isElement = false;

function appendNew(container, pesos, dolar){
    let result = pesos / dolar;
    result = Math.round(result*100)/100;

    const createP = document.createElement("p");
    createP.setAttribute("id", "element");
    container.appendChild(createP);

    const text = document.createTextNode("Hoy $" + pesos + " pesos, valen $" + result + " dólares.");
    createP.appendChild(text);

    isElement = true;
}

function editNew(pesos, dolar) {
    let  element = document.getElementById("element");

    let result = pesos / dolar;
    result = Math.round(result*100)/100;
    
    element.innerHTML = "Hoy $" + pesos + " pesos, valen $" + result + " dólares.";
}

button.onclick = function(){
    let  pesos = Number(document.getElementById("pesos").value);
    let dolar = Number(document.getElementById("dolar").innerHTML);

    if(isElement === false){
        appendNew(container, pesos, dolar);
    }
    else{
        editNew(pesos, dolar)
    }
}
