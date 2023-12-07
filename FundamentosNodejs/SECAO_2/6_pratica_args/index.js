const minimist = require('minimist')


//modulo externo
const args = minimist(process.argv.slice(2))


//modulo interno

const soma = require('./soma').soma
soma(3,6)


const a = parseInt(args['a'])
const b = parseInt(args['b'])
// node .\index.js --a=8 --b=90
soma(a,b)