const http = require("http")
const port = 3333

const server = http.createServer((req, res) =>{
    res.statusCode = 200 // requisicao com sucesso
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Ola, este é meu primeiro server com html! </h1><p>TESTANDO ATUALIZACAO</p>')
})

server.listen(port, () => {
  console.log("Servidor online")
})