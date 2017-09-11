const express = require('express');
const router = express.Router();

router.get('/tasks',(req,res,next)=>{
    res.send('task api');
});

module.exports = router;