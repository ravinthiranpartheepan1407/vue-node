const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.send("Our quotes route")
})

module.exports = router;
