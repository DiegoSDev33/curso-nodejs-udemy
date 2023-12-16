/* NPM INSTALL NODEMON */


const express = require("express");
const app = express();
const port = 3000;

/* ACHANDO A PASTA DE TEMPLATES */
const path = require("path");
const basePath = path.join(__dirname, "templates");



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

