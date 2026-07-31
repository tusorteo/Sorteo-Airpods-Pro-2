const url = "https://script.google.com/macros/s/AKfycbypo2Pb2d6g6p_ZJNbXYKJpnIkvAc7eR9ZyYycKk5o3RTG0ycfDsuQJkfZgzjIn5zuocQ/exec";

function comprobar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

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
                🎉 ¡ENHORABUENA! 🎉<br><br>
                Tu boleto es el ganador.<br>
                Rellena tus datos para recibir el premio.
                `;

            } 
            else if (datos === "NO") {

                resultado.innerHTML =
                "❌ Lo sentimos, tu boleto no tiene premio.";

            } 
            else {

                resultado.innerHTML =
                "⚠️ Ese número de boleto no existe.";

            }

        })
        .catch(error => {

            resultado.innerHTML =
            "❌ Error de conexión.";

            console.log(error);

        });

}
