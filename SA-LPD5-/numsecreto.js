// Generar número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];
let adivinado = false;

function solicitarNumero() {
  while (!adivinado) {
    let entrada = prompt("Intenta adivinar el número secreto (del 1 al 100):");
    let numero = parseInt(entrada);

    // Verificar si la entrada es un número y está en el rango correcto
    if (!isNaN(numero) && numero >= 1 && numero <= 100) {
      intentos.push(numero);

      if (numero === numeroSecreto) {
        console.log("Felicidades, adivinaste el número secreto");
        console.log("Tus intentos fueron: " + intentos.join(", "));
        adivinado = true;
      } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
    } else {
      console.log("Por favor, ingresa un número válido del 1 al 100.");
    }
  }
}

solicitarNumero();
