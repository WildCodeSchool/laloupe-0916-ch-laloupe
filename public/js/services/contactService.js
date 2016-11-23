
function contactService($http) {

    return {

        create: (data) => {
            return $http.post('/api/contacts', {
              nom: data.nom,
              telephone: data.telephone,
              email: data.email
            });
        }

        getAll: () => {
            return $http.get('/api/contacts');
        }

        getOne: (id) => {
            return $http.get('/api/contacts/' + id);
        }

        update: (id, data) => {
            return $http.put('/api/contacts/' + id, {
              nom: data.nom,
              telephone: data.telephone,
              email: data.email
            });
        }

        delete: (id) => {
            return $http.delete('/api/contacts/' + id);
        }

    }
}
