const express = require('express')
const router = express.Router()

/* ACHANDO A PASTA DE TEMPLATES */
const path = require("path");
const basePath = path.join(__dirname, "../templates");

//------------------------------------------------------------------------------------

//chamando o html onde esta o formulario
router.get('/add', (req, res) =>{
  res.sendFile(`${basePath}/userform.html`)
  })
  
  router.post('/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age
  console.log(`O nome do usuario é ${name} e ele tem ${age} anos`)
  res.sendFile(`${basePath}/userform.html`)
  })
 //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´ 

/* PEGANDO O ARQUIVO HTML DENTRO DA PASTA E RENDERIZANDO ELA */
router.get("/:id", (req, res) => {

  const id = req.params.id
//leitura da tabela users, resgatar um usuario do banco/ o valor colocado na url aparece aqui
console.log(`estamos buscando pelo usuario: ${id}`)


  res.sendFile(`${basePath}/users.html`);
});


module.exports = router