import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";
import MasterLayout from '../components/MasterLayout';
import ServiceView from '../components/service/ServiceView';
import ServiceImage from "../components/service/ServiceImage";
import axiosRequest from "../api/ApiRequest";


const Services = () => {
    const [formData, setFormData] = useState({
        "service_title": "",
        "service_content": ""
    });
    const handleInputChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const validateForm = ()=>{
        if (!formData["service_title"].trim()){
            swal.fire("Error", "Service title is required", "error");
            return false
        };
        if (!formData["service_content"].trim()){
            swal.fire("Error", "Service content is required", "error");
            return false
        };

        return true;
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(formData)
        if (validateForm()){
           const res =  await axiosRequest.createResource("admin/services", formData)
           console.log(res);
        }
    }
  return (
    <MasterLayout>
        <div className="page-content">
                <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Add Service</h4>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="mb-3 my-3">
                                <label htmlFor="formrow-firstname-input" className="form-label "
                                >Service title</label>
                                <input
                                type="text"
                                className="form-control inputValidator"
                                id="formrow-firstname-input"
                                name="service_title"
                                onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3 my-3">
                                <label htmlFor="formrow-firstname-input" className="form-label "
                                >Service content</label>
                                <textarea className="form-control" id="floatingTextarea" name="service_content" onChange={handleInputChange}></textarea>
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
                    <ServiceImage />
                    {/* <!-- end col --> */}
                </div>
                </div>
                <ServiceView />
            </div>
    </MasterLayout>
  )
}

export default Services;