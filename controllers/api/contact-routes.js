const router = require('express').Router();
const { Contact } = require('../../models');

router.get('/', (req, res) => {
    Contact.findAll({})
        .then(dbContactData => res.json(dbContactData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Contact.findOne(
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbContactData => {
            if (!dbContactData) {
                res.status(404).json({ message: 'No contact found with this id' });
                return;
            }
            res.json(dbContactData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Contact.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
        .then(dbContactData => res.json(dbContactData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Contact.update(
        {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbContactData => {
            if (!dbContactData) {
                res.status(404).json({ message: 'No contact found with this id' });
                return;
            }
            res.json(dbContactData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Contact.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbContactData => {
        if (!dbContactData) {
            res.status(404).json({ message: 'No contact found with this id' });
            return;
        }
        res.json(dbContactData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;