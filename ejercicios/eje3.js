/* 
    Pide una nota del 0 al 20 e imprime:
    -----------------------------------

    "Desaprobado" si es menor de 11
    "Regular" si es entre 11 y 13
    "Bueno" si es entre 14 y 17
    "Excelente" si es entre 18 y 20
    Valida que esté en el rango 0-20, si no, muestra "Nota inválida".
*/
let nota = -5

if(nota > 0 && nota <= 20){
    if(nota < 11){
        console.log("Desaprobado")
    }else if(nota > 11 && nota < 13){
        console.log("Regular")
    }else if(nota > 14 && nota < 17){
        console.log("Bueno")
    }else if(nota > 18 && nota <= 20){
        console.log("Excelente")
    }
}else{
    console.log("Nota invalido")
}