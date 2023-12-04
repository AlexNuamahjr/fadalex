import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'
import Header from './Header'

const MasterLayout = ({children}) => {
  return (
    <>
    {/* // <body data-sidebar="dark"> */}

        {/* <body data-layout="horizontal" data-topbar="dark"> */}

        {/* <!-- Begin page --> */}
        <div id="layout-wrapper">

            <Header />
            

            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <SideBar />
            {/* <!-- Left Sidebar End --> */}

            {/* <!-- Start right Content here --> */}
            <div className="main-content">

                {/* <div className="page-content"> */}
                    {/* <div className="container-fluid"> */}

                        {/* <!-- start page title --> */}
                        
                        {/* <!-- end page title --> */}

                        {children}
                        {/* <!-- end row --> */}

                        
                        {/* <!-- end row --> */}

                        
                        {/* <!-- end row --> */}
                    {/* </div> */}
                    {/* <!-- container-fluid --> */}
                {/* </div> */}
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                <div className="modal fade transaction-detailModal" tabIndex="-1" role="dialog" aria-labelledby="transaction-detailModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="transaction-detailModalLabel">Order Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                                <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                                <div className="table-responsive">
                                    <table className="table align-middle table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="/assets/images/product/img-7.png" alt="" className="avatar-sm"/>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                        <p className="text-muted mb-0">$ 225 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 255</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="/assets/images/product/img-4.png" alt="" className="avatar-sm"/>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Phone patterned cases</h5>
                                                        <p className="text-muted mb-0">$ 145 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 145</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h6 className="m-0 text-right">Shipping:</h6>
                                                </td>
                                                <td>
                                                    Free
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h6 className="m-0 text-right">Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}

                {/* <!-- subscribeModal --> */}
                <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-light rounded-circle text-primary h1">
                                            <i className="mdi mdi-email-open"></i>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <h4 className="text-primary">Subscribe !</h4>
                                            <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                                            <div className="input-group bg-light rounded">
                                                <input type="email" className="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                
                                                <button className="btn btn-primary" type="button" id="button-addon2">
                                                    <i className="bx bxs-paper-plane"></i>
                                                </button>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}

                <Footer />
            </div>
            {/* <!-- end main content--> */}

        </div>
        {/* <!-- END layout-wrapper --> */}

        {/* <!-- Right Sidebar --> */}
        <div className="right-bar">
            <div data-simplebar className="h-100">
                <div className="rightbar-title d-flex align-items-center px-3 py-4">
            
                    <h5 className="m-0 me-2">Settings</h5>

                    <a href="#" className="right-bar-toggle ms-auto">
                        <i className="mdi mdi-close noti-icon"></i>
                    </a>
                </div>

                {/* <!-- Settings --> */}
                <hr className="mt-0" />
                <h6 className="text-center mb-0">Choose Layouts</h6>

                <div className="p-4">
                    <div className="mb-2">
                        <img src="/assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked={true}/>
                        <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="/assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" defaultChecked={true}/>
                        <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="/assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" defaultChecked={true}/>
                        <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="/assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-5">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" defaultChecked={true}/>
                        <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                    </div>

            
                </div>

            </div> 
            {/* <!-- end slimscroll-menu--> */}
        </div>
        {/* <!-- /Right-bar --> */}

        {/* <!-- Right bar overlay--> */}
        <div className="rightbar-overlay"></div>
        </>

        
    
  )
}

export default MasterLayout
