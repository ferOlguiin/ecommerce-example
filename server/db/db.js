import mongoose from "mongoose";
import { URIMONGO_DB } from "../config.js";

export async function conectarDB() {
    try {
        const db = await mongoose.connect(URIMONGO_DB);
        console.log("Conectado a la base de datos: " + db.connection.name + "🔥");
    } catch (error) {
        console.log(error);
    }
}