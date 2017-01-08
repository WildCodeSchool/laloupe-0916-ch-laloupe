function statService($http) {

    this.$http = $http;


    this.create = (data) => {
        return this.$http.post('/api/stats', data);
    };

    this.getAll = () => {
        return this.$http.get('/api/stats');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/stats/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/stats/' + id, {
            texte1: data.texte1,
            texte2: data.texte2,
            texte3: data.texte3,
            texte4: data.texte4,
            texte5: data.texte5,
            texte6: data.texte6,
            texte7: data.texte7,
            texte8: data.texte8,
            texte9: data.texte9,
            texte10: data.texte10,
            texte11: data.texte11,
            texte12: data.texte12
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/stats/' + id);
    };

}
