const express = require('express');
const router = express.Router();

//CRUD ROUTES

// get all dogs
router.get('/', (req, res) => {
    res.send("hello world");
})
//get all dogs
router.post('/', (req, res) => {
    res.send('hello dog');
})
//post create
router.get('/:id', (req, res) => {
    res.send('This is the GET')
})
// get single dog
router.get('/', (req, res) => {
    res.send('Hello World!');
})

//PUT update dog
router.put('/:id', (req, res) => {
    res.send('This is a PUT');
})

// DELETE dog
router.delete('/:id', (req, res) => {
    res.send('This is the DELETE')
})

module.exports = router;