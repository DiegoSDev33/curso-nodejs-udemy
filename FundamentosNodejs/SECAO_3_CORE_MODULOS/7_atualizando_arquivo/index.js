const http = require("http");
const fs = require("fs");

const port = 3333;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const nome = urlInfo.query.nome;

  if (!nome) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-type": "text/html" }); // fs chama toda a estrutura html ,
      res.write(data);
      return res.end();
    });
  } else {

    const nameNewLine = nome + ",\r\n"


    fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
      //writeFile sempre substitui os dados ao escrever
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log("Servidor online");
});
