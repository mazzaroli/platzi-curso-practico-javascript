const lista1= [1,4,4,4,4,4,4,4,4,3,2,43,4,1,2,1,1,1,4,2,4,2,2,1,4,4,34,4,1,2,2,424,2,1,4,34,2,2,1];

function calcularModa(lista) {
    
    // se crea un objeto vacio donde se guardara la lista
    const listaCount = {}

    // ordena la lista en un objeto {elemento: veces que aparece el elemento}
    lista.map(
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )

    // transforma el objeto a un array de arrays, queda tal que array[ "elemento" , veces que aparece el elemento ]
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )

    // se bichea la ultima moda
    const moda = listaArray[listaArray.length - 1];
    
    //master of the code
    return moda
}