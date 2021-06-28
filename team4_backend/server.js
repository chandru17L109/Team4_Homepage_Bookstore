const express = require('express');
const app = express();
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const { notFound_1, errorHandler_1 } = require('./middleware/team1_middleware/errorMiddleware.js')
const errorHandler = require('./middleware/team4_middleware/errorhandler')

const searchpageRoute = require('./routes/team4_routes/newsearch')
const userRoutes = require('./routes/team1_routes/userRoutes')

// const fileupload = require('express-fileupload')

// app.use('/dp', express.static('backend/public/uploads'))

const connectToDatabase = require('./database/team4_database/db')

app.use(cors())

app.use(express.json())

connectToDatabase();

app.use('/books', searchpageRoute);
app.use(errorHandler);


// app.use(fileupload())

app.use('/api/users', userRoutes)
app.use(notFound_1)
app.use(errorHandler_1)


const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))


// app.listen(4000, ()=> console.log('listening on port 4000'))
