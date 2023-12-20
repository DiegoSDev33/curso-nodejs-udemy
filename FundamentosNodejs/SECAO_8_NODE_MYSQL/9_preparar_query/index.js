// install init -y
// install express express-handlebars nodemon mysql


const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

  pool.query(sql, function(err){
    if(err){
      console.log(err)
    }

    res.redirect('/books')

  })
})

app.get('/books', (req, res) => {
  const queryBuscar = "SELECT * FROM books"

  pool.query(queryBuscar, function(err, data) {
    if(err){
      console.log(err)
    }
    const books = data
    console.log(books)
    res.render('books', {books})
  })

})

app.get('/books/edit/:id', (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM books WHERE idbooks = ${id}`

  pool.query(sql, function(err, data){
    if(err){
      console.log(err)
    }
    const book = data[0]
    res.render('editbook', {book})


  })
})

app.post('/book/updatebook', (req, res) =>{

  const id = req.body.id
  const title = req.body.title
  const pag = req.body.pageqty
  const author = req.body.author

  const sql = `UPDATE books SET title = '${title}', pag = '${pag}', author = '${author}' WHERE idbooks = '${id}';`

  pool.query(sql, function(err) {
    if(err){
      console.log(err)
      return 
    }
    res.redirect('/books')

  })



})


/* BUSCANDO ID PELO NUMERO QUE VEM DA URL */
app.get('/books/:id', (req, res)=> {

  const id = req.params.id
  const queryId = `SELECT * FROM books WHERE idbooks = ${id}`

  pool.query(queryId,function (err, data) {
    if(err){
      console.log(err)
      return
    }
    const book = data[0]
    res.render('book', {book})

  })
})

app.post('/books/remove/:id', (req, res)=>{

  const id = req.params.id

  const sql= `DELETE FROM books WHERE idbooks = ${id}`

  pool.query(sql, function (err){
    if(err){
      console.log(err)
      return
    }
    res.redirect('/books')
  })


})



app.listen(3500)