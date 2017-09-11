import appService from '../services/appService';

const API_ENDPOINT = appService.getEndpoint();

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
    if(appService.isValidUrl(url)){
      return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch((error)=>{
      });
    }else{
      return 'Not found';
    }
  },
  /**
  * get wikipedia page content
  */
  findWikipediaPageByName(name){

    let wikiHeaders = new Headers();
    console.log(wikiHeaders.has('Origin'));

    wikiHeaders.append('origin','*');
    console.log(wikiHeaders.has('Origin'));

    const init = { headers: wikiHeaders};
    return fetch(`${appService.getWikiPediaEndpoint()}${name}`, init)
    // return fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${name}`, init)
    .then(response => {
      console.log('res ',response)
      return response;
    })
    .catch((error)=>{
    });
  }
}
