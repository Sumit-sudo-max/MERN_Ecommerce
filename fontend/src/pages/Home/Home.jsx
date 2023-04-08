import React from 'react';
import { Link } from "react-router-dom";
import mainbanner from '../../images/main-banner-1.jpg';
import catbanner from '../../images/catbanner-01.jpg';
import catBanner from '../../images/catbanner-02.jpg';
import CatBanner from '../../images/catbanner-03.jpg';
import Catbanner from '../../images/catbanner-04.jpg';
import Container from '../../components/Container/Container';
import service from '../../images/service.png';
import services2 from '../../images/service-02.png';
import services3 from '../../images/service-03.png';
import services4 from '../../images/service-04.png';
import services5 from '../../images/service-05.png';
import camera from '../../images/camera.jpg';
import headphone from '../../images/headphone.jpg';
import tv from '../../images/tv.jpg';
import ProductCard from '../../components/ProductCard/ProductCard';
import famous from '../../images/famous-1.webp';
import famous2 from '../../images/famous-2.webp';
import famous3 from '../../images/famous-3.webp';
import famous4 from '../../images/famous-4.webp';
import Marquee from 'react-fast-marquee';
import brand from '../../images/brand-01.png';
import brand2 from '../../images/brand-02.png';
import brand3 from '../../images/brand-03.png';
import brand4 from '../../images/brand-04.png';
import brand5 from '../../images/brand-05.png';
import brand6 from '../../images/brand-06.png';
import brand7 from '../../images/brand-07.png';
import brand8 from '../../images/brand-08.png';
import './Home.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import SpecialProduct from '../../components/SpecialProduct/SpecialProduct';
import Meta from '../../components/Site-Layout/Meta';



const Home = () => {
  return (
    <>
    <Meta title ={'Home'} />
    {/* main banner */}
    <Container class1='home-wrapper-1 py-5'>
      <div className="row">
        <div className="col-6">
          <div className="main-banner p-3 position-relative">
            <img src={mainbanner}
            className='img-fluid rounded-5' 
            alt="MainBanner" 
            />
            <div className="main-banner-content position-absolute">
              <h4>SuperSunday For Pros.</h4>
              <h5>BlueTooth <br />HandSet</h5>
              <p>
              From ₹750 or 
              <br />₹150/month
              </p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner p-3 position-relative">
              <img src={catbanner} 
              className='img-fluid rounded-5'
              alt="Catbanner-01" 
              />
              <div className="small-banner-content position-absolute">
                <h4>Best Sale</h4>
                <h5>Laptops</h5>
                <p>
                  From ₹25,000 <br /> or ₹2,500/month
                </p>
              </div>
            </div>
              <div className="small-banner p-3 position-relative">
                <img src={catBanner}
                className='img-fluid rounded-5'
                alt="CatBanner-02" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Smart Watches</h5>
                  <p>
                    From ₹1,000 <br /> or ₹250/month
                  </p>
                </div>
              </div>
              <div className="small-banner p-3 position-relative">
                <img src={CatBanner} 
                className='img-fluid rounded-5'
                alt="CatBanner-03" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Ipad Air</h5>
                  <p>
                    From ₹30,000 <br /> or ₹4,500/month
                  </p>
                </div>
              </div>
              <div className="small-banner p-3 position-relative">
                <img src={Catbanner} 
                className='img-fluid rounded-5'
                alt="Catbanner-04" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Handset's</h5>
                  <p>
                    From ₹750 <br /> or ₹150/month
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Container>

    {/* services */}
    <Container class1="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-10'>
                <img src={service} alt="Services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p>
                    From all orders over ₹499
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src={services2} alt="service-02" />
                <div>
                <h6>Daily Surpises</h6>
                <p>Save up to 25% off</p>
              </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src={services3} alt="Services-03" />
                <div>
                <h6>Support 24/7</h6>
                <p>
                  Shop with an expert
                </p>
              </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src={services4} alt="Services-04" />
                <div>
                <h6>Affordable Prices</h6>
                <p>
                  Get Factory Direct Price
                </p>
              </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src={services5} alt="Services-02" />
                <div>
                <h6>Secure Payments</h6>
                <p>
                  100% Protected Payments
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </Container>

    {/* categories */}
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="Headphone" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="Camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="Television" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="SmartWatches" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="Headphone" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="television" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="headphone" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* featured  */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* famous */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous}
                className="img-fluid rounded-3"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From ₹3,200 or ₹160/month</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous2}
                className="img-fluid rounded-3"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous3}
                className="img-fluid rounded-3"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From  ₹30,000 or ₹2,200/month for 24 months Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous4}
                className="img-fluid rounded-3"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From ₹1,500 or ₹200 /month for 12 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* special */}
    <Container className="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Product</h3>
          </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct /> 
            </div>
        </div>
      </Container> 

      {/* popular */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* marque = used for slideshow */}
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand2" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand3" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand4" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand5" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand6" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand7" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand8" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* blog */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Our Latest Blogs
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home;