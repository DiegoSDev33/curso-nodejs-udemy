const chalk = require('chalk')

const nota =9;

if(nota >=7){
  console.log(chalk.green("Parabens!, voce foi aprovado!"))
}else{
  console.log(chalk.bgRed.black.bold("Voce precisa fazer a prova de recuperacao!"))
}