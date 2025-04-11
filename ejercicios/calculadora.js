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
let historial = []


/* - En la variable $numberNode se recorre cada boton (btn) y se le agrega un evento click */
$numberNode.forEach(btn =>{
    agregarEventoClick(btn)
})
$operationNode.forEach(operador =>{
    agregarEventoClick(operador)
})

/* - Se define la función agregarEventoClick que recibe como parametro un elemento */
function agregarEventoClick(elemento){
    /* - Al elemento se le agrega un Listener para el evento click, en la cual ejecutara una función de tipo flecha  */
    elemento.addEventListener('click',()=>{
        /* - Se le define una variable btnPresionado que hace referencia al elemento */
        let btnPresionado = elemento

        /* - Verificamos si el btnPresionado tiene la clase "button-number" */
        if(btnPresionado.classList.contains('button-number')){
            /* Si es asi, se ejecutara la siguiente operación */
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

        $operation.innerHTML = valorAnterior + operador + valorActual
        $result.innerHTML = resultado

        historial.push(`${valorAnterior} ${operador} ${valorActual} = ${resultado}`)
        console.log(historial)
        
        
        valorActual = ""
        valorAnterior = ""
        operador = ""

        console.log(valorAnterior + operador + valorActual)
    }
}




