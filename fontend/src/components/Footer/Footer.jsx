import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from '../../images/newsletter.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="py-4">
            <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5">
                <div className="footer-top-data d-flex gap-30 align-items-center">
                    <img src={newsletter} alt="newsletter" />
                    <h2 className="mb-0 text-danger">Sign Up for Newsletter</h2>
                </div>
                </div>
                <div className="col-7">
                <div className="input-group">
                    <input
                    type="text"
                    className="form-control py-1"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-2" id="basic-addon2">
                    SubScriBe
                    </span>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                <h4 className="text-danger mb-4">Contact Us</h4>
                <div>
                    <address className="text-success fs-6">
                    XYZ Near ABC, <br /> DEF, GHI <br />
                    PinCode: 987654
                    </address>
                    <a
                    href="tel:+91-9876543210"
                    className="mt-3 d-block mb-1 text-info"
                    >
                    +91 9876543210
                    </a>
                    <a
                    href="mailto:sketchistanime@gmail.com"
                    className="mt-2 d-block mb-0 text-warning"
                    >
                    sketchistanime@gmail.com
                    </a>
                    <div className="social_icons d-flex align-items-center gap-30 mt-4">
                    <a className="text-info" href="https://www.linkedin.com/in/sumit-jaswal-26bbaa230/">
                        <BsLinkedin className="fs-4" />
                    </a>
                    <a className="text-light bg-danger" href="https://www.instagram.com/toonimator2/">
                        <BsInstagram className="fs-4" />
                    </a>
                    <a className="text-secondary" href="https://github.com/Sumit-sudo-max">
                        <BsGithub className="fs-4" />
                    </a>
                    <a className="text-danger" href="https://www.youtube.com/channel/UC3rtK8576hxzvOKCjnEkAdQ">
                        <BsYoutube className="fs-4" />
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-3">
                <h4 className="text-success mb-4">Information</h4>
                <div className="footer-link d-flex flex-column">
                    <Link to="/privacy-policy" className="text-danger py-2 mb-1">
                    Privacy Policy
                    </Link>
                    <Link to="/refund-policy" className="text-info py-2 mb-1">
                    Refund Policy
                    </Link>
                    <Link to="/shipping-policy" className="text-secondary py-2 mb-1">
                    Shipping Policy
                    </Link>
                    <Link to="/term-conditions" className="text-warning py-2 mb-1">
                    Terms & Conditions
                    </Link>
                    <Link className="text-primary py-2 mb-1">Blogs</Link>
                </div>
                </div>
                <div className="col-3">
                <h4 className="text-info mb-4">Account</h4>
                <div className="footer-link d-flex flex-column">
                    <Link to ='about' className="text-secondary py-2 mb-1">About Us</Link>
                    <Link className="text-warning py-2 mb-1">FaQ</Link>
                    <Link to= 'contact' className="text-primary py-2 mb-1">Contact</Link>
                </div>
                </div>
                <div className="col-2">
                <h4 className="text-warning mb-4">Quick Links</h4>
                <div className="footer-link d-flex flex-column">
                    <Link className="text-secondary py-2 mb-1">Laptops</Link>
                    <Link className="text-info py-2 mb-1">Headphones</Link>
                    <Link className="text-success py-2 mb-1">Tablets</Link>
                    <Link className="text-info py-2 mb-1">Watch</Link>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <p className="text-center mb-0 text-warning">
                    &copy; {new Date().getFullYear()}: Powered by SkEtChiSt-AniMe
                </p>
                </div>
            </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;