const values = Array.from(document.querySelectorAll('.values'));

function values2Num(values, i){
    let value = Number(values[i].innerText.replace(/[^\d.-]/g, ''));
    return value;
}

function buyOficial(input, num){

    let result = input * num;
    result = result.toFixed(2)
    
    return `${input} USD Oficial valen ${result} ARS para la compra`;
}

function sellOficial(input, num){

    let result = input / num;
    result = result.toFixed(2)

    
    return `${input} ARS valen ${result} USD Oficiales para la venta`;
}

function buyBlue(input, num){

    let result = input * num;
    result = result.toFixed(2)

    
    return `${input} USD Blue valen ${result} ARS para la compra`;
}

function sellBlue(input, num){

    let result = input / num;
    result = result.toFixed(2)

    
    return `${input} ARS valen ${result} USD Blue para la venta`;
}

function sellSolidario(input, num){

    let result = input / num;
    result = result.toFixed(2)

    
    return `${input} ARS valen ${result} USD Solidario para la venta`;
}

function sellPesos(input){
    
    let result = input + input * Number(0.75);
    let result2 = input + input;

    result = result.toFixed(2)
    result2 = result2.toFixed(2)


    return `${input} ARS valen ${result} ARS con 75% de impuestos estándar, o ${result2} ARS si se excedieron los 300 USD mensuales`;
}


function calc(values){
    let inputs = Array.from(document.querySelectorAll('.inputs'));
    let inputsCounter = 0;
    let result;

    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value > 0){
            inputsCounter++;
        }
        if (inputsCounter > 1){
            result = 'Selecciona una sola operación por vez';
            return result;
        }
    }
    for (let i = 0; i < inputs.length; i++){
        let input = Number(inputs[i].value);
        let num = values2Num(values, i);
        if (input != 0) {
            switch(i) {
                case 0:
                    result = buyOficial(input, num);
                    break;
                case 1:
                    result = sellOficial(input, num);
                    break;
                case 2:
                    result = buyBlue(input, num);
                    break;
                case 3:
                    result = sellBlue(input, num);
                    break;
                case 4:
                    result = sellSolidario(input, num);
                    break;
                case 5:
                    result = sellPesos(input);
                    break;
                default:
                    result = 'Ocurrió un problema, verifica que ingresaste un número válido o actualiza la pestaña';
            }
        }
        else {
            if (!result) {
                result = 'Ocurrió un problema, verifica que ingresaste un número válido o actualiza la pestaña';
            }
        }
    }
    return result;
}