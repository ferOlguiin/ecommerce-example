import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { numOrdenRequest } from '../api/product';
import toast from "react-hot-toast";


export const SearchOrder = () => {

    const [numorden, setNumorden] = useState('');
    const [datos, setDatos] = useState();
    const navigate = useNavigate();


    const handleChange = (e) => {
        setNumorden(e.target.value);
    };

    const handleOrden = async () => {
        try {
            const res = await numOrdenRequest(numorden);
            setDatos(res.data);
            toast.success("Datos encontrados");
        } catch (error) {
            toast.error("El pago que intentas buscar no existe en nuestra base de datos")
        };
        

    };


    if(!datos){
        return (
            <div className='py-5 d-flex justify-content-center align-items-center flex-column'>
                <div className='form-control-sm p-5 rounded border-top border-bottom border-2 border-info'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h2 className="text-center m-0">Buscar datos de pago</h2>
                        <button className='btn btn-dark btn-sm ms-4 mt-1 py-0' onClick={() => navigate("/adminpanel")}>Volver</button>
                    </div>
                    <input type="number" placeholder="Coloque el numero de pago que busca" onChange={handleChange} className="form-control mb-3"/>
                    <button className="btn btn-info" onClick={handleOrden}>Buscar</button>
                </div>
            </div>
          )
    } else {
        return (
            <div className='pb-5 mt-5'>
                <div className='text-center bg-dark p-2 mb-4'>
                    <h1 className='fst-italic text-white'>Informacion del pago número: {numorden}</h1>
                </div>
                <div className='px-5'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <button className='btn btn-dark' onClick={() => {setNumorden(''); setDatos('');}}>Buscar otro pago</button>
                        </div>
                        <h3 className='text-decoration-underline'>Productos adquiridos</h3>
                        <ul>
                        {datos.additional_info.items.map((item) => (<li className='fs-5 text-primary' key={item.title}>Nombre del producto: {item.title} ----- Precio: ${item.unit_price} ----- Cantidad: {item.quantity}</li>))}
                        </ul>
                        <h3 className='text-decoration-underline'>Identification de la tarjeta</h3>
                            <p className='fs-5 text-success text-break'>{datos.card.cardholder.identification.type}: {datos.card.cardholder.identification.number}</p>
                            <p className='fs-5 text-success text-break'>Nombre en la tarjeta: {datos.card.cardholder.name}</p>
                        <h3 className='text-decoration-underline'>Datos de tarjeta la tarjeta</h3>
                            <p className='fs-5 text-success text-break'>Mes de expiracion: {datos.card.expiration_month}</p>
                            <p className='fs-5 text-success text-break'>Año de expiracion: {datos.card.expiration_year}</p>
                            <p className='fs-5 text-success text-break'>Primeros 6 numeros de la tarjeta: {datos.card.first_six_digits}</p>
                            <p className='fs-5 text-success text-break'>Ultimos 4 numeros de la tarjeta: {datos.card.last_four_digits}</p>
                        <h3 className='text-decoration-underline'>Fecha de creacion de pago</h3>
                            <p className='fs-5 text-success text-break'>El pago se generó el: {datos.date_created}</p>
                            <p className='fs-5 text-success text-break'>El pago fue aprobado el: {datos.date_approved}</p>
                            <p className='fs-5 text-success text-break'>El tipo de moneda fue: "{datos.currency_id}"</p>
                        <h3 className='text-decoration-underline'>Id del pago</h3>
                            <p className='fs-5 text-success text-break'>Id: {datos.id}</p>
                        <h3 className='text-decoration-underline'>Datos del comprador</h3>
                            <p className='fs-5 text-success text-break'>Email: {datos.payer.email}</p>
                            <p className='fs-5 text-success text-break'>Nombre: {datos.payer.first_name}</p>
                            <p className='fs-5 text-success text-break'>Apellido: {datos.payer.last_name}</p>
                            <p className='fs-5 text-success text-break'>{datos.payer.identification.type}: {datos.payer.identification.number}</p>
                            <p className='fs-5 text-success text-break'>Telefono: {datos.payer.phone.area_code} {datos.payer.phone.number}</p>
                        <h3 className='text-decoration-underline'>Datos del pago</h3>
                            <p className='fs-5 text-success text-break'>Tipo de pago: {datos.payment_type_id}</p>                        
                            <p className='fs-5 text-success text-break'>Tarjeta: {datos.payment_method_id}</p>  
                            <p className='fs-5 text-success text-break'>Estado del pago: {datos.status}</p>                      
                            <p className='fs-5 text-success text-break'>Detalles del pago: {datos.status_detail}</p>
                        <h3 className='text-decoration-underline'>Transaccion e impuesto</h3>
                            <p className='fs-5 text-success text-break'>Cantidad pagada: ${datos.transaction_amount}</p>
                            <p className='fs-5 text-success text-break'>Tarifa de mercadopago: ${datos.fee_details[0].amount}, esta cantidad es la abonada por el vendedor y quien lo cobra es mercadopago.</p>
                            <p className='fs-5 text-success text-break'>Cantidad total recibida por el comercio: ${datos.transaction_details.net_received_amount}</p>
                            <p className='fs-5 text-success text-break'>Impuesto para el usuario: ${datos.taxes_amount}</p>                      
                </div>
                
            </div>
        )
    }
  
}
