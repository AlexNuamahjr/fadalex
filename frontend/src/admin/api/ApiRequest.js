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

async function getRecords(endpoint){
    try {
        
    } catch (error) {
        
    }
}


const app = {
    createResource,
    getRecords
}

export default app;