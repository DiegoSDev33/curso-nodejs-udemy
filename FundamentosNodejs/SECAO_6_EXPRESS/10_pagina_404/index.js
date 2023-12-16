/* NPM INSTALL NODEMON */


const express = require("express");
const app = express();
const port = 3000;

const users =require('./users')

/* ACHANDO A PASTA DE TEMPLATES */
const path = require("path");
const basePath = path.join(__dirname, "templates");

//ler o corpo da requisicao
app.use(express.urlencoded({
  extended:true,
}))
app.use(express.json())

//arquivos estaticos
app.use(express.static('public'))

app.use('/users', users)// dessa forma o endereco de users deve ser chamado primeiro com o /users/ agluma coisa ...

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});


app.use(function(req, res, next){
res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log("servidor online");
});

