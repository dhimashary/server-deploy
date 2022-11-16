const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const BookController = require('./controllers/bookController')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/books', BookController.findAll)
app.post('/books', BookController.create)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
