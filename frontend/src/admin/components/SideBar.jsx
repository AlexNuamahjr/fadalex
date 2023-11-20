import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <>
        <div className="vertical-menu">

            <div data-simplebar className="h-100">

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">
                    {/* <!-- Left Menu Start --> */}
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>

                        <li>
                            <Link href="#" className="waves-effect">
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                <span key="t-dashboards">Dashboards</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="has-arrow waves-effect">
                                <i className="bx bx-layout"></i>
                                <span key="t-layouts">Product</span>
                            </Link>
                        </li>

                        <li className="menu-title" key="t-apps">Apps</li>

                        <li>
                            <Link href="calendar.html" className="waves-effect">
                                <i className="bx bx-calendar"></i>
                                <span key="t-calendar">Calendar</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="chat.html" className="waves-effect">
                                <i className="bx bx-chat"></i>
                                <span key="t-chat">Chat</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="apps-filemanager.html" className="waves-effect">
                                <i className="bx bx-file"></i>
                                <span key="t-file-manager">File Manager</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/services"} className="has-arrow waves-effect">
                                <i className="bx bx-store"></i>
                                <span key="t-ecommerce">Coupons</span>
                            </Link> 
                        </li>
                        <li>
                            <Link  className="has-arrow waves-effect">
                                <i className="bx bx-receipt"></i>
                                <span key="t-invoices">Departments</span>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="#" className="has-arrow waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-contacts">Contacts</span>
                            </Link>
                            
                        </li>

                        <li className="menu-title" key="t-pages">Pages</li>

                        <li>
                            <Link to={"/admin/administrators"} className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Authentication</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/departments"} className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Departments</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/doctors"} className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Doctors</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/services"} className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/workin-hours"} className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Working Hours</span>
                            </Link>
                        </li>
                        <li className="menu-title" key="t-components">Components</li>
                    </ul>
                </div>
                {/* <!-- Sidebar --> */}
            </div>
        </div>
    </>
  )
}

export default SideBar;
