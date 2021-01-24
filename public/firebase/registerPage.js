var debugTestNewData = false;

function initApp2() {
  var baseRef = firebase.database().ref("/");
  firebase.auth().onAuthStateChanged(function(user) {		
    function redirectadmin() {
      window.location = "/admin/dashboard.html";
    }
    function redirectLogin() {
      window.location = "/admin/login.html";
    }
      if (user) {
        //writeUserData(user.uid, document.getElementById('verificationCode').value) //writing user data to the appropriate organization verification code
        //redirectadmin();
        if (debugTestNewData ==true) {
        var userTopLevelDomain = user.email.lastIndexOf(".");
        var userAtSymbol = user.email.lastIndexOf("@");
        var userEmailFront = user.email.substring(0, userAtSymbol);
        var userMidLevelDomain = user.email.substring(userAtSymbol+1, userTopLevelDomain)
        var userEmailBack = user.email.substring(userTopLevelDomain+1);
        var userInfo = {
          uid: user.uid,
          email: user.email,
          updateSuccess: true
        }
        baseRef.child("users2").child(userEmailBack).child(userMidLevelDomain).child(userEmailFront).set(userInfo).then(function() {
          redirectadmin();
        });
      }
      } else {
        function createUser() {
          console.log('starting user create');
            var email2 = document.getElementById('email').value;
            console.log(email2);
            var password2 = document.getElementById('password').value;
            console.log(password2);
            if (email2.length < 4) {
              alert('Please enter an email address.');
              return;
            }
            if (password2.length < 4) {
              alert('Please enter a longer password.');
              return;
            }
            firebase.auth().createUserWithEmailAndPassword(email2, password2).catch(function(error) {
              // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/user-exists') {
                  alert('The User already exists');
                } else {
                  alert(errorMessage);
                }
              });
              //redirectadmin();
            // console.log(document.getElementById('verificationCode').value);
            // console.log("sending to orgVerificationCode");
            // getOrgCode(document.getElementById('verificationCode').value); //sending data to orgVerificationCode.js
        }
        document.getElementById('createAccount').addEventListener('click', createUser, false);
        document.getElementById('redirectLogin').addEventListener('click', redirectLogin, false);
      }})}
    window.onload = function() {
    initApp2();
  };