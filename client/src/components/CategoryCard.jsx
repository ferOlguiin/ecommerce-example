import { Link } from "react-router-dom"

export const CategoryCard = ({image, direc, name}) => {
  return (
    <div className="d-flex flex-column m-3 p-3 shadow-lg rounded zoom">

            <Link to={direc} className="text-decoration-none text-dark">
                <div className="d-flex justify-content-center align-items-center" style={{width: 220, height: 250}}>
                <img className="img-fluid" style={{width: "auto", height: "auto", maxHeight: 250, maxWidth: 220}} alt="images" src={image} />
                </div>
                <h2 className="mt-3 text-center text-warning bg-dark rounded-pill fst-italic">{name}</h2>
            </Link>
    </div>
  )
}

