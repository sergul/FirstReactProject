import express from "express";
import fetch from "node-fetch";
import { getProblems } from "../src/data/data";
var router = express.Router();

/* GET problems */
router.get("/solutions", (req, res, next) => {
  res.json(JSON.stringify(getProblems()));
});

/* GET Leetcode problems */
router.get("/leetcode", (req, res, next) => {
  fetch("https://leetcode.com/api/problems/all/")
    .then((res) => res.json())
    .then((json) => {
      res.json(json);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
