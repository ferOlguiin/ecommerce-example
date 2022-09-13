import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../context/productContext";

export const Category = () => {
    
    const [items, setItems] = useState([]);
    const params = useParams();
    const {getCategory} = useProduct();

    useEffect(() => {
        (async () => {
          const data = await getCategory(params.id);
          setItems(data);
        })();
      }, [params.id]);

  return (
    <div className="d-flex p-3 flex-wrap justify-content-center align-items-start">
        {
          items.length > 0 ? items.map(item => (
            <ProductCard item={item} key={item._id}/>
          )) : <h4>No hay productos disponibles en esta categoria</h4>
        }
    </div>
  )
}

