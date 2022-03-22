import express, {Router} from "express";

class Server {
    private app: express.Application;

    constructor(routes: Router) {
        this.app = express();
        this.app.set("port", process.env.PORT || 8080);
        this.app.use(routes);
    }

    public run() {
        this.app.listen(this.app.get("port"), ()=> {
            console.log(`Exmple app listening on port %s`, this.app.get("port"));
        })
    }
}

export default Server;
