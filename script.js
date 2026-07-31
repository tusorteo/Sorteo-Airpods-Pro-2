const url = "https://script.google.com/macros/s/AKfycbypo2Pb2d6g6p_ZJNbXYKJpnIkvAc7eR9ZyYycKk5o3RTG0ycfDsuQJkfZgzjIn5zuocQ/exec";


function comprobar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let formulario = document.getElementById("formulario");

    // Ocultar formulario al empezar
    formulario.style.display = "none";

    if (numero === "") {
        resultado.innerHTML = "⚠️ Escribe tu número de boleto.";
        return;
    }


    resultado.innerHTML = "🔎 Comprobando...";


    fetch(url + "?numero=" + numero)

    .then(respuesta => respuesta.text())

    .then(datos => {

        datos = datos.trim();


        if (datos === "GANADOR") {

            resultado.innerHTML = `
            🎉 ¡HAS GANADO EL SORTEO! 🎉
            `;

            formulario.style.display = "block";

        }


        else if (datos === "NO") {

            resultado.innerHTML =
            "❌ Lo sentimos, tu boleto no tiene premio.";

            formulario.style.display = "none";

        }


        else {

            resultado.innerHTML =
            "⚠️ Ese número no existe.";

            formulario.style.display = "none";

        }


    })

    .catch(error => {

        resultado.innerHTML =
        "❌ Error de conexión.";

        console.log(error);

    });

}



function enviarDatos() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;


    if (nombre === "" || telefono === "") {

        alert("Rellena nombre y teléfono.");

        return;

    }


    alert(
        "Datos enviados correctamente.\n\n" +
        "Nombre: " + nombre + "\n" +
        "Teléfono: " + telefono
    );

}
