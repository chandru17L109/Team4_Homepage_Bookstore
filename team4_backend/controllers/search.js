// var express = require('express')
// var app = express()
// var router = express.Router()

// const SearchRepo = require('../repos/search')

// router.post("/", (req,res)=>{
//     let books = req.body
//     SearchRepo.insertBooks(books, function(){
//         res.status(201).json({success: true})
//     })
// })

// router.get("/", (req,res)=>{
//     SearchRepo.findAllBooks((data)=>{
//         res.json(data)
//     })
// })

// router.get("/:author", (req,res)=>{
//     SearchRepo.findBooksBasedAuthor(req.params.author, ()=>{
//         res.json(data)
//     })
// })

// module.exports = router;

//  router.patch("/", (req,res)=>{
//     let books = req.body
//     SearchRepo.updateBooks(books, ()=>{
//         res.json({success: true})
//     })
// })

// router.delete("/:title", (req,res)=>{
//     SearchRepo.deleteBooks(req.params.title, ()=>{
//         res.json({success: true})
//     })
// })