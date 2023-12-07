const http = require("http")
const fs = require('fs')
const port = 3333


const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', function(err, data){

      res.writeHead(200, {'Content-type': 'text/html'})// fs chama toda a estrutura html 
      res.write(data)
      return res.end()
    })

})

server.listen(port, () => {
  console.log("Servidor online")
})