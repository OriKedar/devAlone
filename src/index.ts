import Server from "./server";
import { router } from "./handlers/echoHandler/echoHandler";

const s = new Server(router);

s.run()