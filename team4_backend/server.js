const express = require('express');
const app = express();
const cors = require('cors')

const searchpageRoute = require('./routes/team4_routes/newsearch')


const errorHandler = require('./middleware/team4_middleware/errorhandler')
const connectToDatabase = require('./database/team4_database/db')

app.use(cors())

app.use(express.json())

connectToDatabase();

app.use('/books', searchpageRoute);
app.use(errorHandler);

app.listen(4000, ()=> console.log('listening on port 4000'))