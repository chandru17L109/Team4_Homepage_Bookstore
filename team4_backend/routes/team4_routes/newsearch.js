var express = require('express')
var router = express.Router()
const query_find = require('../../middleware/team4_middleware/query_params');
const {findAlldata,insertdata,findDataBasedOnTitle,findDataBasedOnAuthor,findDataBasedOnLanguage,findDataBasedOnSearchItem} = require('../../controllers/team4_controllers/newsearch')

const Books = require('../../models/team4_models/search');

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
