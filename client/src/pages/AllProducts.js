import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../context/productContext";
import {VscRefresh} from 'react-icons/vsc';

export const AllProducts = () => {

    
  
    const {product, element, setElement} = useProduct();
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (e) => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    };

    const filtrar = (dato) => {
      const result = product.filter((item) => {
          if(item.title.toString().toLowerCase().includes(dato.toLowerCase())){
            return item
          }
        })
      setElement(result);
    };


  return (
    <div className="d-flex flex-column justify-content-center align-items-center">

                <div className="container d-flex mt-3 mb-2 p-1 align-items-center justify-content-center w-50 bg-dark bg-gradient bg-opacity-25 rounded">
                  <input onChange={handleBusqueda} className="form-control my-1 mx-0" placeholder="Buscar producto" value={busqueda} name="busqueda"/>
                  <span onClick={() => {filtrar(''); setBusqueda('')}} className="btn btn-dark bg-gradient btn-md my-1 mx-1"><VscRefresh/></span>
                </div>  
                <div className="d-flex p-3 flex-wrap justify-content-center align-items-start">
                  {
                  element.length > 0 ? element.map(item => (
                      <ProductCard item={item} key={item._id}/>
                  )) : <h4>No se han encontrado productos</h4>
                  }
                </div>
    </div>
  )
}

