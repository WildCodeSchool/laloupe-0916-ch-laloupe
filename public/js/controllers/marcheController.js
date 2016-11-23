function marcheController(marcheService) {
    this.marcheService = marcheService;
    $(document).ready(function() {
        $('.collapsible').collapsible({
            accordion: false
        });
        $(document).ready(function() {
            $('select').material_select();
        });

    });

    this.load = () => {
      this.marcheService.getAll().then((res) => {
        this.marche = res.data;
        this.marches = res.data[0];
      });
    }
    this.load();
  }
