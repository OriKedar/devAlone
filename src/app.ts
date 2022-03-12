const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.get('/yoav', (req, res) => {
    res.send('Hello Yoav!');
    console.log('Yoav is calling');
})

app.get('/:id', (req, res) => {
    res.send(req.params.id);
    console.log(req.params.id);
})

app.listen( port, () => {
    console.log(`Example app listening on port ${port}`);
})