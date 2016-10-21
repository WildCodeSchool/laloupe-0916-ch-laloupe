class marcheController {

    constructor(marcheService) {
        this.marcheService = marcheService;
        this.load();
        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });
    }
    load() {
        this.marcheService.getAll().then((res) => {
            this.marche = res.data;
            this.marches = res.data[0];
        });
    }
    create2() {
        if(this.marche) if (this.marche.length > 0) this.marche.forEach((v, i) => {
            this.delete(v);
        });
        this.marcheService.create(this.marches).then(() => {

            this.marches = {};
            this.load();
        });
    }

    update(marche) {
        this.marcheService.update(marche._id, this.marches).then(() => {
            this.load();
        });
    }

    delete(marche) {
        this.marcheService.delete(marche._id).then(() => {
            this.load();
        });
    }

}
