/* 
    Clasificación de edades
    -------------------------------------
    Pide una edad e imprime:

    "Eres un niño" si es menor de 12
    "Eres un adolescente" si es entre 12 y 17
    "Eres un adulto" si es 18 o más

*/
let edad = 30

if(edad < 12){
    console.log("Eres un niño")
}else if(edad > 12 && edad < 17){
    console.log("Eres un adolescente")
}else if(edad > 18){
    console.log("Eres un adulto")
}
