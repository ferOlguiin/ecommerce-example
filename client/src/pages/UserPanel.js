import { Link } from "react-router-dom";
import { PersonalData } from "../components/PersonalData";
import { Profile } from "../components/Profile";
import {VscGear, VscFeedback, VscZoomIn, VscReply} from 'react-icons/vsc';
import {BsCart, BsShop, BsHeadset} from 'react-icons/bs';
import {AiOutlineShopping} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';


export const UserPanel = () => {
  return (
    <div className="px-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-md-0 order-1 px-2 py-3 d-flex flex-column justify-content-center align-items-md-start align-items-center border-end border-2 border-secondary rounded">
              <Link to="/adminpanel" className="btn-violet text-break my-1"><VscGear className="mb-1 me-2 fs-5"/>Admin panel</Link>
              <Link to="/shopping" className="btn-violet text-break mb-1"><AiOutlineShopping className="mb-1 me-2 fs-5"/>Compras</Link>
              <Link to="/allproducts" className="btn-violet text-break mb-1"><BsShop className="mb-1 me-2 fs-5"/>Catálogo</Link>
              <Link to="/cart" className="btn-violet text-break mb-1"><BsCart className="mb-1 me-2 fs-5"/>Ver carrito</Link>
              <Link to="/claims" className="btn-violet text-break mb-1"><VscFeedback className="mb-1 me-2 fs-5"/>Reclamos</Link>
              <div className="btn-group dropend">
                <button type="button" className="btn-violet text-break dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <VscZoomIn className="mb-1 me-2 fs-5"/>Categorias
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/category/electronics">Electronicos</Link></li>
                    <li><Link className="dropdown-item" to="/category/home">Hogar</Link></li>
                    <li><Link className="dropdown-item" to="/category/automotive">Automotores</Link></li>
                    <li><Link className="dropdown-item" to="/category/clothing">Ropa</Link></li>
                    <li><Link className="dropdown-item" to="/category/fitness">Fitness</Link></li>
                    <li><Link className="dropdown-item" to="/category/muebles">Muebles</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 order-md-1 order-0 px-2 py-3 d-flex flex-column justify-content-center align-items-center">
              <Profile/>
              
              <p>
                <button className="btn-violet" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <FaUser className="mb-1 me-2 fs-5"/>Datos personales 
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="p-0 mt-1 mb-3">
                  <PersonalData/>
                </div>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center mt-1">
                <div className='d-flex justify-content-center align-items-center m-2'>
                    <Link to="asd"> 
                      <BsHeadset className='display-3 text-dark border border-2 border-dark rounded-circle p-2 mx-1'/>
                    </Link>
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                      <h4 className='m-0 p-0'>Atencion al cliente</h4>
                      <p className='m-0 p-0'>Las 24hs del día</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center align-items-center m-2'>
                    <Link to="asd">
                      <VscReply className='display-3 text-danger border border-2 border-danger p-2 rounded-circle mx-1'/>
                    </Link>
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                      <h4 className='m-0 p-0'>Boton de arrepentimiento</h4>
                      <p className='m-0 p-0'>Devoluciones</p>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}
