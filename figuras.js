// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");
function areaCuadrado (lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: "+ areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm, " +
// ladoTriangulo2 + "cm, "+ baseTriangulo + "cm"
// );
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado, base){
    var perimetro = (lado*2)+base;
    return perimetro;
}
// console.log("El perimetro del triangulo es: "+perimetroTriangulo +" cm");

function areaTriangulo(base, altura){
    return ((base * altura) /2);
}
// console.log("El area del triangulo es: "+ areaTriangulo +"cm^2");
console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// const radioCirculo = 4;
const PI = Math.PI;

// console.log("El radio del circulo mide " + radioCirculo+ "cm");

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return (diametro*PI);
}
// console.log("El perimetro del circulo es: "+perimetroCirculo +"cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
} 
// console.log("El area del triangulo es: "+ areaCirculo +"cm^2");
console.groupEnd();

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
} 

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
} 

function CalcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function CalcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function CalcularPerimetroTriangulo() {
    const inputLado = document.getElementById("InputTrianguloLado");
    const valueLado = inputLado.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    var perimetro = perimetroTriangulo(Number(valueLado),Number(valueBase));
    alert(perimetro);
}

function alturaTriangulo(lado, base){
    const altura = Math.sqrt((lado**2)-((base/2)**2));
    return altura;
}

function CalcularAreaTriangulo() {
    const inputLado = document.getElementById("InputTrianguloLado");
    const valueLado = inputLado.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const altura = alturaTriangulo(valueLado,valueBase);

    const area = areaTriangulo(valueBase,altura);
    alert(area);
}

