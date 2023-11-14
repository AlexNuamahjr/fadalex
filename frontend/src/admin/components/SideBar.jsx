import React from 'react'

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
                            <a href="#" className="waves-effect">
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                <span key="t-dashboards">Dashboards</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="has-arrow waves-effect">
                                <i className="bx bx-layout"></i>
                                <span key="t-layouts">Product</span>
                            </a>
                        </li>

                        <li className="menu-title" key="t-apps">Apps</li>

                        <li>
                            <a href="calendar.html" className="waves-effect">
                                <i className="bx bx-calendar"></i>
                                <span key="t-calendar">Calendar</span>
                            </a>
                        </li>

                        <li>
                            <a href="chat.html" className="waves-effect">
                                <i className="bx bx-chat"></i>
                                <span key="t-chat">Chat</span>
                            </a>
                        </li>

                        <li>
                            <a href="apps-filemanager.html" className="waves-effect">
                                <i className="bx bx-file"></i>
                                <span key="t-file-manager">File Manager</span>
                            </a>
                        </li>

                            <a href="#" className="has-arrow waves-effect">
                                <i className="bx bx-store"></i>
                                <span key="t-ecommerce">Coupons</span>
                            </a> 
                        <li>
                            <a href="#" className="has-arrow waves-effect">
                                <i className="bx bx-receipt"></i>
                                <span key="t-invoices">Orders</span>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#" className="has-arrow waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-contacts">Contacts</span>
                            </a>
                            
                        </li>

                        <li className="menu-title" key="t-pages">Pages</li>

                        <li>
                            <a href="#" className="waves-effect">
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Authentication</span>
                            </a>
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
