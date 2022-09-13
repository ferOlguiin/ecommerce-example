import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useProduct } from "../context/productContext"

export const CarritoMultiple = () => {

    const {carrito, ordenDeCompra, updateProduct, setCarrito} = useProduct();
    const [buy, setBuy] = useState(false);

    

    let result = 0;
    for(let key in carrito) {
      let initial = carrito[key].price * carrito[key].amount;
      result += initial;
    };

    const handleBuy = async () => {
      setBuy(true);
      const res = await ordenDeCompra(carrito);
      for(let key in carrito){
        await updateProduct(carrito[key]._id, {quantity: carrito[key].quantity - carrito[key].amount});
        await updateProduct(carrito[key]._id, {amount: 1});
      }
      window.open(res.data.response.init_point, 'noopener,noreferrer');
      setCarrito([]);
    };

  

    if(carrito.length > 0){
      return (
        <div className="container py-5 px-3">
            <div className="row container p-1 mb-2">
              <div className="col-sm-12 d-flex align-items-center justify-content-center flex-sm-row flex-column p-3">
                  <h1 className="text-center border-end border-3 border-secondary pe-3 me-1 my-0">TU PEDIDO</h1>
                  <h3 className="ms-2 me-0 my-0 p-0 text-center">Te estas llevando {carrito.length} {carrito.length < 2 ? 'producto':'productos'}</h3>
              </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    {
                    carrito.length > 0 ? carrito.map((item) => (
                        
                          <Cart item={item} key={item._id} />
                       
                    )) : <h4 className="text-center">No hay productos agregados en la base de datos</h4>
                    }
                </div>
                <div className="col-sm-4 pt-3 d-flex justify-content-start align-items-center flex-column">
                  <h3 className="text-center m-0">TOTAL DE SU COMPRA</h3>
                  <h2 className="text-center m-0">${result}</h2>
                  <button className="btn btn-success btn-lg m-1" disabled={buy} onClick={handleBuy}>{buy ? "Comprando..." : "Comprar"}</button>
                </div>
            </div>
        </div>
      )
    } else {
      return (
        <div className="p-5 m-5 d-flex justify-content-center align-items-center flex-column">
          <h3 className="m-0 p-0 text-center">No has agregado ningún producto al carrito</h3>
          <Link to="/allproducts" className="btn-orange rounded mt-2">Buscar productos</Link>
        </div>
      )
    }

  
}

