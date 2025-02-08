let inputNombre = document.querySelector("#inputNombre")
let inputPrecio = document.querySelector("#inputPrecio")
let inputDescripcion = document.querySelector("#inputDescripcion")
let inputFecha = document.querySelector("#inputFecha")
let selectCategoria = document.querySelector("#selectCategoria")
let botonEnviar = document.querySelector("#botonEnviar")
let botonVaciar = document.querySelector("#btnVaciar")
let listaProductos = document.querySelector("#listaProductos")


botonEnviar.addEventListener("click", () => {
    let nombre = inputNombre.value;
    let precio = parseFloat(inputPrecio.value);
    let fecha = inputFecha.value;
    let descripcion = inputDescripcion.value;
    let categoria = selectCategoria.value;
    
    if (nombre.length > 0 && fecha.length > 0 && descripcion.length > 0){
        /* Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado correctamente",
            showConfirmButton: true,
            timer: 3000
          });
*/

// agrega el producto Nombre - Categoria - Precio a la lista MODIFICO EL INNERHTML
// listaProductos.innerHTML = listaProductos.innerHTML + `<li class = 'list-group-item animate__animated animate__backInRight'> ${nombre} - ${categoria} - ${precio} </li>`;
// no se puede hacer lo de arriba, ya que la animacion se aplica a todo....
// entonces lo que se hace es:
// crear un li <li></li>
let nodoLi = document.createElement('li')
// le pongo contenido -> text
nodoLi.textContent = `${nombre} - ${categoria} - ${precio}`;
// pongo las clases que quiero las animaciones 
nodoLi.className = "list-group-item animate__animated animate__backInRight"
// añado a la lista <ul></ul>
listaProductos.appendChild(nodoLi);

    } else {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Faltan datos",
            showConfirmButton: false,
            timer: 4000
          });
    }

// console.log("Nombre " + nombre);
// console.log("Precio " + typeof precio);
// console.log("Fecha " + fecha);
// console.log("descripcion " + descripcion);
// console.log("categoria " + categoria);

});

botonVaciar.addEventListener("click", () => {

    let liLista = document.querySelectorAll("#listaProductos li");
    liLista.forEach((element) => {
        element.classList.remove("animate__backInRight");
        element.classList.add("animate__wobble");
    });

    setTimeout(() => {
        liLista.forEach((element) => {
            element.classList.remove("animate__wobble");
            element.classList.add("animate__backOutRight");
        });

    setTimeout(() => {
        listaProductos.innerHTML = "";
    }, 500);  
    }, 1000);

}); 

