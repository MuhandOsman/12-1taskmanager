const express = require('express');
const router = express.Router();

const categories = [
    {id : 1, catName: "first"},
    {id : 2, catName: "second"},
    {id : 3, catName: "third"}
]

router.get("/", (req, res, next) => {
   
   try {
   res.send(categories)
       
   } catch (error) {
     next(error);  
   }
})

router.post("/", (req, res,next) => {
    try {
    res.status(201).send(req.body);
        
    } catch (error) {
        next(error); 
    }
})

router.get("/:catId", (req, res,next) => {
    try {
        const target = categories.find((cat) => cat.id === +req.params.catId);
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

router.delete("/:catId", (req, res,next) => {
    try {
        const target = categories.find((cat) => cat.id === +req.params.catId);
    const index = categories.indexOf(target)
    // no database no need to clone
    const clone = [...categories]
    clone.splice(index,1)
    res.json(clone)
    } catch (error) {
        next(error)
    }
})

module.exports = router


