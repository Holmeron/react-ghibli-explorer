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
      const entity = this.getTypeFromUrl(url);
      return `${entity}-${id}`;
    }else{
      return 0;
    }
  },
  getTypeFromUrl(url){
    return url.split('/')[3];
  }
}
export default apiService;
