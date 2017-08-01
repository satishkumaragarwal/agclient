'use strict';


angular.module('myPulse.common').service('$api', function($http, $q, baseUrl) {
  $http.defaults.headers.common.Accept = 'application/json';
  var $api = function(endpointUrl) {
    var _endpointUrl = baseUrl + endpointUrl;
    var nonAPIurl = baseUrl.slice(0, baseUrl.length - 7) ;
    var cacheEnable = false;
    this.list = function(searchRequest, cache) {
      if (angular.isDefined(cache)) {
        cacheEnable = cache;
      }
      var searchQuery = !!searchRequest && searchRequest instanceof window.SearchRequest ? '?' + searchRequest.urlEncoded() : '';
      console.log(_endpointUrl + searchQuery);
      return $http.get(_endpointUrl + searchQuery, {
        cache: cacheEnable
      });
    };
    this.nonAPICalls = function(searchRequest, cache) {
      if (angular.isDefined(cache)) {
        cacheEnable = cache;
      }
      var searchQuery = !!searchRequest && searchRequest instanceof window.SearchRequest ? '?' + searchRequest.urlEncoded() : '';
      return $http.get(nonAPIurl + endpointUrl+ searchQuery, {
        cache: cacheEnable
      });
    };

    this.get = function(id, cache) {
      if (angular.isDefined(cache)) {
        cacheEnable = cache;
      }
      return $http.get(_endpointUrl + '/' + id, {
        cache: cacheEnable
      });
    };

    this.saveWithParams = function(object, id, params) {
      if (params !== undefined) {
        var paramString = '';
        params.forEach(function(param, index) {
          paramString = paramString + param.name + '=' + param.value;
          //separate the params with '&'
          if (index < params.length - 1) {
            paramString = paramString + '&';
          }
        });
        if (!!id) {
          return $http.put(_endpointUrl + '/' + id + '?' + paramString, object, {
            cache: false
          });
        } else {
          return $http.post(_endpointUrl + '?' + paramString, object);
        }
      } else {
        return this.save(object, id);
      }
    };

    this.save = function(object, id) {
      if (!!id) {
        return $http.put(_endpointUrl + '/' + id, object, {
          cache: false
        });
      } else {
        return $http.post(_endpointUrl, object);
      }
    };
    //get operations with parameters
    this.getWithParams = function(id, params) {
      if (params !== undefined) {
        var paramString = '';
        params.forEach(function(param, index) {
          paramString = paramString + param.name + '=' + param.value;
          if (index < params.length - 1) {
            paramString = paramString + '&';
          }
        });
        return $http.get(_endpointUrl + '/' + id + '?' + paramString);
      }
    };

    //For Bulk Update Operation
    this.bulkUpdate = function(object) {
      return $http.put(_endpointUrl, object, {
        cache: false
      });
    };

    this.remove = function(id) {
      return $http.delete(_endpointUrl + '/' + id);
    };

  }
  return $api;

});
