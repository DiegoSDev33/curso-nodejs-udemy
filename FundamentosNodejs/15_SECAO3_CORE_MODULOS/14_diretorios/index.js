const fs = require('fs')

if(!fs.existsSync('/minhaPasta')){
  console.log('nao existe')
}

fs.mkdirSync('minhaPasta')

if(fs.existsSync('/minhaPasta')){
  console.log(' existe')
}