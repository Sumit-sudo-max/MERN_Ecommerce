/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eqeqeq */
import React from 'react';
import watch from '../../images/watch.jpg';
import ReactStars from "react-rating-stars-component";
import './ProductCard.css';
import cart from '../../images/add-cart.svg';
import view from '../../images/view.svg';
import productcompare from '../../images/prodcompare.svg';
import wishlist from '../../images/wish.svg';
import watch2 from '../../images/watch-1.avif';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const{grid , data }= props;
  console.log(data);
  
  let location = useLocation();

  return (
    <>
    {
      data?.map((item, index) => {
        return (
          <div key={index} className={`${location.pathname == '/store' ?` gr-${grid}` : "col-3"}`}>
            <Link
              to={`${
                location.pathname == "/"
                  ? "/product/:id"
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src={wishlist} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img 
                src={watch} 
                className="img-fluid" 
                alt="product image" 
                />
                <img 
                src={watch2} 
                className="img-fluid" 
                alt="product image" 
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item.brand}</h6>
                <h5 className="product-title">
                {item?.title}
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{__html: item?.description}}>
                </p>
                <p className="price">₹100.00</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={productcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={cart} alt="cart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        )
      })
    }
    </>
    )
}

export default ProductCard