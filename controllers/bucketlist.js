const express = require('express');
const router = express.Router();
const bucketList = require('../models/List');

router.get('/', (req, res) => {
    bucketList.getAllLists((err, lists) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to load all lists. Error: ${err}`
            });
        } else {
            res.json({
                success: true,
                lists: lists
            });
        }
    });
});

router.post('/', (req, res, next) => {
    const newList = new bucketList({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });

    bucketList.addList(newList, (err, list) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to add a new list. Error: ${err}`
            });
        } else {
            res.json({
                success: true,
                message: 'Added successfully'
            });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;

    bucketList.deleteListById(id, (err, list) => {
        if (err) {
            res.json({
                success: false,
                message: `Failed to delete lists. Error: ${err}`
            });
        } else if (list) {
            res.json({
                success: true,
                message: 'Deleted successfully'
            });
        } else {
            res.json({
                success: false
            });
        }
    });
});

module.exports = router;