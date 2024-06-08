'use client';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const loginValidationSchema=Yup.object().shape({
    email:Yup.string().required('Email is Required').email('Email is Invalid'),
    password:Yup.string().required('Password is required')
  });

  
  const loginForm=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm();
      
    },
    validationSchema: loginValidationSchema

  })

    
    return (
        <div className='vh-100 bg-primary-subtle d-flex align-items-center' style={{ backgroundImage: "url(https://wallpaperaccess.com/full/2593068.jpg)", backgroundSize: "cover" }}>
            <section className="container">
                <div
                    className="px-4 py-5 px-md-5 text-center text-lg-start"
                >
                    <div className="container">
                        <div className="row gx-lg-5">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Welcome
                                    <span className='text-primary' > Back</span>
                                </h1>
                                
                                
                                
                            </div>
                            <div className="col-lg-5 col-md-6 mb-5 mb-lg-0 mx-auto">
                                <div className="card shadow">
                                    <div className="card-body py-5 px-md-5">
                                        <h4 className='text-center fw-bold text-primary my-4'>Login To Continue</h4>
                                        <h4 className='text-center fw-bold text-dark my-4'>VOX-MARKET</h4>
                                        <form onSubmit={loginForm.handleSubmit}>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            <div className="mb-3">
                                                <label for="" className="form-label">Email Address</label>
                                                <input
                                                    type="text"
                                                    id="email" //write id or name
                                                    onChange={loginForm.handleChange}
                                                    value={loginForm.values.email}
                                                    className="form-control"
                                                    placeholder=""
                                                />
                                                    {
                                                      loginForm.touched.email &&
                                                      <small className="text-danger">{loginForm.errors.email}</small> 
                                                    }
                                                
                                            </div>
                                            <div className="mb-3">
                                                <label for="" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    onChange={loginForm.handleChange}
                                                    value={loginForm.values.password}
                                                    className="form-control"
                                                    placeholder=""
                                                />
                                                {
                                                      loginForm.touched.password &&
                                                      <small className="text-danger">{loginForm.errors.password}</small> 
                                                    }
                                                
                                            </div>

                                            <div className="form-check mb-4">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example33"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="form2Example33"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                            
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100 mb-4"
                                            >
                                                Login Now
                                            </button>
                                            <div className="text-center">
                                                <p>Not Registered Yet</p>
                                                <Link href='/signup'>Register Here</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            
        </div>

    )
}

export default Login;