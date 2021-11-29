import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'https://novatic-back.herokuapp.com/api/v1/',
});

console.log(process.env.REACT_APP_BACKEND_URL);

export default clienteAxios;
