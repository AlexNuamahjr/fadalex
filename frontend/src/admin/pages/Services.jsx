import MasterLayout from '../components/MasterLayout';
import ServiceView from '../components/service/ServiceView';
import ServiceImage from "../components/service/ServiceImage";


const Services = () => {
  return (
    <MasterLayout>
        <div className="page-content">
                <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Add Service </h4>
                        <form method="post" action="create-admin">
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Service title</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input fullName"
                            name="service-title"
                            />
                        </div>
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Service content</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input fullName"
                            name="service-content"
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary w-md" id="btn-Save">
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                    {/* <!-- end card body --> */}
                    </div>
                    {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="col-xl-6">
                    <ServiceImage />
                    {/* <!-- end col --> */}
                </div>
                </div>
                <ServiceView />
            </div>
    </MasterLayout>
  )
}

export default Services