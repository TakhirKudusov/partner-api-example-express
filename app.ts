import express from "express"
import { createServer } from "http";
import dotenv from "dotenv"
import * as process from "process";
import router from "./routes/index.js";

dotenv.config()

const port =  process.env.PORT ?? "9000"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("", router)

const httpServer = createServer(app)

httpServer.listen(port, () => console.log(`Server is running at http://localhost:${port}`))