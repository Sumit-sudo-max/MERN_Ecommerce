import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Registeration/Login';
import Forgotpassword from './pages/Registeration/Forgotpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from "./pages/Enquiry/Enquiries";
import Orders from "./pages/Orders";
import ViewEnq from './pages/Enquiry/ViewEnq';
import Bloglist from './pages/Blog/Bloglist';
import Addblog from './pages/Blog/Addblog';
import Blogcatlist from './pages/Blog/Blogcatlist';
import Addblogcat from './pages/Blog/Addblogcat';
import Categorylist from './pages/Categories/Categorylist';
import Productlist from './pages/Products/Productlist';
import AddProduct from './pages/Products/AddProduct';
import AddCoupon from './pages/Coupons/AddCoupon';
import Couponlist from './pages/Coupons/Couponlist';
import Colorlist from './pages/Colors/Colorlist';
import Addcolor from './pages/Colors/Addcolor';
import Addcat from './pages/Categories/Addcat';
import Brandlist from './pages/Brand/Brandlist';
import Addbrand from './pages/Brand/Addbrand';
import ViewOrders from './pages/ViewOrders';
import Customers from './pages/Customers';
import './App.css';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/admin" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="blog" element={<Addblog />} />
          <Route path="blog/:id" element={<Addblog />} />
          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
          <Route path="blog-category-list" element={<Blogcatlist />} />
          <Route path="blog-category" element={<Addblogcat />} />
          <Route path="blog-category/:id" element={<Addblogcat />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id" element={<ViewOrders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-color" element={<Colorlist />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App