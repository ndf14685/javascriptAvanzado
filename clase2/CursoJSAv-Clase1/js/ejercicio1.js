console.log('ejercicio1')

var titulo = document.querySelector('h1')
//titulo.innerText = 'Titulo creado desde el JS'
titulo.innerHTML = 'Titulo creado desde <a href="#">JS</a>'

console.log(titulo.innerText)
console.log(titulo.innerHTML)

titulo.classList.add('azul')
titulo.classList.remove('azul')

var items = document.querySelectorAll('li')
console.log(items)

var colores = ['red','blue','green']
for(var i=0; i<items.length; i++) {
    items[i].innerHTML = 'Elemento Nro. <strong>' + (i+1) + '</strong>'
    items[i].style.color = colores[i] 
}

var parrafo = document.createElement('p')
parrafo.innerText = 'Hola soy un párrafo'
parrafo.style.color = 'magenta'
parrafo.id = 'texto1'
parrafo.classList.add('txt')
document.body.appendChild(parrafo)


