// app.get('/', (req, res) => {
//     res.send('Welcome to my echo server');
// })

/*
run from a single file, task I
*/
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
import * as echoHandler from "./handlers/echoHandler/echoHandler"



// app.get('/:Id', (req, res) => {
//     res.send(`Welcome to my echo server ${req.params.Id}\n`)
// })
app.get("/", echoHandler.hello);

app.listen( port, () => {
    console.log(`Exmple app listening on port ${port}`);
})


// import app from "./app"


// const server = app.listen(app.get("port"), () => {
//     console.log(
//         "  App is running at http://localhost:%d in %s mode",
//         app.get("port"),
//     );
//     console.log("  Press CTRL-C to stop\n");
// });

// export default server;