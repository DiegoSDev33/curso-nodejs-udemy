const path = require('path')

//path absoluto

console.log(path.resolve('teste.txt'))

const folder = "relatorios"
const file = "arquiv.txt"

const finalPath = path.join('/','novoTeste', folder, file)

console.log(finalPath)