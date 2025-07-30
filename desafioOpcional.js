// Función para validar que la entrada sea un número válido (entero)
function pedirNumero(mensaje) {
  let numero;
  do {
    numero = prompt(mensaje);
    // Validamos que no esté vacío, sea número y entero
  } while (
    numero === null ||                 // Si el usuario cancela
    numero.trim() === "" ||            // No puede ser vacío
    isNaN(numero) ||                   // Debe ser número
    !Number.isInteger(Number(numero)) // Debe ser entero
  );
  return Number(numero);
}

// Función para validar que la entrada sea texto sin números ni símbolos (solo letras y espacios)
function pedirTexto(mensaje) {
  let texto;
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  do {
    texto = prompt(mensaje);
  } while (
    texto === null ||          // Si cancela
    texto.trim() === "" ||     // No vacío
    !soloLetras.test(texto)    // Solo letras y espacios
  );
  return texto.trim();
}

// Función 1: Mostrar "¡Hola, mundo!"
function paso1() {
  console.log("¡Hola, mundo!");
  alert("¡Hola, mundo!");
}

// Función 2: Mostrar saludo con nombre
function paso2(nombre) {
  console.log(`¡Hola, ${nombre}!`);
  alert(`¡Hola, ${nombre}!`);
}

// Función 3: Devolver el doble de un número
function paso3(num) {
  const resultado = num * 2;
  console.log(`El doble de ${num} es ${resultado}`);
  alert(`El doble de ${num} es ${resultado}`);
}

// Función 4: Calcular promedio de tres números
function paso4(n1, n2, n3) {
  const promedio = (n1 + n2 + n3) / 3;
  console.log(`El promedio de ${n1}, ${n2} y ${n3} es ${promedio.toFixed(2)}`);
  alert(`El promedio de ${n1}, ${n2} y ${n3} es ${promedio.toFixed(2)}`);
}

// Función 5: Devolver el mayor de dos números
function paso5(n1, n2) {
  const mayor = n1 > n2 ? n1 : n2;
  console.log(`El número mayor entre ${n1} y ${n2} es ${mayor}`);
  alert(`El número mayor entre ${n1} y ${n2} es ${mayor}`);
}

// Función 6: Multiplicarse por sí mismo
function paso6(num) {
  const resultado = num * num;
  console.log(`${num} multiplicado por sí mismo es ${resultado}`);
  alert(`${num} multiplicado por sí mismo es ${resultado}`);
}

// Arreglo con funciones, indicando cuántos parámetros necesitan
const funciones = [
  { funcion: paso1, necesita: 0 },
  { funcion: paso2, necesita: 1 },
  { funcion: paso3, necesita: 1 },
  { funcion: paso4, necesita: 3 },
  { funcion: paso5, necesita: 2 },
  { funcion: paso6, necesita: 1 },
];

// Función principal que recorre y ejecuta todas las funciones
function principal() {
  for (let i = 0; i < funciones.length; i++) {
    const paso = funciones[i];
    console.log(`\n--- Ejecutando paso ${i + 1} ---`);

    // Si la función no necesita parámetros, la ejecutamos directamente
    if (paso.necesita === 0) {
      paso.funcion();
    } else {
      let args = []; // Aquí guardamos los parámetros para la función

      // Según la cantidad de parámetros que requiere, pedimos datos con validación
      if (paso.necesita === 1) {
        if (i === 1) {
          // Para la función 2, pedimos texto (nombre)
          const nombre = pedirTexto("Ingresa tu nombre para el saludo:");
          args.push(nombre);
        } else {
          // Para funciones con un parámetro numérico
          const num = pedirNumero("Ingresa un número entero:");
          args.push(num);
        }
      }

      if (paso.necesita === 2) {
        // Para funciones con dos parámetros numéricos
        const n1 = pedirNumero("Ingresa el primer número entero:");
        const n2 = pedirNumero("Ingresa el segundo número entero:");
        args.push(n1, n2);
      }

      if (paso.necesita === 3) {
        // Para funciones con tres parámetros numéricos
        const n1 = pedirNumero("Ingresa el primer número entero para el promedio:");
        const n2 = pedirNumero("Ingresa el segundo número entero para el promedio:");
        const n3 = pedirNumero("Ingresa el tercer número entero para el promedio:");
        args.push(n1, n2, n3);
      }

      // Ejecutamos la función pasando los parámetros con spread operator
      paso.funcion(...args);
    }
  }
}
