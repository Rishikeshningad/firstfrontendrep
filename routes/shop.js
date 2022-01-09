const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send('<form action="/shop/add-product" > <h1>Hello from Express!</h1></form>')
  });

module.exports = router;