const url = "https://script.google.com/macros/s/AKfycbypo2Pb2d6g6p_ZJNbXYKJpnIkvAc7eR9ZyYycKk5o3RTG0ycfDsuQJkfZgzjIn5zuocQ/exec";


function comprobar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let formulario = document.getElementById("formulario");


   if (datos === "GANADOR") {

    resultado.innerHTML = "🎉 ¡HAS GANADO EL SORTEO!";

    document.getElementById("formulario").style.display = "block";

}


    resultado.innerHTML = "🔎 Comprobando...";
    formulario.style.display = "none";


    fetch(url + "?numero=" + numero)

    .then(respuesta => respuesta.text())

    .then(datos => {

        datos = datos.trim();


        if (datos === "GANADOR") {

            resultado.innerHTML = "🎉 ¡HAS GANADO EL SORTEO!";

            formulario.style.display = "block";

        }


        else if (datos === "NO") {

            resultado.innerHTML = "❌ Lo sentimos, tu boleto no tiene premio.";

        }


        else {

            resultado.innerHTML = "⚠️ Ese número no existe.";

        }


    })


    .catch(error => {

        resultado.innerHTML = "❌ Error de conexión.";

        console.log(error);

    });


}



function enviarDatos() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;


    if(nombre === "" || telefono === "") {

        alert("Completa los datos obligatorios.");

        return;

    }


    alert(
        "Datos guardados:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Dirección: " + direccion
    );

}
