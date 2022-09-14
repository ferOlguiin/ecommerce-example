import { Link } from "react-router-dom";
import {BsCart3} from 'react-icons/bs';
import { LoginButton } from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useProduct } from "../context/productContext";
import logo from '../images/shop.png';


export const Navbar = () => {

  const {isAuthenticated, user} = useAuth0();
  const {carrito} = useProduct();
  

  return (
    <>
        <nav className="d-flex sticky-top align-items-center justify-content-lg-between justify-content-center flex-lg-row flex-column py-2 px-4 mb-1">
            <div className="fw-bold fs-2 text-dark text-break d-flex align-items-center mb-2">
                <img style={{width: 60, height: 60, marginRight: 6}} src={logo} alt="img2132"/>
                <h3 className="m-0 p-0">E-commerce Example</h3>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                <Link to="/" className="btn bg-white btn-sm mx-1 my-1">Inicio</Link>
                <Link to="/allproducts" className="btn bg-white btn-sm me-1 my-1">Productos</Link>
                <div className="dropdown">
                  <button className="btn bg-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Categorias</button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/category/electronics">Electronicos</Link></li>
                    <li><Link className="dropdown-item" to="/category/home">Hogar</Link></li>
                    <li><Link className="dropdown-item" to="/category/automotive">Automotores</Link></li>
                    <li><Link className="dropdown-item" to="/category/clothing">Ropa</Link></li>
                    <li><Link className="dropdown-item" to="/category/fitness">Fitness</Link></li>
                    <li><Link className="dropdown-item" to="/category/muebles">Muebles</Link></li>
                  </ul>
                </div>
                <Link to="/cart" className="btn bg-white btn-md mx-1 my-1 position-relative"><BsCart3 className="d-flex align-items-center justify-content-center"/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {carrito.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
                {isAuthenticated ? '' : <LoginButton/>}
                {user ? <Link to="/userpanel" className="ms-2"><img alt="logo" className="rounded-circle border border-1 border-dark" src={user.picture} style={{width: 35, height: 30}}/></Link> : ''}
                
            </div>
        </nav>
    </>
  )
}

