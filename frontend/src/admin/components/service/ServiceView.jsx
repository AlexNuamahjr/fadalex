import React from 'react'

const ServiceView = () => {
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
                                        <th scope="col" className="text-center">Service Title</th>
                                        <th scope="col" className="text-center">
                                          Service Contents<br/>
                                        </th>  
                                      </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Tonny Millz</th>
                                            <td>tonymillz@gmail.com</td>
                                            <td className="text-center">
                                                <button className="btn btn-primary">Edit</button>
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

export default ServiceView;