
function calcularMediaArimetica(lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const getAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;