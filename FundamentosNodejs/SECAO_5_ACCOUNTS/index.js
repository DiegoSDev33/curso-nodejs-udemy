//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos
const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answear) => {
      const action = answear['action']
     if(action === 'Criar Conta'){
      createAccount()
     }
    })
    .catch((err) => console.log(err));
}

function createAccount(){
  console.log(chalk.bgGreen.black('Parabens por escolher o nosso banco'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))
  buildAccount()
 
}

function buildAccount(){
  inquirer.prompt([{
    name: 'AccountName',
    message: 'Digite um nome para a sua conta:'
  }
,
]).then((answear) => {
    const AccountName = answear ['AccountName'];

  console.log(AccountName)

  if(!fs.existsSync('Account')){
    fs.mkdirSync('Account')
  }

  if(fs.existsSync(`Account/${AccountName}.json`)){
    console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome!'),
    )
    buildAccount()
    return
  }
 
  
  fs.writeFileSync(`Account/${AccountName}.json`, '{"balance":0}', function(err) {
      console.log(err)
  },
  )

  console.log(chalk.green('Parabens, sua conta foi criada!'))
  operation()

}).catch((err) => console.log(err))
}