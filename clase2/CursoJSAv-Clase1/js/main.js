console.log('Clase 1 - JSAv')
/*
//bloque de código anónimo
{
    let a = 5
    console.log(a)
}
//console.log(a)

//bloque de código condicional
if(true) {
    const b = 7
    //b = 10
    console.log(b)
}
//console.log(b)

console.log('--------------')
for(let i=0; i<10; i++) {
    console.log(i)
}
//console.log(i)
console.log('--------------')


//bloque de código funcional
function foo() {
    let c = 9
    console.log(c)
}

foo()
//console.log(c)
*/
/*
const dobleDe = a => a*2
let num = 7
console.log(`El doble de ${num} es ${dobleDe(num)}`)

const getMensaje = () => 'Hola mundo'
console.log(getMensaje())

const getNombrePersona = () => ({ nombre: 'Juan' })
console.log(getNombrePersona())

const mostrarMensaje = () => console.log('Hola mundo 2')
mostrarMensaje()

const sumar = (a,b,c,d) => a + b + c + d
console.log(sumar(2,3,4,5))

const sumar2 = a => b => c => d => a + b + c + d
console.log(sumar2(2)(3)(4)(5))

var num1 = 77
var num2 = num1
num1 = 99
console.log(num1,num2)

var arr1 = [1,2,3]
var arr2 = arr1
arr1[0] = 44
console.log(arr1,arr2)

function sumar3(a,b) {
    a[0] = 6
    b[0] = 5
    return a[0] + b[0]
}

let n1=[5],n2=[8]
console.log(sumar3(n1,n2))
console.log(n1,n2)
*/
console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('titulo')[0])
console.log(document.getElementsByTagName('h1')[0])

var titulo = document.getElementById('titulo')
//titulo.innerHTML = '<i>Holaaaa!</i>'
console.log(titulo.innerHTML)

var p = document.createElement('p')
p.innerText = "Soy un párrafo!"
var body = document.getElementsByTagName('body')[0]
body.appendChild(p)


