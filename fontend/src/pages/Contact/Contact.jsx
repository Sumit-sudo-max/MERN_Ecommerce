/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Meta from '../../components/Site-Layout/Meta';
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs';
import Container from '../../components/Container/Container';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import './Contact.css';
import { createQuerry } from '../../features/contact/contactSlice';

const contactSchema = yup.object(
  {
    name : yup.string().required("Name is Required"),
    email : yup.string().nullable().email("Email should be Valid ").required('Email is Required'),
    mobile : yup.string().default('').nullable().required("Mobile number is Required"),
    comment : yup.string().default('').nullable().required("Comment is Required"),
  }
)
const Contact = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '' ,
        mobile: '',
        comment : '',
    },
    validationSchema : contactSchema,
    onSubmit: (values) => {
        dispatch(createQuerry(values));
    },
});

  return (
    <>
    <Meta title = {'Contact'} />
    <BreadCrumbs title = 'Contact' />
    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.021740744!2d76.25511633912434!3d32.10296829555095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b458198590ddf%3A0xad8e3ff3dfe5b1fe!2sKangra%2C%20Himachal%20Pradesh%20176001!5e0!3m2!1sen!2sin!4v1676799143488!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          className="border:0 w-100" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">
                Contact
              </h3>
              <form action="" onClick = {formik.handleSubmit} className="d-flex flex-column gap-15">
                <div>
                  <input type="text" 
                  className="form-control" 
                  placeholder='Name'
                  name= 'name'
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name}
                  />
                  <div className="errors">
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                </div>
                <div>
                  <input type="email" 
                  className="form-control" 
                  placeholder='Email'
                  name='email'
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                  />
                  <div className="errors">
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                </div>
                  <div>
                    < input 
                      className='form-control'
                      placeholder='Mobile Number'
                      name = 'mobile'
                      onChange ={ formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="errors">
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                  </div>
                <div>
                  <textarea
                  id="" 
                  cols="30" 
                  rows="10" 
                  className="form-control w-100"
                  placeholder='Comments'
                  name='comment'
                  onChange={formik.handleChange("comment")}
                  onBlur={formik.handleBlur("comment")}
                  value={formik.values.comment}
                  />
                  <div className="errors">
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                </div>
                <div>
                  <button className="button border-0" type='submit'>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get IN Touch With Us</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className ='fs-1'/>
                    <address className="mb-0">
                      House No.:-5 , Near GoralDhar School , Village GoralDhar, Kangra, Himachal Pradesh
                    </address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className='fs-5'></BiPhoneCall>
                    <a href="tel:+91-9876543210">+91-9876543210</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:sumitjaswal4@gmail.com">
                        sumitjaswal4@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday  : 10 AM To 8 PM</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Contact