function generarFibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n);
  }
  
  function solicitarNumeroYMostrarFibonacci() {
    let entrada = prompt("Ingrese un número para mostrar la serie de Fibonacci hasta ese término:");
    let numero = parseInt(entrada);
  
    // Verificar si la entrada es un número y es positivo
    if (!isNaN(numero) && numero >= 0) {
      let fibonacci = generarFibonacci(numero);
      console.log(`Los primeros ${numero} números de la serie de Fibonacci son: ${fibonacci.join(', ')}`);
      // Opcionalmente, puedes mostrar esto en el DOM en lugar de la consola.
      // document.body.innerHTML = `<p>Los primeros ${numero} números de la serie de Fibonacci son: ${fibonacci.join(', ')}</p>`;
    } else {
      console.log("Por favor, ingrese un número entero positivo válido.");
      solicitarNumeroYMostrarFibonacci(); // Volver a solicitar el dato
    }
  }
  
  solicitarNumeroYMostrarFibonacci();
  