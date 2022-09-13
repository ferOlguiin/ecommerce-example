import axios from 'axios';
const token = process.env.REACT_APP_TOKEN;

export const getProductsRequest = async () => await axios.get("/products");

export const createProductRequest = async (newProduct) => {
    const form = new FormData();

    for(let key in newProduct){
        form.append(key, newProduct[key]);
    }

    return await axios.post("/create", form, {
        headers: {
            "Content-Type": "Multipart/form-data"
        }
    });
};

export const updateProductRequest = async (id, newFields) => await axios.put(`/edit/${id}`, newFields);

export const updateCarritoRequest = async (id, newFields) => await axios.put(`/edit/${id}`, newFields);

export const deleteProductRequest = async (id) => await axios.delete(`/delete/${id}`);

export const getOneProductRequest = async id => await axios.get("/product/" + id);

export const getCategoryRequest = async (id) => await axios.get(`/category/${id}`); 

export const ordenDeCompraRequest = async (elements) => await axios.post("/comprar", elements);

export const numOrdenRequest = async (id) => await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
      }
})
