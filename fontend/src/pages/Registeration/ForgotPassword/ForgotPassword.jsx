import React from 'react'
import Meta from '../../../components/Site-Layout/Meta'
import BreadCrumbs from '../../../components/Site-Layout/BreadCrumbs'
import Container from '../../../components/Container/Container'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
   <>
    <div className='mainest'>
        <Meta title={'Forgotten-Passwored'} />
        <BreadCrumbs title='Forgot-Password-Panel' />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className="text-center mb-3">Reset Your Password</h3>
                        <p className="text-center mt-2 mb-3 text-warning">
                            We will send you an email to reset your password
                        </p>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input 
                                type="email"
                                name='email'
                                placeholder='Email'
                                className='form-control'
                                />
                            </div>
                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">
                                        Submit
                                    </button>
                                    <Link to='/login' className='button cancel text-white'>
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
        </div>
   </>

  )
}

export default ForgotPassword