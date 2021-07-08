const router = require('express').Router();

router.use('/', (req, res) => {
    res.render('dashboard');
})

module.exports = router;