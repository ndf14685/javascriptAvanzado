var uno = () => {
    console.log('soy la funcion 1')
}


var dos = () => {
    console.log('soy la funcion 2')
}


uno()
dos()

function prueba(item, callback) {
    console.log(item)
    callback()
}

prueba(1, uno)//Aca no se ejecuta uno()



var btn = document.getElementById('btn')
/* btn.onclick = console.log('click') --> Esto asi no funciona, porque espera un callback */
/* 
btn.onclick = function(){
    console.log('click')
}
     De esta manera funciona*/


/*     Pero de forma mas resumida se puede llamar asi:  */
/* btn.onclick = () => console.log('click')
 */

/* Llamo a la funcion uno */
/* btn.onclick = uno

btn.onclick = dos */

console.log('-----------------------------')

/* btn.addEventListener('click', uno)

btn.addEventListener('click', dos) */


function sumar(a, b, cb) {
    var r = a + b

    cb(r, 1, 2, 3, 4, 5)

}


sumar(3, 4, function (res, a, b, c, d, e) {
    console.log(res, a, b, c, d, e)
}
)


function prtRes(res, a, b, c, d, e) {
    console.log(res, a, b, c, d, e)
}

sumar(3, 4, prtRes)


btn.addEventListener('click', function (e) {
    console.log('me hicieron click', e)
})


var uno = document.getElementById("uno")
var dos = document.getElementById("dos")
var tres = document.getElementById("tres")

uno.addEventListener('click', function () {
    console.log('click UNO')
}, true);


dos.addEventListener('click', function () {


    console.log('click DOS')
}, true);
/* Parametro en false, el tercer parametro de Enventlistener es: 
false: Boobling
true: Capturing */

tres.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    console.log('click tres')
}, true);

//------------------------------------------------------------------
var estatico = document.getElementById('estatico')

var botonDinamicoCreado = false

estatico.addEventListener('click', function () {
    if (!botonDinamicoCreado) {


        var dinamico = document.createElement('button')
        dinamico.id = 'dinamico'
        dinamico.innerText = 'dinamico'
        document.body.appendChild(dinamico)
        botonDinamicoCreado = true
    }
})

/* Esto no podemos usarlo porque aun no esta creado, con lo cual necesitamos ver como crearlo dinamicamente sin que exista aun */
/* var dinamico = document.getElementById('dinamico')
dinamico.addEventListener('click', function () {
    console.log('click SOY dinamico')

}) */


document.addEventListener('click', function (e) {
    var id = e.target.id
    /*     console.log("Evento Global ", id )
     */
    if (id == 'dinamico') {
        console.log("Soy dinamico")
    }
})


var link = document.getElementById('link')

link.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("Click en link ")
})

var infoResize = document.getElementById('info-resize')
window.addEventListener('resize', () => {
    /* console.log('resize!!!!')
     */
    infoResize.innerText = "El tamaño del navegador es " + outerWidth + 'x' + outerHeight + ' y el tamano del documento es ' + innerWidth + 'x' + innerHeight

})


var ev = new Event("look", { 'bubbles': true, 'cancelable': false })

document.addEventListener("look", () => {
    console.log("Mi evento propio look")
})

document.getElementById("btn-look").addEventListener("click", () => {
    document.dispatchEvent(ev)
})