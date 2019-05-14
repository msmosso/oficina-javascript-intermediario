/*
Mostro no console o somatório dos saldos de todos os clientes
usar: reduce
*/

const clientes = require('../_dados/clientes.json')
// escreva seu código na linha abaixo:
const somaSaldo = clientes.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.saldo), 0);
console.log(somaSaldo)
