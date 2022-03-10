import express from "express";
import * as echoHandler from "./handlers/echoHandler/echoHandler"


const app = express();

app.set("port", process.env.PORT || 8080);

app.get("/", echoHandler.hello);

export default app;