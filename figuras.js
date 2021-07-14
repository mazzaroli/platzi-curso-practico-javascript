// Codigo Cuadrado
console.group("Cuadrados")
    // const ladoCuadrado = 5;
    // console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`)

    function perimetroCuadrado(lado) {
        return lado * 4;
    } 
    // console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`)

    function areaCuadrado(lado) {
        return lado * lado
    }
    // console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`) 
console.groupEnd()


// Codigo Triangulo
console.group("Triangulos")
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;
    // console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)

    // const alturaTriangulo = 5.5;
    // console.log(`La altura del triangulo es de: ${alturaTriangulo}`)

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    } 
    // console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`)

    function areaTriangulo(base, altura) {
        return (base * altura) / 2
    };
    // console.log(`El area del triangulo es: ${areaTriangulo} cm^2`) 
console.groupEnd()


// Codigo circulo
console.group("Circulos")

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo} cm`)

// Diametro
function diametroCirculo(radio) {
    return radio * 2
}

// Pi
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Area
function areaCirculo(radio) {
    return PI * ( radio ** 2 )
}
console.groupEnd()
