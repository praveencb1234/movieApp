import axios from 'axios'
import { BaseUrl } from './BaseUrl';


const instance = axios.create({
    baseURL:BaseUrl,
  });



  export  default instance