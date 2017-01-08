function ehpadService($http) {

    this.$http = $http;

    this.create = (data) => {
        return $http.post('/api/btn3s', data);
    };

    this.getAll = () => {
        return $http.get('/api/btn3s');
    };

    this.getOne = (id) => {
        return $http.get('/api/btn3s/' + id);
    };

    this.update = (id, data) => {
        return $http.put('/api/btn3s/' + id, {
            title1: data.title1,
            title2: data.title2,
            title3: data.title3,
            title4: data.title4,
            texte1: data.texte1,
            texte2: data.texte2,
            texte3: data.texte3,
            texte4: data.texte4
        });
    };

    this.delete = (id) => {
        return $http.delete('/api/btn3s/' + id);
    };

}
