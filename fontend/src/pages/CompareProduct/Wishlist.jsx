import React from 'react';
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs';
import Meta from '../../components/Site-Layout/Meta';
import Container from '../../components/Container/Container';
import Color from '../../components/Colors/Color';
import watch from '../../images/watch.jpg';
import watch1 from '../../images/watch-1.avif';
import cross from '../../images/cross.svg';

const Wishlist = () => {
    return (
        <>
        <Meta title={"Compare Products"} />
        <BreadCrumbs title='Compare-Products' />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img
                        src={watch}
                        alt="cross"
                        className="position-absolute cross img-fluid"
                    />
                    <div className="product-card-image">
                        <img src={watch} 
                        alt="watch" 
                        />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">
                            Mi SmartWatch 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                        </h5>
                        <h6 className="price mb-3 mt-3">₹ 1,500</h6>

                        <div>
                            <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Xiaomi</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type:</h5>
                                <p>Watch</p>
                            </div>
                            <div className="product-detail">
                                <h5>Availablity:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5>Color:</h5>
                                <Color />
                            </div>
                            <div className="product-detail">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                            <img
                            src={cross}
                            alt="cross"
                            className="position-absolute cross img-fluid"
                            />
                            <div className="product-card-image">
                                <img src={watch1} alt="watch1" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">
                                    Samsung SmartWatch 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-3 mt-3">₹1,500</h6>

                                <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Samsung</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availablity:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    </>
);
};

export default Wishlist