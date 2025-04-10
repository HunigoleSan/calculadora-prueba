/* 
    CREAR UNA CALCULADORA INTERACTIVO
    QUE EJECUTA LAS 3 OPERACIONES BASICAS
*/

let $numberNode = document.querySelectorAll('.button-number')
let $operationNode = document.querySelectorAll('.button-operation')
let $result = document.querySelector('.result')
let $operation = document.querySelector('.operation')

let valorAnterior = ""
let valorActual = ""
let operador = ""
let resultado = ""

let objOperaciones = {
    valorActual,
    valorAnterior,
    operador,
    resultado
}

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
            $operation.innerHTML = valorAnterior + operador + valorActual
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

        /* objOperaciones = {
            valorActual,
            valorAnterior,
            operador,
            resultado
        } */
        $operation.innerHTML = valorAnterior + operador + valorActual
        $result.innerHTML = resultado
        
        valorActual = ""
        valorAnterior = ""
        operador = ""

        console.log(valorAnterior + operador + valorActual)
    }
}


