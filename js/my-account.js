/* Import Contacts Javascript */
$('input[type=file]').change(function(){

  $(this).simpleUpload("/ajax/upload.php?getFormat=1", {

    allowedExts: ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif"],
    allowedTypes: ["image/pjpeg", "image/jpeg", "image/png", "image/x-png", "image/gif", "image/x-gif"],
    maxFileSize: 5000000, //5MB in bytes

    start: function(file){
      //upload started

      this.block = $('<div class="block"></div>');
      this.progressBar = $('<div class="progressBar"></div>');
      this.cancelButton = $('<div class="cancelButton">x</div>');

      /*
       * Since "this" differs depending on the function in which it is called,
       * we need to assign "this" to a local variable to be able to access
       * this.upload.cancel() inside another function call.
       */

      var that = this;

      this.cancelButton.click(function(){
        that.upload.cancel();
        //now, the cancel callback will be called
      });

      this.block.append(this.progressBar).append(this.cancelButton);
      $('#uploads').append(this.block);

    },

    progress: function(progress){
      //received progress
      this.progressBar.width(progress + "%");
    },

    success: function(data){
      //upload successful

      this.progressBar.remove();
      this.cancelButton.remove();

      if (data.success) {
        //now fill the block with the format of the uploaded file
        var format = data.format;
        var formatDiv = $('<div class="format"></div>').text(format);
        this.block.append(formatDiv);
      } else {
        //our application returned an error
        var error = data.error.message;
        var errorDiv = $('<div class="error"></div>').text(error);
        this.block.append(errorDiv);
      }

    },

    error: function(error){
      //upload failed
      this.progressBar.remove();
      this.cancelButton.remove();
      var error = error.message;
      var errorDiv = $('<div class="error"></div>').text(error);
      this.block.append(errorDiv);
    },

    cancel: function(){
      //upload cancelled
      this.block.fadeOut(400, function(){
        $(this).remove();
      });
    }

  });

});

$('#fileUpload1').simpleUpload({
    url: '/post',
    method: 'post',
    params: { key: 'test' },
    ajax: {
      headers: { 'X-Test': 'test' },
      statusCode: {
        200: function() {
          console.log('success!');
        }
      }
    },
    allowedExts: ["csv", "xls", "xlsx"],
    dropZone: '#basic_drop_zone1',
    progress: '#basic_progress1'
  }).on('upload:before', function(e, files) {
    console.log('before');
    $("#basic_drop_zone1 .dropBox").text("");
    console.log(files);
  }).on('upload:after', function(e, files) {
    console.log('after');
    console.log(files);
  }).on('upload:start', function(e, file, i) {
    console.log('start ' + i);
    console.log(file);
  }).on('upload:progress', function(e, file, i, loaded, total) {
    console.log('progress ' + i + ' ' + loaded + '/' + total);
  }).on('upload:end', function(e, file, i) {
    console.log('end ' + i);
    console.log(file);
  }).on('upload:done', function(e, file, i) {
    console.log('done ' + i);
    console.log(file);
    $('#basic_message1').prepend('<p>done: ' + file.name + '</p>');
  }).on('upload:fail', function(e, file, i) {
    console.log('fail ' + i);
    console.log(file);
    $('#basic_message1').prepend('<p>fail: ' + file.name + '</p>');
});
$('#fileUpload2').simpleUpload({
    url: '/post',
    method: 'post',
    params: { key: 'test' },
    ajax: {
      headers: { 'X-Test': 'test' },
      statusCode: {
        200: function() {
          console.log('success!');
        }
      }
    },
    allowedExts: ["csv", "xls", "xlsx"],
    dropZone: '#basic_drop_zone2',
    progress: '#basic_progress2'
  }).on('upload:before', function(e, files) {
    console.log('before');
    $("#basic_drop_zone2 .dropBox").text("");
    console.log(files);
  }).on('upload:after', function(e, files) {
    console.log('after');
    console.log(files);
  }).on('upload:start', function(e, file, i) {
    console.log('start ' + i);
    console.log(file);
  }).on('upload:progress', function(e, file, i, loaded, total) {
    console.log('progress ' + i + ' ' + loaded + '/' + total);
  }).on('upload:end', function(e, file, i) {
    console.log('end ' + i);
    console.log(file);
  }).on('upload:done', function(e, file, i) {
    console.log('done ' + i);
    console.log(file);
    $('#basic_message2').prepend('<p>done: ' + file.name + '</p>');
  }).on('upload:fail', function(e, file, i) {
    console.log('fail ' + i);
    console.log(file);
    $('#basic_message2').prepend('<p>fail: ' + file.name + '</p>');
});
/* Spectrum Color Picker */
$("#custom").spectrum({
  flat: true,
  showInput: true,
  showInitial: true,
  allowEmpty:true,
  showSelectionPalette: true,
  showPalette:true,
  showAlpha: true,
  alphaVertical: true
});