const express = require('express');
const router = express.Router();

const users = [
    {id : 1, userName: "first"},
    {id : 2, userName: "second"},
    {id : 3, userName: "third"}
]

router.get('/' , (req, res) => {
    res.send(users)
})

router.post("/", (req, res) => {
    
    res.status(201).send(req.body);
})

router.get("/:usersId", (req, res) => {
    const target = users.find((cat) => cat.id === +req.params.usersId);
    console.log(target);
    res.send(target)
})

router.put("/", (req, res) => {
    console.log(req);
    res.status(201).send(req.body)        
})

router.delete("/:usersId", (req, res) => {
    const target = users.find((cat) => cat.id === +req.params.usersId);
    const index = users.indexOf(target)
    // no database no need to clone
    const clone = [...users]
    clone.splice(index,1)
    res.json(clone)
})


module.exports = router
