/*
Exiba no console o nome da empresa do cliente de id 234
usar: find
*/

const clientes = require('../_dados/clientes.json')

// escreva seu código na linha abaixo:

const clienteId = clientes.find((c) => c.id === 1529);
console.log(clienteId)
