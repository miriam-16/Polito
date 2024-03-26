import express from 'express'
import morgan from 'morgan'

const app = express() 
app.use(morgan('dev')) //Logging -> Print the request received
app.use(express.static('public'))
app.use(express.json)

app.get('/', (req, res) => {
    res.send('Hello there')
})

//the application doesn't stop, it's always listening
app.listen(3000, () => {console.log('Application started')})