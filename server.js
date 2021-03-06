const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = 3000 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

router.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/students.html'))
})


app.use('/', express.static('public'))
app.use('/',router)
app.use('/students',router)

app.listen((process.env.PORT || port), () => console.log('Server running! You are the puto boss'))


