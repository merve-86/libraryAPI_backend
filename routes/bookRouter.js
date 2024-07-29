"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Library Project with Sequelize
------------------------------------------------------- */

const router = require('express').Router()

const book = require('../controller/bookController')

router.route('/books')
.get(book.list)
.post(book.create)

router.route('/books/:id')
.get(book.read)
.put(book.update)
.delete(book.delete)


module.exports = router