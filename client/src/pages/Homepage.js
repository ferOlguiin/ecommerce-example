import img1 from '../images/banner.jpg';
import img2 from '../images/banner4.jpg';
import category1 from '../images/electronicos.jpg';
import category2 from '../images/home.jpg';
import category3 from '../images/automotive.jpg';
import category4 from '../images/clothing.jpg';
import category5 from '../images/gym.jpg';
import category6 from '../images/muebless.jpg';
import { CategoryCard } from "../components/CategoryCard";
import {FaWhatsapp, FaPhoneAlt, FaRegBuilding, FaLinkedinIn, FaTruck} from 'react-icons/fa';
import {BsHeadset, BsTagFill, BsBuilding} from 'react-icons/bs';
import {VscReply, VscGithubInverted} from 'react-icons/vsc';
import {Link} from 'react-router-dom';

export const Homepage = () => {

  return (
    <div>  

      <div id="carouselExampleControls" className="carousel slide d-flex justify-content-center align-items-center py-5"    data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" style={{height:"auto", maxHeight: 490}} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{height:"auto", maxHeight: 490}} alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="mt-2 p-2 mb-2 fs-3 btn-orange-25">Ecommerce</h2>

      <div className='container my-4 bg-opacity-50 d-flex flex-column'>
        <div className='d-flex justify-content-center align-items-center flex-sm-row flex-column'>
          <h5 className='display-2 me-4 my-0 p-0'><FaTruck className='text-secondary'/></h5>
          <p className='mb-0 mt-2 p-0 fs-4 text-break'>Envios gratis a todo el país</p>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-sm-row-reverse flex-column'>
          <h5 className='display-2 ms-4 my-0 p-0'><BsTagFill className='text-green'/></h5>
          <p className='mb-0 mt-2 p-0 fs-4 text-break'>¡Las mejores ofertas las encontras con nosotros!</p>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-sm-row flex-column'>
          <h5 className='display-2 me-4 my-0 p-0'><BsBuilding className='text-danger'/></h5>
          <p className='mb-0 mt-2 p-0 fs-4 text-break'>¿Necesitas comprar al por mayor? ¡Nosotros te ayudamos!</p>
        </div>
      </div>

      <h2 className="mt-2 p-2 mb-2 fs-3 btn-orange-25">Categorias</h2>

      <div className="d-flex flex-column pb-4 justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <CategoryCard image={category1} name="Electronicos" direc="/category/electronics" />
          <CategoryCard image={category5} name="Fitness" direc="/category/fitness" />
          <CategoryCard image={category2} name="Hogar" direc="/category/home" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <CategoryCard image={category3} name="Automotores" direc="/category/automotive" />
          <CategoryCard image={category4} name="Ropa unisex" direc="/category/clothing" />
          <CategoryCard image={category6} name="Muebles" direc="/category/muebles" />
        </div>
      </div>

      <h2 className="mt-2 p-2 fs-3 btn-orange-25">¡Lo que necesites en un click!</h2>

      <div className='d-flex justify-content-sm-center justify-content-start align-items-center py-5 px-2 flex-wrap'>
            <div className='d-flex justify-content-center align-items-center m-2'>
              <Link to="/">
                <FaWhatsapp className='display-3 text-success border border-2 border-success rounded-circle p-2 mx-1'/>
              </Link>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4 className='m-0 p-0'>WhatsApp</h4>
                <p className='m-0 p-0'>Atencion al cliente</p>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center m-2'>
              <Link to="/">
                <FaPhoneAlt className='display-3 text-info border border-info border-2 rounded-circle p-2 mx-1'/>
              </Link>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4 className='m-0 p-0'>Compra online</h4>
                <p className='m-0 p-0'>0800-X11-XXXX</p>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center m-2'>
              <Link to="/">
                <FaRegBuilding className='display-3 text-warning border border-2 border-warning p-2 rounded-circle mx-1'/>
              </Link>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4 className='m-0 p-0'>Ventas corporativas</h4>
                <p className='m-0 p-0'>Todo para su empresa</p>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center m-2'>
              <Link to="/"> 
                <BsHeadset className='display-3 text-dark border border-2 border-dark rounded-circle p-2 mx-1'/>
              </Link>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4 className='m-0 p-0'>Atencion al cliente</h4>
                <p className='m-0 p-0'>Las 24hs del día</p>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center m-2'>
              <Link to="/">
                <VscReply className='display-3 text-danger border border-2 border-danger p-2 rounded-circle mx-1'/>
              </Link>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <h4 className='m-0 p-0'>Boton de arrepentimiento</h4>
                <p className='m-0 p-0'>Atencion al cliente</p>
              </div>
            </div>
      </div>

      <h2 className="mt-2 p-2 fs-3 btn-orange-25">¡Lo que necesitas saber!</h2>

      <div className='d-flex justify-content-sm-center justify-content-start align-items-center py-5 px-2 flex-wrap'>
            <p className='fs-5 text-center text-break' id="info">Esta web tiene las funciones básicas con las que puedes obtener, crear, editar borrar y comprar productos, los cuales contienen varios datos entre ellos una imagen la cual se aloja en cloudinary. Hay diferentes secciones las cuales cada una contienen sus respectivas funciones y que haceres. El panel de administrador (al cual solo se puede acceder una vez logeado, TODOS los usuarios logeados son admins) contiene las funciones básicas para poder crear, editar, borrar, etc.</p>
            <p className='fs-5 text-center text-break'>Primero que nada y antes de proseguir es importante que sepas que la compra de items sólo la podrás hacer en caso de que tengas una cuenta de prueba y una tarjeta de prueba, ambas proporcionada por mercado pago, ya que el "vendedor" de los items de esta web es un usuario de prueba y mercado pago no permite bajo ningún concepto que un usuario real pueda comprar a un usuario de prueba, como en este caso.</p>
            <p className='fs-5 text-center text-break'>Un ejemplo para probar es, entrar en la sección de productos, elegir los items para simular una compra, dirigirse al carrito, modificar las unidades que se desearian comprar en cada productos y clickear el botón de compra. Este una vez ejecutado redirecciona a la interfaz creada por mercado pago para llevar a cabo todo el proceso de compra y registro de datos. Una vez que la compra se ejecutó esa interfaz arroja un resultado, el cual aparte de ver en la interfaz de mercado pago, también se puede ver en la web una vez ya redireccionado. Se pueden visualizar los datos del "estado del pago" y el "id de la compra/pago", estos datos podrian ser de utilidad tanto para el usuario como para el vendedor.
            Luego estos datos pueden corroborarse en el admin panel en el botón de "buscar información de pago", una vez colocado el número y clickeado el botón de búsqueda se obtendrá la información correspondiente a ese identificador de pago.</p>
            <p className='fs-5 text-center text-break'>Espero sea de utilidad para aquel que ingrese al sitio y en caso de necesitar información respecto al código puede encontrarlo aquí <a href='https://github.com/ferOlguiin/ecommerce-example' target="_blank" rel="noreferrer" >LinkGithub</a></p>
            <p className='fs-5 text-center text-break'>En caso de que detectes algún error, me sería de muchisima utilidad el que me lo puedas comunicar por lo que aquí abajo te dejo mis contactos.</p>
            <p className='fs-5 text-center text-break text-decoration-underline'>Por último, este e-commerce que desarrollé, esta hecho pura y exclusivamente con fines prácticos, todo lo que contiene la web es ficticio, por ende ningun item ni transacción es válida.</p>
            <a className='btn btn-dark btn-sm text-decoration-none me-1' href='https://github.com/ferOlguiin?tab=repositories' rel="noreferrer" target="_blank">GitHub <VscGithubInverted className='mb-1 ms-1'/></a><a className='btn btn-info ms-1 btn-sm text-decoration-none' rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/fernando-olguin-5a63a9236/'>LinkedIn <FaLinkedinIn className='mb-1 ms-1'/></a>
      </div>

    </div>
  )
}