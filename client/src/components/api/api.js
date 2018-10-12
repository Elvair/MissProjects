import axios from 'axios';

export const getProjects = () => {
   return axios.get('http://localhost:3010/')
    .then(function (response) {
        console.log(response)
        return response
      })
}
