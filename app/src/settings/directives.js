// 'use strict';

// //returns the response type template for url
// angular.module('myPulse.settings').directive('responseType', ['$compile', function($compile) {
//   var getTemplate = function(type, subquestion) {
//     var template = '';
//     var type = parseInt(type);
//     switch (type) {
//       case 1: //textBox
//         template = '<input type="text" class="input__field input__field--hoshi input-display">';
//         break;
//       case 2: //checkbox matrix
//         var innerTemplate = '';
//         for (var i = 0; i < subquestion.length; i++) {
//           if(subquestion[i].isActive){
//             innerTemplate = innerTemplate + '<tr><th class="subquestions">' + subquestion[i].questionContent + '</th>' +
//             '<td>' +
//             '<div class="checkbox">' +
//             '<input id="round' + subquestion[i].questionId + '" type="checkbox" disabled>' +
//             '<label class="rounded" for="round' + subquestion[i].questionId + '"></label>' +
//             '</div>' +
//             '</td>' +
//             '<td>' +
//             '<div class="checkbox"> ' +
//             '<input id="round' + subquestion[i].questionId + 1 + '" type="checkbox" disabled>' +
//             '<label class="rounded" for="round' + subquestion[i].questionId + 1 + '"></label>' +
//             '</div>' +
//             '</td>' +
//             '<td>' +
//             '<div class="checkbox"> ' +
//             '<input id="round' + subquestion[i].questionId + 2 + '" type="checkbox" disabled>' +
//             '<label class="rounded" for="round' + subquestion[i].questionId + 2 + '"></label>' +
//             '</div>' +
//             '</td>' +
//             '<td>' +
//             '<div class="checkbox"> ' +
//             '<input id="round' + subquestion[i].questionId + 3 + '" type="checkbox" disabled>' +
//             '<label class="rounded" for="round' + subquestion[i].questionId + 3 + '"></label>' +
//             '</div>' +
//             '</td>' +
//             '<td>' +
//             '<div class="checkbox"> ' +
//             '<input id="round' + subquestion[i].questionId + 4 + '" type="checkbox" disabled>' +
//             '<label class="rounded" for="round' + subquestion[i].questionId + 4 + '"></label>' +
//             '</div>' +
//             '</td>' +
//             '</tr>';
//           }
//         }
//         template = '<table ><thead> <tr> <th>&nbsp;</th><td>Very Bad</td><td>Bad</td><td>Good</td><td>Very Good</td><td>Excellent</td></tr></thead>'+
//         '<tbody>' +innerTemplate + '</tbody></table>';
//         break;
//       case 3: //emoji
//         template = '<div class="center-response">' +
//           '<span class="smiley-wrapper"><img src="./images/verydifficult-normal.svg" class="likes-wrapper"></img></span>' +
//           '<span class="smiley-wrapper"><img src="./images/difficult-normal.svg" class="likes-wrapper"></img></span>' +
//           '<span class="smiley-wrapper"><img src="./images/moderateeasy-normal.svg" class="likes-wrapper"></img></span>' +
//           '<span class="smiley-wrapper"><img src="./images/easy-normal.svg" class="likes-wrapper"></img></span>' +
//           '<span class="smiley-wrapper"><img src="./images/veryeasy-normal.svg" class="likes-wrapper"></img></span>' +
//           '</div>';
//         break;
//       case 5: //stars
//         template = '<img id="star" src="./images/starNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="star" src="./images/starNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="star" src="./images/starNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="star" src="./images/starNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="star" src="./images/starNormal.svg" class="likes-wrapper"></img>';
//         break;
//       case 6: //likes
//         template = '<img id="likes" src="./images/likeNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="likes" src="./images/likeNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="likes" src="./images/likeNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="likes" src="./images/likeNormal.svg" class="likes-wrapper"></img>' +
//           '<img id="likes" src="./images/likeNormal.svg" class="likes-wrapper"></img>';
//         break;
//       case 9: //comment box
//         template = '<textarea id="textArea" type="text" class="comment-box" maxLength="250" />';
//         break;
//       case 10: //drop down
//         template = '<select id="select" name="select" class="form-control" size="1">' +
//           '<option>Option 1 </option>' +
//           '<option>Option 2 </option>' +
//           '<option>Option 3 </option>' +
//           '</select>'
//         break;
//       case 11: //date-picker
//         template = '<input type="date" class="form-control"/>'
//         break;
//       case 12: 
//         //numeric
//         template = '<input type="number" class="input__field input__field--hoshi input-display">';
//         break;
//       case 13:
//         //email
//         template = '<input type="email" placeholder="name@example.com" class="input__field input__field--hoshi input-display">';
//         break;

//       default:
//         template = '';
//         break;
//     };
//     return template;
//   };
//   return {
//     restrict: 'A',
//     replace: true,
//     template: '<div>hi</div>',
//     scope: {
//       type: '@',
//       subquestion: '='
//     },
//     link: function($scope, $element, $attrs) {
//       var type = $scope.type;
//       var subquestion = $scope.subquestion;
//       $scope.$watch('type', function() {
//         var template = getTemplate($scope.type, $scope.subquestion);
//         $element.html(template);
//         $compile($element.contents())($scope);
//       });
//       $scope.$watch('subquestion', function() {
//         var template = getTemplate($scope.type, $scope.subquestion);
//         $element.html(template);
//         $compile($element.contents())($scope);
//       }, true);
//     }
//   };
// }]);
// //capitalize the first letter of a string
// angular.module('myPulse.settings').directive('capitalizeFirst', ['$parse', function($parse) {
//   return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: function(scope, elem, attr) {
//       elem.bind('blur', function() {
//         scope.$apply(function() {
//           var inputValue = elem.val();
//           if (inputValue !== null && inputValue !== '') {
//             inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
//             elem.val(inputValue);
//             scope.ngModel = elem.val();
//             $parse(attr.ngModel).assign(scope, elem.val());
//           }
//         });
//       });

//       elem.bind('input', function() {
//         scope.$apply(function() {
//           var inputValue = elem.val();
//           if (inputValue.indexOf(',') !== -1) {
//             inputValue = inputValue.replace(',', '').trim();
//             $parse(attr.ngModel).assign(scope, inputValue);
//             elem.val(inputValue);
//           }
//         });
//       });
//     }
//   };
// }]);

// angular.module('myPulse.settings').directive('imageTimer', function($parse, $timeout) {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var timer;
//       element.bind('error', function() {
//         timer = $timeout(function() {
//           $('#' + attrs.id).attr('src', $parse(attrs.url)(scope) + '?' + (new Date()).getTime());
//         }, 31000);
//       });
//       scope.$on(
//         '$destroy',
//         function() {
//           $timeout.cancel(timer);
//         }
//       );
//     }
//   };
// });
// //Load image on error
// angular.module('myPulse.settings').directive('errSrc', function() {
//   return {
//     link: function(scope, element, attrs) {
//       element.bind('error', function() {
//         attrs.$set('src', attrs.errSrc);
//       });
//     }
//   };
// });
