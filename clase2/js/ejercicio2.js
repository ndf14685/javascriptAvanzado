console.log("Ejercicio2")

var ul = document.createElement("ul")

document.body.appendChild(ul)

ul = document.querySelector('ul')

for( var i=0; i<1000; i++ ){
    ul.innerHTML += '<li>elem' + (i+1)+'</li>'
}

document.body.appendChild(ul)

/*for( var i=0; i<10; i++ ){
    var li = document.createElement("li")
    li.innerHTML = 'el' + (i+1)

    ul.appendChild(li)
}*/

