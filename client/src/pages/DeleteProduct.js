import { Formik, Field, Form, ErrorMessage } from "formik"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext"


export const DeleteProduct = () => {

  const {product, deleteProduct} = useProduct();
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
          <Formik initialValues={{
              _id: ''
          }}
          onSubmit={async (values, actions) => {
            if(values.product){
              actions.setSubmitting(true)
              await deleteProduct(values.product);
              actions.setSubmitting(false)
            } else {
              toast.error("No se ha seleccionado ningun producto para eliminar")
            }
          }}
          >
              {({handleSubmit, isSubmitting}) => (
                  <Form onSubmit={handleSubmit} className="form-control-sm p-5 rounded border-top border-bottom border-2 border-danger">
                      <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h2 className="text-center m-0">Eliminar producto</h2>
                        <button className='btn btn-dark btn-sm px-1 py-0' onClick={() => navigate("/adminpanel")}>Volver</button>
                    </div>
                      <Field as="select" name="product" className="form-control m-1" placeholder='Producto'>
                      <option className='text-danger' >Selecciona el producto que deseas eliminar</option>
                      {
                          product.map(item => <option key={item._id} value={item._id}>{item.title} - {item._id}</option>)
                      }
                      </Field>
                      <ErrorMessage name='category' component="p" className="text-danger"/>
                      <button className="btn btn-danger btn-md m-1" disabled={isSubmitting} type="submit">{isSubmitting ? "Eliminando..." : "Eliminar"}</button>
                  </Form>
              )}
          </Formik>
    </div>
  )
}

