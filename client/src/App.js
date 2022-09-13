import "./global.css"
import { Homepage, ProductForm, NotFoundPage, VerProduct, BackurlMercadoPago, Category, AllProducts, AdminPanel, EditProduct, DeleteProduct, CarritoMultiple, UserPanel, SearchOrder } from './pages/index';
import {Route, Routes} from 'react-router-dom';
import { ProductContainer } from './context/productContext';
import {Toaster} from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const {user} = useAuth0();

  return (

    <div className='bg-white'>
      <ProductContainer>

        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/new' element={user ? <ProductForm/> : <NotFoundPage/>}/>
            <Route path='/edit/:id' element={<ProductForm/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/product/:id' element={<VerProduct/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/backurlmercadopago' element={<BackurlMercadoPago/>}/>
            <Route path='/allproducts' element={<AllProducts/>}/>
            <Route path='/adminpanel' element={user ? <AdminPanel/> : <NotFoundPage/>}/>
            <Route path='/searchorder' element={user ? <SearchOrder/> : <NotFoundPage/>}/>
            <Route path='/userpanel' element={user ? <UserPanel/> : <NotFoundPage/>}/>
            <Route path='/editproduct' element={user ? <EditProduct/> : <NotFoundPage/>}/>
            <Route path='/deleteproduct' element={user ? <DeleteProduct/> : <NotFoundPage/>}/>
            <Route path='/cart' element={<CarritoMultiple/>}/>

        </Routes>
        <Toaster/>

      </ProductContainer>
    </div>
      

  );
}

export default App;
