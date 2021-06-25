const mongoose = require('mongoose');
// 2. Create a schema
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Provide a text value.. It is mandatory']
    },
    author: {
        type: String,
        required: [true, 'Provide a text value.. It is mandatory']
    },
    desc: {
        type: String,
        required: [true, 'Provide a text value.. It is mandatory']
    },
    price: {
       type: Number,
       max: [5000, 'Maximum Price is 5k'],
    },
    discount: {
        type: Number,
        required: [true, 'Provide a discount for the book.. It is mandatory']
    },
    language: {
        type: String,
        required: [true, 'Provide a text value.. It is mandatory']
    },
    stock: {
        type: String,
        required: [true, 'Provide a text value.. It is mandatory']
    },
    ratings: {
        type: Number,
        enum : [1,2,3,4,5]
    },
    date: {
        type: Date,
        default : new Date()
        // required: [true, 'Provide a Published Date.. It is mandatory']
     },
    sellprice : {
        type:Number
    },
    category:{
        type: String
    }

    
});

BooksSchema.index({title: "text", author: "text"})

// 3. Model from Schema (object from schema)
const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;