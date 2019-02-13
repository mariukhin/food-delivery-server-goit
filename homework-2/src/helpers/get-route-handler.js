const getClearUrl = url => {
    const lastIndex = url.lastIndexOf('/');
            
    if (lastIndex !== -1) {
      return url.slice(0, lastIndex);
    }
    return url;
};
  
const getRouteHandler = (routerConfig, url) => {
    const clearUrl = getClearUrl(url);
    return routerConfig[clearUrl];
};
  
module.exports = getRouteHandler;
  