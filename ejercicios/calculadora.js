import { componenteHistorialDeOperaciones } from "../componente/historial-operacion.js"
/* 
    CREAR UNA CALCULADORA INTERACTIVO
    QUE EJECUTA LAS 3 OPERACIONES BASICAS
*/

/* - En la variable $numberNode, almacena todos los elementos del documento que tienen la clase .button-number */
let $numberNode = document.querySelectorAll('.button-number')
let $operationNode = document.querySelectorAll('.button-operation')
/* - En la variable $result, almacena el primer elemento del documento que tiene la clase .result */
let $result = document.querySelector('.result')
let $operation = document.querySelector('.operation')


let valorAnterior = ""
let valorActual = ""
let operador = ""
let resultado = ""
let operacionMemoria = ""
let banderaOperacion = false
let historial = []


$numberNode.forEach(btn =>{
    agregarEventoClick(btn)
})
$operationNode.forEach(operador =>{
    agregarEventoClick(operador)
})

function agregarEventoClick(elemento){
    elemento.addEventListener('click',()=>{
        let btnPresionado = elemento

        if(btnPresionado.classList.contains('button-number')){
            limpiarBanderaOperacion()
            valorActual += elemento.textContent
            $result.innerHTML = valorActual
        }else{
            let ope = elemento.textContent
            console.log(valorAnterior, operador, valorActual)
            detectarOperacion(ope)
        }
    })
}

function detectarOperacion(ope){
    switch(ope){
        case "+":
            operador = "+"
            valorAnterior = valorActual
            valorActual = ""
            $result.innerHTML = "0"
            $operation.innerHTML = valorAnterior + operador + valorActual
            break 
        case "-":
            operador = "-"
            valorAnterior = valorActual
            valorActual = ""
            $result.innerHTML = "0"
            $operation.innerHTML = valorAnterior + operador + valorActual
            break
        case "*":
            operador = "*"
            valorAnterior = valorActual
            valorActual = ""
            $result.innerHTML = "0"
            $operation.innerHTML = valorAnterior + operador + valorActual
            break
        case "=":
            resultadoDeLaOperacion(ope)

        default : "Ocurrio en la operación"

    }

    
}

function resultadoDeLaOperacion(ope){
    if(ope === "="){
        if(operador === "+"){
            resultado = parseInt(valorAnterior) + parseInt(valorActual)
        }else if(operador === "-"){
            resultado = parseInt(valorAnterior) - parseInt(valorActual)
        }else if (operador === "*"){
            resultado = parseInt(valorAnterior) * parseInt(valorActual)
        }
        mostrarResultadoEnPantalla(resultado)
        
        
    }
}
function historialDeOperaciones(resultado){
    
    let objOperacion = {
        operacion: valorAnterior + operador + valorActual,
        resultado: resultado
    }
    historial.push(objOperacion)
    mostrarHistorialDeOperaciones()
    /* console.log(historial) */
}

function mostrarHistorialDeOperaciones(){
    let $historial = document.getElementById("historial")
    $historial.innerHTML = ""
    historial.forEach(his =>{
        componenteHistorialDeOperaciones(his)
    })
}

function mostrarResultadoEnPantalla(resultado){
    historialDeOperaciones(resultado)

    operacionMemoria = valorAnterior + operador + valorActual
    $operation.innerHTML = operacionMemoria
    operacionMemoria = ""

    $result.innerHTML = resultado
    banderaOperacion = true

    /* Limpiamos las variables */
    valorActual = ""
    valorAnterior = ""
    operador = ""

    console.log(valorAnterior + operador + valorActual)
}

function limpiarBanderaOperacion(){
    if(banderaOperacion != false){
        $operation.innerHTML = ""
        banderaOperacion = false
    }
}


