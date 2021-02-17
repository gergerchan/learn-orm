const { books } = require("../models")

module.exports = {
    index: (req,res) => {
        books.findAll({
            order: [
                ["id","ASC"]
            ]
        })
        .then(result => res.render("books/index", {title:"Seluruh data buku", books:result}))
    },
    detail: (req,res) => {
        books.findOne({
            where: {id: Number(req.params.id)}
        })
        .then(result => {
            if (result !== null){
            res.render("books/detail", {title:"Detail Buku",books:result})
            } else {
                res.status(404).send("Error - Buku tidak ditemukan")
            }
        })
        .catch(err => res.status(404).send("Error - Buku tidak ditemukan"))
    },
    detailUpdate: (req,res) => {
        books.findOne({
            where: {id: Number(req.params.id)}
        })
        .then(result => {
            if (result !== null){
            res.render("books/update", {title:"Update Data Buku",books:result})
            } else {
                res.status(404).send("Error - Buku tidak ditemukan")
            }
        })
        .catch(err => res.status(404).send("Error - Buku tidak ditemukan"))
    },
    new: (req,res) => {
        res.render("books/create",{title : "Tambah Buku Baru"})
    },
    create: (req,res) => {
        const { isbn, judul, sinopsis, penulis, genre} = req.body
        books.create({
            isbn: parseInt(isbn),
            judul: judul,
            sinopsis: sinopsis,
            penulis: penulis,
            genre:genre
        })
        .then(() => res.redirect("/books"))
        .catch(err => res.send(`Failed - ${JSON.stringify(err.message)}`))
    },
    update: (req,res) => {
        const { isbn, judul, sinopsis, penulis, genre} = req.body
        books.update({
            isbn: isbn, 
            judul: judul,
            sinopsis: sinopsis,
            penulis: penulis, 
            genre: genre
        },{
            where: {id:req.params.id}
        })
        .then(result => {
            if (result !== null){
                res.redirect("/books")
            } else {
                res.status(404).send("Error - Buku tidak ditemukan")
            }
        })
        .catch(err => res.status(404).send("Error - Buku tidak ditemukan"))
        
    },
    delete: (req,res) => {
        console.log(req.params.id)
        books.destroy({
            where:{id:req.params.id}
        })
        .then(() => res.redirect("/books"))
    }
}