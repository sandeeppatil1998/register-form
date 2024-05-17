import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-12 col-md-8">
        <div className="d-none d-md-block">
          <div className="card w-100">
            <div className="card_body">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="text-center mb-4">
                    <img src="Autumn-amico 1.png" alt="logo" className="left-logo" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-white">
                    <div className="card-body px-5 d-flex flex-column justify-content-between">
                      <div className="text-center mb-4">
                        <img src="Logo.png" alt="logo" />
                      </div>
                      <h2 className="text-center mb-4 create-account-header">Create Account</h2>
                      <form className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Full Name</label>
                          <input type="text" className="form-control" placeholder="Enter Full Name" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="Enter Full Email" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" placeholder="Enter Full Password" />
                        </div>
                        <button type="submit" className="btn btn-primary col-12 mb-2">Sign Up</button>
                      </form>
                      <p className="text-center or">-OR-</p>
                      <div className="text-center mb-4">
                        <div className="d-flex justify-content-center">
                          <img src="Frame 13.png" alt="Google" className="social-icon me-2" />
                          <img src="Frame 14.png" alt="Facebook" className="social-icon me-2" />
                          <img src="Frame 15.png" alt="Apple" className="social-icon" />
                        </div>
                      </div>
                      <div className="text-center swipe">
                        <p>Already have an account? <a href="#" className="text-decoration-none login">Login</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-none">
          <div className="row">
            <div className="col-12">
              <div className="bg-white w-100 px-5 d-flex flex-column justify-content-between">
                <div className="text-center">
                  <img src="Logo.png" alt="logo" />
                </div>
                <div className="text-center mb-1">
                  <img src="Autumn-amico 1.png" alt="logo" className="left-logo" />
                </div>
                <h6 className="text-center mb-2 create-account-header">Create Account</h6>
                <form className="mb-1 m-device w-100">
                  <div className="mb-1">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control m-device" placeholder="Enter Full Name" />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control  m-device" placeholder="Enter Full Email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control  m-device" placeholder="Enter Full Password" />
                  </div>
                  <button type="submit" className="btn btn-primary col-12 mb-1">Sign Up</button>
                </form>
                <p className="text-center or">-OR-</p>
                <div className="text-center mb-1">
                  <div className="d-flex justify-content-center">
                    <img src="Frame 13.png" alt="Google" className="social-icon me-2" />
                    <img src="Frame 14.png" alt="Facebook" className="social-icon me-2" />
                    <img src="Frame 15.png" alt="Apple" className="social-icon" />
                  </div>
                </div>
                <div className="text-center m-swipe mt-2">
                  <p>Already have an account? <a href="#" className="text-decoration-none login">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
