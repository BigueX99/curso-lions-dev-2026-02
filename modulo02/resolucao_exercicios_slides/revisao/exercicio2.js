
const notas = [ 5, 7, 8, 6, 8 ];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) { // length = 5 | 0...4 | i = i + 1;
    console.log(i, notas[i]);
    somaNotas += notas[i];
    console.log('Soma: ' + somaNotas);
}

const media = somaNotas / notas.length;
console.log('media: ' + media);

if (media >= 7) {
    console.log('Aprovado.');
} else if (media >= 5) {
    console.log('Recuperação.');
} else if (media < 5) {
    console.log('Reprovado.');
} else {
    console.log('Não foi possível calcular a media');
}