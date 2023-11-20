import MasterLayout from '../components/MasterLayout';
import DoctorImage from '../components/doctor/DoctorImage';
import DoctorView from '../components/doctor/DoctorView';

const Doctors = () => {
  return (
    <MasterLayout>
        <div className="page-content">
                <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Add Doctor </h4>
                        <form method="post" action="create-admin">
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Doctor name</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input fullName"
                            name="service-title"
                            />
                        </div>
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Specialization</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input fullName"
                            name="specialization"
                            />
                        </div>
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Brief Intro</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input fullName"
                            name="brief-intro"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Education</label>
                                <input type="text" className="form-control inputValidator email" id="formrow-email-input email " name="education_1" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >Year</label>
                                <input type="text" className="form-control inputValidator password"
                                id="formrow-password-input  password" name="year_1"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Education 2</label>
                                <input type="text" className="form-control inputValidator email" id="formrow-email-input email " name="education_2" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >Year 2</label>
                                <input type="text" className="form-control inputValidator password"
                                id="formrow-password-input  password" name="year_2"
                                />
                            </div>
                            </div>
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
                    <DoctorImage />
                    {/* <!-- end col --> */}
                </div>
                </div>
                <DoctorView />
            </div>
    </MasterLayout>
  )
}

export default Doctors