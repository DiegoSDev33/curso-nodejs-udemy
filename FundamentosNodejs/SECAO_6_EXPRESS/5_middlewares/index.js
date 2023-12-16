/* NPM INSTALL NODEMON */


const express = require("express");
const app = express();
const port = 3000;

/* ACHANDO A PASTA DE TEMPLATES */
const path = require("path");
const basePath = path.join(__dirname, "templates");


const checkAuth = function(req, res, next){
  req.authStatus = true

  if(req.authStatus){
    console.log('Esta logado, pode continuar')
    next()
  }else{
    console.log('nao esta logado, faca o login para continuar')
    next()
  }
}

app.use(checkAuth)

/* PEGANDO O ARQUIVO HTML DENTRO DA PASTA E RENDERIZANDO ELA */
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log("servidor online");
});
