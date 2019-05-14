/*
Ferifique se todos os clientes são maiores de idade
usar: every
*/

const clientes = require('../_dados/clientes.json')

// escreva seu código na linha abaixo:

const maiorIdade = clientes.every((c) => c.idade >= 18)
console.log(maiorIdade)
