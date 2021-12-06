const express = require('express');
const authCheck = require('../middleWare/authCheck');
const router = express.Router();

const teams = [
    {id : 1, team: "first"},
    {id : 2, team: "second"},
    {id : 3, team: "third"}
]

router.get('/' , (req, res) => {
    res.send(teams)
})

router.post("/", (req, res) => {
    
    res.status(201).send(req.body);
})

router.get("/:teamsId", (req, res) => {
    const target = teams.find((cat) => cat.id === +req.params.teamsId);
    console.log(target);
    res.send(target)
})

router.put("/", (req, res) => {
    console.log(req);
    res.status(201).send(req.body)        
})

router.delete("/:teamsId", authCheck, (req, res) => {
    const target = teams.find((cat) => cat.id === +req.params.teamsId);
    const index = teams.indexOf(target)
    // no database no need to clone
    const clone = [...teams]
    clone.splice(index,1)
    res.json(clone)
})


module.exports = router


