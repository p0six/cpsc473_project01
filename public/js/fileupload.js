
var files = [];

var uploadFiles = function() {

    var fd = new FormData()
    for (var i in files) {
        fd.append("uploadedFile", files[i])
    }
    var uniqueFilename = $('#uniqueFilename').prop('checked');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/image_upload?&uniqueFilename=' + uniqueFilename);
    xhr.onload = function() {
        var response = JSON.parse(this.responseText);
        console.log(response);
    };
    xhr.send(fd);
       };

var setFiles = function(element) {
 	console.log('files:', element.files);
  // Turn the FileList object into an Array
    files = [];
    for (var i = 0; i < element.files.length; i++) {
      files.push(element.files[i]);
    }
};


var deleteFile = function(element, id) {
    $(element).closest('tr').remove();
    dpd.upload.del(id, function(data, status) {
        $('.alert-success').show();
        $('.alert-success').append("File removed!");
    })
}
