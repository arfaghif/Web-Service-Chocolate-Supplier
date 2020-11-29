
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const myRoute = require('./routes/my-route')
const db = require('./db')
const transactionBahan = require('./routes/transactionBahan-route');


const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => {
    // res.send('Hello World!')
    
})
app.use('/api',transactionBahan)
app.use('/api', myRoute)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))