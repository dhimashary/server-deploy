const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      username: "pururung",
      email: "d@mail.com"
    },
    {
      id: 2,
      username: "natu",
      email: "n@mail.com"
    }
  ])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
