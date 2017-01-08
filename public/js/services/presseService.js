function presseService($http) {

    this.$http = $http;


    this.create = (data) => {
        return this.$http.post('/api/presses', data);
    };

    this.getAll = () => {
        return this.$http.get('/api/presses');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/presses/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/presses/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/presses/' + id);
    };

}
