(function(angular){
    'use strict';

    var POPOVER_SHOW = 'popoverToggleShow';
    var POPOVER_HIDE = 'popoverToggleHide';

    var module = angular.module('popoverToggle', ['ui.bootstrap']);

    module.config(['$tooltipProvider', function($tooltipProvider) {
        var triggers = {};
        triggers[POPOVER_SHOW] = POPOVER_HIDE;

        $tooltipProvider.setTriggers(triggers);
    }]);

    module.directive('popoverToggle', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: link
        };

        function link($scope, $element, $attrs) {
            $attrs.popoverTrigger = POPOVER_SHOW;

            $scope.$watch($attrs.popoverToggle, function(newValue) {
                $timeout(function(){
                    if(newValue) {
                        $element.triggerHandler(POPOVER_SHOW);
                    } else {
                        $element.triggerHandler(POPOVER_HIDE);
                    }
                });
            })
        }
    }]);

})(angular);