import React from 'react'

const DepartmentImage = () => {
  return (
    <>
        <div className="container-fluid">
            {/* <!-- start page title --> */}
    
            {/* <!-- end page title --> */}

            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Upload Department picture <span className="card-title-desc">(Required)</span></h4>
                    <div>
                    <form action="#" className="dropzone">
                        <div className="fallback">
                        <input name="file" type="file" multiple="multiple" aria-required="true"/>
                        </div>
                        <div className="dz-message needsclick">
                        <div className="mb-3">
                            <i
                            className="display-4 text-muted bx bxs-cloud-upload"
                            ></i>
                        </div>

                        <h4>Drop files here or click to upload.</h4>
                        </div>
                    </form>
                    </div>

                
                </div>
                </div>
            </div>
            {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
    </>
  )
}

export default DepartmentImage