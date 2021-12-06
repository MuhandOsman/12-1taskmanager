const express = require('express');
const router = express.Router();

const tasks = [
    {id : 1, task: "first"},
    {id : 2, task: "second"},
    {id : 3, task: "third"}
]

router.get('/' , (req, res) => {
    res.send(tasks)
})

router.post("/", (req, res) => {
    
    res.status(201).send(req.body);
})

router.get("/:taskId", (req, res) => {
    const target = tasks.find((cat) => cat.id === +req.params.taskId);
    res.send(target)
})

router.put("/", (req, res) => {
    res.status(201).send(req.body)        
})

router.delete("/:taskId", (req, res) => {
    const target = tasks.find((cat) => cat.id === +req.params.taskId);
    const index = tasks.indexOf(target)
    // no database no need to clone
    const clone = [...tasks]
    clone.splice(index,1)
    res.json(clone)
})



module.exports = router



