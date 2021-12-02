const express = require('express');
const router = express.Router();

const categories = [
    {id : 1, catName: "first"},
    {id : 2, catName: "second"},
    {id : 3, catName: "third"}
]

router.get('/' , (req, res) => {
    res.send(categories)
})



module.exports = router



module.exports = router