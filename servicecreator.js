function createUrbanAirshipService(execlib, ParentService) {
  'use strict';
  

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function UrbanAirshipService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(UrbanAirshipService, factoryCreator);
  
  UrbanAirshipService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  
  return UrbanAirshipService;
}

module.exports = createUrbanAirshipService;
