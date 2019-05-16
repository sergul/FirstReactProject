const express = require('express');
const router = express.Router();

// Item Model
Item = require('../../models/Item');

// @route   GET api/items
// @desc    Gets All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    })
});

module.exports = router;