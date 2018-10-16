import axios from 'axios';

const apiAxios = 'http://localhost:3010/';



export const getProjects = () => {
   return axios.get(apiAxios)
    .then(function (response) {
        console.log(response)
        return response
      })
}
