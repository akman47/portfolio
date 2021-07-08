const router = require('express').Router();

const { Contact } = require('../models');

router.get('/', (req, res) => {
    Contact.findAll({})
        .then(dbContactData => {
            const messages = dbContactData.map(message => message.get({ plain: true }));

            res.render('dashboard', {
                messages
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;