const fs =require('fs')

fs.unlink("arquivo.txt", function(err){ // tem que haver um arquivo.txt dentro da pasta 8 para ele excluir

  if(err){
    console.log(err)
    return 
  }
console.log("arquivo removido")



} )