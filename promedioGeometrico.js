const lista = [1,2,3,4,5,9];

function calcularMediaGeometrica(lista) {
    const multiplicacion = lista.reduce(
        function(a,b) {
            return a * b;
        }
    );
    return multiplicacion ** (1 / lista.length)
}

console.log(calcularMediaGeometrica(lista))