const { Book } = require("../models")

module.exports = {
  findAll (req, res) {
    Book
      .findAll()
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  create (req, res) {
    Book
      .create({
        title: req.body.title,
        description: req.body.description
      })
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}