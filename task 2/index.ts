// TASK 2

// What does the console print?

console.log('Inicio del programa');

const add = (a: number, b: number):number => a + b;

const operate = (callback: { (): void; (): void; }) => {
  setTimeout(() => {
    console.log('Operacion completada');
    callback();
  }, 0);
}

const result = add(2,3);

console.log(`El resultado de la suma es ${result}`);

operate(() => {
  console.log('La operacion va a ser completada');
});

console.log('Fin del programa');