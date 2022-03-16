import express, {Request, Response } from "express";


const app = express();
const port = 8080;


app.get("/*", (_req:Request, res:Response) => {
    res.send("some other")
})

app.listen( port, () => {
    console.log(`Exmple app listening on port ${port}`);
})