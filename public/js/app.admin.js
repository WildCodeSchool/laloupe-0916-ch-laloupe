angular.module('app', ['ngRoute', 'ngSanitize', 'ui.tinymce'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('marcheService', marcheService)
    .service('categorieService', categorieService)
    .service('contactService', contactService)
    .service('aproposService', aproposService)
    .service('presseService', presseService)
    .service('actualiteService', actualiteService)
    .service('statService', statService)
    .service('rendezvousService', rendezvousService)
    .service('hospitaliseService', hospitaliseService)
    .service('ehpadService', ehpadService)
    .service('visiteService', visiteService)
    .service('marcheService', marcheService)
    .controller('loginController', loginController)
    .controller('marcheController', marcheController)
    .controller('actualiteController', actualiteController)
    .controller('categorieController', categorieController)
    .controller('contactController', contactController)
    .controller('marcheController', marcheController)
    .controller('aproposController', aproposController)
    .controller('presseController', presseController)
    .controller('rendezvousController', rendezvousController)
    .controller('hospitaliseController', hospitaliseController)
    .controller('ehpadController', ehpadController)
    .controller('visiteController', visiteController)
    .controller('statController', statController)
    .controller('sidebarController', sidebarController)
    .controller('userController', userController)
    .config(routes)
    .run(loginStatus);
