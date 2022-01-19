const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html'); 

router.get("/", (req, res, next) => {
   
   try {
   res.send(tasks)
       
   } catch (error) {
     next(error);  
   }
})

router.post("/", (req, res,next) => {
    try {
        if(!req.body.description ) return res.status(400).json("missing description!!")
        if(!req.body.dueDate ) return res.status(400).json("missing Date!")
        const sanitize = sanitizeHtml(
            req.body.description,{ allowedTags:[]}
        )
        /* res.json("no html allowed") */
    res.status(201).send(req.body);
        
    } catch (error) {
        next(error); 
    }
})

router.get("/:teamId", (req, res,next) => {
    try {
        const target = tasks.find((cat) => cat.id === +req.params.teamId);
    console.log(target);
    res.send(target)
    } catch (error) {
        next(error);
    }
})

router.put("/", (req, res,next) => {
    try {
        console.log(req);
    res.status(201).send(req.body)
    } catch (error) {
        next(error);
    }        
})

router.delete("/:teamId", (req, res,next) => {
    try {
        const target = tasks.find((cat) => cat.id === +req.params.teamId);
    const index = tasks.indexOf(target)
    // no database no need to clone
    const clone = [...tasks]
    clone.splice(index,1)
    res.json(clone)
    } catch (error) {
        next(error)
    }
})

module.exports = router


