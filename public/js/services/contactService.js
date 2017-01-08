function contactService($http) {

    this.$http = $http;

    this.create = (data) => {
        return $http.post('/api/contacts', {
            nom: data.nom,
            telephone: data.telephone,
            email: data.email
        });
    };

    this.getAll = () => {
        return $http.get('/api/contacts');
    };

    this.getOne = (id) => {
        return $http.get('/api/contacts/' + id);
    };

    this.update = (id, data) => {
        return $http.put('/api/contacts/' + id, {
            nom: data.nom,
            telephone: data.telephone,
            email: data.email
        });
    };

    this.delete = (id) => {
        return $http.delete('/api/contacts/' + id);
    };


}
