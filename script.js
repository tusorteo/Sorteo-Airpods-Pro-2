const url = "https://script.google.com/macros/s/AKfycbzsRglhPVyp_DJ7oWEcnL3XrrIupKV9pn4d7GxtC9obVKkJtizFJiMY3GIBa6tR-C50fw/exec";



function comprobar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let formulario = document.getElementById("formulario");


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




    fetch(url, {


        method: "POST",


        body: new URLSearchParams({


            nombre: nombre,

            telefono: telefono,

            direccion: direccion


        })


    })



    .then(respuesta => respuesta.text())



    .then(datos => {


        console.log(datos);


        alert("✅ Datos enviados correctamente.");



        document.getElementById("nombre").value = "";

        document.getElementById("telefono").value = "";

        document.getElementById("direccion").value = "";


    })



    .catch(error => {


        console.log(error);


        alert("❌ Error enviando los datos.");


    });



}
