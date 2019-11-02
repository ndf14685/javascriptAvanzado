console.log('Hola desde el main.js');

// ------------------------------------------------------------------
// Validacion de campos de formularios mediante expresiones regulares
// ------------------------------------------------------------------
// Las expresiones regulares son una secuencia de caracteres que conforman
// un patrón de búsqueda dentro de un string.
// Mediante este mecanismo, podemos validar un string.
// Ventajas: Las expresiones regulares son UNIVERSALES
// Desventaja: Son complejas para aprenderlas y escribirlas

//let regexp = new RegExp('patron');
/*
let regexp = /patron/;
regexp.test('hola mundo!'); // --> true si cumple , --> false si no cumple

if(regexp.test(input.value)) {
    //el campo de entrada pasó la validación
}
else {
    //el campo de entrada NO!!! pasó la validación
}
*/

//Caracteres literales (los que queremos comprobar)
//Caracteres especiales son los que tienen una función determinada (.)
//Con el caracter de escape \ convertimos un especial en literal

//Caracteres Especiales
// . -> comodín
// \d [0-9]-> un dígito entre el 0 y el 9
// \D [^0-9]-> negación de \d
// \w [a-zA-Z0-9_] -> indica todos los caracteres alfanuméricos a-z A-Z 0-9
// \W [^a-zA-Z0-9_] -> negación de \w
// \s -> todos los espacios, saltos de linea, etc
// \S -> negación del \s

//Caracteres de Cantidad
// {N} -> indica cantidad de ocurrencia que espero de ese caracter o patrón
// {m,M} -> indica cantidad min y max de caracteres permitidos
// {m, }
// ? -> el caracter indicado tiene que tener entre 0 y 1 ocurrencias
// * -> el caracter indicado tiene que tener entre 0 y muchas ocurrencias
// + -> el caracter indicado tiene que tener entre 1 y muchas ocurrencias

//Caracter de posición
// $ -> indica que el patrón tiene que chequearse al final del string
// ^ -> indica que el patrón tiene que chequearse al principio del string
// \b (boundry) -> limite de una palabra y no de un parrafo

let regexp = /^ni\.[0-3z]+$/;
let entradaNombre = 'ni.20z2301132123';

console.log(regexp.test(entradaNombre));

let regexp2 = /^\w{5,10}$/;
let entradaNombre2 = 'Daniel';
console.log(regexp2.test(entradaNombre2));


/*
// ------------------------------
// Funciones útiles de Validación
// ------------------------------
let input = document.querySelector('input');
let form = document.querySelector('form');

form.addEventListener('submit', e => {
    //evita la recarga del formulario en el evento submit
    //cancelando el event default (automático)
    e.preventDefault(); 
    //input - select - textarea : value != (innerText / innerHTML)
    let valor = input.value;
    let valor_con_trim = valor.trim();
    let longitud = valor_con_trim.length;
    //console.log(longitud, '*'+valor_con_trim+'*');
    //console.log(valor_con_trim.indexOf(' ')>=0)
    //console.log(valor_con_trim.includes(' '));
    
    //Los ataques XSS son debido a el ingreso de scripts maliciosos
    //innecesarios en los campos de input de un formulario
    console.log(encodeURIComponent(valor_con_trim));

    //let longitud = valor.length;
    //console.log(longitud, '*'+valor+'*');
})

// -------------------------
// Validaciones customizadas
// -------------------------
let input = document.querySelector('input');
let form = document.querySelector('form');

input.addEventListener('input', ()=> {
    //console.log('evento de input');

    let valor = input.value;
    //console.log('evento de input', valor);

    let longitud = valor.length;
    console.log(longitud);
    if(longitud >= 3) {
        console.log('Validación OK!!!!');
        input.setCustomValidity('');
    }
    else {
        console.log('Validación MAL');
        input.setCustomValidity('Este campo debe tener más de 2 caracteres');
    }

})

form.addEventListener('submit', e => {
    e.preventDefault();
    //input - select - textarea : value != (innerText / innerHTML)
    let valor = input.value;
    console.log('El valor ingresado es:', valor);
})


// ------------------------------------------------
// Introducción al manejo de la Api WEB HTMLElement
// ------------------------------------------------
let input = document.querySelector('input');
let btn = document.querySelector('button');
//let form = document.querySelector('form');

//form.addEventListener('submit', e => {
//    e.preventDefault();
//    console.log('click');
//})
btn.addEventListener('click', ()=>{
    //API HTMLElement -> HTMLInputElement -> checkValidity
    console.log('click', input.checkValidity());
})



// -------------------------------------------
// El evento submit del formulario HTML
// -------------------------------------------
let form = document.getElementById('formulario');

//let btn = document.getElementById('btn');
//btn.addEventListener('click', ()=>{
//    console.log('click');
//})

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('click');
})
*/