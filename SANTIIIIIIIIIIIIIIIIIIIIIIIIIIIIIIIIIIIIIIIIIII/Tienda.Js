let imagen = document.querySelector("#Anillo")
let boton = document.querySelector(".boton")

let OtroModelo = false;

boton.onclick = function () {
    if (OtroModelo == false){
      imagen.src = "Calavera.jpg"
      OtroModelo = true
    }else{
        imagen.src = "Anillo pulpo.jpg"
        OtroModelo = false
    }
}
