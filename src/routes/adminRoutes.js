var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
    },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
    },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    }
];

var router = function (nav) {
    var url = 'mongodb://localhost:27017/books';
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                console.log(books[0]);
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );
            });
        });

    adminRouter.route('/removeBooks')
        .get(function (req, res) {
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.remove({}, function () {
                    res.send("removed books");
                });
            });
        });

    adminRouter.route('/')
        .get(function (req, res) {
            res.render('admin', {
                nav: nav
            });
        });

    return adminRouter;
};

module.exports = router;