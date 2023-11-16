import React from 'react'

const Register = () => {
  return (
    <>
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Free Register</h5>
                                            <p>Get your free Skote account now.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="/assets/images/profile-img.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0"> 
                                <div>
                                    <a href="index.html">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="/assets/images/logo.svg" alt="" className="rounded-circle" height="34" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2">
                                    <form className="needs-validation" novalidate action="index.html">
            
                                        <div className="mb-3">
                                            <label htmlFor="useremail" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="useremail" placeholder="Enter email" required />  
                                            <div className="invalid-feedback">
                                                Please Enter Email
                                            </div>      
                                        </div>
                
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                                            <div className="invalid-feedback">
                                                Please Enter Username
                                            </div>  
                                        </div>
                
                                        <div className="mb-3">
                                            <label htmlFor="userpassword" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password" required />
                                            <div className="invalid-feedback">
                                                Please Enter Password
                                            </div>       
                                        </div>
                    
                                        <div className="mt-4 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <h5 className="font-size-14 mb-3">Sign up using</h5>
            
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href="javascript::void()" className="social-list-item bg-primary text-white border-primary">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="javascript::void()" className="social-list-item bg-info text-white border-info">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="javascript::void()" className="social-list-item bg-danger text-white border-danger">
                                                        <i className="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                
                                        <div className="mt-4 text-center">
                                            <p className="mb-0">By registering you agree to the Skote <a href="#" className="text-primary">Terms of Use</a></p>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            
                            <div>
                                <p>Already have an account ? <a href="auth-login.html" className="fw-medium text-primary"> Login</a> </p>
                                <p>© <script>document.write(new Date().getFullYear())</script> Skote. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register