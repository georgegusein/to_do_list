const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://virtnet:1234@ds153413.mlab.com:53413/virtnet',['tasks']);
router.get('/tasks',(req,res,next)=>{
    db.tasks.find((err,tasks)=>{
        if(err){
            res.send(err);
        }else{
            res.json(tasks);
        }
    });
});

module.exports = router;