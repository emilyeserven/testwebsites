(function() {
    var app = angular.module('charaSelect', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

    app.directive('charaDisplay', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/chara-display.html',
            controller: ['$http', function($http) {
                var character = this;
                character.stats = [];
                $http.get('js/characters.json').success(function(data){
                    character.stats = data;
                });
            }],
            controllerAs: 'characters'
        };
    });
    app.directive('charaEquipment', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/chara-equipment.html'
        };
    });
    app.directive('charaSkills', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/chara-skills.html'
        };
    });
    app.directive('charaStats', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/chara-stats.html'
        };
    });
    app.directive('charaBoxes', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/chara-boxes.html'
        };
    });
    app.directive('teamCurrent', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/team-current.html'
        };
    });
    angular.module('ModalDemoApp', ['ui.bootstrap']);
})();
