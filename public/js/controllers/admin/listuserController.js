function listuserController(userService) {

    this.userService = userService;

    this.load = () => {
        this.userService.getAll().then((res) => {
            this.users = res.data;
        });
    };
    this.load();
}
