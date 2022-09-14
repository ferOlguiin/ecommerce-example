import { Router } from "express";
import fileUpload from "express-fileupload";
import { createProduct, deleteProduct, editProduct, feedback, getCategory, getIdProduct, getProducts, ordenDeCompra } from "../controllers/router.controllers.js";

const router = Router();

router.get("/", (req, res) => {
    res.json("probando");
})
router.get("/products", getProducts);
router.post("/create", fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), createProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/product/:id", getIdProduct);
router.get("/feedback", feedback);
router.post("/comprar", ordenDeCompra);
router.get("/category/:id", getCategory);



export default router;