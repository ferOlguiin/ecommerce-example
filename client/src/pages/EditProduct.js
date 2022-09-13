import { Formik, Field, Form, ErrorMessage } from "formik"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext"

export const EditProduct = () => {

    const {product} = useProduct();
    const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
        <Formik initialValues={{
            _id: ''
        }}
        onSubmit={(values) => {
            if(values.product){
                navigate(`/edit/${values.product}`);
            } else {
                toast.error("No selecciono ningun producto para editar");
            }
        }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit} className="form-control-sm p-5 rounded border-top border-bottom border-2 border-success">
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h2 className="text-center m-0">Editar producto</h2>
                        <button className='btn btn-dark btn-sm px-1 py-0' onClick={() => navigate("/adminpanel")}>Volver</button>
                    </div>
                    <Field as="select" name="product" className="form-control m-1" placeholder='Producto'>
                    <option className='text-success' >Selecciona el producto que deseas editar</option>
                    {
                        product.map(item => <option className="fs-6" value={item._id}>{item.title} - {item.category}</option>)
                    }
                    </Field>
                    <ErrorMessage name='category' component="p" className="text-danger"/>
                    <button className="btn btn-success btn-md m-1" type="submit">Ir a editar</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

