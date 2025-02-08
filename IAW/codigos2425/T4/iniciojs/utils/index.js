// esto es un ejemplo de fichero externo
// alert("esto se lanza solo");

console.log ("Esto es un msj desde un fichero")

// variables: $nombre
    // las que pueden cambiar su valor
        // se usa let ej: let nombre="Borja"

    // las que no pueden cambiar su dato
        // se usa const ej: const DNI = "123123A"

// metodos: ?




let nombre = "Borja"; // eso es una variable string, o sea una palabra. Si quiero guardar una palabra defino con ""
nombre = "BorjaM";

let edad = 40; // eso es una variable numero. Si quiero guardar un number con int float
edad = edad +1; // 41

let experiencia = false // otra variable es boolean. Cuando solo se puede guardar valor true o false. 

const DNI = "123123A";

if (experiencia == true) {
    console.log ("El usuario tiene experiencia");
    // puedo por ejemplo, si tiene experiencia, pintar un div verde y además poner una animación
} else {
    console.log ("El usuario no tiene experiencia");
    // pueto por ejemplo, si no tiene experiencia, pintar un div amarillo y sacar un cadro de dialogo avisandote
}


// busqueda por clase (ej: btn o btn-primary), etiqueta (ej: button) o identificador (ej: botonEnviar). Se suele utilizar id.
let boton = document.querySelector("#botonEnviar");
// si quiero buscar por id se pone # + id
// si quiero buscar por clase se pone . + nombre de la clase
// si quiero buscar por etiqueta se pone "nombre de la etiqueta"
console.log(boton);

let inputNombre = document.querySelector("#inputNombre");

// busqueda por varios al mismo tiempo. En este ejemplo por varios inputs
let inputs = document.querySelectorAll("input");
console.log(inputs);

// determino lo que pasa cuando pusan al boton
boton.addEventListener("click", () => {
    alert("Enhorabuena, reto completado")
});

// determino lo que pasa cuando pusan al boton + que salga el nombre 
boton.addEventListener("click", () => {
    alert("Enhorabuena, reto completado " + inputNombre.value);
});


