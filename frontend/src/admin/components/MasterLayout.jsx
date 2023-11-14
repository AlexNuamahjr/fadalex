import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'

const MasterLayout = () => {
  return (
    <body data-sidebar="dark">

    {/* <!-- <body data-layout="horizontal" data-topbar="dark"> --> */}

        {/* <!-- Begin page --> */}
        <div id="layout-wrapper">

            
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo.svg" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="17"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-light.svg" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="19"/>
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        {/* <!-- App Search--> */}
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>

                        <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                            <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <span key="t-megamenu">Mega Menu</span>
                                <i className="mdi mdi-chevron-down"></i> 
                            </button>
                            <div className="dropdown-menu dropdown-megamenu">
                                <div className="row">
                                    <div className="col-sm-8">
    
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="h" key="t-lightbox">Lightbox</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-range-slider">Range Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-sweet-alert">Sweet Alert</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-rating">Rating</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-forms">Forms</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-tables">Tables</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-charts">Charts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-applications">Applications</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#" key="t-ecommerce">Ecommerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-calendar">Calendar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-email">Email</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-projects">Projects</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-tasks">Tasks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-contacts">Contacts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#" key="t-light-sidebar">Light Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-compact-sidebar">Compact Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-horizontal">Horizontal layout</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-maintenance">Maintenance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-coming-soon">Coming Soon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-timeline">Timeline</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-faqs">FAQs</a>
                                                    </li>
                            
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#" key="t-lightbox">Lightbox</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-range-slider">Range Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-sweet-alert">Sweet Alert</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-rating">Rating</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-forms">Forms</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-tables">Tables</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" key="t-charts">Charts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-5">
                                                <div>
                                                    <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-magnify"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
        
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">

                                {/* <!-- item--> */}
                                <a href="#" className="dropdown-item notify-item language" data-lang="en">
                                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">English</span>
                                </a>
                                {/* <!-- item--> */}
                                <a href="#" className="dropdown-item notify-item language" data-lang="sp">
                                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="#" className="dropdown-item notify-item language" data-lang="gr">
                                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="#" className="dropdown-item notify-item language" data-lang="it">
                                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="#" className="dropdown-item notify-item language" data-lang="ru">
                                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                                </a>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-customize"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                <div className="px-lg-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/github.png" alt="Github"/>
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                                <span>Mail Chimp</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/slack.png" alt="slack"/>
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                <i className="bx bx-fullscreen"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-bell bx-tada"></i>
                                <span className="badge bg-danger rounded-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#" className="small" key="t-view-all"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{maxHeight: "230px"}}>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top d-grid">
                                    <a className="btn btn-sm btn-link font-size-14 text-center" href="#">
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* <!-- item--> */}
                                <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                                <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i className="bx bx-cog bx-spin"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <SideBar />
            {/* <!-- Left Sidebar End --> */}

            

            
            {/* <!-- Start right Content here --> */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card overflow-hidden">
                                    <div className="bg-primary bg-soft">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="text-primary p-3">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Skote Dashboard</p>
                                                </div>
                                            </div>
                                            <div className="col-5 align-self-end">
                                                <img src="assets/images/profile-img.png" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle"/>
                                                </div>
                                                <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                                <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
                                            </div>

                                            <div className="col-sm-8">
                                                <div className="pt-4">

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5 className="font-size-15">125</h5>
                                                            <p className="text-muted mb-0">Projects</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <h5 className="font-size-15">$1245</h5>
                                                            <p className="text-muted mb-0">Revenue</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <a href="#" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Monthly Earning</h4>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="text-muted">This month</p>
                                                <h3>$34,252</h3>
                                                <p className="text-muted"><span className="text-success me-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>

                                                <div className="mt-4">
                                                    <a href="#" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mt-4 mt-sm-0">
                                                    <div id="radialBar-chart" className="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Orders</p>
                                                        <h4 className="mb-0">1,235</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center">
                                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                                            <span className="avatar-title">
                                                                <i className="bx bx-copy-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Revenue</p>
                                                        <h4 className="mb-0">$35, 723</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center ">
                                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                                            <span className="avatar-title rounded-circle bg-primary">
                                                                <i className="bx bx-archive-in font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted fw-medium">Average Price</p>
                                                        <h4 className="mb-0">$16.2</h4>
                                                    </div>

                                                    <div className="flex-shrink-0 align-self-center">
                                                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                                            <span className="avatar-title rounded-circle bg-primary">
                                                                <i className="bx bx-purchase-tag-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end row --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-sm-flex flex-wrap">
                                            <h4 className="card-title mb-4">Email Sent</h4>
                                            <div className="ms-auto">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Year</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div id="stacked-column-chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Social Source</h4>
                                        <div className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                                                        <i className="mdi mdi-facebook text-primary"></i>
                                                    </span>
                                            </div>
                                            <p className="font-16 text-muted mb-2"></p>
                                            <h5><a href="#" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </a></h5>
                                            <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                            <a href="#" className="text-primary font-16">Learn more <i className="mdi mdi-chevron-right"></i></a>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-primary font-size-16">
                                                                <i className="mdi mdi-facebook text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Facebook</h5>
                                                    <p className="text-muted mb-0">125 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-info font-size-16">
                                                                <i className="mdi mdi-twitter text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Twitter</h5>
                                                    <p className="text-muted mb-0">112 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                                <i className="mdi mdi-instagram text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Instagram</h5>
                                                    <p className="text-muted mb-0">104 sales</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-5">Activity</h4>
                                        <ul className="verti-timeline list-unstyled">
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">22 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Responded to need “Volunteer Activities
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">17 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Everyone realizes why a new common language would be desirable... <a href="#">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list active">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">15 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Joined the group “Boardsmanship Forum”
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Responded to need “In-Kind Opportunity”
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4"><a href="#" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Top Cities Selling Product</h4>

                                        <div className="text-center">
                                            <div className="mb-4">
                                                <i className="bx bx-map-pin text-primary display-4"></i>
                                            </div>
                                            <h3>1,456</h3>
                                            <p>San Francisco</p>
                                        </div>

                                        <div className="table-responsive mt-4">
                                            <table className="table align-middle table-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <td style={{width: "30%"}}>
                                                            <p className="mb-0">San Francisco</p>
                                                        </td>
                                                        <td style={{width: "25%"}}>
                                                            <h5 className="mb-0">1,456</h5></td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: "94%"}} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">Los Angeles</p>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0">1,123</h5>
                                                        </td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-success rounded" role="progressbar" style={{width: "82%"}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">San Diego</p>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0">1,026</h5>
                                                        </td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Latest Transaction</h4>
                                        <div className="table-responsive">
                                            <table className="table align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th style={{width: "20px"}}>
                                                            <div className="form-check font-size-16 align-middle">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck01"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                                            </div>
                                                        </th>
                                                        <th className="align-middle">Order ID</th>
                                                        <th className="align-middle">Billing Name</th>
                                                        <th className="align-middle">Date</th>
                                                        <th className="align-middle">Total</th>
                                                        <th className="align-middle">Payment Status</th>
                                                        <th className="align-middle">Payment Method</th>
                                                        <th className="align-middle">View Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck02"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2540</a> </td>
                                                        <td>Neal Matthews</td>
                                                        <td>
                                                            07 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $400
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck03"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck03"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2541</a> </td>
                                                        <td>Jamal Burnett</td>
                                                        <td>
                                                            07 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $380
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-danger font-size-11">Chargeback</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck04"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck04"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2542</a> </td>
                                                        <td>Juan Mitchell</td>
                                                        <td>
                                                            06 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $384
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck05"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck05"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2543</a> </td>
                                                        <td>Barry Dick</td>
                                                        <td>
                                                            05 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $412
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck06"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck06"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2544</a> </td>
                                                        <td>Ronald Taylor</td>
                                                        <td>
                                                            04 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $404
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-warning font-size-11">Refund</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input className="form-check-input" type="checkbox" id="transactionCheck07"/>
                                                                <label className="form-check-label" htmlFor="transactionCheck07"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="text-body fw-bold">#SK2545</a> </td>
                                                        <td>Jacob Hunter</td>
                                                        <td>
                                                            04 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $392
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                                        </td>
                                                        <td>
                                                            {/* <!-- Button trigger modal --> */}
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* <!-- end table-responsive --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
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
                                                        <img src="assets/images/product/img-7.png" alt="" className="avatar-sm"/>
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
                                                        <img src="assets/images/product/img-4.png" alt="" className="avatar-sm"/>
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
                        <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked={false}/>
                        <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                        <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                        <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
                    </div>
                    <div className="form-check form-switch mb-5">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
                        <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                    </div>

            
                </div>

            </div> 
            {/* <!-- end slimscroll-menu--> */}
        </div>
        {/* <!-- /Right-bar --> */}

        {/* <!-- Right bar overlay--> */}
        <div className="rightbar-overlay"></div>

        
    </body>
  )
}

export default MasterLayout
