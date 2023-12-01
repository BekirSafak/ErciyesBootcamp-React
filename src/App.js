import Home from './pages/Home';
import NavbarMenu from './components/NavbarMenu';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes, Link, NavLink, Navigate, useNavigate, Router } from 'react-router-dom';



function App() {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>} ></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
