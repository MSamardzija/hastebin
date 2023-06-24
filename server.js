const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  const code = `Welcome to WasteBin

Use the commands in the top right cornder 
to create a new fiel to share with others.`

  res.render(`code-display.ejs`, { code })
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.listen(3000)
