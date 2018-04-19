var app = angular.module('springDemo', []);

app.controller('AppCtrl', function($scope){
    $scope.websites = [{
        iconImageUrl: '',
        id: 'StackoverFlow',
        website: 'stackoverflow.com',
        title: 'StackOverflow website',
        description: 'StackOverflow description'
    }];
});