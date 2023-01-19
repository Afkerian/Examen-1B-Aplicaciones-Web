let num = parseInt(prompt("Ingrese un número: "));
while (isNaN(num) || num <= 0) {
    num = parseInt(prompt("Ingrese un número válido: "));
}

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num*i);
}
