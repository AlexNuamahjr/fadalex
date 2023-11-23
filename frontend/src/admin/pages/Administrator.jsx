import Admins from "../components/administrator/Admins";
import ImageUpload from "../components/administrator/ImageUpload";
import MasterLayout from "../components/MasterLayout";


const Administrator = () => {
  return (
    <MasterLayout>
            <div className="page-content">
                <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Add Administrator </h4>
                        <h6>All the fields are required</h6>
                        <form method="post" action="">
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label"
                            >Full name</label>
                            <input
                            type="text"
                            className="form-control inputValidator fullName"
                            id="formrow-firstname-input"
                            name="name"
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Email</label>
                                <input type="email" className="form-control inputValidator email" id="formrow-email-input email" name="email" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >Password</label>
                                <input type="password" className="form-control inputValidator password"
                                id="formrow-password-input  password" name="password"
                                />
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="formrow-inputCity" className="form-label"
                                >Phone Number</label>
                                <input type="text" className="form-control inputValidator phoneNumber" id="formrow-inputCity phoneNumber phoneNumber"
                                placeholder="Enter phone number"  
                                name="phoneNumber"
                                />
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="mb-3">
                                <label htmlFor="formrow-inputState" className="form-label"
                                >Role</label>
                                <select id="formrow-inputState role" className="form-select inputValidator role" name="role">
                                <option defaultValue={""}>Choose...</option>
                                <option>Chief Operating Officer</option>
                                <option>Human resource manager</option>
                                </select>
                            </div>
                            </div>

                            <div className="col-lg-4">
                            {/* <div className="mb-3">
                                <label htmlFor="formrow-inputZip" className="form-label">Zip</label>
                                <input
                                type="text"
                                className="form-control"
                                id="formrow-inputZip"
                                />
                            </div> */}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary w-md" id="btn-Save">
                            Add
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
                    <ImageUpload />
                    {/* <!-- end col --> */}
                </div>
                
                </div>
                <Admins />
            </div>
    </MasterLayout>
  )
}

export default Administrator;
