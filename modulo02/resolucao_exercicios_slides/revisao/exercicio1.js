import PromptSync from "prompt-sync";

const prompt = PromptSync();

let numero = parseInt(prompt("Digite um numero: "));

// numero % 2 === 0 // par
// numero % 2 !== 0 // par

while (numero >= 2) {
    numero = numero - 2;
    console.log('numero: ' + numero);
}

console.log(numero); // 0 ou 1

if (numero === 0) {
    console.log('Par.');
} else {
    console.log('Impar.');
}

