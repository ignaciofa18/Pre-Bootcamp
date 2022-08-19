function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//la funcion me va a mostar el arreglo completo

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//la funcion me va a mostrar: var frozen [brocoli, helado,croqueta de papa]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//creamos un arreglo llamado movieLibraty.
//agregamos un valor llamado "zoro".
//remplazamos E.T. por Zoro.
//mostramos el arreglo.
//comentario prueba