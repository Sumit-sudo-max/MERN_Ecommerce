import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import './App.css';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import CompareProduct from './pages/CompareProduct/CompareProduct';
import Wishlist from './pages/CompareProduct/Wishlist';
import Login from './pages/Registeration/Login/Login';
import Signup from './pages/Registeration/Singnup/Signup';
import ForgotPassword from './pages/Registeration/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Registeration/ResetPassword/ResetPassword';
import SingleBlog from './pages/Blog/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermAndConditions from './pages/PrivacyPolicy/TermsAndConidition';
import RefundPolicy from './pages/PrivacyPolicy/RefundPolicy';
import ShippingPolicy from './pages/PrivacyPolicy/ShippingPolicy';
import SingleProduct from './pages/Product/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='product' element={<OurStore />} />
      <Route path='product/:id' element={<SingleProduct />} />
      <Route path='blogs' element={<Blog />} />
      <Route path='blog/:id' element={<SingleBlog />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path='compare-product' element={<CompareProduct />} />
      <Route path ='wishlist' element={<Wishlist />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset-password'  element={<ResetPassword />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="term-conditions" element={<TermAndConditions />} />
      <Route path="refund-policy" element={<RefundPolicy />} />
      <Route path="shipping-policy" element={<ShippingPolicy />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
