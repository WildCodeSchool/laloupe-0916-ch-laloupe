function aproposService($http) {

    this.$http = $http;

    this.create = (data) => {
        return $http.post('/api/aproposs', data);
    };

    this.getAll = () => {
        return $http.get('/api/aproposs');
    };

    this.getOne = (id) => {
        return $http.get('/api/aproposs/' + id);
    };
    this.update = (id, data) => {
        return $http.put('/api/aproposs/' + id, {
            titre: data.titre,
            texte: data.texte
        });
    };
    this.delete = (id) => {
        return $http.delete('/api/aproposs/' + id);
    };
    
}
