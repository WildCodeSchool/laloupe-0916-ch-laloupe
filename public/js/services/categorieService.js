
function categorieService($http) {

    return {

        create: (data) => {
            return $http.post('/api/categories', {
              titre: data.titre,
              photo: data.photo,
              texte: data.texte,
              lien: data.lien,
              idparent: data.idparent,
              position: data.position

            });
        },

        getAll: () => {
            return $http.get('/api/categories');
        },

        getOne: (id) => {
            return $http.get('/api/categories/' + id);
        },

        getChildrenOf: (idparent) => {
            return $http.get('/api/categories/by-parent/' + idparent);
        },

        update: (id, data) => {
            return $http.put('/api/categories/' + id, {
              titre: data.titre,
              photo: data.photo,
              texte: data.texte,
              lien: data.lien,
              idparent: data.idparent,
              position: data.position
            });
        },

        delete: (id) => {
            return $http.delete('/api/categories/' + id);
        }

    }

}
