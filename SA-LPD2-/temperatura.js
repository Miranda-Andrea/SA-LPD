function solicitarTemperatura() {
    let entrada = prompt("Ingrese la temperatura en grados Celsius:");
    let celsius = parseFloat(entrada);
  
    // Validar si la entrada es un número
    if (!isNaN(celsius)) {
      // Convertir Celsius a Fahrenheit y Kelvin
      let fahrenheit = (celsius * 9/5) + 32;
      let kelvin = celsius + 273.15;
  
      // Imprimir los resultados
      console.log(`Grados Kelvin: ${kelvin}`);
      console.log(`Grados Fahrenheit: ${fahrenheit}`);
      // Opcionalmente, puedes mostrar esto en el DOM en lugar de la consola.
      // document.body.innerHTML = `<p>Grados Kelvin: ${kelvin}</p><p>Grados Fahrenheit: ${fahrenheit}</p>`;
    } else {
      console.log("Por favor, ingrese un número válido.");
      solicitarTemperatura(); // Volver a solicitar los datos
    }
  }
  
  solicitarTemperatura();
  