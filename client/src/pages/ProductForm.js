import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../context/productContext';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';



export const ProductForm = () => {
  const [data, setData] = useState({
                  title: '',
                  description: '',
                  price: '',
                  quantity: '',
                  category: '',
                  amount: '',
                  image: null
  });
  const params = useParams();
  const {createProduct, getOneProduct, updateProduct} = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
        if(params.id){
        const producto = await getOneProduct(params.id);
        setData(producto);
        }
    })();
}, [params.id]);


  return (
    <div className='d-flex justify-content-center align-items-center py-5 flex-column'>
                
                <Formik initialValues={data}
                  validationSchema={Yup.object({
                    title: Yup.string().required("Titulo requerido"),
                    description: Yup.string().required("Descripción requerida"),
                    price: Yup.number().required("Precio requerido"),
                    quantity: Yup.number().required("Cantidad requerida"),
                    category: Yup.string().required("Categoria requerida"),
                    amount: Yup.number().required("Amount requerido"),
                    image: Yup.mixed().required("Imagen obligatoria")
                    
                  })}
                  onSubmit={async (values, actions) => {
                    if(params.id){
                      await updateProduct(params.id, values);
                    } else {
                      await createProduct(values);
                    }
                    
                    actions.setSubmitting(true);
                    navigate("/");
                  } }
                  enableReinitialize
                >
                    {({handleSubmit, setFieldValue, isSubmitting}) => (
                      <Form onSubmit={handleSubmit} className="form-control-sm p-5 rounded border-top border-bottom border-2 border-primary">
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                        {params.id ? <h2 className='m-0 text-start'>Editar producto</h2> : <h2 className='m-0 text-start'>Crear producto</h2>}
                        <button className='btn btn-dark btn-sm px-1 py-0' disabled={isSubmitting} onClick={() => navigate("/adminpanel")}>Volver</button>
                        </div>

                        <label className='form-label text-primary m-0 fw-bold fst-italic' htmlFor="t">Agregue un titulo</label>
                        <Field className="form-control m-1" placeholder='Title' name="title" id="t"/>
                          <ErrorMessage name='title' component="p" className="text-danger"/>

                        <label className='form-label text-primary mb-0 mt-3 fw-bold fst-italic' htmlFor="d">Agregue una descripción</label>  
                        <Field className="form-control m-1" placeholder='Description' name="description" id="d"/>
                          <ErrorMessage name='description' component="p" className="text-danger"/>
                        
                        <label className='form-label text-primary mb-0 mt-3 fw-bold fst-italic' htmlFor="p">Agregue un precio</label>
                        <Field className="form-control m-1" placeholder='Price' name="price" type="number" id="p"/>
                          <ErrorMessage name='price' component="p" className="text-danger"/>
                        
                        <label className='form-label text-primary mb-0 mt-3 fw-bold fst-italic' htmlFor="q">Agregue el stock disponible</label>
                        <Field className="form-control m-1" placeholder='Quantity' name="quantity" type="number" id="q"/>
                          <ErrorMessage name='quantity' component="p" className="text-danger"/>
                          
                        <label className='form-label text-primary mb-0 mt-3 fw-bold fst-italic' htmlFor="c">Agregue la categoria</label>
                        <Field as="select" name="category" className="form-control m-1" placeholder='Category' id="c">
                          <option className='text-danger' >Selecciona una categoria para tu producto</option>
                          <option value="electronics">Electronicos</option>
                          <option value="home">Hogar</option>
                          <option value="automotive">Automotores</option>
                          <option value="clothing">Ropa unisex</option>
                          <option value="fitness">Fitness</option>
                          <option value="muebles">Muebles</option>
                        </Field>
                          <ErrorMessage name='category' component="p" className="text-danger"/>

                        <label className='form-label text-primary mb-0 mt-3 fw-bold fst-italic' htmlFor="a">Cantidad por defecto para items del carrito</label>
                        <Field as="select" className="form-control m-1" name="amount" type="number" id="a">
                          <option className='text-danger'>Cantidad que aparecera al usuario al agregar el item al carro</option>
                          <option value="1">1</option>
                        </Field>
                          <ErrorMessage name='amount' component="p" className="text-danger"/>

                        {params.id ? '' : <div>
                          <label className='form-label text-primary fw-bold mb-0 mt-3 fst-italic' htmlFor="i">Agregue una imagen</label>
                          <input disabled={isSubmitting} className="form-control m-1" id='i' type="file" onChange={(e) => setFieldValue("image", e.target.files[0])} name="image" />
                          <ErrorMessage name='image' component="p" className="text-danger"/></div>}
                        <button type="submit" disabled={isSubmitting} className='btn btn-primary m-1'> {!isSubmitting ? "Guardar" : isSubmitting && params.id ? 'Editando' : 'Agregando...'} </button>
                        
                      </Form>
                    )}
                </Formik>
    </div>
  )
}
