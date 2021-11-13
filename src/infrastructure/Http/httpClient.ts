import axios, { AxiosRequestHeaders } from 'axios';
let headers:AxiosRequestHeaders={
  'Content-Type': 'application/json'
};
if(localStorage.getItem("accessToken")!==undefined){
  headers['Authorization']=`Beater ${localStorage.getItem("accessToken")}`;
}
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.common=headers;

export default axios;