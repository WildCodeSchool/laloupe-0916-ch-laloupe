function presseController(presseService) {

    this.presseService = presseService;

    this.tinymceOptions = {
        toolbar: "forecolor | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        plugins: 'advlist fullscreen autolink link image lists charmap autoresize textcolor'
    };

    function uploadFile(file) {
        var url = '/api/picture';
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Every thing ok, file uploaded
                console.log(xhr.responseText); // handle response.
            }
        };
        fd.append("upload_file", file);
        xhr.send(fd);
    }

    var uploadfiles = document.querySelector('#uploadImage');
    uploadfiles.addEventListener('change', function() {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            uploadFile(this.files[i]); // call the function to upload the file
        }
    }, false);

    this.uploadFileChangeImage = () => {
      this.UploadImg = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
    }

    this.uploadFileChangeImageUpdate = () => {
      this.UploadImgUpdate = '/uploads/img_' + document.getElementById('uploadImageUpdate').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
    }

    this.load = () => {
        this.presseService.getAll().then((res) => {
            this.presses = res.data;
        });
    }
    this.create = () => {
        this.presseService.create(this.presse).then(() => {
            this.presse = {};
            this.load();
        });
    }

    this.update = (presse) => {
        this.presseService.update(presse._id, presse).then(() => {
            this.load();
        });
    }

    this.delete = (presse) => {
        this.presseService.delete(presse._id).then(() => {
            this.load();
        });
    }
    
    this.load();

}
