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
                                                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
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
    </>
  )
}

export default DoctorView;