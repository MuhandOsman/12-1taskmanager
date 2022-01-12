const db = require("../lib/database")
const express = require("express");
const router = express.Router();


const User = require("../models/User")

/* const users = [
  { id: 1, catName: "first" },
  { id: 2, catName: "second" },
  { id: 3, catName: "third" },
]; */

/* const errorFunc = () => {
    throw new Error("invented error")
} */

// ----------------------------------------------------------Mongodb --------------------------------

// router.get("/", async (req, res, next) => {
//   try {
//       // errorFunc()  
//       /* res.send(users); */
//     const users = await db.collection("users").find().toArray();
//     res.json(users);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/",async (req, res, next) => {
//   try {
//     const users = await db.collection("users").insertOne(req.body)
//     res.status(201).end("new user added");
//   } catch (error) {
//     next(error);
//   }
// });

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

// --------------------------------------------------------mongoose ----------------------

router.get("/", async (req, res, next) => {
  try {
    // errorFunc()  
    /* res.send(users); */
    const users = await User.readUser()
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post("/",async (req, res, next) => {
  try {
    const newUsers = await User.createUser(req.body)
    res.status(201).send(newUsers);
  } catch (error) {
    next(error);
  }
});
    

module.exports = router;