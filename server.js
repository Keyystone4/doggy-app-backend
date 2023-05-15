const express = require('express');
const app = express();
const port = 3000;

//CRUD ROUTES
app.get('/dogs', (req, res) => {
    res.send("hello world");
})
//get all dogs
app.post('/dogs', (req, res) => {
    res.send('hello dog');
})
//post create
app.get('/dogs/:id', (req, res) => {
    res.send('This is the GET')
})
// get single dog
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//PUT update dog
app.put('/dogs/:id', (req, res) => {
    res.send('This is a PUT');
})

// DELETE dog
app.delete('/dogs/:id', (req, res) => {
    res.send('This is the DELETE')
})

app.listen(port, () => {
    console.log('you are connected to the Port 3000');
})