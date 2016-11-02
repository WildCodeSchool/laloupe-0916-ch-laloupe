class presseController {

    constructor(presseService) {
        this.presseService = presseService;

        this.tinymceOptions = {
            toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            plugins: 'advlist autolink link image lists charmap autoresize textcolor'
        };
        this.load();
    }
    load() {
        this.presseService.getAll().then((res) => {
            this.presses = res.data;
        });
    }
    create() {
        this.presseService.create(this.presse).then(() => {
            this.presse = {};
            this.load();
        });
    }

    update(presse) {
        this.presseService.update(presse._id, presse).then(() => {
            this.load();
        });
    }

    delete(presse) {
        this.presseService.delete(presse._id).then(() => {
            this.load();
        });
    }

}
