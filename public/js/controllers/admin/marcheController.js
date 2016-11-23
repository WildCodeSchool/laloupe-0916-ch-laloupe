function marcheController(marcheService) {

    this.marcheService = marcheService;

    this.tinymceOptions = {
        toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link ",
        plugins: 'advlist fullscreen autolink link lists charmap autoresize textcolor'
    };
    this.load = () => {
        this.marcheService.getAll().then((res) => {
            this.marche = res.data;
            this.marches = res.data[0];
        });
    }
    this.create2 = () => {
        if (this.marche.length > 0) this.marche.forEach((v, i) => {
            this.delete(v);
        });
        this.marcheService.create(this.marches).then(() => {

            this.marches = {};
            this.load();
        });
    }

    this.update = (marche) => {
        this.marcheService.update(marche._id, marche).then(() => {
            this.load();
        });
    }

    this.delete = (marche) => {
        this.marcheService.delete(marche._id).then(() => {
            this.load();
        });
    }
    this.load();

}
