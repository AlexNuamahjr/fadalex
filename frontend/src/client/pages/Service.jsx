import MasterLayout from "../components/MasterLayout"
import Hero from "../partials/Hero"

const Service = () => {
  return (
    <MasterLayout>
      <Hero title={"Service"} index={"Home"} link={"Service"}/>

      <section className="section service-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="/assets-clients/images/service/service-1.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Child care</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="/assets-clients/images/service/service-2.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2  title-color">Personal Care</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="/assets-clients/images/service/service-3.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">CT scan</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="/assets-clients/images/service/service-4.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="/assets-clients/images/service/service-6.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Examination & Diagnosis</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="/assets-clients/images/service/service-8.jpg" alt="" className="img-fluid"/>
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg">We are pleased to offer you the <span className="title-color">chance to have the healthy</span></h2>
                <a href="appoinment.html" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MasterLayout>
  )
}

export default Service