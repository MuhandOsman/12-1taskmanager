const express = require('express');
const router = express.Router();

const categories = [
    {id : 1, catName: "first"},
    {id : 2, catName: "second"},
    {id : 3, catName: "third"}
]

router.get("/", (req, res) => {
   
   res.send(categories)
   
})

router.post("/", (req, res) => {
    
    res.status(201).send(req.body);
})

router.get("/:catId", (req, res) => {
    const target = categories.find((cat) => cat.id === +req.params.catId);
    console.log(target);
    res.send(target)
})

router.put("/", (req, res) => {
    console.log(req);
    res.status(201).send(req.body)        
})

router.delete("/:catId", (req, res) => {
    const target = categories.find((cat) => cat.id === +req.params.catId);
    const index = categories.indexOf(target)
    // no database no need to clone
    const clone = [...categories]
    clone.splice(index,1)
    res.json(clone)
})

module.exports = router


