// install init -y
// install express express-handlebars nodemon mysql


const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express();

/*CONFIGURANDO O EXPRESS PARA PEGAR O BODY ---------------*/
app.use(
  express.urlencoded({
    extended:true
  })
)
app.use(express.json())

/* -------------------xx--------------------------------- */

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/book/insertbook', (req, res) => {
  const title = req.body.title
  const pag = req.body.pageqty
  const author = req.body.author

  const sql = `INSERT INTO books (title, pag, author) VALUES ('${title}', '${pag}', '${author}')`

  conn.query(sql, function(err){
    if(err){
      console.log(err)
    }

    res.redirect('/books')

  })
})

app.get('/books', (req, res) => {
  const queryBuscar = "SELECT * FROM books"

  conn.query(queryBuscar, function(err, data) {
    if(err){
      console.log(err)
    }
    const books = data
    console.log(books)
    res.render('books', {books})
  })

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