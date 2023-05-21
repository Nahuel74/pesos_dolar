import { calc } from "./calc.js"

export function print(){
    let value = calc($(".values"), $(".inputs"))
    $("#td-result").html(`<p>${value}<p>`)
}

export function clear(){
    $('.inputs').val("")
    $("#td-resul").html(`<p></p>`)
}