'use strict';

angular.module('myApp.common').directive('loader', function($compile) {
  return {
    restrict: 'AE',
    template: '<div className="overlay">' +
      '<div class="loader">' +
      '<div class="preloader-wn loader-display"></div>' +
      '</div>' +
      '</div>',
    replace: true
  };
});

angular.module('myApp.common').directive('trim', function ($parse) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function postLink(scope, elem, attr) {
      elem.bind('blur', function () {
        scope.$apply(function () {
          var trimVal = elem.val().trim();
          if(trimVal !== elem.val()) {
            $parse(attr.ngModel).assign(scope, trimVal);
            elem.val(trimVal);
          }
        });
      });
    }
  };
});


//Directive for delay in search
angular.module('myApp.common').directive('ngDebounce', ['$timeout', function ($timeout) {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, elem, attrs, ctrl) {
      var changeFnName = attrs.ngDebounce,
        millis = attrs.ngDebounceMillis ? scope.$eval(attrs.ngDebounceMillis) : 500;
      var t;
      ctrl.$viewChangeListeners.push(function () {
        if(t !== undefined) {
          $timeout.cancel(t);
        }
        t = $timeout(function () {
          scope.$eval(changeFnName);
          t = undefined;
        }, millis);
      });
    }
  };
}]);

