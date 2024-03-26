import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send('Hello there')
})

//the application doesn't stop, it's always listening
app.listen(3000, () => {console.log('Application started')})