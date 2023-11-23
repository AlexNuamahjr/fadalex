import MasterLayout from "../components/MasterLayout"
import DepartmentVeiw from "../components/department/viewDepartment";
import DepartmentImage from "../components/department/DepartmentImage";

const Departments = () => {
  return (
    <MasterLayout>
        <div class="page-content">
                    <div class="container-fluid">
                        {/* <!-- start page title --> */}
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 class="mb-sm-0 font-size-18">Add Department</h4>
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="#">Departments</a></li>
                                            <li class="breadcrumb-item active">Add Department</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Add Department</h4>

                                        <form>
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Department title</label>
                                                <input type="text" class="form-control" id="formrow-firstname-input" name="department-title"/>
                                            </div>
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Department contents</label>
                                                <textarea class="form-control" placeholder="" id="floatingTextarea" name="department_content"></textarea>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn btn-primary w-md">Add</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}
                            </div>
                            <div className="col-xl-6">
                            <DepartmentImage />
                        {/* <!-- end col --> */}
                        </div>
                        </div>
                        
                    </div> 
                    <DepartmentVeiw />
                </div>
    </MasterLayout>
  )
}

export default Departments;