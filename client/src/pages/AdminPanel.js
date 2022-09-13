import { Link } from "react-router-dom";
import {VscAdd, VscEdit, VscTrash} from 'react-icons/vsc';
import {BsJournalBookmark} from 'react-icons/bs';

export const AdminPanel = () => {  

  return (
    <div className="my-5 py-5 d-flex justify-content-center align-items-center flex-column">
           <h1 className="text-center mb-5">Panel de administrador</h1>
        <Link to="/new" className="my-3 btn-lg btn btn-outline-primary d-flex justify-content-center align-items-center fs-3"><VscAdd className="me-1"/>Agregar un producto</Link>
        <Link to="/editproduct" className="my-3 btn-lg btn btn-outline-success d-flex justify-content-center align-items-center fs-3"><VscEdit className="me-1"/>Editar un producto</Link>
        <Link to="/deleteproduct" className="my-3 btn-lg btn btn-outline-danger d-flex justify-content-center align-items-center fs-3"><VscTrash className="me-1"/>Eliminar un producto</Link>
        <Link to="/searchorder" className="my-3 btn-lg btn btn-outline-dark d-flex justify-content-center align-items-center fs-3"><BsJournalBookmark className="me-2"/>Buscar información de pago</Link>

    </div>
  )
}

