const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://virtnet:1234@ds153413.mlab.com:53413/virtnet',['tasks']);

//get all tasks
router.get('/tasks',(req,res,next)=>{
    db.tasks.find((err,tasks)=>{
        if(err){
            res.send(err);
        }else{
            res.json(tasks);
        }
    });
});
//get task by id
router.get('/task/:id',(req,res,next)=>{
    let id = req.params.id;
    db.tasks.findOne({_id: mongojs.ObjectId(id)},(err,task)=>{
        if(err){
            res.send(err);
        }else{
            res.json(task);
        }
    });
});

//delete task by id
router.delete('/task/:id',(req,res,next)=>{
    let id = req.params.id;
    db.tasks.remove({_id: mongojs.ObjectId(id)},(err,task)=>{
        if(err){
            res.send(err);
        }else{
            res.json({"success":"task deleted"});
           // res.json(task);
        }
    });
});

//task is done-- task by id
router.put('/task/:id',(req,res,next)=>{
    let id = req.params.id;
    let task = req.body;
    let updTask = {};
    if(req.body.title){
        updTask = {"title":task.title,"isDone":task.isDone};
    }
    else{
        updTask.isDone = task.isDone;
    } 
         
     
    if(!updTask){
        res.send(400);
        res.json({"error":"no data modifyed"});
    }

    updTask = { $set: updTask };
    db.tasks.update({_id: mongojs.ObjectId(id)},updTask,{},(err,task)=>{
        if(err){
            res.send(err);
        }else{
             
           res.json(task);
        }
    });
});

//create task
router.post('/task',(req,res,next)=>{
    let task = req.body;
    console.log(task);
    if(!task.title){
        res.status(400);
        res.json({"error":"Bad data"});
    }else{
        task.isDone = false;
        db.tasks.save(task,(err,task)=>{
            if(err){res.send(err);
            }else{
                res.json(task);
            }
            
        });
    }
});

module.exports = router;