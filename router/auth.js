const express = require('express');

const router = express.router();
router.get('/', (req , res) => {
    res.send(`Hello world from server router js`);

});




module.exports = router;