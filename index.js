const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const port = process.env.PORT || 3000

//Routes
const userRoutes = require('./api/UserRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/users',userRoutes)


//Conexion a la Base de datos
const dbpassword = 'asd'
const uri = `mongodb+srv://jairoalperez:${dbpassword}@cluster0.xxynu.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    app.listen(port, ()=>{
        console.log('App Running')
    })
}).catch(err=>console.log('DB Error'))


/*app.listen(port,()=>{
    console.log('app running')
})*/