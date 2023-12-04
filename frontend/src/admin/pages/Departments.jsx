import { useState } from "react";
import axiosRequest from "../api/ApiRequest";
import axios from "axios";
import swal from "sweetalert2";
import MasterLayout from "../components/MasterLayout"
import DepartmentVeiw from "../components/department/viewDepartment";
import DepartmentImage from "../components/department/DepartmentImage";


const Departments = () => {
    const [formData, setFormData] = useState({
        "department_title": "",
        "department_content": ""
    });
    const handleInputChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const validateForm = ()=>{
        if (!formData["department_title"].trim()){
            swal.fire("Error", "Department title is required", "error");
            return false;
        }
        if (!formData["department_content"].trim()){
            swal.fire("Error", "Department content is required", "error");
            return false
        };

        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        if (validateForm()){
            const res = await axiosRequest.createResource("admin/departments", formData);
            console.log(res);
        }
    }
  return (
    <MasterLayout>
        <div className="page-content">
                    <div className="container-fluid">
                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Add Department</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Departments</a></li>
                                            <li className="breadcrumb-item active">Add Department</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add Department</h4>

                                        <form method="post" onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="formrow-firstname-input" className="form-label">Department title</label>
                                                <input type="text" className="form-control" id="formrow-firstname-input" name="department_title" onChange={handleInputChange}/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formrow-firstname-input" className="form-label">Department contents</label>
                                                <textarea className="form-control" placeholder="" id="floatingTextarea" name="department_content" onChange={handleInputChange}></textarea>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">Add</button>
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