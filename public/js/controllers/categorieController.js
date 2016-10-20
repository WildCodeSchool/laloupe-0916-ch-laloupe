class categorieController {

    constructor(categorieService, $routeParams) {
      this.$routeParams = $routeParams;

      this.categorieService = categorieService;
      this.load();

        }
        load() {
            this.categorieService.getOne(this.$routeParams.id).then((res) => {
                this.categorie = res.data;
            });
        }

}
