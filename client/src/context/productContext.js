import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { createProductRequest, deleteProductRequest, getCategoryRequest, getOneProductRequest, getProductsRequest, ordenDeCompraRequest, updateCarritoRequest, updateProductRequest } from "../api/product";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {VscTrash} from 'react-icons/vsc';


const productContext = createContext();

export const useProduct = () => {
    const context = useContext(productContext);
    return context;
}


export const ProductContainer = ({children}) => {

    //lista de productos del backend
    const [product, setProduct] = useState([]);
    const [element, setElement] = useState([]);
    const [carrito, setCarrito] = useState([]);

    //funciones que hacen comunican con el backend y hacen peticion GET, POST, PUT, DELETE
    const getProducts = async () => {
        const res = await getProductsRequest();
        setProduct(res.data);
        setElement(res.data);
    };

    const createProduct = async (newProduct) => {
        const res = await createProductRequest(newProduct);
        setProduct([...product, res.data ]);
        toast.success('Producto creado correctamente')
    };

    const deleteProduct = async (id) => {
        await deleteProductRequest(id);
        setProduct(product.filter((product) => product._id !== id));
        toast('Producto eliminado correctamente', {
            icon: <VscTrash className="text-danger"/>,
          });
    }

    const getOneProduct = async (id) => {
        const res = await getOneProductRequest(id);
        return res.data;
    };

    const getCategory = async (id) => {
        const res = await getCategoryRequest(id);
        return res.data;
    }

    const ordenDeCompra = async (elements) => {
        console.log(elements);
        const res = await ordenDeCompraRequest(elements);
        return res;
    };

    const updateProduct = async (id, newFields) => {
        const res = await updateProductRequest(id, newFields, {new: true});
        setProduct(product.map((product) => (product._id === id ? res.data : product)));
        setElement(element.map((element) => (element._id === id ? res.data : element)));
        
    };

    const updateCarrito = async (id, newFields) => {
        const res = await updateCarritoRequest(id, newFields, {new: true});
        setCarrito(carrito.map((item) => (item._id === id ? res.data : item)));
    };
    
    

    //useEffect para actualizar y que aparezcan lo mas rapido posible los nuevos items en el front
    useEffect(() => {
        getProducts();
    }, []);



  return (
    <productContext.Provider value={{ product, setProduct, element, setElement, carrito, setCarrito, getProducts, createProduct, getOneProduct, ordenDeCompra, updateProduct, getCategory, deleteProduct, updateCarrito }}>
        <Navbar/>
        {children}
        <Footer/>
    </productContext.Provider>
  )
}

