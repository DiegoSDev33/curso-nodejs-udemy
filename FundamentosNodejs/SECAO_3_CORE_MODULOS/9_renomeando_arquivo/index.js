const fs = require("fs")



fs.rename("arquivo.txt","novoArquivo.txt", function(err){ // tem que haver um arquivo.txt dentro da pasta 8 para ele excluir

  if(err){
    console.log(err)
    return 
  }
console.log("arquivo renomeado")



} )