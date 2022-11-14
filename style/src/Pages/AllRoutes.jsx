import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import CategoryProduct from './CategoryProduct'; 
import Details from './Details';
import Category from '../Components/Category';
import Cart from './Cart';
import Checkout from './Checkout';
import Auth from './Auth';

const AllRoutes = () => {
  return (
    <>  
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<h1>About Us</h1>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/categories' element={<Category/>} />
            <Route path='/Contact' element={<h1>Contact Us</h1>} />
            <Route path="/CategoryProduct" element={<CategoryProduct/>} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/auth' element={<Auth/>} />

        </Routes>
    </>
  )
}

export default AllRoutes;