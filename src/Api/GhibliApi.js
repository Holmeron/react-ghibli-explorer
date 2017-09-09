import apiService from '../services/apiService';

const API_ENDPOINT = 'https://ghibliapi.herokuapp.com';

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
    // console.log('findbyUrl : ',url, apiService.isValidUrl(url));
    // console.log('dafuq',apiService.isValidUrl(url),url);
    if(apiService.isValidUrl(url)){
      // console.log('fetching');
      return fetch(url)
      .then(response => {
        // console.log('returns :',response.json());
        return response.json()
      })
      .catch((error)=>{
        // console.log('error : ',error);
      });
    }else{
      return 'Not found';
    }
  }
}
