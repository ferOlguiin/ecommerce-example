import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../context/productContext";
import {VscCheck} from 'react-icons/vsc';
import toast from "react-hot-toast";


export const VerProduct = () => {


    const [check, setCheck] = useState(false);
    const [product, setProduct] = useState({
      title: '',
      description: '',
      price: '',
      quantity: '',
      category: '',
      image: null
    });

    const params = useParams();
    const {getOneProduct, carrito, setCarrito} = useProduct();

    const handleItems = () => {
      setCarrito([...carrito, product]);
      const busqueda = carrito.find(item => item._id === product._id);
      if(busqueda){
        setCarrito(carrito.filter((item) => item._id !== busqueda));
        toast.error('El producto ya se encuentra agregado en el carrito');
      } else {
        toast.success("Su producto a sido añadido al carrito")
        setCheck(true);
      }

  }

    useEffect(() => {
      (async () => {
        const data = await getOneProduct(params.id);
        setProduct(data);
        if(data.quantity < 1){
          setCheck(true);
        }
      })();
    }, [params.id]);
    

    


  return (
    <div className="d-flex justify-content-center align-items-center p-3">
        
        <div className="d-flex justify-content-center flex-column container">
          <h1 className="fw-bold text-center">{product.title}</h1>
          <span className="fs-6 mb-2 text-center">CODE{product._id}</span>
          <div className="row my-4">
            <div className="col-sm-8 d-flex justify-content-center align-items-center">
              {product.image ? <img className="img-fluid imageRender" alt={product.title} src={product.image.secure_url} /> : ''}
            </div>
            <div className="col-sm-4 d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-green fs-2 fw-bold border-bottom border-2 border-secondary pb-3">Precio online: ${product.price}</h3>
              <button onClick={handleItems} disabled={check} className="fw-bold btn btn-success mt-3 btn-lg w-50">{check ? <VscCheck/> : 'Agregar al carrito'}</button>
            </div>
          </div>
          <div className="rounded shadow p-4 container">
            <h2 className="text-center mb-4">Descripción del producto</h2>
            <p className="text-break fs-5">{product.description}</p>
            <span className="fs-5"><b>Stock actual:</b> {product.quantity < 1 ? 'Lamentablemente no hay más productos disponibles por hoy, consulta más tarde.' : product.quantity === 1 ? 'Queda solo un producto disponible para la venta ¡NO LO PIERDAS!' : `${product.quantity} productos disponibles a la venta.`}</span>
            <p className="fs-5"><b>Categoria:</b> {product.category}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/allproducts" className="btn btn-primary btn-lg bg-gradient mt-4">Volver</Link>
          </div>

        </div>
        
    </div>
  )
}

