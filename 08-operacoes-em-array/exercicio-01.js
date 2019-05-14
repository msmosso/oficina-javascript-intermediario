/*
Percorra lista de clientes e mostre no console
apenas o nome e a quantidade de tags de cada um

Exemplo: Daniels Obrien (3)
usar: forEach e template string
*/

const clientes = require('../_dados/clientes.json')
clientes.forEach(function(e) {
console.log(e.nome)
console.log(e.tags.length)
});
