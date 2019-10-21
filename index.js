function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['.', 'allex_urbanairshiptalkerlib']
    },
    sinkmap: {
      dependencies: ['.']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
