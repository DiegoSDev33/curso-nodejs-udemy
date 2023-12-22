const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '@admin123',{
  host:'127.0.0.1',
  dialect: 'mysql'
})

try{
console.log('Conectamos ao banco de dados Mysql!')
}catch(err){
  console.log(`Não foi possivel conectar ao banco: ${err}`)
}


exports.default = sequelize