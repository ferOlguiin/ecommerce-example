import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

export const BackurlMercadoPago = () => {

  const [status, setStatus] = useState(null);
  const [payid, setPayid] = useState(null);

  const location = useLocation();
  
  useEffect(() => {
      
    const queryParams = new URLSearchParams(location.search);
    const estado = queryParams.get('status');
    const pagoId = queryParams.get('payment_id');

      if(!estado){
        setStatus(null);
        setPayid(null);
      } else {
        setStatus(estado);
        setPayid(pagoId);
      }
  }, []);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center p-5">
      {status === 'approved' ? <h1 className="text-break text-center">Su pago se ha realizado correctamente, disfrute su producto!</h1> : status === 'rejected' ? <h1 className="text-break text-center">Su pago fue rechazado, porfavor contacte a su proveedor de crédito para solucionar el problema!</h1> : <h1>Su pago se encuentra en proceso, porfavor aguarde unos minutos</h1>}
      {status === 'approved' ? <p className="fs-4 text-green">Estado de pago: {status}</p> : <p className="text-danger fs-4">Estado de pago: {status}</p>}
      <p className="fs-5">Identificacion de pago: {payid}</p>
      <p className="fs-5">En caso de que necesite hacer un reclamo es importante que tenga guardado este numero de pago</p>
      <Link className="btn btn-primary btn-md px-4" to="/">Volver</Link>
    </div>
  )
}

