const router = require("express").Router()

const book = require("./controllers/booksController")

router.get("/books",book.index)
router.get("/books/show/:id", book.detail)
router.get("/books/update/:id", book.detailUpdate)
router.get("/books/new", book.new)
router.post("/books",book.create)
router.put("/books/:id",book.update)
router.delete("/books/:id",book.delete)

module.exports = router;