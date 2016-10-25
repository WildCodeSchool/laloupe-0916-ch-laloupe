class adminmarcheController {

    constructor(marcheService) {
        this.marcheService = marcheService;
        this.load();
    }

    load() {
        this.marcheService.getAll().then((res) => {
            this.marches = res.data;
            this.marche = this.marches[0];
        });
    }

    create() {
        if (this.marches.length > 0) this.marches.forEach((v, i) => {
            this.delete(v);
        });
        this.marcheService.create(this.marche).then(() => {
            this.marche = {};
            this.load();

        });
    }

    update(marche) {
        this.marcheService.update(marche._id, marche).then(() => {
            this.load();
        });
    }

    delete(marche) {
        this.marcheService.delete(marche._id).then(() => {
            this.load();
        });
    }

}
