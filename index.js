const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ryu:aa123456@boilerplate.ityvq.mongodb.net/boilerplate?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log("connected"))
.catch(err=>console.error(err))



app.get('/', (req, res) => {
    res.send('Hello World! 아녕')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})