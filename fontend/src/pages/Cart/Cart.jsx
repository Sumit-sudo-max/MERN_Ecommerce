/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import Container from '../../components/Container/Container';
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs';
import Meta from '../../components/Site-Layout/Meta';
import watch from "../../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../../features/user/userSlice';


const Cart = () => {

  const userCartState = useSelector(state => state.auth.cartProducts)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart())
  },[]);
  console.log(userCartState);


  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumbs title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {
              userCartState && userCartState?.map((item, index) => {
                return(
                  <div key={index} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img src={watch} className="img-fluid" alt="product image" />
                    </div>
                    <div className="w-75">
                      <p>{item?.productId.title}</p>
                      <p className='d-flex gap-3'>
                        Color : <ul className="colors ps-0">
                          <li style={{backgroundColor :  item?.color.title}}></li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">₹ {item?.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        id=""
                        value={item?.quantity}
                      />
                    </div>
                    <div>
                      <AiFillDelete className="text-danger " />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">₹ {item?.price}</h5>
                  </div>
                </div>
                )
              })
            }
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: ₹ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
  


export default Cart