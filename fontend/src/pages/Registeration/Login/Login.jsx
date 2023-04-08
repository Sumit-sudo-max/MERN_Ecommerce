import React from 'react';
import Meta from '../../../components/Site-Layout/Meta';
import BreadCrumbs from '../../../components/Site-Layout/BreadCrumbs';
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../features/user/userSlice';


const loginSchema = yup.object({
    email: yup.string().email('Email should be valid').required("Please fill the Email"),
    password: yup.string().required('Password is Required'),
});

const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema : loginSchema ,
        onSubmit: (values) => {
            dispatch(loginUser(values));
        },
    });


    return (
        <div className='mainest'>
        <Meta title={'Login'} />
        <BreadCrumbs title='Login-Panel' />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" onSubmit={formik.handleSubmit}className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                type="email"
                                name='email'
                                placeholder='Email'
                                className='form-control'
                                onChange = {formik.handleChange("email")}
                                onBlur = {formik.handleBlur("email")}
                                value = {formik.values.email}
                                />
                                <div className="error">
                                    { formik.touched.email && formik.errors.email}
                                </div>
                            </div>
                            <div className='mt-1'>
                                <input 
                                type="password"
                                name='password'
                                placeholder='Password'
                                className='form-control'
                                value={formik.values.password}
                                onChange={formik.handleChange('password')}
                                onBlur = {formik.handleBlur('password')}
                                />
                                <div className="error">
                                    { formik.touched.password && formik.errors.password}
                                </div>
                            </div>
                            <div>
                                <Link to='/forgot-password'>Forgot Password</Link>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0 " type='submit'>
                                        Login
                                    </button>
                                    <Link to='/signup' className='button signup text-white'>
                                        Signup
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Login