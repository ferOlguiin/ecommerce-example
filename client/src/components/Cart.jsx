import { useState } from "react";
import { VscAdd, VscRemove } from "react-icons/vsc";
import { useProduct } from "../context/productContext";
import {VscTrash} from 'react-icons/vsc';


export const Cart = ({item}) => {

    const {updateCarrito, carrito, setCarrito, updateProduct} = useProduct();
    const [wait, setWait] = useState(false);


    const handleAdd = async () => {
        if(item.amount < item.quantity){
            setWait(true);
            await updateCarrito(item._id, {amount: item.amount + 1});
            await updateProduct(item._id, {amount: item.amount + 1});
            setWait(false);
        }
    };

    const handleRemove = async () => {
        if(item.amount <= 1){
            console.log("Imposible");
        } else {
            setWait(true);
            await updateCarrito(item._id, {amount: item.amount - 1});
            await updateProduct(item._id, {amount: item.amount - 1});
            setWait(false);
        }
    };

    const removeItem = async () => {
        await updateProduct(item._id, {amount: item.amount});
        setCarrito(carrito.filter((product) => product._id !== item._id));

    }

    

  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="row container shadow rounded p-2 my-2">
            <div className="col-md-8 py-2 px-3 d-flex align-items-center justify-content-start flex-sm-row flex-column">
                <div className="rounded d-flex justify-content-center align-items-center" style={{width: 90, height: 90}}>
                    {item.image ? <img alt="asd" src={item.image.secure_url} style={{width: "auto", height: "auto", maxHeight: 90, maxWidth: 90}} className="me-4"/> : ''}    
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start">
                    <h4 className="p-0 m-0">{item.title}</h4>
                    <span className="text-break fs-6">CODE{item._id}</span>
                    <p className="my-1 mx-0 p-0 fs-6 text-green fw-bold">Precio unitario: ${item.price}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="my-0 ms-0 me-2 fs-5 ">Unidades: {item.amount}</p>
                            <button className="btn btn-sm btn-secondary bg-gradient my-0 mx-1" disabled={wait} onClick={handleAdd}><VscAdd/></button>
                            <button className="btn btn-sm btn-secondary bg-gradient m-0" disabled={wait} onClick={handleRemove}><VscRemove/></button>
                        </div>
                </div>
            </div>
            <div className="col-md-4 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className=" d-flex align-self-center align-self-md-end justify-self-center justify-self-md-start mb-3">
                    <button className="btn btn-danger btn-sm d-flex justify-content-center align-items-center py-0 px-1" onClick={removeItem}>Eliminar<VscTrash className="ms-1 fs-6"/></button>
                </div>
                <h5 className="text-break text-center">Total de este producto: ${item.amount * item.price}</h5>
            </div>
        </div>
    </div>
  )
}

