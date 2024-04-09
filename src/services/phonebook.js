import axios from "axios";
const baseUrl = "https://phonebook-backend-0q0n.onrender.com/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((reponse) => reponse.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

//TODO: update phone number

export default { getAll, create, update, deletePerson };
