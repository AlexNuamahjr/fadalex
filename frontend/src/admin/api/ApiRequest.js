import axios from "axios";

axios.defaults.baseURL = "http://localhost:7895/"

async function createResource (endpoint, formData){
    try {
        const response = await axios.post(endpoint, formData)
        return response
    } catch (error) {
        console.log(error);
    }
}

async function getRecords(endpoint, formData){
    try {
       const res = await axios.get(endpoint, formData)
       return res;
    } catch (error) {
        console.log(error);
    }
}


const app = {
    createResource,
    getRecords
}

export default app;