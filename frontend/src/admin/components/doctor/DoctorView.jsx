const DoctorView = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">

                        <h4 className="card-title">Doctors</h4>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Doctor Name</th>
                                        <th scope="col" className="text-center">
                                         Specialization<br/>
                                        </th>
                                        <th scope="col" className="text-center">Brief Intro</th>
                                        <th scope="col" className="text-center">Education</th>
                                        <th scope="col" className="text-center">Year</th>
                                        <th scope="col" className="text-center">Education 2</th>
                                        <th scope="col" className="text-center">Year 2</th>
                                      </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Tonny Millz</th>
                                            <td>tonymillz@gmail.com</td>
                                            <td>tonymillz@gmail.com</td>
                                            <td>tonymillz@gmail.com</td>
                                            <td>tonymillz@gmail.com</td>
                                            <td>tonymillz@gmail.com</td>
                                            <td>tonymillz@gmail.com</td>
                                            <td className="text-center">
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                      </tbody>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <!-- end col --> */}
        </div>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Doctor</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                        <label className="form-label">Doctor Name</label>
                        <input type="text" name="name" class="form-control input-validator" id="first_name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Specialization</label>
                        <input type="text" name="specialization" class="form-control input-validator" id="last_name" />
                        </div>
                        <div className="mb-3 my-3">
                            <label htmlFor="formrow-firstname-input" className="form-label "
                            >Brief Intro</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea" name='brief_info'></textarea>
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
                                >Institution</label>
                                <input type="text" className="form-control inputValidator password"
                                id="formrow-password-input  password" name="institution"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Year</label>
                                <input type="text" className="form-control inputValidator" id="formrow-email-input email " name="year" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >About</label>
                                <input type="text" className="form-control inputValidator"
                                id="formrow-password-input" name="about"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Education 2</label>
                                <input type="text" className="form-control inputValidator" id="formrow-email-input" name="education_2" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >Institution 2</label>
                                <input type="text" className="form-control inputValidator password"
                                id="formrow-password-input  password" name="institution_2"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-email-input" className="form-label"
                                >Year 2</label>
                                <input type="text" className="form-control inputValidator email" id="formrow-email-input email " name="year_2" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="formrow-password-input" className="form-label"
                                >About 2</label>
                                <input type="text" className="form-control inputValidator"
                                id="formrow-password-input" name="about_2"
                                />
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" id="btnSave" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
        </div>
    </>
  )
}

export default DoctorView;