const clear = document.querySelector('#clear');
const tdResult = document.querySelector('#td-result');
const button = document.querySelector('#button');

let activePrint = false;

function appendNew(tdResult, text){

    if (activePrint === false){

        const createP = document.createElement("p");
        tdResult.appendChild(createP);

        const textNode = document.createTextNode(text);
        createP.appendChild(textNode);
        createP.setAttribute("id", "createdP")

        activePrint = true;
    }
    else {
        const createdP = document.getElementById("createdP");
        createdP.innerHTML = text;
    }
}

button.addEventListener('click', function(){
   text = calc(values);
   appendNew(tdResult, text);
})

clear.addEventListener('click', function(){
    while(tdResult.firstChild){
        tdResult.removeChild(tdResult.firstChild);
    }

    let inputs = Array.from(document.querySelectorAll('.inputs'));

    inputs.forEach(input => {
        input.value = '';
    });
    activePrint = false;
})