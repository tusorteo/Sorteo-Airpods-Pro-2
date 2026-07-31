function comprobar(){

    let numero = document.getElementById("numero").value;

    let ganador = "12345"; // aquí pondremos el número ganador

    let resultado = document.getElementById("resultado");


    if(numero === ganador){

        resultado.innerHTML = 
        "🎉 ¡ENHORABUENA! Has ganado el sorteo.";

    } else {

        resultado.innerHTML =
        "❌ Lo sentimos, tu boleto no ha sido premiado.";

    }

}
