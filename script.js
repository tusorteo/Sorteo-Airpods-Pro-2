const url = "https://script.google.com/macros/s/AKfycbypo2Pb2d6g6p_ZJNbXYKJpnIkvAc7eR9ZyYycKk5o3RTG0ycfDsuQJkfZgzjIn5zuocQ/exec";


function comprobar(){

    let numero = document.getElementById("numero").value;

    let resultado = document.getElementById("resultado");


    fetch(url + "?numero=" + numero)

    .then(respuesta => respuesta.text())

    .then(datos => {


        if(datos == "GANADOR"){

            resultado.innerHTML =
            "🎉 ¡ENHORABUENA! Has ganado el sorteo.";

        }

        else if(datos == "NO"){

            resultado.innerHTML =
            "❌ Lo sentimos, tu boleto no tiene premio.";

        }

        else{

            resultado.innerHTML =
            "⚠️ Ese número no existe.";

        }


    });

}
        "❌ Lo sentimos, tu boleto no ha sido premiado.";

    }

}
