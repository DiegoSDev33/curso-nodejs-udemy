const express = require("express")
const exphbs = require('express-handlebars')


const app = express()


const hbs = exphbs.create({
  partialsDir:['views/partials']})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

  const items = ["a", "b", "c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: "have you ever se the rain",
    category:" music",
    body:"this is a very good song",
    comments: 4
  }
  res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
  const posts =[
    {
      title: "have you ever se the rain",
      category:" music",
      body:"this is a very good song",
      comments: 4 
    },
    {
      title: "have you ever se the rain",
      category:" music",
      body:"this is a very good song",
      comments: 4 
    },
    {
      title: "have you ever se the rain",
      category:" music",
      body:"this is a very good song",
      comments: 4 
    },
  ]
  res.render('blog', {posts})
})

app.get('/', (req, res) => {
  const user = {
    name: "Diego",
    sobrenome:"Santos",
    idade:30
  }
  const palavra = 'teste'

  const auth = true
  const approved = false
    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, ()=>{
  console.log('servidor rodando')
})