function initApp2() {
  firebase.auth().onAuthStateChanged(function(user) {		
  function redirectadmin() {
  window.location = "/admin/dashboard.html";
  }
  function redirectLogin() {
  window.location = "/admin/login.html";
  }
    if (user) {
      writeUserData(user.uid)
      redirectadmin(); 
    } else {
      function createUser() {
        console.log('starting user create');
                  var email2 = document.getElementById('email').value;
                  var password2 = document.getElementById('password').value;
                  if (email2.length < 4) {
                    alert('Please enter an email address.');
                    return;
                  }
                  if (password2.length < 4) {
                    alert('Please enter a longer password.');
                    return;
                  }
                  console.log('verifying org code');
                  getOrgCode(document.getElementById('verificationCode').value); //sending data to orgVerificationCode.js
              }
              document.getElementById('createAccount').addEventListener('click', createUser, false);
              document.getElementById('redirectLogin').addEventListener('click', redirectLogin, false);
    }
  } )}
  window.onload = function() {
  initApp2();
};