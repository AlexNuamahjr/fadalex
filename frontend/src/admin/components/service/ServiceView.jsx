import React from 'react'

const ServiceView = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">

                        <h4 className="card-title">Services</h4>

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
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Service</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                        <label className="form-label">Service Title</label>
                        <input type="text" name="service_title" class="form-control input-validator" id="first_name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Service Content</label>
                        <textarea className="form-control" id="floatingTextarea" name="service_content"></textarea>
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

export default ServiceView;