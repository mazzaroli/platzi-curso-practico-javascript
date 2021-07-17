const lista = [34, 27, 45, 55, 22, 34]

function mediaArmonica(lista){
    
    // invertimos los valores del array tal que 1/x1, 1/x2, ... 1
    const valorInvertido = lista.map(
        function(valor){
            return (1 / valor) 
        }
    )
    
    // sumamos todos los valores invertidos para que quede Σ 1/xn
    const valorPromedio = valorInvertido.reduce(
        function(a = 0, b){
            return a + b
        }
    )

    // dividimos sacamos el promedio
    return lista.length / valorPromedio
}

console.log(mediaArmonica(lista))
// tira 33.018 este esta bien