import React from 'react';
import Meta from '../../../components/Site-Layout/Meta';
import BreadCrumbs from '../../../components/Site-Layout/BreadCrumbs';
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { registerUser } from '../../../features/user/userSlice';
import { useDispatch } from "react-redux";



const singUpSchema = yup.object(
  {
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().required('Email is Required'),
    mobile: yup.string().required('Mobile is Required'),
    password: yup.string().required('Password is Required'),
  }
);



const Signup = () => {

const dispatch = useDispatch();
  
  const formik = useFormik(
    {
      initialValues: {
        firstname: '',
        lastname : '',
        email : '',
        mobile:'',
        password: '',
      },
      validationSchema: singUpSchema,
      onSubmit:(values ) => {
        dispatch(registerUser(values));
      },
    }
  )




  return (
    <div className='mainest'>
        <Meta title={'SignUp'} />
        <BreadCrumbs title='SignUp-Panel' />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className="text-center mb-3">SignUp</h3>
                        <form action=""  onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                            <div>
                              <input 
                                type="text"
                                name="firstname"
                                placeholder='First Name'
                                className='form-control'
                                value = {formik.values.firstname}
                                onChange={formik.handleChange('firstname')}
                                onBlur={formik.handleBlur('firstname')}
                              />
                              <div className="error">
                                {formik.touched.firstname && formik.errors.firstname}
                              </div>
                              </div>
                              <div>
                                <input 
                                  type="text"
                                  name="lastname"
                                  placeholder='Last Name'
                                  className='form-control'
                                  value = {formik.values.lastname}
                                  onChange={formik.handleChange('lastname')}
                                  onBlur={formik.handleBlur('lastname')}
                                />
                                <div className="error">
                                  {formik.touched.lastname && formik.errors.lastname}
                                </div>
                              </div>
                              <div>
                              <input 
                                  type="email"
                                  name='email'
                                  placeholder='Email'
                                  className='form-control'
                                  value = {formik.values.email}
                                  onChange={formik.handleChange('email')}
                                  onBlur={formik.handleBlur('email')}
                                />
                                <div className="error">
                                  {formik.touched.email && formik.errors.email}
                                </div>
                            </div>
                              <div>
                                <input 
                                  type="tel" 
                                  name='mobile'
                                  placeholder='Mobile Number'
                                  className='form-control'
                                  value = {formik.values.mobile}
                                  onChange={formik.handleChange('mobile')}
                                  onBlur={formik.handleBlur('mobile')}
                                />
                                <div className="error">
                                  {formik.touched.mobile && formik.errors.mobile}
                                </div>
                              </div>
                            <div className='mt-1'>
                                <input 
                                  type="password"
                                  name='password'
                                  placeholder='Password'
                                  className='form-control'
                                  value = {formik.values.password}
                                  onChange={formik.handleChange('password')}
                                  onBlur={formik.handleBlur('password')}
                                />
                                <div className="error">
                                  {formik.touched.password && formik.errors.password}
                                </div>
                            </div>
                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button type="submit" className="button border-0">
                                        Signup
                                    </button>                                
                                    </div>
                            </div>
                            <div>
                              <p className="text-center mt-2 mb-3">
                                Already An Account? Then 
                              </p>
                              <Link  to='/login'className='button signin d-flex align-items-center justify-content-center text-white'>
                                  Login
                              </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
        </div>
  )
}

export default Signup