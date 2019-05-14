/*
Crie uma lista com todos os clientes do gênere
feminino com saldo maior que 2500.00
usar: filter
*/

const clientes = require('../_dados/clientes.json')

// escreva seu código na linha abaixo:

const clientesFiltrado = clientes.filter((c) => c.genero === 'feminino' && c.saldo > 2500.00)

console.log(clientesFiltrado)
