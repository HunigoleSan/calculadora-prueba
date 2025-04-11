export function componenteHistorialDeOperaciones(operation){
    let $historial = document.getElementById("historial")
   
    let {operacion,resultado} = operation
    
    let html = `
        <div class="historial-operator">
            <p class="historial-operation">${operacion}</p>
            <p class="historial-result">${resultado}</p>
        </div>
    `
    $historial.insertAdjacentHTML("beforeend", html)
}