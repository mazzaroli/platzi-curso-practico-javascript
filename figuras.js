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


    function alturaTriangulo(lado1,lado2, base){
        const teoremaPitagoras = Math.sqrt(lado1**2 - ((base/2) ** 2));
        const isoceles = lado1 === lado2 && base < lado1 + lado2 ? true : false;
        return altura = isoceles === true?  teoremaPitagoras : "revisa que los lados sean iguales, y la base menor a la suma de los lados";
    }
    console.log(alturaTriangulo)


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


// Aqui interactuamos con el html
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
// Triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");

    const value1 = parseFloat(inputLado1.value);
    const value2 = parseFloat(inputLado2.value);
    const value3 = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura")

    const value1 = parseFloat(inputLado1.value);
    const value2 = parseFloat(inputLado2.value);
    const value3 = parseFloat(inputBase.value);
    const value4 = parseFloat(inputAltura.value)

    const area = areaTriangulo(value3, value4);
    alert(area);
}

// Circulo

function calcularCircunferenciaCirculo() {
    const input = document.getElementById("inputCirculo") ;
    const value = input.value;

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo") ;
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}

// Triangulo Isoceles

function calcularAlturaTrianguloIsoceles() {
    const inputLado1 = document.getElementById("inputTrinIsocelesLado1");
    const inputLado2 = document.getElementById("inputTrinIsocelesLado2");
    const inputBase = document.getElementById("inputTrinIsocelesBase");

    const value1 = parseFloat(inputLado1.value) ;
    const value2 = parseFloat(inputLado2.value);
    const value3 = parseFloat(inputBase.value);
    
    const altura = alturaTriangulo(value1, value2, value3);
    alert(altura);
}

