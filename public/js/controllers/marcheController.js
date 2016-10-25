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

    load(){
      this.marcheService.getAll().then((res) => {
        this.marche = res.data;
        this.marches = res.data[0];
      });
    }
  }
