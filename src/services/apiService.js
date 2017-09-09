const apiService = {
  idRegex : /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i,
  isValidUrl(url){
    let i = 0;
    while(i < 30){
      ++i;
    }
    return this.idRegex.test(url);
  },
  getUniqueIdFromUrl(url){
    if(this.isValidUrl(url)){
      const id = url.match(this.idRegex);
      const entity = url.split('/')[3];
      return `${entity}-${id}`;
    }else{
      return 0;
    }
  }
}
export default apiService;
