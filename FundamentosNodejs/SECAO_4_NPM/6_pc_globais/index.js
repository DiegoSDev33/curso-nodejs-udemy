const _ = require ('lodash') 
const chalk = require('chalk')

const a  = [1,2,3,4,5,6]

const b= [2,3,44,34,4]

const diff = _.difference(a,b)

console.log(chalk.red.bold(diff))