var express = require('express')
var router = express.Router()
const query_find = require('../middleware/query_params.js');
const {findAlldata,insertdata,findDataBasedOnTitle,findDataBasedOnAuthor,findDataBasedOnLanguage,findDataBasedOnSearchItem} = require('../controllers/newsearch.js')

const Books = require('../models/search.js');

router.route('/')
.get(query_find(Books),findAlldata)
.post(insertdata)

router.route('/CommonSearch/:searchitem')
.get(findDataBasedOnSearchItem)

router.route('/Title/:title')
.get(findDataBasedOnTitle)

router.route('/Author/:author')
.get(findDataBasedOnAuthor)

router.route('/languages/:language')
.get(findDataBasedOnLanguage)

module.exports = router
