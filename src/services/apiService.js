const apiService = {
  apiEndPoint : 'https://ghibliapi.herokuapp.com',
  idRegex : /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i,

  isValidUrl(url){
    let i = 0;
    while(i < 30){
      ++i;
    }
    return this.idRegex.test(url);
  },
  /**
  * modify entity to fix api inconsistencies
  * return {Object}
  */
  validateEntity(entity){
    let validEntity = entity;
    if (Array.isArray(entity.url)) validEntity.url = [ entity.url ];
    if(entity.species && !Array.isArray(entity.species)) validEntity.species = [ entity.species ];
    if(entity.vehicles && !Array.isArray(entity.vehicles)) validEntity.vehicles = [ entity.vehicles ];
    if(entity.people && !Array.isArray(entity.people)) validEntity.people = [ entity.people ];
    if(entity.locations && !Array.isArray(entity.locations)) validEntity.locations = [ entity.locations ];
    if(entity.films && !Array.isArray(entity.films)) validEntity.films = [ entity.films ];

    // remove an attribute that have an incorrect link, e.g. people : [ url/people ], without any id
    for(let key in entity){
      if(entity.hasOwnProperty(key)){
        if(Array.isArray(entity[key])){
          if(!this.isValidUrl(entity[key][0])){
            console.log('API Inconsistency : deleted invalid',key ,entity[key]);
            delete entity[key];
          }
        }
      }
    }
    if(!Object.is(entity,validEntity)){
      console.log('Warning, API Inconsistency on entity ', entity);
    }
    return validEntity;
  },

  /**
  *  get an unique identifier
  * return 0 if invalid or a string if valid
  */
  getUniqueIdFromUrl(url){
    if(this.isValidUrl(url)){
      const id = url.match(this.idRegex);
      const entity = this.getTypeFromUrl(url);
      return `${entity}-${id}`;
    }else{
      return 0;
    }
  },

  /*
  * get entity type from its url
  * return {String}
  */
  getTypeFromUrl(url){
    const type = url ? url.split('/')[3] : null;
    return type;
  },

  /*
  * get an url from an entity type and its id
  * return {String}
  */
  getUrl(entity,id){
    return `${this.getEndpoint()}/${entity}/${id}`;
  },
  getEndpoint(){
    return this.apiEndPoint;
  }
}
export default apiService;
