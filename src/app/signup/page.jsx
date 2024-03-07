'use client';
import Link from 'next/link';
import { Formik, Form, Field, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Signup = () => {
  const signupValidationSchema=Yup.object().shape({
    email:Yup.string().required('Email is Required').email('Invalid email'),
    name:Yup.string().min(2,'Too Short!').max(50, 'Too Long!').required('Required'),
    password:Yup.string().required('Password is Required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const signupForm=useFormik({
    initialValues:{
      email:'',
      name:'',
      password:'',
      cpassword:''
      
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm();
    },
    validationSchema: signupValidationSchema
  })
  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>

                      <div className="mb-3">
                        <label for="" className="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.email &&
                          <small className="text-danger">{signupForm.errors.email}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                          className="form-control"
                          placeholder=""
                          />
                          {
                            signupForm.touched.name &&
                            <small className="text-danger">{signupForm.errors.name}</small>
                          }
                        
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          className="form-control"
                          placeholder=""
                          />
                          {
                            signupForm.touched.password &&
                            <small className="text-danger">{signupForm.errors.password}</small>
                          }
                        
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="cpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.cpassword}
                          className="form-control"
                          placeholder=""
                          />
                          {
                            signupForm.touched.cpassword &&
                            <small className="text-danger">{signupForm.errors.cpassword}</small>
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
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;