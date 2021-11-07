document.getElementById('register-button').addEventListener('click', submitForm)

function submitForm() {
  const urlGGForm = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScIWPNX40Bpy9rdbQ2MRjgRZgkm4hRDB_I14Bp8ZnfxxPEKKQ/formResponse'
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value

  // * handle submit form GG => from api submit (F12), define all key in Obj of formData: 
  let formData = new FormData();
  formData.append('entry.2073679078', name);
  formData.append('entry.1647517901', phone);
  formData.append('entry.362584083', email);
  formData.append('dlut', 1636247828264);
  formData.append('fvv', 1);
  formData.append('partialResponse', [null, null, "3713480283600146885"]);
  formData.append('pageHistory', 0);
  formData.append('fbzx', 3713480283600146885);

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

console.log('đặt 1 log để xem code có đổi k 07/11/2021'); 