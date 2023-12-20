const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir:['views/partials']})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/cards', (req, res) => {
  const postCard =[
    {
      title: "have you ever se the rain",
      category:" music",
      body:"this is a very good song",
      comments: 4 
    },
    {
      title: "The antidote",
      category:" music",
      body:"Simple plan is nice",
      comments: 7 
    },
    {
      title: "never say never",
      category:" music",
      body:"this is a very good song",
      comments: 8 
    }
  ]
  res.render('cards', {postCard})
})


app.get('/', (req, res) => {
  const user = {
    name: "Diego",
    sobrenome:"Santos",
  }

  const admin = true
    res.render('inicial', {user: user, admin})
})




app.listen(7777, ()=>{
  console.log('servidor rodando')
})