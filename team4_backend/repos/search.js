// // Mongoose
// const mongoose = require('mongoose');
// const Books = require('../models/search')

// // 4.Connection to db
// console.log('attempting to connect')

// // 4. Create connection
//   mongoose.connect('mongodb://localhost:27017/ctsdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });

// function insertBooks(books, fn){
//     console.log('db code in invoked')

//     let bookObj = new Books();
//     bookObj.title = books.title
//     bookObj.author = books.author
//     bookObj.desc = books.desc
//     bookObj.price = books.price
//     bookObj.discount = books.discount
//     bookObj.language = books.language
//     bookObj.stock = books.stock
//     bookObj.date = books.date

//     bookObj.save((err)=>{
//         if(err) throw err;
//         fn();
//     })
// }

// function findAllBooks(fn){
//     Books.find({}, (err,docs)=>{
//         if(err) throw err;
//         fn(docs);
//     })
// }

// function findBooksBasedAuthor(author, fn){
//     Books.findOne({author}, function (err, docs) {
//         if (err){
//             console.log(err)
//         }
//         else{
//             console.log("Result : ", docs);
//         }
//     });
// }

// function deleteBooks(title, fn) {
//     Books.deleteOne({title}, (err)=>{
//         if(err) throw err;
//         fn();
//     })
// }

// module.exports = {insertBooks, findAllBooks, findBooksBasedAuthor, deleteBooks }