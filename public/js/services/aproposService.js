function aproposService ($http){

        return {
            create: (data) => {
                return $http.post('/api/aproposs', data);
            },

            getAll: () => {
                return $http.get('/api/aproposs');
            },

            getOne: (id) => {
                return $http.get('/api/aproposs/' + id);
            },
            update: (id, data) => {
                return $http.put('/api/aproposs/' + id, {
                  titre: data.titre,
                  texte: data.texte
                });
            },
            delete: (id) => {
                return $http.delete('/api/aproposs/' + id);
            }
        }
}
