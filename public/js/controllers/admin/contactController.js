function contactController(contactService) {

    this.contactService = contactService;

    this.load = () => {
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
        });
    }

    this.create = () => {
        this.contactService.create(this.contact).then(() => {

            this.contact = {};
            this.load();
        });
    }

    this.update = (contact) => {
        this.contactService.update(contact._id, contact).then(() => {
            this.load();
        });
    }

    this.delete = (contact) => {
        this.contactService.delete(contact._id).then(() => {
            this.load();
        });
    }

    this.load();
}
