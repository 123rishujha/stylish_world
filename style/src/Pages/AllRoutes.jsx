import {Routes,Route} from 'react-router-dom';


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>About Us</h1>} />
            <Route path='/shop' element={<h1>Shop</h1>} />
            <Route path='/categories' element={<h1>Categories</h1>} />
            <Route path='/Contact' element={<h1>Contact Us</h1>} />
        </Routes>
    </>
  )
}

export default AllRoutes;