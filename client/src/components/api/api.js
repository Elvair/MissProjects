import axios from 'axios';

const apiAxios = 'http://localhost:3010/';



 const getProjects = () => {
   return axios.get(apiAxios)
    .then(function (response) {
        console.log(response)
        return response
      })
}
const search = () => {
  ...
}
export{getProjects}