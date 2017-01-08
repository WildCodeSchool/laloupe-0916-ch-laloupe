function actualiteService($http) {

    this.$http = $http;

    this.create = (data) => {
        return $http.post('/api/actualites', data);
    };

    this.getAll = () => {
        return $http.get('/api/actualites');
    };

    this.getOne = (id) => {
        return $http.get('/api/actualites/' + id);
    };

    this.update = (id, data) => {
        return $http.put('/api/actualites/' + id, {
            titre: data.titre,
            texte: data.texte
        });
    };

    this.delete = (id) => {
        return $http.delete('/api/actualites/' + id);
    };

}
