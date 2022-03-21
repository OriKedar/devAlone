import express from "express";

const router = express.Router();

    router.use((req, res, next) => {
        console.log('Time: ', Date.now())
        next()
    });

    router.get("/:id", (req, res) => {
        res.send(req.params.id);
        console.log(req.params.id);
    });

export { router };