const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mymind', 'root', '@admin123', {
  host:'127.0.0.1',
  dialect: 'mysql'
})

try{
  sequelize.authenticate()
  console.log('Banco de dados Conectado com sucesso!!!')
}catch(err){
  console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize