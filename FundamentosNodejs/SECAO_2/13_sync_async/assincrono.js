// assincrono nao espera o arquivo criar. ele da continuidade e enquanto trabalha na execução da criacao do arquivo

const fs = require('fs')
console.log('inicio')

fs.writeFile("arquivo2.txt", 'oioioi', function(err){
 setTimeout(function(){
  console.log("Arquivo criado com sucesso!")
 },1000)
})

console.log('fim antes da criacao do arquivo')