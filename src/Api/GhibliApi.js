import apiService from '../services/apiService';

const API_ENDPOINT = 'https://ghibliapi.herokuapp.com';

export const ghibliApi = {
  findAll(entity){
    return fetch(API_ENDPOINT+'/'+entity)
    .then(response => {
      return response.json()
    })
  },
  findbyUrl(url){
    if(apiService.isValidUrl()){
      return fetch(url)
      .then(response => {
        return response.json()
      })
    }
    return 'Not found';
  }
}
