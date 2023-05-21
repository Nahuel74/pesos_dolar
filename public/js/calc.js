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

    input = Number(input)
    
    let result = input + input * Number(0.75)
    let result2 = input + input

    result = result.toFixed(2)
    result2 = result2.toFixed(2)


    return `${input} ARS valen ${result} ARS con 75% de impuestos estándar, o ${result2} ARS si se excedieron los 300 USD mensuales`;
}

function prices2array(prices){
    let array = []
    $(prices).each(
        (index, element) => {
            element = Number($(element).text().replace(/[^\d.]/g, ''))
            array.push(element)
        }
    )
    return array
}

export function calc(prices, inputs){
    let result

    let values = prices2array(prices)

    if(inputs.filter((index, element) => $(element).val() != "").length > 1){
        return result = "No puedes cargar más de un tipo de cambio por vez"
    }
    
    let activeIndex = $(inputs).filter((index, element) => $(element).val() != "").index(".inputs")
    switch(activeIndex) {
        case 0:
            result = buyOficial($(inputs)[activeIndex].value, values[activeIndex])
            break
        case 1:
            result = sellOficial($(inputs)[activeIndex].value, values[activeIndex])
            break
        case 2:
            result = buyBlue($(inputs)[activeIndex].value, values[activeIndex])
            break
        case 3:
            result = sellBlue($(inputs)[activeIndex].value, values[activeIndex])
            break
        case 4:
            result = sellSolidario($(inputs)[activeIndex].value, values[activeIndex])
            break
        case 5:
            result = sellPesos($(inputs)[activeIndex].value)
            break
        default:
            result = 'Ocurrió un problema, verifica que ingresaste un número válido o actualiza la pestaña'
    }
    return result
}