class presseService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/presses', data);
    }

    getAll() {
        return this.$http.get('/api/presses');
    }

    getOne(id) {
        return this.$http.get('/api/presses/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/presses/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    }

    delete(id) {
        return this.$http.delete('/api/presses/' + id);
    }

}
