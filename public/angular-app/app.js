angular.module('skeleTweet', ['ngRoute'])
    .config(config)
    .controller('PostsController', PostsController);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/feed.html',
            controller: PostsController,
            controllerAs: 'vm'
        });
}

function PostsController($http) {
    var vm = this;
    vm.title = 'SkeleTweet';

    $http.get('/api/posts').then(function(response) {
        console.log(response);
    })
}