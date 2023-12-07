const http = require("http")
const port = 3333

const server = http.createServer((req, res) =>{
  res.write("ola")
  res.end()
})

server.listen(port, () => {
  console.log("Servidor online")
})