class adminCategorieController {

    constructor(categorieService) {

      this.categorieService = categorieService;

        }


        create() {
            this.categorieService.create(this.categorie).then(() => {

                this.categorie = {};
                this.load();
            });
        }

        update(categorie) {
            this.categorieService.update(categorie._id, categorie).then(() => {
                this.load();
            });
        }

        delete(categorie) {
            this.categorieService.delete(categorie._id).then(() => {
                this.load();
            });
        }
}
