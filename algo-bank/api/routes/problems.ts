import express from "express";
var router = express.Router();
import { getProblems } from "../src/core/data/data";

/* GET problems */
router.get('/', function (req, res, next) {
  res.json(JSON.stringify(getProblems()));
});

module.exports = router;
