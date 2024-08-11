function upDate (previewPic) {
    // 1) cambiar la URL de la imagen de fondo del div con id "image" al archivo fuente de la 
console.log(previewPic)
document.getElementById("image").style.backgroundImage = "url(" + previewPic + ")";

// 2 cambiar el texto del div con id "image " al texto alternativo de la imagen vista 
document.getElementById("image").innerHTML = previewPic.alt;
}
function unDo() {
// Actualizar la URL de la imagen de fondo del div con id a la "image" original
document.getElementById("image").style.backgroundImage = "url()";
// 2) cambiar el texto del div con id "image" de nuevo con el texto original
document.getElementById("image").innerHTML = "Hover over an image below to display here"
}
