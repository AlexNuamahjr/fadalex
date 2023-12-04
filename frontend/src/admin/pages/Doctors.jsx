import { useState } from 'react';
import swal from "sweetalert2";
import axios from 'axios';
import MasterLayout from '../components/MasterLayout';
import DoctorImage from '../components/doctor/DoctorImage';
import DoctorView from '../components/doctor/DoctorView';

const Doctors = () => {
    const [formData, setFormData] = useState({
        "name": "",
        "specialization": "",
        "brief_intro": "",
        "education": "",
        "institution": "",
        "year": "",
        "about": "",
        "education_2": "",
        "institution_2": "",
        "year_2": "",
        "about_2": ""
    });
    const handleInputChange = ()=>{
        setFormData({...formData, [e.target.name]: e.target.data});
    };
    const validateForm = ()=>{
        if (!formData["name"].trim()){
            swal.fire("Error", "Doctor name feild is required", "error");
            return false;
        }
        if (!formData["specialization"].trim()){
            swal.fire("Error", "Doctor feild specialization required", "error");
            return false;
        }
        if (!formData["brief_intro"].trim()){
            swal.fire("Error", "Brief feild intro is required", "error");
            return false;
        }
        if (!formData["education"].trim()){
            swal.fire("Error", "Education feild is required", "error");
        }
        if (!formData["institution"].trim()){
            swal.fire("Error", "Instution feild is required", "error");
            return false;
        }
        if (!formData["year"].trim()){
            swal.fire("Error", "Year feild is required", "error");
            return false;
        }
        if (!formData["about"].trim()){
            swal.fire("Error", "About feild is required", "error");
            return false;
        }

        return true
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()){
            axios.post("/admin/doctors", formData)
            .then((response)=>{
                console.log(response.data)
            }).catch((error)=>{
                console.error("Error submitting data", error)
            })
        }
    }
  return (
    <MasterLayout>
        <div className="page-content">
                <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Add Doctor</h4>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="mb-3 my-3">
                                <label htmlFor="formrow-firstname-input" className="form-label "
                                >Doctor name</label>
                                <input
                                type="text"
                                className="form-control inputValidator fullName"
                                id="formrow-firstname-input"
                                name="name" onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3 my-3">
                                <label htmlFor="formrow-firstname-input" className="form-label "
                                >Specialization</label>
                                <input
                                type="text"
                                className="form-control inputValidator fullName"
                                id="formrow-firstname-input"
                                name="specialization" onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3 my-3">
                                <label htmlFor="formrow-firstname-input" className="form-label "
                                >Brief Intro</label>
                                <textarea className="form-control" placeholder="" id="floatingTextarea" name='brief_info' onChange={handleInputChange}></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-email-input" className="form-label"
                                    >Education</label>
                                    <input type="text" className="form-control inputValidator email" id="formrow-email-input email " name="education_1" onChange={handleInputChange}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-password-input" className="form-label"
                                    >Institution</label>
                                    <input type="text" className="form-control inputValidator password"
                                    id="formrow-password-input  password" name="institution"
                                    onChange={handleInputChange}/>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-email-input" className="form-label"
                                    >Year</label>
                                    <input type="text" className="form-control inputValidator" id="formrow-email-input email " name="year" onChange={handleInputChange}/>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formrow-password-input" className="form-label"
                                    >About</label>
                                    <input type="text" className="form-control inputValidator"
                                    id="formrow-password-input" name="about"
                                    onChange={handleInputChange}/>
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