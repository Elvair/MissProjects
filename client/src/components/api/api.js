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
  template ? template = `templates=${template}` : template = ''
  return axios.get(`${apiAxios}search?${author}&${template}`)
  .then((searched) => {
    return searched.data
  })
}

const getTypeTemplate = ({template}) => {
   return axios.get(`${apiAxios}search?${template}`)
  .then ((typeTem) => {
    return typeTem.data
  })
}


export {getProjects, getSearch, getTypeTemplate};