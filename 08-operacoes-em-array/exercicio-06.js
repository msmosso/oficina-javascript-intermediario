/*
Ferifique se há algum cliente com mais de 4 tags
usar: some
*/

const clientes = require('../_dados/clientes.json')

// escreva seu código na linha abaixo
function hasMoreThanFourTags(element, index, array) {
return element.tags.length > 4
}

console.log(clientes.some(hasMoreThanFourTags));
