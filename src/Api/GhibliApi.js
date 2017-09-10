import apiService from '../services/apiService';

const API_ENDPOINT = apiService.getEndpoint();

// api methods
export const ghibliApi = {
  /**
  * get all entities of a given type
  */
  findAll(entity){
    return fetch(`${API_ENDPOINT}/${entity}`)
    .then(response => {
      return response.json()
    })
  },
  /**
  * get an entity given its type and id
  */
  findSingle(entity,id){
      return fetch(`${API_ENDPOINT}/${entity}/${id}`)
      .then(response => {
        return response.json()
      })
  },
  /**
  * get resource from url
  */
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
