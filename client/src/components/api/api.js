import axios from 'axios';

export const getProjects = () => {
   return axios.get('http://localhost:3010/api/')
    .then(function (response) {
        console.log(response)
        return response
      })
}
