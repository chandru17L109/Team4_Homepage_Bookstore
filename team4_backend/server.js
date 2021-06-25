const express = require('express');
const app = express();
const cors = require('cors')
// const bookRoutes = require('./controllers/search')
const searchpageRoute = require('./routes/newsearch')

const errorHandler = require('./middleware/errorhandler')
const connectToDatabase = require('./db')

app.use(cors())

//parse the incoming http request to json
app.use(express.json())

connectToDatabase();

// route for employees
app.use('/books', searchpageRoute);
app.use(errorHandler);

app.listen(4000, ()=> console.log('listening on port 4000'))