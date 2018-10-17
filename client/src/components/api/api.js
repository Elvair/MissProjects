import axios from 'axios';


const apiAxios = 'http://localhost:3010/';



 const getProjects = () => {
   return axios.get(apiAxios)
    .then(function (response) {
        return response
      })
}

const getSearch = ({author, template}) => {
  author ? author = `author=${author}` : author = ''
  template ? template = `template=${template}` : template = ''
  return axios.get(`${apiAxios}search?${author}&${template}`)
  .then((searched) => {
    return searched.data
  })
}


export {getProjects, getSearch};