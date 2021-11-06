
document.getElementById('register-button').addEventListener('onclick', submitForm())


function submitForm() {
  console.log('11111111111111111111')
  const name = document.getElementById('name')
  const phone = document.getElementById('phone')
  const email = document.getElementById('email')

  var fd = new FormData();
  fd.append('file', input.files[0]);

  $.ajax({
    url: 'http://example.com/script.php',
    data: fd,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function (data) {
      alert(data);
    }
  });
}