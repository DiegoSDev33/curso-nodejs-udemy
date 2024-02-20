
const mongoose = require('mongoose')

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/testemongo')
  console.log('conectou ao mongodb com mongoose!')
}


main().catch((err) => console.log(err))

module.exports = mongoose