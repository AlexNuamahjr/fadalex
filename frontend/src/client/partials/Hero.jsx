import React from 'react'

const Hero = ({title, index, link}) => {
  return (
    <>
        <section className="page-title bg-1">
        <div className="overlay"></div>
                <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="block text-center">
            {/* <span className="text-white">About Us</span> */}
            <h1 className="text-capitalize mb-5 text-lg">{title}</h1>

            <ul className="list-inline breadcumb-nav">
                <li className="list-inline-item"><a href="index.html" className="text-white">{index}</a></li>
                <li className="list-inline-item"><span className="text-white">/</span></li>
                <li className="list-inline-item"><a href="#" className="text-white-50">{link}</a></li>
            </ul>
            </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero