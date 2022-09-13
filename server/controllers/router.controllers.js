import producto from "../models/Producto.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.js";
import fs from 'fs-extra';
import mercadopago from "mercadopago";
import { token_acceso } from "../config.js";


export const getProducts = async (req, res) => {
    try {
        const items = await producto.find().lean();
        return res.send(items);
    } catch (error) {
        return res.send(error);
    }
};

export const createProduct = async (req, res) => {
    try {

        const {title, description, price, quantity, category, amount} = req.body;
        const nuevoProducto = new producto({title, description, price, quantity, category, amount});
        const result = await uploadImage(req.files.image.tempFilePath);
            nuevoProducto.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }

        await fs.unlink(req.files.image.tempFilePath)
        
        await nuevoProducto.save();
        return res.send(nuevoProducto);

    } catch (error) {
        return res.send(error);
    }
};

export const editProduct = async (req, res) => {

    try {

        const {id} = req.params;
        const editItem = await producto.findByIdAndUpdate(id, req.body, {new: true});

        return res.send(editItem);

    } catch (error) {
        return res.send(error);
    }
};

export const deleteProduct = async (req, res) => {

    try {
        const {id} = req.params;
    
        const productRemoved = await producto.findByIdAndDelete(id);
        if(productRemoved.image?.public_id){
            await deleteImage(productRemoved.image.public_id);
        }

        return res.send("Archivo borrado correctamente");

    } catch (error) {
        return res.send(error);
    } 

};

export const getIdProduct = async (req, res) => {

    try {
        const {id} = req.params;

        const product = await producto.findById(id);

        return res.send(product);

    } catch (error) {
        return res.send(error);
    }

};


export const ordenDeCompra = async (req, res) => {

    mercadopago.configure({
        access_token: token_acceso
    });
    const elements = req.body;
    //console.log(elements);
    
    const arr = [];

        for(let key in elements){
            delete elements[key].description;
            delete elements[key].image;
            elements[key].quantity = elements[key].amount;
            elements[key].unit_price = elements[key].price;
            elements[key].currency_id = "ARS";
            arr.push(elements[key]);
        };
    //console.log(arr);
    
    let preference = {
        items: arr,
        back_urls: {
            "success": "https://ecommerce-example-app.herokuapp.com/backurlmercadopago",
            "failure": "https://ecommerce-example-app.herokuapp.com/backurlmercadopago",
            "pending": "https://ecommerce-example-app.herokuapp.com/backurlmercadopago"
        },
        statement_descriptor: "E-Commerce Example",
        };
    
        
      mercadopago.preferences.create(preference)
      .then((r) => {
        res.json(r);
      })
      .catch((e) => {
        console.log(e);
      })

}


export const feedback = (req, res) => {
	res.send({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
};

export const getCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const items = await producto.find().lean();
        const categoryItem = [];
        for(let i = 0; i < items.length; i++){
            if(items[i].category == id){
                categoryItem.push(items[i]);
            }
        }
        return res.send(categoryItem);
    } catch (error) {
        return res.send(error);
    }
};