/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs';
import Meta from '../../components/Site-Layout/Meta';
import Container from '../../components/Container/Container';
// import Color from '../../components/Colors/Color';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../../features/user/userSlice';
import { addToWishlist } from '../../features/products/productSlice';
// import watch1 from '../../images/watch-1.avif';
// import cross from '../../images/cross.svg';

const Wishlist = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getWishlistFromDb();
    });

    const getWishlistFromDb = () =>{
        dispatch(getUserProductWishlist());
    }

    const wishlistState = useSelector( (state) => state?.auth?.wishlist?.wishlist);
    
    const removeFromWishlist = () => {
        dispatch(addToWishlist());
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        },300)
    }

    return (
        <>
        <Meta title={"Compare Products"} />
        <BreadCrumbs title='Compare-Products' />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            {wishlistState && wishlistState?.length === 0 && (<div className='text-center fs-3' style={{color:'red'}}>No Data </div>) }
                {   wishlistState &&
                    wishlistState?.map((item, index) => {
                        return(
                            <div className="col-3" key={index}>
                            <div className="compare-product-card position-relative">
                                <img
                                    onClick ={ (e) => {removeFromWishlist(item?._id)}}
                                    src={item?.images[0].url}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img src={item?.images[1].url} 
                                    alt="watch" 
                                    />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        {item?.title}
                                    </h5>
                                    <h6 className="price mb-3 mt-3">₹ {item?.price}</h6>
                                    </div>
                                    </div>
                        </div>
                        )
                    })
                }
        </div>
    </Container>
    </>
);
};

export default Wishlist