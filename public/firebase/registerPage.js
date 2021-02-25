var debugTestNewData = false;
function redirectadmin() {
  window.location = "/admin/dashboard.html";
}
function redirectLogin() {
  window.location = "/admin/login.html";
}
function emailFormatter2(email2) {
  console.log("in :" + email2);
  var userTopLevelDomain = email2.lastIndexOf(".");
  var userAtSymbol = email2.lastIndexOf("@");
  var userEmailFront2 = email2.substring(0, userAtSymbol);
  // var userEmailFrontLength = userEmailFront2.length;
  // var userEMailFrontAfterPeriod = userEmailFront2.substring(userEmailFront2.lastIndexOf(".")+1, userEmailFrontLength)
  // var userEmailFrontPeriod = userEmailFront2.substring(0, userEmailFront2.lastIndexOf("."))
  // var userEmailFront = userEmailFrontPeriod+userEMailFrontAfterPeriod;
  var userMidLevelDomain = email2.substring(userAtSymbol+1, userTopLevelDomain)
  var userEmailBack = email2.substring(userTopLevelDomain+1);
  //var email = userEmailFront+"@"+userMidLevelDomain+"."+email2.substring(userTopLevelDomain+1);
  var p = 0;
  // var i;
  var email4 = userEmailFront2;
  for (email3 = email4; email3.lastIndexOf(".")!=null; p++) {
      var userEmailFrontLength = email3.length;
      console.log("length: "+email3.lastIndexOf("."))
      var userEMailFrontAfterPeriod = email3.substring(email3.lastIndexOf(".")+1, userEmailFrontLength)
      var userEmailFrontPeriod = email3.substring(0, email3.lastIndexOf("."))
      var userEmailFront = userEmailFrontPeriod+userEMailFrontAfterPeriod;
      var email3=userEmailFront;
      console.log(email3);
      if (email3.lastIndexOf(".") < 0) {
          console.log("breaking due to no more periods");
          break;
      }
      if (p>20) {
          console.log("break loop");
          break;
      }
  } 
  console.log(p)
  console.log(email3);
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var userInfo = {
          uid: user.uid,
          email: user.email,
          updateSuccess: true
        }
      baseRef.child("users2").child(userEmailBack).child(userMidLevelDomain).child(email3).set(userInfo).then(function() {
          redirectadmin();
        });
      redirectadmin();
  } else {
      console.log("error");
  }
});
  return email3+"@"+userMidLevelDomain+"."+email2.substring(userTopLevelDomain+1);
  //return email3;
}

function initApp2() {
  var baseRef = firebase.database().ref("/");
  firebase.auth().onAuthStateChanged(function(user) {		
    
      if (user) {
        //writeUserData(user.uid, document.getElementById('verificationCode').value) //writing user data to the appropriate organization verification code
        //redirectadmin();
        if (debugTestNewData ==true) {
          console.log(email2Input);
          var email2 = emailFormatter2(email2Input);
          console.log(email2);
      }
      } else {
        function createUser() {
          console.log('starting user create');
            var email2Input = document.getElementById('email').value;
            console.log(email2Input);
            var email2 = emailFormatter2(email2Input);
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
            firebase.auth().createUserWithEmailAndPassword(email2, password2).then(emailFormatter2(email2Input)).catch(function(error) {
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