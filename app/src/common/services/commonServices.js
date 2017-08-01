'use strict';


angular.module('myPulse.common').service('FilterData', function() {
  
 var self = this;
  self.params = {};
  self.assignParams = function (startDate, endDate, locationsId) {
    self.params = {
      startDate: startDate,
      endDate: endDate,
      locationsId: locationsId
    };
  };
});
