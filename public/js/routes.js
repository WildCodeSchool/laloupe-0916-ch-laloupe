const routes = ($routeProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/apropos', {
            templateUrl: 'views/apropos/apropos.html',
            controller: 'aproposController',
            controllerAs: 'vm'
        })
        .when('/presse', {
            templateUrl: 'views/presse/presse.html',
            controller: 'presseController',
            controllerAs: 'vm'
        })
        .when('/marche', {
            templateUrl: 'views/marches/marche.html',
            controller: 'marcheController',
            controllerAs: 'vm'
        })
        .when('/service/:id', {
            templateUrl: 'views/categorie/categorie.html',
            controller: 'categorieController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact/contact.html',
            controller: 'contactController',
            controllerAs: 'vm'
        })
        .when('/actualite', {
            templateUrl: 'views/actualite/actualite.html',
            controller: 'actualiteController',
            controllerAs: 'vm'
        })
        .when('/ehpad', {
            templateUrl: 'views/ehpad/ehpad.html',
        })
        .when('/legals', {
            templateUrl: 'views/mentions/legals.html',
            controller: 'aproposController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });

};
