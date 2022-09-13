import app from "./app.js";
import { PORT } from "./config.js";
import { conectarDB } from "./db/db.js";

conectarDB();


app.listen(PORT, console.log("server on port " + PORT));