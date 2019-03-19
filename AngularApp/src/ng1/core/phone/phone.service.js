'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',    
      function($resource) {          
          return $resource('./ng2/assets/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
