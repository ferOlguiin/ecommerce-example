import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useProduct } from "../context/productContext";


export const ProductCard = ({item}) => {

  const {setCarrito, carrito} = useProduct();

  const handleItems = () => {
      setCarrito([...carrito, item]);
      const busqueda = carrito.find(product => product._id === item._id);
      if(busqueda){
        setCarrito(carrito.filter((product) => product._id !== busqueda));
        toast.error('El producto ya se encuentra agregado en el carrito');
      } else {
        toast.success("Su producto a sido añadido al carrito")
      }

  }

  return (
    <div className="card d-flex flex-column m-2 p-3 shadow" key={item._id}>
        
            <h3 className="text-center fw-bold m-0">{item.title}</h3>
            <span className="mb-4 text-center fs-10">CODE{item._id}</span>
            <div className="d-flex justify-content-center align-items-center" style={{width: 210, height: 150}}>
              <img className="img-fluid" style={{width: "auto", height: "auto", maxHeight: 150, maxWidth: 210}} alt={item.title} src={item.image.secure_url} />
            </div>
            <h5 className="text-green mt-3 mb-0">Precio online: ${item.price}</h5>
            <div className="d-flex mb-2">Stock: {item.quantity < 1 ? (<p className="text-danger ms-1 my-0 p-0">Sin unidades</p>) : item.quantity === 1 ? (<p className="text-warning ms-1 my-0 p-0">Última unidad</p>) : "Disponible" }</div>
            <Link to={`/product/${item._id}`} className="btn-orange rounded">Ver producto</Link>
            <button onClick={handleItems} disabled={item.quantity < 1 ? true : false } className="btn btn-primary btn-md mt-1">{item.quantity < 1 ? "Sin stock" : "Agregar al carrito"}</button>
        
    </div>
  )
}

