// upload file //

$('#fileUpload').simpleUpload({
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
    dropZone: '#basic_drop_zone',
    progress: '#basic_progress'
  }).on('upload:before', function(e, files) {
    console.log('before');
    $(".dropBox").text("");
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
    $('#basic_message').prepend('<p>done: ' + file.name + '</p>');
  }).on('upload:fail', function(e, file, i) {
    console.log('fail ' + i);
    console.log(file);
    $('#basic_message').prepend('<p>fail: ' + file.name + '</p>');
  });
