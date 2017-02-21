angular.module('skeleTweet', ['ngRoute'])
    .config(config)
    .controller('PostsController', PostsController);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/mainfeed.html',
            controller: PostsController,
            controllerAs: 'vm'
        });
}

function PostsController() {
    var vm = this;
    vm.title = 'SkeleTweet';
}