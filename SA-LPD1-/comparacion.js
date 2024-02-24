// Solicitar al usuario 3 números
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

// Función para ordenar los números
function ordenarNumeros(a, b, c) {
    let mayor, medio, menor;
    if (a >= b && a >= c) {
        mayor = a;
        if (b >= c) {
            medio = b;
            menor = c;
        } else {
            medio = c;
            menor = b;
        }
    } else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            medio = a;
            menor = c;
        } else {
            medio = c;
            menor = a;
        }
    } else {
        mayor = c;
        if (a >= b) {
            medio = a;
            menor = b;
        } else {
            medio = b;
            menor = a;
        }
    }
    return { mayor, medio, menor };
}

// Analizar y ordenar los números
let { mayor, medio, menor } = ordenarNumeros(num1, num2, num3);

// Imprimir los resultados
if (mayor === medio && medio === menor) {
    console.log("Los números son iguales:", mayor, medio, menor);
} else {
    console.log("Ordenados de mayor a menor:", mayor, medio, menor);
    console.log("Ordenados de menor a mayor:", menor, medio, mayor);
}

