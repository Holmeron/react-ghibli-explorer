const API_ENDPOINT = 'https://ghibliapi.herokuapp.com'

export const ghibliApi = {
  findAll(entity){
    return fetch(API_ENDPOINT+'/'+entity)
    .then(response => {
      return response.json()
    })
  }
}
