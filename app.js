const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pokemon', (req, res) => {
  res.status(200).json([
    {
      name: 'bulbasaur',
      type: [
        'grass',
        'poison'
      ],
      img: "http://www.pokemonget.eu/shop/155-large_default/bulbasaur-6-ivs-shiny.jpg"
    },
    {
      name: 'charmander',
      type: [
        'fire',
      ],
      img: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
    },
    {
      name: 'squirtle',
      type: [
        'water',
      ],
      img: "https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
    }
  ])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
