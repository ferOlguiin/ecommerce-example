import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        trim: true,
        required: true
    },
    image: {
        required: true,
        type: Object,
        public_id: String,
        secure_url: String
    }

});

export default mongoose.model("Producto", productoSchema);