'use strict';

describe('popoverToggle directive', function(){
    var $rootScope;
    var $compile;

    beforeEach(function() {
        module('popoverToggle');

        inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('Is displayed on initial load and hidden on change', inject(function($timeout){
        var $scope = $rootScope.$new();
        $scope.isPopoverOpen = true;

        var element = $compile('<div id="parent"><span popover="Hello World!" popover-toggle="isPopoverOpen">There is a popover above me!</span></div>')($scope);
        $timeout.flush();

        var result = angular.element(element[0].querySelectorAll('.popover'));
        expect(result.length).toEqual(1);
        expect(result.hasClass('in')).toEqual(true);

        // hide popover by changing $scope variable
        $scope.isPopoverOpen = false;
        $scope.$digest();
        $timeout.flush();

        // hiding animation starts
        result = angular.element(element[0].querySelectorAll('.popover'));
        expect(result.length).toEqual(1);
        expect(result.hasClass('in')).toEqual(false);

        $timeout.flush();

        // popover hidden
        result = angular.element(element[0].querySelectorAll('.popover'));
        expect(result.length).toEqual(0);
    }));

    it('Is hidden on initial load and displayed on change', inject(function($timeout){
        var $scope = $rootScope.$new();
        $scope.isPopoverOpen = false;

        var element = $compile('<div id="parent"><span popover="Hello World!" popover-toggle="isPopoverOpen">There is a popover above me!</span></div>')($scope);
        $timeout.flush();

        var result = element[0].querySelectorAll('.popover');
        expect(result.length).toEqual(0);

        // show popover by changing $scope variable
        $scope.isPopoverOpen = true;
        $scope.$digest();
        $timeout.flush();

        result = angular.element(element[0].querySelectorAll('.popover'));
        expect(result.length).toEqual(1);
        expect(result.hasClass('in')).toEqual(true);
    }));
});