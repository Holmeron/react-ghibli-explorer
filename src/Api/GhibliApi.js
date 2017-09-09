import apiService from '../services/apiService';

const API_ENDPOINT = apiService.getEndpoint();

// api methods
export const ghibliApi = {
  findAll(entity){
    return fetch(`${API_ENDPOINT}/${entity}`)
    .then(response => {
      return response.json()
    })
  },
  findSingle(entity,id){
      return fetch(`${API_ENDPOINT}/${entity}/${id}`)
      .then(response => {
        return response.json()
      })
  },
  findbyUrl(url){
    if(apiService.isValidUrl(url)){
      return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch((error)=>{
      });
    }else{
      return 'Not found';
    }
  }
}
