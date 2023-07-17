import axios from "axios";

const apiURL = "http://localhost:5000/Company";

export async function getCompagne(config) {
  return await axios.get(`${ apiURL }/`, config);
}

export async function deleteCompagne(id,config) {
  return await axios.delete(`${ apiURL }/Company/${ id }`, config);
}

export async function AddCompagneService(formData, config) {
  return await axios.post(`${ apiURL }/Company`, formData, config, {
    headers: {"Content-Type": "multipart/form-data"}, withCredentials: true,
  });
}
