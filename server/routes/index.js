const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'ITGAM', author: 'Juan Carlos & Luis Alfonso' });
});

// Pripio

module.exports = router;
