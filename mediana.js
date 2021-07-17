const lista1 = [
    100,
    200,
    100,
    500,
    100000000000,
    20,
];

const lista2 = [
    113200,
    20540,
    1079800,
    504560,
    100000000000,
    26790,
];

function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 == 0) {
        return true;
    } else {
        return false;
    }
} 

function ordenarArrays(lista) {
    const listaOrdenada = lista.sort((a,b) => a - b);
    return listaOrdenada;
}


function calcularMediana(lista) {
    let mediana;
    const mitadLista = parseInt(lista.length / 2)
    const listaOrdenada = ordenarArrays(lista)
    
    if (esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaArimetica([elemento1, elemento2]);
    
        return mediana = promedioElemento1y2
    }   else {
        return mediana = listaOrdenada[mitadLista]
    }
}

