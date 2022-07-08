const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.id));
}

exports.save = (req, res, next) => {
    const body = req.body;
    const savedBook = new Book(null, body.title, body.isbn, body.publishedDate, body.author).save();
    res.status(201).json(savedBook);
}

exports.update = (req, res, next) => {
    const body = req.body;
    const updatedBook = new Book(req.params.id, body.title, body.isbn, body.publishedDate, body.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}