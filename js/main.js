
//1. Retornar un string.
function devolverString(str){
     // 🎯 'Return' la string provista: str
    // Tu código: 
    const isAstring = str;
    return isAstring
}
console.log(devolverString('Hola'));

//2. Retornar una suma
function suma(x, y){
    // "x" e "y" son números: 
    // 🎯 suma "x" e "y" y retorná el valor
    // Tu código: 
    const sum = x + y;
    return sum
}
suma (5,7);

//3. Retornar una resta.
function resta(x, y){
    // 🎯 resta "y" e "x" y retorná el valor
    // Tu código: 
    const subtract = x - y;
    return subtract
}
console.log(resta(10, 3));

//4. Retornar una multiplicación.
function multiplicar(x, y){
    // 🎯 multiplica "x" e "y" y retorná el valor
    // Tu código: 
    const multiplication = x * y;
    return multiplication
}
console.log(multiplicar (13, 20));

//5. Retornar una división.
function dividir(x, y){
    // 🎯 dividí "x" e "y" y retorná el valor
    // Tu código:
    const division = x / y;
    return division
}
dividir(50, 4);

//6. Comparar números.
function igualdad(x, y){
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    // Tu código:
    if ( x == y){
        return true;
    } else {
        return false
    }
}
console.log(igualdad(3, 5))

//7. Comparar la longitud de dos strings.
function compararLongitud(str1, str2){
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    // Tu código: 
    if(str1.length == str2.length){
        return true
    } else {
        return false
    }
}
console.log(compararLongitud("love", "hurts"));

//8. Comparar un parámetro I.
function menorQueNoventa(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    // Tu código: 
    if (num < 90){
        return true
    } else {
        return false
    }
}
console.log(menorQueNoventa(120));

//9. Comparar un parámetro II.
function mayorQueCincuenta(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    // Tu código: 
    if (num < 50){
        return true
    } else {
        return false
    }
}
mayorQueCincuenta(45);
// 10.Retornar el módulo o resto.
function obtenerResto(x, y){
    // 🎯 Obtener el resto de la división de "x" e "y".
    // Tu código: 
    const residuo = x % y;
    return residuo
}
console.log(obtenerResto(20, 3));

// 11.Comprobar si es par.
function esPar(num){
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    // Tu código: 
    if (num % 2 == 0){
        return true
    } else {
        return false
    }
}
console.log(esPar(32));

// 12.Comprobar si es impar.
function esImpar(num){
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    // Tu código: 
    if (num % 2 != 0) {
        return true
    } else {
        return false
    }
}
console.log(esImpar(24));

// 13.Elevar un número al cuadrado.
function elevarAlCuadrado(num){
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    // Tu código: 
    const numAlCuadrado = Math.pow(num, 2)
    return numAlCuadrado
}
console.log(elevarAlCuadrado(10));

// 14.Elevar un número al cubo.
function elevarAlCubo(num){
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    // Tu código: 
    const numAlCubo = Math.pow(num, 3)
    return numAlCubo
}
console.log(elevarAlCubo(4));

// 15.Elevar un número a un exponente.
function elevar(num, exponent){
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
    const numElevadoAlExponente = Math.pow(num, exponent)
    return numElevadoAlExponente
}
console.log(elevar(2, 6));

// 16.Redondear un número.
function redondearNumero(num){
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código: 
    const roundedNum = Math.round(num)
    return roundedNum
}
console.log(redondearNumero(17.43));

// 17.Redondear un número hacia arriba.
function redondearHaciaArriba(num){
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código:
    const proximoNum = Math.ceil(num)
    return proximoNum 
}
console.log(redondearHaciaArriba(13.23));

// 18. Retornar un número aleatorio.
function numeroRandom(){
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código: 
    const randomNumber = Math.random()
    return randomNumber
}
console.log(numeroRandom());

//19.Comprar si un numero es positivo.
function esPositivo(num){
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    // Tu código: 
    switch (Number.isInteger(num) === true){
        case Math.sign(num) == 1:
            return `El número ${num} es positivo`
            break;
        case Math.sign(num) == -1:
            return `El número ${num} es negativo`
            break;
        case Math.sign(num) == 0:
            return false
            break;
    }
} 
console.log(esPositivo(-20));

// 20.Concatenar strings I.
function agregarSimboloDeExclamacion(str){
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string 
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    // Tu código:
    return `${str}!`
}
console.log(agregarSimboloDeExclamacion("Hello world"));

// 21.Concatenar strings II.
function combinarNombres(nombre, apellido){
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    // Tu código: 
    return `${nombre} ${apellido}`
}
console.log(combinarNombres("Kate", "Gomez"));

// 22.Concatenar strings III.
function retornarSaludo(nombre){
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    // Tu código:
    return `Hola ${nombre}!`
}
console.log(retornarSaludo("Ana"));

// 23.Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho){
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
    // Tu código:
    const area = alto * ancho
    return area
}
console.log(areaDelRectangulo(7, 12));

// 24.Operaciones matemáticas II.
function perimetroDelCuadrado(lado){
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    // Tu código:
    const squarePerimeter = lado * 4
    return squarePerimeter
}
console.log(perimetroDelCuadrado(7));

// 25.Operaciones matemáticas III.
function areaDelTriangulo(base, altura){
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    // Tu código: 
    const triangleArea = base * altura / 2
    return triangleArea
}
console.log(areaDelTriangulo(5, 4));

// 26.Operaciones matemáticas IV.
function deEuroAdolar(euro){
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    // Tu código:
    const dolares = euro * 1.20
    return dolares
}
console.log(deEuroAdolar(10));
// 27.Condicionales.
function esVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código:
    const vowels = /[aeiou]/;
    if (typeof letra === "string" && letra.length === 1 && letra.match(vowels)){
        return "Es vocal"
    } else if (letra.length != 1) {
        return "Dato incorrecto"
    } else {
        return "Dato incorrecto"
    }
}
console.log(esVocal("e"));