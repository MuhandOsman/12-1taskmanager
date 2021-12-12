const express = require("express");
const authCheck = require("../middleWare/authCheck");
const router = express.Router();

const teams = [
  { id: 1, team: "first" },
  { id: 2, team: "second" },
  { id: 3, team: "third" }
];

router.get("/", (req, res, next) => {
  try {
    res.send(teams);
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

router.get("/:teamsId", (req, res, next) => {
  try {
    const target = teams.find((cat) => cat.id === +req.params.teamsId);
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

router.delete("/:teamsId", authCheck, (req, res, next) => {
  try {
    const target = teams.find((cat) => cat.id === +req.params.teamsId);
    const index = teams.indexOf(target);
    const clone = [...teams];
    clone.splice(index, 1);
    res.json(clone);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
