document.getElementById('register-button').addEventListener('click', submitForm)

function submitForm() {
  const urlGGForm = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScEIFthyMLA-EAcZ2-Gm0ma8jAfWtbo-a0uVTGDiIn1E91jUw/formResponse'
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value

  // * handle submit form GG => from api submit (F12), define all key in Obj of formData: 
  let formData = new FormData();
  formData.append('entry.675137429', name);
  formData.append('entry.442234116', phone);
  formData.append('entry.403426239', email);
  formData.append('dlut', 1636171753101);
  formData.append('fvv', 1);
  formData.append('partialResponse', [null, null, "-8687084246478428735"]);
  formData.append('pageHistory', 0);
  formData.append('fbzx', -8687084246478428735);

  // * use request post with formData:
  $.ajax({
    url: urlGGForm,
    data: formData,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function (res) {
      console.log('success:::', res);
    },
    error: function (error) {
      console.log('error:::', error);
      location.reload()
    }
  });
}

console.log('form register 07/11/2021');
