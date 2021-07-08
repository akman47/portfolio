const router = require('express').Router();
const { Contact } = require('../models');
const withAuth = require('../utils/auth');

// router.use('/', (req, res) => {
//     Contact.findAll({})
//         .then(dbContactData => {
//             const messages = dbContactData.map(message => message.get({ plain: true }));

//             res.render('dashboard', {
//                 messages,
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

router.use('/', (req, res) => {
    res.render('dashboard');
})

module.exports = router;