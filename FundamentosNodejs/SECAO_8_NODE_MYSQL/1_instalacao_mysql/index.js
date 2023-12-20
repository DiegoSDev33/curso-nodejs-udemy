// install init -y
// install express express-handlebars nodemon mysql


const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

const conn = mysql.createConnection({
  host: '127.0.0.1', /* localhost trocado pelo endereco*/
  user: 'root',
  password: '@admin123',
  database: 'nodejsudemy'
})

conn.connect(function(err) {

  if(err){
    console.log(err)
  }
  console.log('banco de dados conectado com sucesso')
  app.listen(3500)
})