//data post action
import axios from 'axios'

var axIns = axios.create({
  baseURL: 'http://140.143.57.247:9093/',
  //baseURL: 'http://127.0.0.1:9093/',
  timeout: 1000
});

export default axIns
