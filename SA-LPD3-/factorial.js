function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
  }
  
  function solicitarNumero() {
    let entrada = prompt("Ingrese un número para calcular su factorial:");
    let numero = parseFloat(entrada);
  
    // Verificar si la entrada es un número
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
      // Calcular el factorial del número
      let factorial = calcularFactorial(numero);
      console.log(`El factorial de ${numero} es: ${factorial}`);
      // Opcionalmente, puedes mostrar esto en el DOM en lugar de la consola.
      // document.body.innerHTML = `<p>El factorial de ${numero} es: ${factorial}</p>`;
    } else {
      console.log("Por favor, ingrese un número entero positivo válido.");
      solicitarNumero(); // Volver a solicitar el dato
    }
  }
  
  solicitarNumero();
  