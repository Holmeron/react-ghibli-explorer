const apiService = {
  isValidUrl(url){
    const regex = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/ig;
    return regex.test(url);
  }
}
export default apiService;
