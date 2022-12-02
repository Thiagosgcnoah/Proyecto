let imagenesReferencia = [
    "assets/img/producto 1 perros.png",
    "assets/img/Producto-1-perros-imagen-1.png",
    "assets/img/Producto-1-perros-imagen-2.png"
]

let divMosaico = document.getElementById("mosaicoImgsProducto")

imagenesReferencia.forEach((imgenProducto, indiceArray) => {
    divMosaico.innerHTML += `<img src="${imgenProducto}" id="imgProductoMosaico${indiceArray+1}" onclick="cambiarImagen(${indiceArray})" alt="" width="132px" class="m-4">`
});

function cambiarImagen(imagenACargar) {
    let imagenGrande = document.getElementById("imgProductoGaleria")
    imagenGrande.src = imagenesReferencia[imagenACargar]
}