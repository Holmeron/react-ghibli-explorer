const apiService = {
  idRegex : /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/ig,
  isValidUrl(url){
    return this.idRegex.test(url);
  },
  getUniqueIdFromUrl(url){
  if(this.isValidUrl(url)){
    const id = url.match(this.idRegex);
    const entity = url.split('/')[2];
    // console.log('unique Id : ',id,entity);
    return `${entity}-${id}`;
  }else
    return 0;
  }
}
export default apiService;
