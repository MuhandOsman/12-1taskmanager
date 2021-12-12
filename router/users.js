const express = require("express");
const router = express.Router();

const users = [
  { id: 1, catName: "first" },
  { id: 2, catName: "second" },
  { id: 3, catName: "third" },
];
const errorFunc = () => {
    throw new Error("invented error")
}
router.get("/", (req, res, next) => {
  try {
      errorFunc()  
      res.send(users);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.status(201).send(req.body);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId", (req, res, next) => {
  try {
    const target = users.find((cat) => cat.id === +req.params.userId);
    console.log(target);
    res.send(target);
  } catch (error) {
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
    console.log(req);
    res.status(201).send(req.body);
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId", (req, res, next) => {
  try {
    const target = users.find((cat) => cat.id === +req.params.userId);
    const index = users.indexOf(target);
    // no database no need to clone
    const clone = [...users];
    clone.splice(index, 1);
    res.json(clone);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
