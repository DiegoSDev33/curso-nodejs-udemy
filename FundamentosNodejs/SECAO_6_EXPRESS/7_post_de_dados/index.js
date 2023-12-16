/* NPM INSTALL NODEMON */


const express = require("express");
const app = express();
const port = 3000;

/* ACHANDO A PASTA DE TEMPLATES */
const path = require("path");
const basePath = path.join(__dirname, "templates");

//------------------------------------------------------------------------------------
//ler o corpo da requisicao
app.use(express.urlencoded({
  extended:true,
}))
app.use(express.json())
//chamando o html onde esta o formulario
app.get('/users/add', (req, res) =>{
  res.sendFile(`${basePath}/userform.html`)
  })
  
  app.post('/users/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age
  console.log(`O nome do usuario é ${name} e ele tem ${age} anos`)
  res.sendFile(`${basePath}/userform.html`)
  })
 //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´ 

/* PEGANDO O ARQUIVO HTML DENTRO DA PASTA E RENDERIZANDO ELA */
app.get("/users/:id", (req, res) => {

  const id = req.params.id
//leitura da tabela users, resgatar um usuario do banco/ o valor colocado na url aparece aqui
console.log(`estamos buscando pelo usuario: ${id}`)


  res.sendFile(`${basePath}/users.html`);
});


app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log("servidor online");
});

