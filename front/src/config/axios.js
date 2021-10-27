import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/api/v1/',
});

console.log(process.env.REACT_APP_BACKEND_URL);

export default clienteAxios;
