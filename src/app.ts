const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// app.get('/yoav', (req, res) => {
//     res.send('Hello Yoav!');
//     console.log('Yoav is calling');
// })

app.listen( port, () => {
    console.log(`Exmple app listening on port ${port}`);
})