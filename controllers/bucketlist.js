const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.end('get');
});

router.post('/', (req, res, next) => {
    const response = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    };

    res.json(response);
});

router.delete('/:id', (req, res, next) => {
    res.end('delete');
});

module.exports = router;