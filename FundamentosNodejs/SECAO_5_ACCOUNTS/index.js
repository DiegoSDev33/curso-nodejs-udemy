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
     }else if(action === 'Depositar'){
      deposit()
    }else if(action === 'Consultar Saldo'){
      getAccountBalance()
     }else if(action === 'Sacar'){
      widthdraw()
     }else if(action === 'Sair'){
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
      process.exit()
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

function deposit(){

  inquirer.prompt([
    {
      name:'AccountName',
      message: 'Qual o nome da sua conta?'
    }
  ]).then((answear) =>{
    const AccountName = answear['AccountName']
    //verificando se a conta existe
   if(!checkAccount(AccountName)){
      return deposit()
   }

    inquirer.prompt([
      {
        name: 'Amount',
        message: 'Quanto voce deseja depositar?'
      }
    ]).then((answer)=>{
      const amount = answer['Amount']


        addAmount(AccountName, amount)
      operation()
    }).catch((err) => console.log(err))



  }).catch(err => console.log(err))
}

function checkAccount(AccountName){
  if(!fs.existsSync(`Account/${AccountName}.json`)){
    console.log(chalk.bgRed.black('Esta conta nao existe, tente novamente'))
    return false
  }
  return true
}


function addAmount(accountName, amount){
  const accountData = getAccount(accountName)

    if(!amount){
      console.log(chalk.bgRed.black('tente novamente mais tarde'),)
      return deposit()
    }


    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    fs.writeFileSync(
      `Account/${accountName}.json`,
      JSON.stringify(accountData),
      function (err){
        console.log(err)
      },
    )
    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta`),)
}

function getAccount(accountName){
  const accountJson = fs.readFileSync(`Account/${accountName}.json`,{
    encoding: 'utf8',
    flag:'r'
  })

  return JSON.parse(accountJson)
}


function getAccountBalance(){
  inquirer.prompt([
    {
      name: 'accountName', 
      message: 'Qual o nome da sua conta?'
    }
  ]).then((answer) => {

    const accountName = answer ['accountName']

    //verificando se a conta existe

    if(!checkAccount(accountName)){
      return getAccountBalance()
    }

    const accountData = getAccount(accountName)

    console.log(chalk.bgBlue.black(`Ola, o seu saldo é de R$${accountData.balance}`), )

    operation()
  }).catch(err => console.log(err))
}


function widthdraw() {
  inquirer.prompt([
    {
      name:'accountName', 
      message: 'Qual o nome da sua conta?'
    }
  ]).then((answer) => {

    const accountName = answer['accountName']

    if(!checkAccount(accountName)){
      return widthdraw()
    }

    inquirer.prompt([
      {
        name: 'amount', 
        message: 'Quanto voce deseja sacar?'
      }
    ]).then((answer) => {
      const amount = answer['amount']

      removeAmount(accountName, amount)


    }).catch(err => console.log(err))

  }).catch(err => console.log(err))
}


function removeAmount(accountName, amount){
  const accountData = getAccount(accountName)

  if(!amount){
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
    )
     return widthdraw()
  }

  if(accountData.balance < amount){
  console.log(chalk.bgRed.black(`Valor na conta indisponivel`))
  return widthdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(
    `Account/${accountName}.json`,
   JSON.stringify(accountData),
    function (err) {
      console.log(err)
    },
  )
    console.log(chalk.green(`Foi realizado um saque de R${amount} da sua conta!`),
    ) 
    operation()
}