

let divProducts = document.querySelector("#rowProducts");



/* functions */

/* primero hemos hecho eso:

fetch("https://dummyjson.com/products")
.then((res) => {

    console.log("conexion correcta");
})
.catch((rej) => {
    console.log("conexion incorrecta");
});

*/

/* y luego esto:

fetch("https://dummyjson.com/products")
.then((res) => {
    // traducir la respuesta en JSON
    return res.json();
}) 
.then((res2)=>{
    // JSON traducido
    console.log(res2);
})
.catch((rej) => {
    console.log("conexion incorrecta");
});

*/

/* Y luego esto:

fetch("https://dummyjson.com/products")
.then((res) => {
    // traducir la respuesta en JSON
    return res.json();
}) 
.then((res2)=>{
    // JSON traducido
    console.log(res2);
})
.catch((rej) => {
    console.log("conexion incorrecta");
});

*/

/* y luego esto:

fetch("https://dummyjson.com/products")
.then((res) => {
    // traducir la respuesta en JSON
    return res.json();
}) 
.then((res2)=>{
    // JSON traducido
    console.log(res2.products); /* elijo products para ver los productos */
    /*
})
.catch((rej) => {
    console.log("conexion incorrecta");
});

*/

/* y luego esto:

fetch("https://dummyjson.com/products")
.then((res) => {
    // traducir la respuesta en JSON
    return res.json();
}) 
.then((res2)=>{
    // JSON traducido
    res2.products.forEach((element) => {
        console.log(Element.title);
        console.log(Element.description);
    }); 
})
.catch((rej) => {
    console.log("conexion incorrecta");
});

*/


/* Añado en el index.html el grid cards del Bootstrap

añado un id en el primer div

borro todo lo demás dejando lo la primera caja en el html

y luego esto:

copio la primera caja del html y pego aqui en el index.js

voy completando los campos de titulo, descripcion, imagen...*/

fetch("https://dummyjson.com/products")
.then((res) => {
    // traducir la respuesta en JSON
    return res.json();
}) 
.then((res2)=>{
    // JSON traducido
    res2.products.forEach((element) => {
        divProducts.innerHTML += `
        <div class="col">
          <div class="card">
            <img src="${element.thumbnail}" class="card-img-top" style="width:50%" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
            </div>
          </div>
        </div>`;
    }); 
})
.catch((rej) => {
    console.log("conexion incorrecta");
});





