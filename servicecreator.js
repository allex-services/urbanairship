function createUrbanAirshipService(execlib, ParentService, urbanairshiptalkerlib) {
  'use strict';

  var lib = execlib.lib,
    q = lib.q,
    qlib = lib.qlib;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function UrbanAirshipService(prophash) {
    ParentService.call(this, prophash);
    this.UATalker1 = new urbanairshiptalkerlib.UATalker({
      AppKey: 'IPnO0K9xT0GGLl0pKodAcA',
      AppSecret: 'I3nBrJ2aRxWmOjuXppVUuQ',
      AppMasterSecret: 'K2bHDzB8SP6FHxa9CgV_5A',
      channel_id : channel_id
    });
  }
  
  ParentService.inherit(UrbanAirshipService, factoryCreator);
  
  UrbanAirshipService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
    this.UATalker1.destroy();
    this.UATalker1 = null;
  };

  UrbanAirshipService.prototype.pushNotification = function(notification_params){
    return this.UATalker1.pushNotification(notification_params);
  };
  
  return UrbanAirshipService;
}

module.exports = createUrbanAirshipService;
