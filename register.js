document.getElementById('register-button').addEventListener('click', submitForm)

function submitForm() {
  const urlGGForm = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdey39l1a8wDE-xzf4rZIAgpf8ho5vTqVoFzctaYhSsTiKtyg/formResponse'
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value

  // * handle submit form GG => from api submit (F12), define all key in Obj of formData: 
  let formData = new FormData();
  formData.append('entry.395664294', name);
  formData.append('entry.1571854677', phone);
  formData.append('entry.909301835', email);
  formData.append('dlut', 1636246569394);
  formData.append('fvv', 1);
  formData.append('partialResponse', [null, null, "8328452313256165698"]);
  formData.append('pageHistory', 0);
  formData.append('fbzx', 8328452313256165698);

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