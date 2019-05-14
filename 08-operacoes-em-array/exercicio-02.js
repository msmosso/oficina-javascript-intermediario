/*
Crie uma lista nova lista só com os emails dos clientes
usar: map
*/

const clientes = require('../_dados/clientes.json')

// escreva seu código na linha abaixo:

const emails = clientes.map((c) => c.email)
console.log(emails)
