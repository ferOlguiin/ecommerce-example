import express from "express";
import router from "./routes/index.routes.js";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";




const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(__dirname, '../client/build')));

//routes
app.use(router);

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, '../client/build/index.html'))
});




export default app;