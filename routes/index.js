const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('try to get')
    res.sendFile(path.join(__dirname,'index'))
})

module.exports = router